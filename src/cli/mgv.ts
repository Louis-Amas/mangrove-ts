#!/usr/bin/env node

import * as yargs from "yargs";
import * as printCmd from "./commands/printCmd";
import * as retractCmd from "./commands/retractCmd";
import * as nodeCmd from "./commands/nodeCmd";
import * as dealCmd from "./commands/dealCmd";

const ENV_VAR_PREFIX = "MGV";

// type StrictCM = yargs.CommandModule & { builder: (...args: any[]) => any };

// const check = (cmd: StrictCM) => cmd;
void yargs
  .command(printCmd as any)
  .command(retractCmd as any)
  .command(dealCmd as any) // note: node subcommand env vars are prefixed with MGV_NODE instead of MGV_
  .command(nodeCmd as any) // note: node subcommand env vars are prefixed with MGV_NODE instead of MGV_
  .strictCommands()
  .demandCommand(1, "You need at least one command before moving on")
  .env(ENV_VAR_PREFIX) // Environment variables prefixed with 'MGV_' are parsed as arguments, see .env([prefix])
  .epilogue(
    `Arguments may be provided in env vars beginning with '${ENV_VAR_PREFIX}_'. ` +
      "For example, MGV_NODE_URL=https://node.url can be used instead of --nodeUrl https://node.url"
  )
  .help().argv;
