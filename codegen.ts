
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "https://spacexdata.herokuapp.com/graphql",
  documents: "/src/components/**/*.{ts,tsx}",
  generates: {
    "src/gql": {
      preset: "client",
      plugins: [],
      config:{
        withHooks:true
      }
    }
  }
};

export default config;
