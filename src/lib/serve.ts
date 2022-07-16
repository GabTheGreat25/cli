import chalk from "chalk";
import ts from "typescript";
import { ChildProcess, spawn } from "child_process";
import chokidar from "chokidar";
import fs from "fs";

interface IRegexMatch extends RegExpExecArray {
  groups: {
    path: string;
    line: string;
    code: string;
    message: string;
  };
}

let hasLoaded = false;
let mainThread: ChildProcess;
let hasKilled = false;
let pid = 0;

export function serve(port: number) {
  const json = JSON.parse(fs.readFileSync("package.json", "utf8"));
  const dependencies = json.dependencies;
  const isMayaJS = Object.keys(dependencies).filter((key: string) => key.includes("@mayajs/core")).length > 0;

  if (!isMayaJS) {
    throw new Error(chalk.red("Couldn't find '@mayajs/core' module in this project."));
  }

  const configPath = ts.findConfigFile("./", ts.sys.fileExists, "tsconfig.json");

  if (!configPath) throw new Error("Could not find a valid 'tsconfig.json'.");

  const watcher = chokidar.watch(`${process.cwd()}/src`, { ignoreInitial: true });

  watcher.on(
    "all",
    debounce(() => {
      console.log(chalk.yellow("[mayajs] File changed detected. Restarting server."));
      if (mainThread !== undefined) process.kill(mainThread.pid);
      mainThread.on("exit", () => start(port).then(finishCompiling).catch(parseError));
    })
  );

  start(port).then(finishCompiling).catch(parseError);
  process.on("SIGKILL", onKill).on("SIGINT", onKill).on("exit", onKill);
}

function onKill() {
  if (!hasKilled) {
    hasKilled = true;
    process.kill(mainThread.pid);
    mainThread.on("exit", () => {
      console.log(chalk.red("[mayajs] Server has been killed."));
      process.exit(0);
    });
  }
}

function finishCompiling(message: string) {
  console.log(chalk.green(message));
}

function debounce(fn: () => void, ms = 1000) {
  let timer: NodeJS.Timeout;
  return () => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(fn, ms);
  };
}

async function start(port: number): Promise<any> {
  console.log(chalk.yellow("[mayajs] Project files are being compile..."));

  mainThread = spawn("node", ["--experimental-specifier-resolution=node", "--loader", "ts-node/esm", `src/index.ts`, `${port}`, `${hasLoaded}`], {
    detached: true,
  });

  console.log(chalk.green("[mayajs] Compilation completed."));

  return new Promise((resolve): void => {
    if (mainThread?.stdout) {
      mainThread.stdout.setEncoding("utf8");
      mainThread.stdout.on("data", (data) => {
        if (data !== "") console.log(data.trim());
        if (!hasLoaded) hasLoaded = true;
        resolve("[mayajs] Watching for file changes...");
      });
    }

    if (mainThread?.stderr) {
      mainThread.stderr.setEncoding("utf8");
      mainThread.stderr.on("data", (data) => {
        if (data.trim() !== "") console.log(data.trim());
      });
    }
  });
}

function parseError(error: { message?: string; stderr: string } | string) {
  if (typeof error === "string" || error?.message === undefined) return console.log(error);
  if (error?.stderr && error?.stderr.toLowerCase().includes("syntax")) {
    const lines = error.stderr
      .toString()
      .replace(/file:\/\/\/[A-Z]:.+\/(?=src)|^\s*at.*\)\n?|\(.+\n?/gm, "")
      .replace(/src.+:\d+/g, (value) => chalk.red(`[mayajs] Error occurs when compiling file ${chalk.green(value)}`))
      .replace(/(^\w.+;)|(\s+\^+)|(['"]\w+['"])/gm, (value) => chalk.white(value));
    return console.log(chalk.yellow(lines));
  }

  if (error?.stderr && error?.stderr.toLowerCase().includes("tserror")) TSErrorParser(error.message);
}

function TSErrorParser(errorMessage: string) {
  const matcher = /(?<path>src\/.*\.ts)(?<line>\(.*\)):\serror\s(?<code>.*:)(?<message>.*\.)/g;

  for (let match: RegExpExecArray | null; (match = matcher.exec(errorMessage)) !== null; ) {
    const { path = "src/index.ts", line = "(0,0)", code = "TSError", message = "Unknown parsing error" } = (match as IRegexMatch).groups;
    const errMessage = `${chalk.red(path)}${chalk.green(line)} -${chalk.yellow(message.replace(/'.*'/, (value: string) => chalk.white(value)))}`;
    console.log(chalk.red("[mayajs]"), chalk.gray(code), errMessage);
  }
}
