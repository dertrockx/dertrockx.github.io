import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    const token = '54d7878cc96cce6ed27bdb3ff010aab2ca63b83e';
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
});

export default client;