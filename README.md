# Documentation for Kitabisa FE Test

## Naming Conventions

#### component -> PascalCase

example:

- pages/Account/index.tsx
- pages/Account/EditAccount.tsx
- pages/Home.tsx
- pages/account/AccountUser/index.tsx

#### not component -> hyphens-case

example:

- Wrapping folder
- file scss name
- file image name

#### function & variable -> camelCase

## CSS Rules
This project CSS is using:
- http://getbem.com/naming/ rules.
- no inline css

## Start Project
- Clone the project from git repository.

In the project directory, you can run:

- `npm intall`
- `npm run dev`

## Running Project Script
In the project directory, you can run:

##### `npm run dev` : Runs the app in the development mode.
##### `npm test` : Launches the test runner in the interactive watch mode.
##### `npm run build` : Builds the app for production to the `build` folder
##### `npx eslint . --ext .js,.jsx,.ts,.tsx` : Runs the eslint.
##### `npx eslint . --ext .js,.jsx,.ts,.tsx --fix` : Runs the eslint and auto eslint fix.

## Project Technologies
[<img align="left" alt="Sass" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" style="padding-right:10px;" />]()[<img align="left" alt="Next.js" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" style="padding-right:10px;" />]()[<img align="left" alt="HTML5" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style="padding-right:10px;" />]()[<img align="left" alt="Typescript" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" style="padding-right:10px;" />]()[<img align="left" alt="Eslint" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" style="padding-right:10px;" />]()[<img align="left" alt="Jest" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" style="padding-right:10px;" />]()[<img align="left" alt="Bootstrap" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" style="padding-right:10px;" />]()`vercel`.

## Website View
<img width="700" alt="Screen Shot 2022-07-24 at 23 37 00" src="https://user-images.githubusercontent.com/40421876/180657266-84231819-9c13-4bf0-a0bb-ad06c5038791.png">

## Deployment
Deploy this project is using `vercel`. Here's the link https://kitabisa-com-fe-test.vercel.app/



## Why using the stack?

- `Next.js` -> practice framework for ssr website. if at the first, we know or familiar with react and want to make seo friendly website with modern tech, next.js is the best choice. If at the first, we thought that didn't need ssr website then someday change the mind to make ssr website, express.js, webpack bundling can be choice.
- `SWR / Context API` -> State management for next.js, swr/ contect api can be choice. but do not implement yet.
- `Bootstrap` -> Well known UI Framework. Most of FE know that, if we have new FE team into our squad, dont need much time to adaptation.  Easy to collaborate. Easy to implement. 
- `Fontawesome` -> One of boostrap recommendation for alternative icon. Also its Providing many icons. So, why not?
- `Eslint Airbnb`-> Config Eslint with Airbnb styles Helps you find and fix problems with your typescript code. The AirBnB rules list is an excellent platform for starting out and can save you many hours. Believe me.
- `Jest`-> Because i'm newbie in unit testing, jest is my first unit testing framework. Not bad. Can be learned as quick as possible.
- `React Hooks` -> If you have known the lifecycle of react, you have bored with class component style. it's time to move futher, use react hooks.

