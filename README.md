# Documentation for Makeup Website

## You Should Know
- This project doesn't use any UI Framework, i use mixins sass. Let's make our scss as dry as we can.
- Responsive
- Use global state management
- I make as eye cactching as i can.
- use open API from https://makeup-api.herokuapp.com/.
- Using Next.js

## Naming Conventions

#### component -> PascalCase

example:

- components/Account/index.tsx
- components/Account/EditAccount.tsx
- components/Home.tsx

#### not component -> hyphens-case

example:

- Wrapping folder
- file scss name
- file image name

#### function, scss in component & variable -> camelCase
#### pagename -> lowercase

## CSS Rules
This project CSS is using:
- some http://getbem.com/naming/ rules.
- css in component like https://nextjs.org/docs/basic-features/built-in-css-support

## Start Project
- Clone the project from git repository.

In the project directory, you can run:

- `npm intall`
- `npm run dev`

## Running Project Script
In the project directory, you can run:

##### `npm run dev` : Runs the app in the development mode.
##### `npm run build` : Builds the app for production to the `build` folder
##### `npx eslint . --ext .js,.jsx,.ts,.tsx` : Runs the eslint.
##### `npx eslint . --ext .js,.jsx,.ts,.tsx --fix` : Runs the eslint and auto eslint fix.

## Project Technologies
[<img align="left" alt="Sass" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg" style="padding-right:10px;" />]()[<img align="left" alt="Next.js" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" style="padding-right:10px;" />]()[<img align="left" alt="HTML5" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" style="padding-right:10px;" />]()[<img align="left" alt="Typescript" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" style="padding-right:10px;" />]()[<img align="left" alt="Eslint" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/eslint/eslint-original.svg" style="padding-right:10px;" />]()[<img align="left" alt="Redux" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg" style="padding-right:10px;" />]()`vercel`.

## Why using the stack?

- `Next.js` -> practice framework for ssr website. if at the first, we know or familiar with react and want to make seo friendly website with modern tech, next.js is the best choice. If at the first, we thought that didn't need ssr website then someday change the mind to make ssr website, express.js, webpack bundling can be choice.
- `Redux` -> There'are few kind of global state management for next.js, but redux is still the best for complex project. So, still i choose redux.
- `Eslint Airbnb`-> Config Eslint with Airbnb styles Helps you find and fix problems with your typescript code. The AirBnB rules list is an excellent platform for starting out and can save you many hours. Believe me.
- `React Hooks` -> If you have known the lifecycle of react, you have bored with class component style. it's time to move futher, use react hooks.

## Website View
<img width="600" alt="Screen Shot 2022-07-30 at 21 32 36" src="https://user-images.githubusercontent.com/40421876/181919057-331580d2-b451-4f80-82c0-f8de4b34b857.png">

<img width="600" alt="Screen Shot 2022-07-30 at 21 33 03" src="https://user-images.githubusercontent.com/40421876/181919064-9d58e028-7f89-4e08-9566-0a27d110c720.png">

## Deployment
Deploy this project is using `vercel`. Here's the link https://evermos-fe-test.vercel.app/.

## SEO Checking
<img width="600" alt="Screen Shot 2022-07-30 at 21 36 20" src="https://user-images.githubusercontent.com/40421876/181919205-f152edb0-8de2-47d2-bbaf-7a1d3f5b47d5.png">

## Prove for SSR Website
Can you view the html render from the below link?

view-source:https://evermos-fe-test.vercel.app/
