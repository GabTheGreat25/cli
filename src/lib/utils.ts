import path from "path";
import chalk from "chalk";
import ts from "typescript";
import * as fs from "fs";

export function errorMessage(diagnostic: ts.Diagnostic): string {
  if (diagnostic.file) {
    let { line, character } = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start!);
    let message = ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
    let fileName = diagnostic.file.fileName;
    const code = chalk.yellow("TS" + diagnostic.code);

    if (diagnostic.file.fileName.includes("src")) {
      const pathName = diagnostic.file.fileName.match(/([\/|\\]src.*)/) || [];
      fileName = `.${pathName[0]}`;
    }

    const codePath = `${fileName}:${line + 1}:${character + 1}`;
    return `Error : ${code} ${chalk.green(codePath)} (LINE=${chalk.yellow(line + 1)},CHAR=${chalk.yellow(character + 1)}): ${chalk.red(message)}`;
  } else {
    return ts.flattenDiagnosticMessageText(diagnostic.messageText, "\n");
  }
}

export function getContentsUTF8FromDirname(relativePath: string) {
  const FILE_PATH = path.resolve(__dirname, relativePath);
  return fs.readFileSync(FILE_PATH, "utf8");
}

export function upperCaseWordWithDashes(word: string, space = false) {
  const firstLetter = word.replace(/^\w/, (c) => c.toUpperCase());
  const dashedLetter = firstLetter.replace(/-\w/g, (c) => c.toUpperCase());
  return dashedLetter.replace(/-/g, space ? " " : "");
}

export const templatesFolderDir = path.resolve(`${__dirname}`, "../templates");
export const templateDir = `${templatesFolderDir}/default`;
