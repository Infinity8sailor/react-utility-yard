# React-utility-yard
⚠️ This project is in developement, still you can explore for setting up following features together.

## Features
- [x] React
- [x] Tailwind
- [x] vite
- [x] ts
- [x] storybook


Functions 
const Hello = () => console.log("Jello....);

# Run Storybook
`npm run storybook`

# Publish
Push the changes to git and change package version otherwise npm don't accept.
### Build the package
`npm run build`
### Publish the package
`npm publish`


# Issues and Fixes
- Integrating Tailwind with ts. While building the module compiled tailwind must be sent along with build directory.
  - `npx tailwind -i src/tailwind.css -o ./build/tailwind.css`
- Copy assets to the build [ might need to see better way]

# Source info
 - package.json
   - files : list of files to be published along with readme and package.json
   - 