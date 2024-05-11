import dotenv from "dotenv";

dotenv.config();

import { PushProviderIdEnum } from "@novu/node";
import express, { Express, Request } from "express";
import { novu } from "./services";

import "./channels";

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
