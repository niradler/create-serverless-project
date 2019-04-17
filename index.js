#!/usr/bin/env node
const exec = require("child_process").exec;
const fs = require("file-system");

const run = cmd =>
  new Promise((resolve, reject) => {
    exec(cmd, (error, stdout, stderr) => {
      if (error !== null) {
        reject(error);
      }
      resolve(stdout);
    });
  });

fs.copySync(__dirname + "/template", process.cwd());

run("npm i")
  .then(() =>
    console.log(
      `
Available Scripts:
    npm run start # start serverless offline 
    npm run deploy # deploy serverless functions 
    npm run deploy:one # deploy serverless function 
    npm run logs # stream function logs

Usage:
    npm run start --stage dev
    npm run deploy -- --stage dev
    npm run deploy:one -- hello --stage dev
    npm run logs -- hello --stage dev

`
    )
  )
  .catch(e => console.log(e.message));
