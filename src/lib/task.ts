import { checkCurrentDirectory, createController, getCurrentDirectory, createModelTs, createServiceTs } from "./create";
import { templateDir, templatesFolderDir, getContentsUTF8FromDirname } from "./utils";
import { getTemplateList, templateTasks } from "./template";
import { build, cleanOutDir } from "./build";
import { Listr } from "listr2";
import { serve } from "./serve";
import inquirer from "inquirer";
import chalk from "chalk";

export const chooseAction = async () => {
  const choices = ["create", "generate", "run", "build", "help", "quit"];
  const question = { type: "list", name: "action", message: "Select an action you want to perform", choices, default: choices[0] };
  return inquirer.prompt([question]);
};

export async function createCommand() {
  const choices = [...getTemplateList(templatesFolderDir), "custom"];
  const questions = [
    { name: "directory", message: "Enter project name" },
    { type: "list", name: "template", message: "Select a template", choices, default: choices[0] },
  ];
  let { directory, template } = await inquirer.prompt(questions);

  if (template === "custom") {
    const { custom } = await inquirer.prompt({ name: "custom", message: "Enter template name" });
    template = custom;
  }

  createProject(directory, { template });
}

export async function runCommand() {
  const { port } = await inquirer.prompt([{ name: "port", message: "Enter port number", default: 3333 }]);
  runServer(port);
}

export async function generateCommand() {
  const choices = ["route", "controller", "service", "model"];
  const questions = [
    { type: "list", name: "component", message: "Select a component to generate", choices, default: choices[0] },
    { name: "directory", message: "Enter component directory" },
    { name: "name", message: "Enter component name" },
  ];
  const { directory, name, component } = await inquirer.prompt(questions);
  createComponent(component, `${directory}/${name}`);
}

export const createProject = async (directory: string, options: any) => {
  try {
    const PACKAGE_DATA = getContentsUTF8FromDirname("../package.json");
    const PROJECT_DATA_JSON = JSON.parse(PACKAGE_DATA);
    const tasks: Listr = new Listr(templateTasks({ ...options }), { concurrent: false });
    const version = PROJECT_DATA_JSON.version.replace(/\-rc[\-\.]*?\d*$/g, "");
    const ctx = { PROJECT_DATA_JSON, directory, templatesFolderDir, templateDir, template: options?.template, version };
    await tasks.run(ctx);
    runServer({ port: 3333 });
  } catch (e) {
    console.error(e);
  }
};

export const createComponent = async (component: string, directory: string, options?: any) => {
  const args = { r: "route", c: "controller", s: "service", m: "model" };
  let selectedArgs = args[component.charAt(0)];

  if (!selectedArgs) {
    const componentList = ["route", "controller", "service", "model"];
    const question = { type: "list", name: "arg", message: "Choose a component to generate", choices: componentList, default: componentList[0] };
    const answer = await inquirer.prompt([question]);
    component = selectedArgs = answer.arg;
  }

  const choices = ["mongo", "sql"];
  const dir_array = directory.split(/[\\\/]/);
  const name = dir_array[dir_array.length - 1];
  const taskList = chooseComponentTask(selectedArgs, directory, name);
  const tasks: Listr = new Listr(taskList);

  if (selectedArgs === "model" && (!options?.schema || !choices.includes(options?.schema))) {
    const question = { type: "list", name: "schema", message: "Choose a schema", choices, default: choices[0] };
    options = await inquirer.prompt([question]);
  }

  const dir = dir_array.reduce((acc: string, cur: string, index: number) => {
    checkCurrentDirectory(acc);
    return `${acc}/${cur}`;
  }, "src");
  const isRoute = component === "r" || component === "route";
  const currentDirectory = isRoute ? dir : "src";
  const filename = isRoute ? `/${name}` : `/${directory}`;
  const workingDirectory = checkCurrentDirectory(currentDirectory) + filename;

  tasks.run({ directory: workingDirectory, name, noImports: !isRoute, ...options }).catch((err: any) => {
    console.error(err);
  });
};

function chooseComponentTask(arg: string, directory: string, name: string) {
  const task = { controller: createController, service: createServiceTs, model: createModelTs };
  const create = (arr: string[]) => arr.map((e) => ({ title: taskTitle("create", `src/${directory}/${name}.${e}.ts`), task: task[e] }));
  return arg === "route" ? create(["controller", "service"]) : create([arg]);
}

function taskTitle(type: string, value: string) {
  const title = {
    create: `${chalk.green("create")} ${getCurrentDirectory(value)}`.replace(process.cwd(), ""),
    execute: chalk.yellow(value),
  };
  return title[type];
}

export async function runServer(cmd: any) {
  try {
    cleanOutDir({ outDir: process.cwd() + "/dist" });
    serve(cmd?.port);
  } catch (error) {
    console.log(error.message);
    process.exit();
  }
}

export function buildProject() {
  const cwd = process.cwd();
  const options = {
    rootDir: `${cwd}/src`,
    outDir: `${cwd}/dist`,
    project: `${cwd}/tsconfig.json`,
    experimentalDecorators: true,
    emitDecoratorMetadata: true,
    target: "ES5",
    esModuleInterop: true,
  };

  const tasks = new Listr([
    { title: taskTitle("execute", `Clean dist folder`), task: cleanOutDir },
    { title: taskTitle("execute", `Build project`), task: build },
  ]);

  tasks.run(options).catch((err: any) => {
    console.error(err);
  });
}

export function projectManager() {
  const http = require("http");
  const fs = require("fs");
  const path = require("path");
  const os = require("os").type().toLowerCase();
  const platform = { linux: "xdg-open", darwin: "open", windows_nt: "start", windows: "start" };
  const port = process.env.PORT || 3000;
  const resolveDir = (filepath: string) => path.resolve(__dirname, "../public" + filepath);

  http
    .createServer(function (_req: any, _res: any) {
      const filePath = _req.url === "/" ? resolveDir("/index.html") : resolveDir(_req.url);
      const extension = String(path.extname(filePath)).toLowerCase();

      const mimeTypes = {
        ".html": "text/html",
        ".js": "text/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".png": "image/png",
        ".jpg": "image/jpg",
        ".gif": "image/gif",
        ".svg": "image/svg+xml",
        ".wav": "audio/wav",
        ".mp4": "video/mp4",
        ".woff": "application/font-woff",
        ".ttf": "application/font-ttf",
        ".eot": "application/vnd.ms-fontobject",
        ".otf": "application/font-otf",
        ".wasm": "application/wasm",
        ".ico": "image/x-icon",
      };

      const contentType = mimeTypes[extension] || "application/octet-stream";

      fs.readFile(filePath, function (error: any, content: any) {
        if (error) {
          if (error.code == "ENOENT") {
            fs.readFile(resolveDir("/404.html"), function (err: any, cont: any) {
              if (err) {
                _res.writeHead(500);
                _res.end("Sorry, check with the site admin for error: " + error.code + " ..\n");
              }

              _res.writeHead(404, { "Content-Type": "text/html" });
              _res.end(cont, "utf-8");
            });
          } else {
            _res.writeHead(500);
            _res.end("Sorry, check with the site admin for error: " + error.code + " ..\n");
          }
        } else {
          _res.writeHead(200, { "Content-Type": contentType });
          _res.end(content, "utf-8");
        }
      });
    })
    .listen(port, () => {
      require("child_process").exec(`${platform[os]} http://localhost:${port}`);
    });
}
