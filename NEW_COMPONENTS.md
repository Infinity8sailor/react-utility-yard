# RUY 2.1 — New Component Specifications

> **Purpose**: This document specifies new components to be added to `react-utility-yard`.
> Each spec follows established library conventions and is ready for implementation.
>
> **Target version**: `2.1.0`
> **Implementing agent**: Read this file, implement each component, then update exports and publish.

---

## Table of Contents

1. [Architecture & Conventions](#architecture--conventions)
2. [Component 1: EmptyState](#component-1-emptystate)
3. [Component 2: SearchBar](#component-2-searchbar)
4. [Component 3: StatLabel](#component-3-statlabel)
5. [Integration Checklist](#integration-checklist)

---

## Architecture & Conventions

Before implementing, understand the existing patterns:

### File Structure

Every component lives in `src/components/<ComponentName>/index.tsx`:

```
src/components/
├── Button/index.tsx
├── Card/index.tsx
├── EmptyState/index.tsx     ← NEW
├── SearchBar/index.tsx      ← NEW
├── Tag/index.tsx
└── ...
```

### Coding Patterns

1. **No default exports.** All components use named exports: `export function EmptyState() {}`
2. **Props interface exported alongside component.** Name it `<Component>Props`.
3. **CSS classes prefixed with `ruy-`** (e.g., `ruy-empty-state`, `ruy-searchbar`).
4. **All colors reference CSS custom properties** from `tokens.css` (e.g., `var(--ruy-text-primary)`). Never hardcode hex values.
5. **Inline styles** are used directly in components (no CSS modules). CSS for complex selectors goes in `src/styles/components.css`.
6. **Both `className` and `style` are spread** to the root element for consumer customization.
7. **`data-theme="light"` overrides** must be added to `components.css` if visual appearance changes between themes.
8. **framer-motion** is available as a dependency — use it for animations where it adds value, but keep it optional (component must render without it).

### Export Registration

After creating a component, it must be registered in two files:

1. **`src/components/index.ts`** — Re-export the component and its props type.
2. **`src/index.ts`** — Add to both the component export block and the type export block.

### CSS Registration

Add component CSS to `src/styles/components.css` following the existing section pattern:

```css
/* ─── ComponentName ─── */
.ruy-component-name { ... }
```

---

## Component 1: EmptyState

### What It Is

A composable placeholder for zero-data scenarios. Renders a centered icon, title, description, and optional call-to-action. Used anywhere a list, grid, or panel has no content to display.

### Use Cases (Generic)

- Empty search results
- No items in a list/table
- First-time user onboarding prompts
- Error recovery screens
- Empty dashboard widgets

### API

```tsx
import { EmptyState } from 'react-utility-yard';

<EmptyState
  icon="🏜️"
  title="No results found"
  description="Try adjusting your search or filters."
  action={<Button variant="solid" color="accent">Reset Filters</Button>}
/>

<EmptyState
  icon={<SearchIcon size={48} />}
  title="Start searching"
  variant="compact"
/>
```

### Props

```typescript
export interface EmptyStateProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Icon to display — emoji string or ReactNode (e.g., Lucide icon) */
  icon?: React.ReactNode;
  /** Primary message */
  title: string;
  /** Secondary descriptive text */
  description?: string;
  /** Optional CTA button or link */
  action?: React.ReactNode;
  /** Layout density */
  variant?: 'default' | 'compact';
  /** Additional className */
  className?: string;
}
```

### Visual Spec

**`default` variant:**
- Centered flex column
- Icon: `3.5rem` font-size (if string) or rendered as-is (if ReactNode), `margin-bottom: 1.5rem`
- Title: `font-size: 1.25rem`, `font-weight: 700`, `color: var(--ruy-text-secondary)`
- Description: `font-size: 0.875rem`, `color: var(--ruy-text-muted)`, `max-width: 20rem`, `text-align: center`, `line-height: 1.6`, `margin-top: 0.5rem`
- Action: `margin-top: 1.5rem`
- Container: `padding: 4rem 2rem`, no background (transparent — consumers wrap in `Surface` or `Card` if they want glass)

**`compact` variant:**
- Same layout but: `padding: 2rem 1rem`
- Icon: `2rem` font-size
- Title: `font-size: 0.75rem`, `font-weight: 700`, `text-transform: uppercase`, `letter-spacing: 0.1em`
- Description: `font-size: 0.6875rem`
- No action slot rendered in compact mode

### CSS (add to components.css)

```css
/* ─── EmptyState ─── */
.ruy-empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
}
.ruy-empty-state-default { padding: 4rem 2rem; }
.ruy-empty-state-compact { padding: 2rem 1rem; }

.ruy-empty-state-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  color: var(--ruy-text-muted);
}
.ruy-empty-state-default .ruy-empty-state-icon { font-size: 3.5rem; }
.ruy-empty-state-compact .ruy-empty-state-icon { font-size: 2rem; margin-bottom: 0.75rem; }

.ruy-empty-state-title {
  color: var(--ruy-text-secondary);
  margin: 0;
}
.ruy-empty-state-default .ruy-empty-state-title { font-size: 1.25rem; font-weight: 700; }
.ruy-empty-state-compact .ruy-empty-state-title {
  font-size: 0.75rem; font-weight: 700;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--ruy-text-muted);
}

.ruy-empty-state-description {
  color: var(--ruy-text-muted);
  max-width: 20rem;
  line-height: 1.6;
  margin: 0;
}
.ruy-empty-state-default .ruy-empty-state-description { font-size: 0.875rem; margin-top: 0.5rem; }
.ruy-empty-state-compact .ruy-empty-state-description { font-size: 0.6875rem; margin-top: 0.375rem; }

.ruy-empty-state-action { margin-top: 1.5rem; }
```

### Implementation Reference

Follow the same pattern as `Card/index.tsx` — a simple functional component that composes CSS classes based on props. No framer-motion needed.

---

## Component 2: SearchBar

### What It Is

A premium glassmorphic input bar with an icon slot, action button, and optional helper text. Designed as a self-contained "command bar" pattern — pill-shaped, with clear visual hierarchy between the input and the action.

### Use Cases (Generic)

- Search inputs with submit button
- URL/link paste inputs
- Command palette triggers
- Filter bars with apply button
- Comment/message input fields

### API

```tsx
import { SearchBar } from 'react-utility-yard';

<SearchBar
  value={query}
  onChange={setQuery}
  onAction={handleSearch}
  placeholder="Search anything..."
  actionLabel="Go"
  icon={<SearchIcon size={20} />}
/>

<SearchBar
  value={url}
  onChange={setUrl}
  onAction={handlePaste}
  placeholder="Paste a URL..."
  actionLabel="Import"
  helperText="Supports short links"
  loading={importing}
/>
```

### Props

```typescript
export interface SearchBarProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Current input value */
  value: string;
  /** Called on every input change */
  onChange: (value: string) => void;
  /** Called when action button is clicked or Enter is pressed */
  onAction?: () => void;
  /** Input placeholder text */
  placeholder?: string;
  /** Label for the action button (if omitted, no button is shown) */
  actionLabel?: string;
  /** Icon rendered on the left side of the input */
  icon?: React.ReactNode;
  /** Small helper text below the input */
  helperText?: string;
  /** Show loading spinner on the action button */
  loading?: boolean;
  /** Disable the input and button */
  disabled?: boolean;
  /** Visual variant */
  variant?: 'glass' | 'solid';
  /** Size preset */
  size?: 'sm' | 'md' | 'lg';
  /** Additional className */
  className?: string;
}
```

### Visual Spec

**Container:**
- `border-radius: var(--ruy-radius-2xl)` (pill shape)
- `glass` variant: `background: var(--ruy-glass-bg)`, `backdrop-filter: blur(var(--ruy-glass-blur))`, `border: 1px solid var(--ruy-glass-border)`
- `solid` variant: `background: var(--ruy-bg-surface)`, `border: 1px solid var(--ruy-border-color)`
- Focus-within: `border-color: var(--ruy-accent)`, `box-shadow: 0 0 0 3px var(--ruy-accent-muted)`

**Icon slot:**
- Positioned absolute left, `padding-left: 1.25rem`
- `color: var(--ruy-text-muted)`, transitions to `var(--ruy-accent)` on focus-within

**Input:**
- Transparent background, no border
- `padding-left` accounts for icon width
- `padding-right` accounts for action button width

**Action button:**
- Positioned absolute right, with `4px` inset
- Uses RUY `<Button variant="solid" color="accent">` internally
- Full height minus inset
- `border-radius: var(--ruy-radius-xl)` (slightly less than container for visual nesting)

**Helper text:**
- Below input container
- `font-size: 0.625rem`, `font-weight: 700`, `text-transform: uppercase`, `letter-spacing: 0.1em`
- `color: var(--ruy-text-muted)`, `padding: 0.5rem 1.25rem 0`

**Sizes:**
- `sm`: input height `2.5rem`
- `md`: input height `3.5rem` (default)
- `lg`: input height `4rem`, font-size `1.125rem`

### CSS (add to components.css)

```css
/* ─── SearchBar ─── */
.ruy-searchbar {
  position: relative;
  width: 100%;
  border-radius: var(--ruy-radius-2xl);
  transition: all var(--ruy-transition-normal);
}
.ruy-searchbar-glass {
  background: var(--ruy-glass-bg);
  backdrop-filter: blur(var(--ruy-glass-blur));
  -webkit-backdrop-filter: blur(var(--ruy-glass-blur));
  border: 1px solid var(--ruy-glass-border);
}
.ruy-searchbar-solid {
  background: var(--ruy-bg-surface);
  border: 1px solid var(--ruy-border-color);
}
.ruy-searchbar:focus-within {
  border-color: var(--ruy-accent);
  box-shadow: 0 0 0 3px var(--ruy-accent-muted);
}

.ruy-searchbar-icon {
  position: absolute;
  left: 1.25rem;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  color: var(--ruy-text-muted);
  pointer-events: none;
  transition: color var(--ruy-transition-fast);
}
.ruy-searchbar:focus-within .ruy-searchbar-icon {
  color: var(--ruy-accent);
}

.ruy-searchbar-input {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: var(--ruy-text-primary);
  font-family: var(--ruy-font-sans);
}
.ruy-searchbar-input::placeholder { color: var(--ruy-text-muted); }

.ruy-searchbar-sm .ruy-searchbar-input { height: 2.5rem; font-size: 0.8125rem; }
.ruy-searchbar-md .ruy-searchbar-input { height: 3.5rem; font-size: 0.9375rem; }
.ruy-searchbar-lg .ruy-searchbar-input { height: 4rem; font-size: 1.125rem; }

.ruy-searchbar-action {
  position: absolute;
  right: 4px;
  top: 4px;
  bottom: 4px;
}

.ruy-searchbar-helper {
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: var(--ruy-text-muted);
  padding: 0.5rem 1.25rem 0.5rem;
}
```

### Implementation Notes

- Import `Button` and `Spinner` internally from sibling components
- Wire `Enter` key to `onAction` callback
- When `loading` is true, pass `loading` prop to internal `<Button>`
- When `disabled`, set `pointer-events: none` and `opacity: 0.5` on container
- The action button should be disabled when `value` is empty

---

## Component 3: StatLabel

### What It Is

A micro metadata chip that pairs an icon with a text value. Smaller than a `Tag` — designed for inline informational display, not categorization. Think of it as a "read-only metadata token" rather than an interactive badge.

### Use Cases (Generic)

- Date/time displays (📅 Jul 13)
- Counts (📍 3 stops)
- Member indicators (👥 5 members)
- Duration labels (⏱ 2h 30m)
- File size displays (📦 1.2 MB)
- Version numbers (🏷 v2.1.0)

### API

```tsx
import { StatLabel } from 'react-utility-yard';

<StatLabel icon="📅" value="Jul 13" />
<StatLabel icon={<Clock size={10} />} value="2h 30m" />
<StatLabel icon="📍" value="3 stops" muted />
```

### Props

```typescript
export interface StatLabelProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Leading icon — emoji string or ReactNode */
  icon?: React.ReactNode;
  /** The text value to display */
  value: React.ReactNode;
  /** Use muted styling (lower contrast) */
  muted?: boolean;
  /** Size preset */
  size?: 'xs' | 'sm' | 'md';
  /** Additional className */
  className?: string;
}
```

### Visual Spec

- Inline-flex, `align-items: center`, `gap: 0.25rem`
- `font-family: var(--ruy-font-sans)`
- `font-weight: 600`
- Default color: `var(--ruy-text-secondary)`
- Muted color: `var(--ruy-text-muted)`
- Icon opacity: `0.7` (default), `0.5` (muted)

**Sizes:**
- `xs`: `font-size: 0.5625rem`, `letter-spacing: 0.04em`
- `sm`: `font-size: 0.6875rem`, `letter-spacing: 0.02em`
- `md`: `font-size: 0.8125rem`

No background, no border, no padding — this is a purely typographic element.

### CSS (add to components.css)

```css
/* ─── StatLabel ─── */
.ruy-stat-label {
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--ruy-font-sans);
  font-weight: 600;
  color: var(--ruy-text-secondary);
  white-space: nowrap;
}
.ruy-stat-label-muted { color: var(--ruy-text-muted); }
.ruy-stat-label-icon { display: inline-flex; opacity: 0.7; line-height: 1; }
.ruy-stat-label-muted .ruy-stat-label-icon { opacity: 0.5; }

.ruy-stat-label-xs { font-size: 0.5625rem; letter-spacing: 0.04em; }
.ruy-stat-label-sm { font-size: 0.6875rem; letter-spacing: 0.02em; }
.ruy-stat-label-md { font-size: 0.8125rem; }
```

### Implementation Notes

- This is the simplest component — ~20 lines of TSX
- Detect if `icon` is a string (emoji) vs ReactNode and wrap accordingly
- No framer-motion needed
- Apply `text-transform: uppercase` only on `xs` size

---

## Integration Checklist

After implementing all three components, complete these steps:

### 1. Component Files

```
✅ src/components/EmptyState/index.tsx
✅ src/components/SearchBar/index.tsx
✅ src/components/StatLabel/index.tsx
```

### 2. Re-export from `src/components/index.ts`

Add these lines alongside existing exports:

```typescript
// EmptyState
export { EmptyState } from './EmptyState';
export type { EmptyStateProps } from './EmptyState';

// SearchBar
export { SearchBar } from './SearchBar';
export type { SearchBarProps } from './SearchBar';

// StatLabel
export { StatLabel } from './StatLabel';
export type { StatLabelProps } from './StatLabel';
```

### 3. Re-export from `src/index.ts`

Add to the component export block:

```typescript
EmptyState,
SearchBar,
StatLabel,
```

Add to the type export block:

```typescript
EmptyStateProps,
SearchBarProps,
StatLabelProps,
```

### 4. CSS Additions

Add all CSS blocks from the specs above to `src/styles/components.css`, maintaining the section comment pattern:

```css
/* ─── EmptyState ─── */
/* ─── SearchBar ─── */
/* ─── StatLabel ─── */
```

### 5. Version Bump

In `package.json`, bump version:

```diff
- "version": "2.0.2",
+ "version": "2.1.0",
```

### 6. Build & Publish

```bash
npm run build
npm publish --access public
```

### 7. Consumer Update (Admin-IO)

```bash
npm i react-utility-yard@latest
```

---

## Design Token Reference

All components must use these tokens — never hardcode colors:

| Token | Purpose |
|-------|---------|
| `--ruy-text-primary` | Primary text color |
| `--ruy-text-secondary` | Secondary text color |
| `--ruy-text-muted` | Muted/hint text |
| `--ruy-accent` | Brand accent color |
| `--ruy-accent-muted` | Accent with low opacity (focus rings) |
| `--ruy-bg-surface` | Surface background |
| `--ruy-bg-base` | Page background |
| `--ruy-glass-bg` | Glass background |
| `--ruy-glass-blur` | Glass blur amount |
| `--ruy-glass-border` | Glass border color |
| `--ruy-border-color` | Standard border |
| `--ruy-border-color-hover` | Border on hover |
| `--ruy-radius-*` | Border radius scale (xs → full) |
| `--ruy-transition-fast` | 150ms transition |
| `--ruy-transition-normal` | 250ms transition |
| `--ruy-font-sans` | Primary font family (Inter) |
| `--ruy-danger` | Destructive action color |
| `--ruy-success` | Success state color |
| `--ruy-shadow-*` | Shadow scale (sm → 2xl) |

---

> **Note for implementing agent**: After publishing `2.1.0`, update the consumer app (`Admin-IO`) to replace
> inline empty-state patterns with `<EmptyState>`, Smart Add bars with `<SearchBar>`, and
> metadata chips with `<StatLabel>`. These replacements are straightforward find-and-replace
> operations in the Travel module files.
