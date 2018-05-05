import bodyParser from "body-parser";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";

import initFirebase from "./resources/firebaseResource";
import initJson from "./resources/jsonServer";
import initPostgres from "./resources/postgres";

import createResolvers from "./resolvers";
import typeDefs from "./schema";
import createLoaders from "./loaders";

export default function(app) {
  const jsonResources = initJson(app);
  const pgResources = initPostgres(app);
  const firebaseResources = initFirebase(app);

  const resolvers = createResolvers({
    jsonResources,
    pgResources,
    firebaseResources
  });
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers
  });

  // Where we will send all of our GraphQL requests
  app.use(
    "/graphql",
    bodyParser.json(),
    graphqlExpress({
      schema,
      context: {
        loaders: createLoaders({
          jsonResources,
          pgResources,
          firebaseResources
        })
      }
    })
  );
  // A route for accessing the GraphiQL tool
  app.use(
    "/graphiql",
    graphiqlExpress({
      endpointURL: "/graphql"
    })
  );
}
