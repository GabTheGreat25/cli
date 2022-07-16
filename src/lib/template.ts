import { getContentsUTF8FromDirname, upperCaseWordWithDashes } from "./utils";
import * as shell from "shelljs";
import chalk from "chalk";
import path from "path";
import fs from "fs";
import os from "os";

const templatesGit = "https://github.com/mayajs/templates.git";

const templates = (dir: string) => {
  const templateJSON = path.resolve(dir, "./templates.json");
  return JSON.parse(getContentsUTF8FromDirname(templateJSON));
};

const getTemplateList = (dir: string) => {
  if (!fs.existsSync(dir)) return [];
  return Object.keys(templates(dir));
};

const cloneSelectedTemplate = async (ctx: any, task: any) => {
  ctx.templateDir = `${ctx.templatesFolderDir}/${ctx?.template}/${ctx.version}`;
  const tempDir = `${os.tmpdir()}/mayajs`;
  const gitTemp = `${tempDir}/${ctx?.template}`;

  if (fs.existsSync(ctx.templateDir)) {
    task.skip();
    return;
  }

  shell.exec(`git clone -b ${ctx.version} --single-branch ${templatesGit} ${tempDir}`, { silent: true });

  try {
    if (!fs.existsSync(gitTemp)) {
      shell.rm("-rf", `${tempDir}`);
      throw new Error("Template not found");
    }

    if (!fs.existsSync(ctx.templateDir)) {
      shell.mkdir("-p", ctx.templateDir);
    }

    // Create template version folder
    shell.cp("-Rf", `${gitTemp}/*`, `${ctx.templateDir}`);

    // Update template.json
    const templateData = templates(tempDir);
    const currentTemplateData = templates(ctx.templatesFolderDir);
    const isTemplateExist = currentTemplateData[ctx.template];

    if (!templateData[ctx.template] && !isTemplateExist) {
      currentTemplateData[ctx.template] = { author: "", description: "" };
    }

    if (templateData[ctx.template] && !isTemplateExist) {
      currentTemplateData[ctx.template] = templateData[ctx.template];
    }

    if (!isTemplateExist) {
      const data = JSON.stringify(currentTemplateData, null, 2);
      fs.writeFileSync(`${ctx.templatesFolderDir}/templates.json`, data);
    }

    shell.rm("-rf", tempDir);
  } catch (error) {
    shell.rm("-rf", `${tempDir}`);
    throw new Error("Template not found");
  }
};

const prepareProject = async (ctx: any, task: any) => {
  const projectDir = path.resolve(process.cwd(), ctx.directory);
  const projectExist = fs.existsSync(projectDir);

  if (projectExist) shell.rm("-rf", projectDir);
  shell.cp("-Rf", ctx.templateDir, projectDir);
  ctx["projectDir"] = projectDir;
};

const installDependency = async (ctx: any, task: any) => {
  const projectName = upperCaseWordWithDashes(ctx.directory, true);
  const readme = `${ctx.projectDir}/README.md`;
  const packageJson = `${ctx.projectDir}/package.json`;
  shell.sed("-i", /([\s|\"])(MayaJS)/g, "$1" + projectName + " $2", [readme, packageJson]);
  shell.sed("-i", /(version)/g, "$1 " + ctx.version, readme);
  shell.sed("-i", /\"mayajs\"/, `"${ctx.directory.toLowerCase()}"`, packageJson);
  shell.cd(ctx.projectDir);
  shell.exec("npm i --error");
};

const templateTasks = (options?: any) => {
  const hasTemplateArgs = () => options?.template;
  return [
    { title: chalk.green(`Downloading files for selected template...`), task: cloneSelectedTemplate, enabled: hasTemplateArgs },
    { title: chalk.green(`Creating files and directories for your project...`), task: prepareProject },
    { title: chalk.green(`Installing project dependencies...`), task: installDependency },
  ];
};

export { templateTasks, getTemplateList };
