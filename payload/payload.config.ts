import path from 'path';
import { buildConfig } from 'payload/config';
import {lexicalEditor} from "@payloadcms/richtext-lexical";
import {postgresAdapter} from "@payloadcms/db-postgres";

export default buildConfig({
  collections: [
    // Your collections here
  ],
  globals: [
    // Your globals here
  ],
  typescript: {
    outputFile: path.resolve(__dirname, '../payload-types.ts'),
  },
  editor: lexicalEditor({})
});
