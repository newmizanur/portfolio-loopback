import {PortfolioApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {PortfolioApplication};

export async function main(options: ApplicationConfig = {}) {
  const app = new PortfolioApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  return app;
}
