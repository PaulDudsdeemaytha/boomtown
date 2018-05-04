import express from "express";
import cors from "cors";
import initConfig from "./config";
import initAPI from "./api";
import { Pool } from "pg";

const app = express();
const port = 3005;

initConfig(app);

app.use("*", cors());

initAPI(app);

//Error testing
app.listen(
  port,
  err =>
    err
      ? console.log(`ERROR: ${err}`)
      : console.log(`Express running on PORT: http://localhost:${port}`)
);
