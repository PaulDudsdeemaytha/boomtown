import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql'
});
export default client;
