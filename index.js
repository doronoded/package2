const figlet = require ("figlet");
const chalk = require ("chalk");

console.log(
    chalk.blue(
        figlet.textSync("RUNNING PACKAGE 2", {
            font: "Small",
            horizontalLayout: "default",
            verticalLayout: "default"
        })
    )

);