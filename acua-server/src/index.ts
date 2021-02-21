import {AcuaApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {AcuaApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new AcuaApplication(options);
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
