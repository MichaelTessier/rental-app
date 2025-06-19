import type { CodegenConfig } from '@graphql-codegen/cli';
 
const config: CodegenConfig = {
  schema: 'schema.graphql',
  generates: {
    './api/__generated__/graphql.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      schema: 'http://localhost:4004/graphql', // URL of your GraphQL server
    },
  },
};
export default config;