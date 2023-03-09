# Next.js + Jest

This example shows how to configure Jest & Cypress to work with Next.js together.

Based on [with-jest@9a1798b6](https://github.com/vercel/next.js/commit/9a1798b69dd2e2b39f3af3fb488f9eef0048473f) & [with-cypress@2246db68](https://github.com/vercel/next.js/commit/2246db680ed11cb78f3e68965b4f5f5d6b63b878) of next.js/examples

This includes Next.js' built-in support for Global CSS, CSS Modules and TypeScript.

## Integrate config files

To keep the project root clear, reposition these config files.

- Move `cypress.config.ts` to `cypress/config.ts`
  - Append `-C cypress/config.ts` to `e2e` commands
  - Remove `cypress.config.ts` from exclude of package.json
- Move `jest.config.js` & `jest.setup.js` into `config/` folder
  - Append `-c config/jest.config.js` to `test` commands

## Install

```bash
pnpm i
```

## Run Jest Tests

```bash
pnpm test
```

## Run Cypress Tests

```bash
pnpm e2e
```

or without WebUI

```bash
pnpm e2e:headless
```
