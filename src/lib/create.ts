import * as path from "path";
import * as fs from "fs";
import { getContentsUTF8FromDirname, upperCaseWordWithDashes } from "./utils";

const TEMPLATE_DIR = "../templates";
const COMMON_DIR = `${TEMPLATE_DIR}/common`;

export function checkCurrentDirectory(name: string) {
  const curDir = getCurrentDirectory(name);
  createDirectory(curDir);
  return curDir;
}

export function createDirectory(dirPath: string) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
  }
}

export function getCurrentDirectory(name: string) {
  return path.resolve(process.cwd(), `./${name}`);
}

export function createDatabase(appName: any) {
  const workingDirectory = checkCurrentDirectory(appName + "/src/databases");
  const CONTENTS = getContentsUTF8FromDirname("../files/mongo");
  const UPDATED_MODEL_NAMES = CONTENTS.replace(/#model/g, "sample");
  fs.writeFileSync(workingDirectory + "/mongo.ts", UPDATED_MODEL_NAMES);
}

export function createAppController(appName: string) {
  const directory = checkCurrentDirectory(appName + "/src") + "/app";
  createController({ directory, name: "app" });
}

export async function createController(object: { directory: string; name: string; noImports?: boolean }) {
  const { directory, name, noImports = false } = object;
  const isApp = name === "app";
  const CONTENTS = getContentsUTF8FromDirname(`${COMMON_DIR}/controller`);
  const services = upperCaseWordWithDashes(name) + "Services";
  const updatedConstructor = CONTENTS.replace(/#constructor/g, `private services: ${services}`);
  const body = noImports || isApp ? CONTENTS.replace(/[\n|\r]\s+?constructor\(#constructor\) {}[\n|\r]{2,}/g, "\n") : updatedConstructor;
  const updatedServices = !noImports ? updateServicesImport(body, name) : body.replace(/#services/g, "");
  const updatedController = updateControllersName(updatedServices, name);
  const DATA = updateNames(updatedController, name);
  fs.writeFileSync(path.resolve(`${directory}.controller.ts`), DATA);
}

export async function createModelTs(object: { directory: string; name: string; schema: string }) {
  const { directory, name, schema } = object;
  const CONTENTS = getContentsUTF8FromDirname(`${COMMON_DIR}/model-${schema}`);
  const DATA = updateNames(CONTENTS, name);
  fs.writeFileSync(path.resolve(`${directory}.model.ts`), DATA);
}

export async function createServiceTs(object: { directory: string; name: string; start?: boolean }) {
  const { directory, name } = object;
  const CONTENTS = getContentsUTF8FromDirname(`${COMMON_DIR}/service`);
  const updatedServices = updateServicesName(CONTENTS, name);
  const DATA = updateNames(updatedServices, name);
  fs.writeFileSync(path.resolve(`${directory}.service.ts`), DATA);
}

function updateServicesImport(word: string, name: string) {
  let importStatement = "";

  if (name !== "app") {
    const services = upperCaseWordWithDashes(name) + "Services";
    importStatement = `import { ${services} } from "./${name}.service"\n`;
  }

  return word.replace(/#services/g, importStatement);
}

function updateServicesName(word: string, name: string) {
  const services = upperCaseWordWithDashes(name) + "Services";
  return word.replace(/#services/g, services);
}

function updateControllersName(word: string, name: string) {
  const controller = upperCaseWordWithDashes(name) + "Controller";
  return word.replace(/#controller/g, controller);
}

function updateNames(word: string, name: string) {
  return word.replace(/#name/g, name).replace(/#Name/g, upperCaseWordWithDashes(name));
}
