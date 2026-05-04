import type { Meta, StoryObj } from '@storybook/react';
import { ThemeProvider, useTheme } from '../src/theme';
import { Button } from '../src/components/Button';
import { Tag } from '../src/components/Tag';
import { Input } from '../src/components/input/input';
import { ToggleSwitch } from '../src/components/Button/toggle';

const meta: Meta = {
  title: 'Theme/ThemeProvider',
  tags: ['autodocs'],
};
export default meta;

const ThemeDemo = () => {
  const { theme, toggleTheme, setAccentColor } = useTheme();
  return (
    <div style={{
      display: 'flex', flexDirection: 'column', gap: '1.5rem',
      padding: '2rem', borderRadius: 'var(--ruy-radius-xl)',
      background: 'var(--ruy-bg-surface)', border: '1px solid var(--ruy-border-color)',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <span style={{ color: 'var(--ruy-text-secondary)', fontSize: '0.875rem' }}>
          Current: <strong style={{ color: 'var(--ruy-text-primary)' }}>{theme}</strong>
        </span>
        <Button size="sm" onClick={toggleTheme}>Toggle Theme</Button>
      </div>

      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
        <Button size="xs" variant="outline" color="neutral" onClick={() => setAccentColor('#6366f1')}>Indigo</Button>
        <Button size="xs" variant="outline" color="neutral" onClick={() => setAccentColor('#ec4899')}>Pink</Button>
        <Button size="xs" variant="outline" color="neutral" onClick={() => setAccentColor('#14b8a6')}>Teal</Button>
        <Button size="xs" variant="outline" color="neutral" onClick={() => setAccentColor('#f97316')}>Orange</Button>
      </div>

      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
        <Button>Accent</Button>
        <Button variant="outline" color="accent">Outline</Button>
        <Button variant="glass">Glass</Button>
        <Tag color="accent">Tag</Tag>
        <Tag color="success">Success</Tag>
      </div>

      <Input label="Sample Input" placeholder="Type here..." />
      <ToggleSwitch label="A toggle" />
    </div>
  );
};

export const ThemeSwitcher: StoryObj = {
  render: () => (
    <ThemeProvider defaultTheme="dark">
      <ThemeDemo />
    </ThemeProvider>
  ),
};
