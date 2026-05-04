import type { Meta, StoryObj } from '@storybook/react';
import React, { useState } from 'react';
import * as LucideIcons from 'lucide-react';

// Import everything
import { 
  Button, ToggleSwitch, Input, Select, Spinner, 
  Tag, Tooltip, NavBar, NavItem, Card, CardHeader, 
  CardTitle, CardDescription, CardBody, CardFooter,
  Tabs, TabList, Tab, TabPanel, Accordion, AccordionItem,
  Dropdown, DropdownItem, DropdownDivider, ProgressBar, Skeleton,
  Surface, useTheme
} from '../src/index';
import { Icon, MaterialIcon } from '../src/components/Icons/icon';

const meta = {
  title: 'Showcase/Landing Page',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta;

export default meta;
type Story = StoryObj;

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();
  
  const accentColors = [
    { name: 'Indigo', color: '#6366f1' },
    { name: 'Emerald', color: '#10b981' },
    { name: 'Rose', color: '#f43f5e' },
    { name: 'Amber', color: '#f59e0b' },
    { name: 'Sky', color: '#0ea5e9' },
    { name: 'Violet', color: '#8b5cf6' },
  ];

  const updateAccent = (color: string) => {
    document.documentElement.style.setProperty('--ruy-accent', color);
    document.documentElement.style.setProperty('--ruy-accent-hover', color);
    // Add a subtle glow based on the color
    document.documentElement.style.setProperty('--ruy-accent-glow', `0 4px 20px ${color}55`);
  };

  const randomizeColor = () => {
    const hue = Math.floor(Math.random() * 360);
    const randomColor = `hsl(${hue}, 80%, 60%)`;
    updateAccent(randomColor);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
        {accentColors.map((c) => (
          <button
            key={c.name}
            onClick={() => updateAccent(c.color)}
            style={{
              width: '1.25rem',
              height: '1.25rem',
              borderRadius: '50%',
              backgroundColor: c.color,
              border: '2px solid white',
              cursor: 'pointer',
              padding: 0,
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              transition: 'transform 0.2s',
            }}
            title={c.name}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        ))}
        <button
          onClick={randomizeColor}
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '2rem',
            height: '2rem',
            borderRadius: '50%',
            background: 'var(--ruy-bg-surface)',
            border: '1px solid var(--ruy-border-color)',
            color: 'var(--ruy-text-secondary)',
            cursor: 'pointer',
            padding: 0,
            transition: 'all 0.2s',
            marginLeft: '0.5rem'
          }}
          title="Random Color"
          onMouseEnter={(e) => {
            e.currentTarget.style.background = 'var(--ruy-bg-surface-hover)';
            e.currentTarget.style.color = 'var(--ruy-text-primary)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = 'var(--ruy-bg-surface)';
            e.currentTarget.style.color = 'var(--ruy-text-secondary)';
          }}
        >
          <LucideIcons.Shuffle size={14} />
        </button>
      </div>
      <div style={{ width: '1px', height: '1.5rem', background: 'var(--ruy-border-color)' }} />
      <Button 
        variant="ghost" 
        size="sm" 
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        icon={theme === 'dark' ? <LucideIcons.Sun size={16} /> : <LucideIcons.Moon size={16} />}
      >
        {theme === 'dark' ? 'Light' : 'Dark'}
      </Button>
    </div>
  );
};

export const ComponentGallery: Story = {
  render: () => {
    const [selectedTab, setSelectedTab] = useState('all');

    return (
      <div style={{ minHeight: '100vh', paddingBottom: '10rem', color: 'var(--ruy-text-primary)' }}>
        {/* Load Material Icons Font */}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        
        <NavBar brand={<div style={{fontWeight: '900', fontSize: '1.75rem', letterSpacing: '-1px'}}>RUY <span style={{color: 'var(--ruy-accent)'}}>2.0</span></div>} sticky>
          <NavItem active={selectedTab === 'all'} onClick={() => setSelectedTab('all')}>Gallery</NavItem>
          <NavItem active={selectedTab === 'docs'} onClick={() => setSelectedTab('docs')}>Documentation</NavItem>
          <div style={{ flex: 1 }} />
          <ThemeSwitcher />
          <div style={{ width: '1rem' }} />
          <Dropdown trigger={<Button variant="solid" size="sm" icon={<LucideIcons.User size={16} />}>Account</Button>}>
            <DropdownItem icon={<LucideIcons.Settings size={14} />}>Settings</DropdownItem>
            <DropdownItem icon={<LucideIcons.CreditCard size={14} />}>Billing</DropdownItem>
            <DropdownDivider />
            <DropdownItem danger icon={<LucideIcons.LogOut size={14} />}>Logout</DropdownItem>
          </Dropdown>
        </NavBar>

        {/* Hero Section */}
        <div style={{ 
          padding: '8rem 2rem 4rem', 
          textAlign: 'center', 
          maxWidth: '1000px', 
          margin: '0 auto',
          position: 'relative',
          zIndex: 1
        }}>
          <h1 className="ruy-hero-title" style={{ 
            fontSize: 'clamp(2.5rem, 8vw, 5rem)', 
            fontWeight: 900, 
            margin: 0, 
            lineHeight: 1,
            textShadow: 'var(--ruy-text-shadow)',
            background: 'linear-gradient(135deg, #fff 0%, var(--ruy-accent) 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            React Utility Yard
          </h1>
          <p style={{ 
            color: 'var(--ruy-text-secondary)', 
            fontSize: 'clamp(1rem, 3vw, 1.5rem)', 
            marginTop: '2rem',
            lineHeight: 1.6,
            maxWidth: '800px',
            margin: '2rem auto 0'
          }}>
            A premium glassmorphic component library built for high-performance dashboards and modern web applications. 
            Standardized for visual excellence across any background.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '3rem' }}>
            <Button size="lg" icon={<LucideIcons.ArrowRight size={20} />}>Get Started</Button>
            <Button variant="outline" size="lg" icon={<LucideIcons.Github size={20} />}>View on GitHub</Button>
          </div>
        </div>

        <Surface variant="heavy" padding="xl" style={{ 
          maxWidth: '1400px', 
          margin: '2rem auto', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '6rem',
          boxShadow: 'var(--ruy-shadow-xl)',
          border: '1px solid var(--ruy-glass-border)'
        }}>
          
          {/* Key Features Section */}
          <section>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <LucideIcons.Layers size={32} style={{ color: 'var(--ruy-accent)' }} />
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Surface Grounding</h3>
                <p style={{ color: 'var(--ruy-text-secondary)', lineHeight: 1.6 }}>
                  Every component is built with transparency in mind. The Surface component provides a blur-heavy backdrop that ensures legibility on any wallpaper.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <LucideIcons.Palette size={32} style={{ color: 'var(--ruy-success)' }} />
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Design Tokens</h3>
                <p style={{ color: 'var(--ruy-text-secondary)', lineHeight: 1.6 }}>
                  A robust set of CSS variables for colors, spacing, and effects. Customize the entire library by overriding a single file.
                </p>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <LucideIcons.Box size={32} style={{ color: 'var(--ruy-amber)' }} />
                <h3 style={{ fontSize: '1.5rem', margin: 0 }}>Modular Scale</h3>
                <p style={{ color: 'var(--ruy-text-secondary)', lineHeight: 1.6 }}>
                  From XS to LG, every component follows a strict sizing scale to ensure visual rhythm across complex dashboard layouts.
                </p>
              </div>
            </div>
          </section>

          {/* Icons Section */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ padding: '0.75rem', background: 'var(--ruy-accent-muted)', borderRadius: 'var(--ruy-radius-md)', color: 'var(--ruy-accent)' }}>
                <LucideIcons.Sticker size={32} />
              </div>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>Icon Systems</h2>
                <p style={{ color: 'var(--ruy-text-secondary)', margin: '0.25rem 0 0' }}>Native support for Lucide React and Material Icons</p>
              </div>
            </div>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
              <Card>
                <CardHeader>
                  <CardTitle>Lucide React Icons</CardTitle>
                  <CardDescription>Modern, lightweight stroke icons</CardDescription>
                </CardHeader>
                <CardBody style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: '2rem' }}>
                  <Icon size={32}><LucideIcons.Home /></Icon>
                  <Icon size={32}><LucideIcons.Search /></Icon>
                  <Icon size={32}><LucideIcons.Settings /></Icon>
                  <Icon size={32}><LucideIcons.Bell /></Icon>
                  <Icon size={32}><LucideIcons.Mail /></Icon>
                  <Icon size={32}><LucideIcons.Calendar /></Icon>
                  <Icon size={32}><LucideIcons.Camera /></Icon>
                  <Icon size={32}><LucideIcons.Cpu /></Icon>
                  <Icon size={32}><LucideIcons.Database /></Icon>
                  <Icon size={32}><LucideIcons.Heart /></Icon>
                </CardBody>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Material Icons</CardTitle>
                  <CardDescription>Classic filled icons for utility</CardDescription>
                </CardHeader>
                <CardBody style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', padding: '2rem' }}>
                  <MaterialIcon icon="home" size="lg" />
                  <MaterialIcon icon="search" size="lg" />
                  <MaterialIcon icon="settings" size="lg" />
                  <MaterialIcon icon="notifications" size="lg" />
                  <MaterialIcon icon="email" size="lg" />
                  <MaterialIcon icon="event" size="lg" />
                  <MaterialIcon icon="photo_camera" size="lg" />
                  <MaterialIcon icon="memory" size="lg" />
                  <MaterialIcon icon="storage" size="lg" />
                  <MaterialIcon icon="favorite" size="lg" />
                </CardBody>
              </Card>
            </div>
          </section>

          {/* Spinners & Loaders */}
          <section>
             <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ padding: '0.75rem', background: 'var(--ruy-success-muted)', borderRadius: 'var(--ruy-radius-md)', color: 'var(--ruy-success)' }}>
                <LucideIcons.RefreshCw size={32} />
              </div>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>Progress & Loading</h2>
                <p style={{ color: 'var(--ruy-text-secondary)', margin: '0.25rem 0 0' }}>Animated feedback for async operations</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
              <Card>
                <CardHeader><CardTitle>Spinner Variants & Sizes</CardTitle></CardHeader>
                <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '3rem', padding: '2.5rem' }}>
                  {['circle', 'dots', 'orbit', 'bars', 'pulse-ring', 'organic'].map((v) => (
                    <div key={v} style={{ display: 'flex', alignItems: 'center', gap: '3rem' }}>
                      <div style={{ width: '80px', fontSize: '0.75rem', fontWeight: 700, color: 'var(--ruy-text-muted)', textTransform: 'uppercase' }}>{v}</div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '2.5rem' }}>
                        <Spinner variant={v as any} size="xs" />
                        <Spinner variant={v as any} size="sm" />
                        <Spinner variant={v as any} size="md" />
                        <Spinner variant={v as any} size="lg" />
                      </div>
                    </div>
                  ))}
                </CardBody>
              </Card>

              <Card>
                <CardHeader><CardTitle>Skeletons & Progress</CardTitle></CardHeader>
                <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '3rem', padding: '2.5rem' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <ProgressBar variant="linear" value={45} showLabel />
                    <ProgressBar variant="linear" value={80} showLabel color="var(--ruy-success)" />
                    <ProgressBar variant="gradient-wave" value={65} showLabel color="var(--ruy-accent)" />
                  </div>
                  <div style={{ display: 'flex', gap: '3rem', alignItems: 'center' }}>
                    <ProgressBar variant="circular" value={65} showLabel />
                    <ProgressBar variant="circular" value={30} showLabel color="var(--ruy-danger)" />
                  </div>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                      <Skeleton variant="circle" width={64} height={64} />
                      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <Skeleton variant="text" width="80%" height={20} />
                        <Skeleton variant="text" width="50%" height={16} />
                      </div>
                    </div>
                    <Skeleton variant="rect" height={120} />
                  </div>
                </CardBody>
              </Card>
            </div>
          </section>

          {/* Buttons Section */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ padding: '0.75rem', background: 'var(--ruy-accent-muted)', borderRadius: 'var(--ruy-radius-md)', color: 'var(--ruy-accent)' }}>
                <LucideIcons.MousePointer2 size={32} />
              </div>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>Action Elements</h2>
                <p style={{ color: 'var(--ruy-text-secondary)', margin: '0.25rem 0 0' }}>Buttons and interactive controls</p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <Card>
                <CardBody style={{ padding: '3rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
                    {['solid', 'outline', 'ghost', 'glass'].map((v) => (
                      <div key={v} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <h4 style={{ margin: 0, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px', color: 'var(--ruy-text-muted)' }}>{v} Variant</h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          <Button variant={v as any} size="sm">Small Button</Button>
                          <Button variant={v as any} size="md">Medium Button</Button>
                          <Button variant={v as any} size="lg">Large Button</Button>
                          <Button variant={v as any} danger>Danger Action</Button>
                          <Button variant={v as any} loading>Loading State</Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardBody>
              </Card>
            </div>
          </section>

          {/* Tags Section */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ padding: '0.75rem', background: 'var(--ruy-warning-muted)', borderRadius: 'var(--ruy-radius-md)', color: 'var(--ruy-warning)' }}>
                <LucideIcons.Tag size={32} />
              </div>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>Data Display</h2>
                <p style={{ color: 'var(--ruy-text-secondary)', margin: '0.25rem 0 0' }}>Tags, labels, and badges</p>
              </div>
            </div>

            <Card>
              <CardBody style={{ padding: '3rem', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <h4 style={{ margin: 0, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px', color: 'var(--ruy-text-muted)' }}>Color Palette</h4>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                    {['slate', 'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal', 'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink', 'rose'].map(c => (
                      <Tag key={c} color={c as any}>{c}</Tag>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <h4 style={{ margin: 0, textTransform: 'uppercase', fontSize: '0.75rem', letterSpacing: '1px', color: 'var(--ruy-text-muted)' }}>Variants & Sizes</h4>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <Tag variant="solid" color="accent" size="xs">Extra Small</Tag>
                    <Tag variant="solid" color="accent" size="sm">Small Tag</Tag>
                    <Tag variant="solid" color="accent" size="md">Medium Tag</Tag>
                    <Tag variant="solid" color="accent" size="lg">Large Tag</Tag>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', flexWrap: 'wrap' }}>
                    <Tag variant="outline" color="neutral">Outline Tag</Tag>
                    <Tag variant="glass">Glass Tag</Tag>
                    <Tag variant="solid" color="danger" onRemove={() => {}}>Removable</Tag>
                  </div>
                </div>
              </CardBody>
            </Card>
          </section>

          {/* Forms Section */}
          <section>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
              <div style={{ padding: '0.75rem', background: 'var(--ruy-info-muted)', borderRadius: 'var(--ruy-radius-md)', color: 'var(--ruy-info)' }}>
                <LucideIcons.TextCursorInput size={32} />
              </div>
              <div>
                <h2 style={{ fontSize: '2.5rem', fontWeight: 800, margin: 0 }}>Input Controls</h2>
                <p style={{ color: 'var(--ruy-text-secondary)', margin: '0.25rem 0 0' }}>Form elements and data entry</p>
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '2rem' }}>
              <Card>
                <CardHeader><CardTitle>Text Inputs</CardTitle></CardHeader>
                <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2.5rem' }}>
                  <Input placeholder="Small Input" size="sm" icon={<LucideIcons.Search size={14} />} />
                  <Input placeholder="Medium Input" size="md" icon={<LucideIcons.Search size={16} />} />
                  <Input placeholder="Large Input" size="lg" icon={<LucideIcons.Search size={18} />} />
                  <Input placeholder="Error State" error="Invalid email address" icon={<LucideIcons.Mail size={16} />} />
                  <Input placeholder="Glass Style" variant="glass" />
                </CardBody>
              </Card>

              <Card>
                <CardHeader><CardTitle>Selection & Toggles</CardTitle></CardHeader>
                <CardBody style={{ display: 'flex', flexDirection: 'column', gap: '2rem', padding: '2.5rem' }}>
                  <Select placeholder="Choose an option" options={[{value: '1', label: 'Option 1'}, {value: '2', label: 'Option 2'}]} />
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 600 }}>Push Notifications</span>
                      <ToggleSwitch size="sm" defaultChecked />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 600 }}>Dark Mode (System)</span>
                      <ToggleSwitch size="md" />
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontWeight: 600 }}>High Performance</span>
                      <ToggleSwitch size="lg" defaultChecked />
                    </div>
                  </div>
                </CardBody>
              </Card>
            </div>
          </section>

        </Surface>

        {/* Footer */}
        <footer style={{ marginTop: '8rem', textAlign: 'center', opacity: 0.5 }}>
          <p>© 2026 React Utility Yard. Designed for the Admin-IO Ecosystem.</p>
        </footer>
      </div>
    );
  }
};

