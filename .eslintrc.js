module.exports = {
  root: true,
  "env": {
    "jest/globals": true
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    tsconfigRootDir: __dirname,
    project: ["./tsconfig.json"],
  },
  plugins: [
    "@typescript-eslint",
    "jest",
  ],
  extends: [
    "@react-native-community",
    "hardcore",
    "hardcore/fp",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:jest/recommended",
    "plugin:jest/style",
    'plugin:react-native-a11y/android'
  ],
  rules: {
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-use-before-define": "error",
    "import/extensions": "off",
    "import/no-extraneous-dependencies": [
      "error",
      { "devDependencies": ["**/__tests__/*"] }
    ],
    "import/no-unresolved": "off",
    "no-shadow": "off",
    "no-undef": "off",
    "no-use-before-define": "off",
    "quotes": ["error", "single"],
  },
  settings: {
    "import/ignore": [
      "node_modules/react-native/index\\.js$"
    ]
  },
  overrides: [
    {
      files: ["*.js"],
      rules: {
        "import/no-unused-modules": [
          "error",
          {
            src: ["**/*.js"],
            missingExports: false,
            unusedExports: true
          }
        ]
      }
    },
    {
      files: ["*.ts"],
      rules: {
        "import/no-unused-modules": [
          "error",
          {
            src: ["**/*.ts"],
            missingExports: false,
            unusedExports: true
          }
        ]
      }
    },
    {
      files: ["*.jsx"],
      rules: {
        "import/no-unused-modules": [
          "error",
          {
            src: ["**/*.jsx"],
            missingExports: false,
            unusedExports: true
          }
        ]
      }
    },
    {
      files: ["*.tsx"],
      rules: {
        "import/no-unused-modules": [
          "error",
          {
            src: ["**/*.tsx"],
            missingExports: false,
            unusedExports: true
          }
        ]
      }
    }
  ]
};