import { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "http://localhost:4004/graphql",
  documents: ["src/**/*.mutations.ts", "src/**/*.queries.ts"],
  generates: {
    "./src/__generated__/": {
      preset: "client",
      presetConfig: {
        gqlTagName: "gql",
      },
    },
  },  
  ignoreNoDocuments: true,  
};

export default config;