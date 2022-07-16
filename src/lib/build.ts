import * as shell from "shelljs";
import ts from "typescript";
import chalk from "chalk";
import fs from "fs";
import path from "path";
import { errorMessage } from "./utils";

export function build(): void {
  logger(`Start building your project...`);

  const configPath = ts.findConfigFile("./", ts.sys.fileExists, "tsconfig.json");

  if (!configPath) {
    throw new Error("Could not find a valid 'tsconfig.json'.");
  }

  const host: ts.ParseConfigFileHost = ts.sys as any;
  const parsedCmd = ts.getParsedCommandLineOfConfigFile(configPath, {}, host);
  const { options, fileNames } = parsedCmd as ts.ParsedCommandLine;

  fileNames.forEach((name) => {
    logger(`Compiling ${path.basename(name)}...`);
  });

  const diagnosticErrors = compile(fileNames, options);
  let message = "";

  if (diagnosticErrors.length > 0) {
    message = ` with ${diagnosticErrors.length} error${diagnosticErrors.length > 1 ? "s" : ""}`;
  } else {
    fs.copyFile("package.json", "dist/package.json", (err) => {
      if (err) throw err;
    });
  }

  logger(`Build finished${message}!`);
  process.exit(0);
}

function compile(fileNames: string[], options: ts.CompilerOptions) {
  const program = ts.createProgram(fileNames, options);
  const emitResult = program.emit();
  const allDiagnostics = ts.getPreEmitDiagnostics(program).concat(emitResult.diagnostics);

  let compileErrors: string[] = [];

  allDiagnostics.forEach((diagnostic) => {
    const error = errorMessage(diagnostic);
    compileErrors.push(error);
    console.log("\n", chalk.red(error), "\n");
  });

  return compileErrors;
}

function logger(message: string) {
  const PLUGIN_NAME = chalk.yellow(`[mayajs]`);
  console.log(PLUGIN_NAME, chalk.green(message));
}

export function cleanOutDir(options: { outDir: string }) {
  const cmd = shell.rm("-rf", options.outDir);
  if (cmd.code !== 0) {
    throw new Error("Error:Can't removed dist folder");
  }
}
