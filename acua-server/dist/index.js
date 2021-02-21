"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const application_1 = require("./application");
exports.AcuaApplication = application_1.AcuaApplication;
async function main(options = {}) {
    const app = new application_1.AcuaApplication(options);
    await app.boot();
    await app.start();
    const url = app.restServer.url;
    console.log(`Server is running at ${url}`);
    console.log(`Try ${url}/ping`);
    //   console.log({
    //     host            : process.env.MYSQL_HOST,
    //     user            : process.env.MYSQL_USER,
    //     password        : process.env.MYSQL_SECRET,
    //     database        : process.env.MYSQL_DB
    //  })
    return app;
}
exports.main = main;
//# sourceMappingURL=index.js.map