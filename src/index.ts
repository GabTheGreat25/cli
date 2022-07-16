#! /usr/bin/env node

import * as path from "path";
import runCLI from "./lib/cli";

const NPM = path.join(__dirname, "package.json");

import(NPM)
  .then(runCLI)
  .catch(error => console.log(error));
