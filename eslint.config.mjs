import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// приклад використання __dirname
console.log(__dirname);

export default [
  // твоя конфігурація eslint, наприклад:
  {
    files: ["*.js", "*.jsx"],
    languageOptions: {
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: "module",
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    // інші правила
  }
];

