import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    const token = '6adfbc8d2998089022d39d300b896d3d823760dd';
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
});

export default client;