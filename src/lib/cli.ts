import program from "commander";
import figlet from "figlet";
import chalk from "chalk";

// TASKS
import { createProject, createComponent, runServer, buildProject, chooseAction, createCommand, runCommand, generateCommand, projectManager } from "./task";

// INTERFACE
interface NpmPackage {
  version: string;
  description: string;
}

export default function runCLI(npm: NpmPackage) {
  program.version(npm.version, "-v, --version").name("maya").usage("[options | command] [arguments]").description(npm.description);

  program
    .command("new <directory>")
    .alias("n")
    .option("-t, --template [template]", "Specify project template")
    .option("-t, --template=[template]", "Specify project template")
    .description(
      `
    Creates a new MayaJS project.
    ${chalk.green("maya new my-new-app")} | ${chalk.green("maya n my-new-app")}

    OPTIONS:
    -t,--template   Set project template

    ${chalk.green("maya n my-new-app --template=todo")} |  ${chalk.green("maya n my-new-app -t=todo")}
    `
    )
    .action(createProject);

  program
    .command("generate <component> <directory>")
    .alias("g")
    .option("-s, --schema [schema]", "Specify schema model")
    .option("-s, --schema=[schema]", "Specify schema model")
    .description(
      `
    Creates a new mayajs component.

    ROUTE
    ${chalk.green("maya generate route sample")} | ${chalk.green("maya g r sample")}

    CONTROLLER
    ${chalk.green("maya generate controller sample")} | ${chalk.green("maya g c sample")}

    SERVICE
    ${chalk.green("maya generate service sample")} | ${chalk.green("maya g s sample")}

    MODEL
    ${chalk.green("maya generate model sample")} | ${chalk.green("maya g m sample")}

      OPTIONS:
      -s,--schema   Set model schema

      For MongoDB
      ${chalk.green("maya g m sample --schema=mongo")} | ${chalk.green("maya g m sample -s=mongo")}

      For SQL Databases
      ${chalk.green("maya g m sample --schema=sql")} | ${chalk.green("maya g m sample -s=sql")}
    `
    )
    .action(createComponent);

  program
    .command("serve")
    .alias("s")
    .option("-p, --port [port]", "Change port number")
    .option("-p, --port=[port]", "Change port number")
    .description(
      `
    Run the server.
    ${chalk.green("maya serve")} | ${chalk.green("maya s")}

    OPTIONS:
    -p, --port    Change port number
    ${chalk.green("maya serve --port 4444")}
    `
    )
    .action(runServer);

  program
    .command("build")
    .alias("b")
    .description(
      `
    Build project.
    ${chalk.green("maya build")} | ${chalk.green("maya b")}
    `
    )
    .action(buildProject);

  program
    .command("ui")
    .description(
      `
    Launch MayaJS Project Management UI.
    ${chalk.green("maya ui")}
    `
    )
    .action(projectManager);

  program.parse(process.argv);

  if (process.argv.length === 2) {
    console.log(chalk.red(figlet.textSync("MayaJS", { horizontalLayout: "full" })));
    chooseAction()
      .then((options) => {
        const commands = {
          help: () => program.outputHelp(),
          create: createCommand,
          build: buildProject,
          generate: generateCommand,
          run: runCommand,
          quit: () => process.exit(),
        };
        commands[options.action]();
      })
      .catch((error) => console.log(error));
  }
}
