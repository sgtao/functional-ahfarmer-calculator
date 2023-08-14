module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "airbnb",
        "airbnb/hooks",
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        ecmaFeatures: {
            jsx: true,
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
    ],
    rules: {
        "comma-dangle": ["error", {
            "arrays": "never",
            "objects": "always-multiline",
            "imports": "never",
            "exports": "never",
            "functions": "never"
        }],
        "react/prop-types": "off", // propsの型チェックが外せないのでオフにした
        "no-use-before-define": "off", //関数や変数が定義される前に使われているとエラーになるデフォルトの機能をoff
        "import/prefer-default-export": "off", //named exportがエラーになるので使えるようにoff
        "react/function-component-definition": [//アロー関数以外受け付けない設定
            2,
            {
                namedComponents: "arrow-function",
                unnamedComponents: "arrow-function",
            },
        ],
        "no-param-reassign": [2, { props: false }], //パラメーターのプロパティ変更を許可
        "import/extensions": [ //importのときに以下の拡張子を記述しなくてもエラーにしない
            "error",
            {
                js: "never",
                jsx: "never",
                ts: "never",
                tsx: "never",
            },
        ],
        "react/jsx-filename-extension": [ //jsx形式のファイル拡張子をjsxもしくはtsxに限定
            "error",
            {
                extensions: [".jsx", ".tsx"],
            },
        ],
        "react/react-in-jsx-scope": "off", //import React from "react"が無くてもエラーを無くす
        "no-void": [ //void演算子の許可
            "error",
            {
                allowAsStatement: true,
            },
        ],
    },
    settings: {
        "import/resolver": { //importするファイルをjsだけではなく、tsを含むファイルを許可する
            node: {
                paths: ["src"],
                extensions: [".js", ".jsx", ".ts", ".tsx"],
            },
        },
    },
}
