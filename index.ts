import dotenv from "dotenv";

dotenv.config();

import { PushProviderIdEnum } from "@novu/node";
import express, { Express, Request } from "express";
import { novu } from "./services";

import "./channels";

const app: Express = express();
const port = process.env.PORT ?? 3000;

app.post(
  "/update-tokens",
  (req: Request<{ deviceTokens: string[]; subscriberId: string }>, res) => {
    const { deviceTokens, subscriberId } = req.params;

    return novu.subscribers.setCredentials(
      subscriberId,
      PushProviderIdEnum.EXPO,
      {
        deviceTokens,
      }
    );
  }
);

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
