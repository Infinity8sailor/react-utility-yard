# React Utility Yard (RUY) v2 💎

[![npm version](https://badge.fury.io/js/react-utility-yard.svg)](https://badge.fury.io/js/react-utility-yard)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**React Utility Yard** is a high-performance, premium React component library designed for building modern web applications with a focus on **Glassmorphism**, fluid animations, and developer productivity.

Abstracted from real-world AI-powered ecosystems, RUY provides a curated set of components that are both visually stunning and highly functional.

---

## ✨ Features

- 🧊 **Glassmorphism Core**: Built-in support for ultra-modern glass aesthetics.
- 🌓 **Dynamic Theming**: Seamless dark and light mode support with custom CSS tokens.
- ⚡ **Type Safe**: First-class TypeScript support with full IntelliSense.
- 🔄 **Backward Compatible**: v2.x architecture maintains support for legacy props (`onclick`, `editOn`, etc.).
- 📦 **Zero Config Bundle**: Optimized for modern bundlers like Vite, Next.js, and Webpack.

---

## 🚀 Installation

```bash
npm install react-utility-yard
```

### 🛠 Configuration

RUY leverages Tailwind CSS for its styling engine. Add the following to your `tailwind.config.js`:

```javascript
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/react-utility-yard/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // RUY design system tokens
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
```

Import the core styles in your main entry file (e.g., `main.tsx` or `_app.tsx`):

```typescript
import 'react-utility-yard/dist/index.css';
```

---

## 🧱 Key Components

### 🧊 SideBar
A sophisticated, collapsible navigation panel with support for custom layouts and glassmorphic headers.

```tsx
import { SideBar } from 'react-utility-yard';

<SideBar 
  title="Workspace" 
  sideBar_list={<NavigationItems />}
  width="18rem"
>
  <MainContent />
</SideBar>
```

### 🔘 Button
Modern buttons with glass, solid, and ghost variants. Fully compatible with legacy `onclick` and `text` props.

```tsx
import { Button } from 'react-utility-yard';

<Button 
  variant="glass" 
  color="accent" 
  onClick={() => console.log("Clicked!")}
>
  Ignite System
</Button>
```

### ⌨️ Input
Enhanced input fields with built-in "Read-only" toggle support via the `editOn` prop.

---

## 🛠 Development

### Local Setup
```bash
# Clone the repository
git clone https://github.com/Infinity8sailor/react-utility-yard.git

# Install dependencies
npm install

# Run Storybook
npm run storybook
```

### Build & Release
The project uses `tsup` for extremely fast bundling.
```bash
# Build the library
npm run build

# Publish to NPM (Automated via GitHub Actions)
# Bump version in package.json and push to main
```

---

## 📜 License
MIT © [Vaibhav Dasharathe](https://github.com/Infinity8sailor)