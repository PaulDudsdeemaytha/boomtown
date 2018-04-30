import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import schema from "./schema";
import cors from "cors";

import { Loaders } from "./loaders";

const app = express();
const port = 3005;

app.use("*", cors());
// const schema = undefined;
// Where we will send all of our GraphQL requests
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// A route for accessing the GraphiQL tool
app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql",
    //adding in
    context: {
      fun: true,
      loaders: Loaders()
    }
  })
);
//Error testing
app.listen(
  port,
  err =>
    err
      ? console.log(`ERROR: ${err}`)
      : console.log(`Express running on PORT: http://localhost:${port}`)
);
