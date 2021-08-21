import {ApolloClient ,HttpLink,InMemoryCache , gql } from '@apollo/client'


export const aclient = new ApolloClient({
    link:new HttpLink({
        uri:"http://localhost:3800/api",

    }),
    fetchOptions: {
        mode: 'no-cors',
      },
    cache:new InMemoryCache(),
    defaultOptions: {
        watchQuery: {
          fetchPolicy: 'cache-and-network',
        },
      },
    

})


aclient
  .query({
    query: gql`
      query GetUsers {
       users{
           name
           email
       }
      }
    `
  })
  .then(result => console.log(result));