# React-utility-yard [ npm ](https://www.npmjs.com/package/react-utility-yard) [![npm version](https://badge.fury.io/js/react-utility-yard.svg)](https://badge.fury.io/js/react-utility-yard)

⚠️ This project is in developement, still you can explore for setting up following features together.

## Features
- [x] React
- [x] Tailwind
- [x] vite
- [x] ts
- [x] storybook


Functions 
const Hello = () => console.log("Jello....);

# Additional Settings tobe used in your Project
- Following libraries are must
  - Tailwind
  - material Icons ( google fonts )
-  Tailwind Plugins
   -  @tailwindcss/forms

# Run & Publish Storybook
This storybook is published [live](https://react-utility-yard.vercel.app/)

### Run storybook locally
`npm run storybook`

### Publish Storybook Online [ Automated by vercel ]
`npm run build-storybook-prod`



# Publish NPM
Push the changes to git and change package version otherwise npm don't accept.
### Build the package
`npm run build`
### Publish the package
`npm publish`

## On-Going tasks
- [x] Remove the padding for sidebar content box
- [x] Remove the css file from build if not using it.
- [ ] Side bar not scrolling
- [ ] sidebar hamberger issue, its reversed.

# Issues and Fixes
- Integrating Tailwind with ts. While building the module compiled tailwind must be sent along with build directory.
  - `npx tailwind -i src/tailwind.css -o ./build/tailwind.css`
  - Currently, Not providing Css with the package.
- Copy assets to the build [ might need to see better way]
- With Tailwind 3, Dynamic Classed dont work. Use this instead :  [link/Doc](https://tailwindcss.com/docs/content-configuration#dynamic-class-names).

# Source info
 - package.json
   - files : list of files to be published along with readme and package.json
 - tsconfig.json
   - sourceMap : source map maps the transformed source to the original source for debbuging purpose by the browser.

# References/Components/demos
- [air-bnb](https://airbnb.io/lunar)