import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: import.meta.env.VITE_GRAPHQL_API_URL, // Ensure this environment variable is set
    credentials: 'include', // This ensures cookies are sent with requests
  }),
  cache: new InMemoryCache(),
})


export default client;