import type { Preview } from '@storybook/react';
import React from 'react';
import { ThemeProvider } from '../src/theme';
import '../src/theme/tokens.css';
import '../src/styles/components.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: { disable: true }, // Disable native backgrounds so our theme works
    layout: 'centered',
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || 'dark';
      const useImage = context.globals.imageBg;
      
      const RANDOM_SEED = React.useMemo(() => Date.now(), []);

      const bgStyle = useImage 
        ? {
            backgroundImage: `url('https://picsum.photos/1920/1080?random=${RANDOM_SEED}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed',
          }
        : { backgroundColor: 'var(--ruy-bg-base)' };

      const layout = context.parameters.layout;

      return (
        <ThemeProvider defaultTheme={theme}>
          <div style={{
            fontFamily: 'var(--ruy-font-sans)',
            color: 'var(--ruy-text-primary)',
            minHeight: '100vh',
            padding: layout === 'fullscreen' ? '0' : '2rem',
            minWidth: '320px',
            boxSizing: 'border-box',
            transition: 'background-color var(--ruy-transition-slow), color var(--ruy-transition-slow)',
            ...bgStyle
          }}>
            {layout !== 'fullscreen' ? (
              <div className="ruy-surface" style={{ padding: '3rem', borderRadius: 'var(--ruy-radius-2xl)', margin: '0 auto', maxWidth: '800px', width: 'fit-content' }}>
                <Story />
              </div>
            ) : (
              <Story />
            )}
          </div>
        </ThemeProvider>
      );
    },
  ],
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['dark', 'light'],
        dynamicTitle: true,
      },
    },
    imageBg: {
      description: 'Toggle rich image background to test glass effects',
      defaultValue: false,
      toolbar: {
        title: 'Background',
        icon: 'photo',
        items: [
          { value: false, title: 'Solid Color' },
          { value: true, title: 'Unsplash Image' },
        ],
        dynamicTitle: true,
      },
    },
  },
  initialGlobals: {
    theme: 'dark',
    imageBg: false,
  },
};

export default preview;
