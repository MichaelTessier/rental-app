import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4004/graphql",
  documents: ["src/**/*.graphql", "src/**/*.queries.ts"],
  generates: {
    './src/graphql/__generated__/types.ts': {
      plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
      config: {
        scalars: {
          EmailAddress: {
            input: 'string', 
            output: 'string', 
          },
          ObjectID: {
            input: 'string', 
            output: 'string', 
          },
          DateTime: {
            input: 'Date', 
            output: 'Date', 
          },
        }
      }
    },
  },  
  ignoreNoDocuments: true,  
};

export default config;