import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'htpp://localhost:3005/graphiql'
});
export default client;
