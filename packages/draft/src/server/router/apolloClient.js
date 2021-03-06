import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import fetch from 'node-fetch';

export default (req, res, next) => {
  const port = parseInt(KYT.SERVER_PORT, 10);
  const uri = `http://localhost:${port}/graphql`;
  const client = new ApolloClient({
    ssrMode: true,
    link: new HttpLink({ uri, fetch }),
    cache: new InMemoryCache(),
  });

  res.locals.client = client;

  next();
};
