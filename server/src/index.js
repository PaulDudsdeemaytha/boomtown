import express from "express";
import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import schema from "./schema";
const app = express();
const PORT = 3005;
import cors from "cors";

app.use("*", cors());
// const schema = undefined;
// Where we will send all of our GraphQL requests
app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));

// A route for accessing the GraphiQL tool
app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql"
  })
);
//Error testing
app.listen(PORT, () =>
  console.log(
    `Express GraphQL Server running. Access server running on http://locahost:${PORT}/graphql`
  )
);
