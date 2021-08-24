import { InMemoryCache } from 'apollo-cache-inmemory';
import { HttpLink } from 'apollo-link-http';
import ApolloClient from 'apollo-client/ApolloClient';

const link = new HttpLink({ uri: 'http://localhost:4000/' });
const cache = new InMemoryCache();

const client = new ApolloClient({ 
  link,
  cache
})

export default client;  