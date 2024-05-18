# Criação do Template

```bash
npx create-next-app@latest
```

```bash
npx eslint --init
```

```bash
npm i -D eslint-plugin-react-hooks
```

```bash
npm install --save-dev --save-exact prettier
```

```bash
 npm install --save-dev eslint-config-prettier
```

```bash
 npm install --save-dev eslint-plugin-prettier
```

```bash
 npm install --save-dev eslint-plugin-import-helpers
```

```bash
 npm i -D eslint-plugin-tailwindcss
```

```json
// .prettierrc
{
  "trailingComma": "none",
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "useTabs": false,
  "printWidth": 80,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

```json
// .eslint.json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier",
    "plugin:tailwindcss/recommended"
  ],
  "overrides": [
    {
      "files": "['*.ts', '*.tsx', '*.js']",
      "parser": "@typescript-eslint/parser"
    }
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "react-hooks",
    "eslint-plugin-import-helpers"
  ],
  "rules": {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/react-in-jsx-scope": "off",
    "no-unused-vars": [
      "error",
      { "vars": "all", "args": "after-used", "ignoreRestSiblings": false }
    ],
    "prettier/prettier": "error",
    "import-helpers/order-imports": [
      "warn",
      {
        "newlinesBetween": "always",
        "groups": [
          ["/^react/", "/^next/"],
          "/components/",
          "module",
          "/^@shared/",
          "/absotute/",
          ["parent", "sibling", "index"]
        ],
        "alphabetize": { "order": "asc", "ignoreCase": true }
      }
    ]
  }
}
```

```json
// .vscode/setting.json
{
  "typescript.tsdk": "node_modules\\typescript\\lib",
  "typescript.enablePromptUseWorkspaceTsdk": true,
  "editor.formatOnSave": false,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}
```

## Uso do Template

```json
npx create-next-app@latest --example https://github.com/sidneibrianti/nextjs14-template
```
