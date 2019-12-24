import ApolloClient from 'apollo-boost';

const client = new ApolloClient({
  uri: 'https://api.github.com/graphql',
  request: (operation) => {
    const token = 'f0c4caf53351aae1efcbac631de86d2ef4a3830a';
    operation.setContext({
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
  }
});

export default client;