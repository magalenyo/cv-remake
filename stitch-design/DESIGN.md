---
name: Crimson Protocol
colors:
  surface: '#1d100e'
  surface-dim: '#1d100e'
  surface-bright: '#473532'
  surface-container-lowest: '#180b09'
  surface-container-low: '#261816'
  surface-container: '#2b1c19'
  surface-container-high: '#362623'
  surface-container-highest: '#42312e'
  on-surface: '#f8dcd8'
  on-surface-variant: '#e3beb8'
  inverse-surface: '#f8dcd8'
  inverse-on-surface: '#3d2c2a'
  outline: '#aa8984'
  outline-variant: '#5a403c'
  surface-tint: '#ffb4a8'
  primary: '#ffb4a8'
  on-primary: '#690000'
  primary-container: '#8b0000'
  on-primary-container: '#ff907f'
  inverse-primary: '#b52619'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#bcc3ff'
  on-tertiary: '#001a98'
  tertiary-container: '#0025c8'
  on-tertiary-container: '#9ea9ff'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad4'
  primary-fixed-dim: '#ffb4a8'
  on-primary-fixed: '#410000'
  on-primary-fixed-variant: '#920703'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#dfe0ff'
  tertiary-fixed-dim: '#bcc3ff'
  on-tertiary-fixed: '#000d60'
  on-tertiary-fixed-variant: '#0d2ccc'
  background: '#1d100e'
  on-background: '#f8dcd8'
  surface-variant: '#42312e'
typography:
  headline-lg:
    fontFamily: JetBrains Mono
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.04em
  headline-lg-mobile:
    fontFamily: JetBrains Mono
    fontSize: 28px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: JetBrains Mono
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: JetBrains Mono
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  body-sm:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.6'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  code:
    fontFamily: JetBrains Mono
    fontSize: 14px
    fontWeight: '400'
    lineHeight: '1.5'
spacing:
  unit: 4px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  column-count: '12'
---

## Brand & Style
The brand personality is intense, clandestine, and authoritative. It is designed for a target audience that values technical precision, high-stakes security, and a "command-line" aesthetic. The UI should evoke a sense of urgency, high-level access, and industrial reliability.

The design style is a hybrid of **Cyber-Brutalism** and **Minimalism**. It rejects all decorative softness in favor of raw, sharp-edged geometry and high-contrast visuals. The interface mimics a high-security terminal or an encrypted tactical overlay, where every pixel serves a functional purpose. There are no gradients, no blurs, and no "safe" grays—only the stark contrast of light against an absolute void.

## Colors
The palette is hyper-restricted to maintain a disciplined, aggressive visual hierarchy.

- **Background**: Pure pitch black (#000000). This is non-negotiable and serves as the foundation for the entire system.
- **Primary Accent**: Dark Crimson (#8B0000). Used for critical actions, status alerts, and primary branding elements. It should feel heavy and saturated.
- **Secondary / Content**: Pure White (#FFFFFF). Used for maximum legibility of data and primary text strings.
- **Surface**: Near-black (#1A1A1A). Used sparingly for subtle containment or to distinguish nested interactive areas without breaking the "void" aesthetic.
- **Status (Critical)**: Bright Red (#FF0000). Reserved strictly for system failures or high-risk warnings.

## Typography
This design system utilizes **JetBrains Mono** exclusively across all levels to reinforce the technical, developer-centric nature of the interface. 

- **Weight Scaling**: Use Bold (700) for headers to create impact against the black background. Use Regular (400) for body text to ensure maximum legibility of code and data.
- **Uppercase Application**: All labels, navigation items, and button text must be set in All-Caps with increased letter spacing to emulate military/technical labeling.
- **Alignment**: Typography should strictly follow the grid. Avoid center-alignment; stick to left-aligned blocks to maintain the structured, terminal-like feel.

## Layout & Spacing
The layout follows a **Rigid Grid** model based on 4px increments. Everything is aligned to a strict 12-column grid on desktop and a 4-column grid on mobile.

- **Gutters & Margins**: Use 16px (4x) for gutters to maintain a compact, data-dense look. Margins are 32px on desktop to provide a "frame" for the content.
- **Density**: High data density is encouraged. Elements should be packed tightly to simulate a professional monitoring tool. 
- **Borders as Spacers**: Use 1px or 2px solid borders (White or Dark Crimson) instead of whitespace to separate logical sections.

## Elevation & Depth
Depth is created through **Structural Outlines** rather than shadows or light. 

- **No Shadows**: Atmospheric shadows are prohibited. The interface is strictly 2D.
- **Tiering**: Elevation is communicated by adding 1px solid borders. A "raised" element is simply a black box with a White or Dark Crimson border. 
- **Active State**: Use solid Dark Crimson (#8B0000) fills to indicate "active" or "selected" depth levels.
- **Negative Space**: Use the pitch-black background as the ultimate "lowest" layer. Any element with a border or background fill is considered "elevated."

## Shapes
The shape language is defined by **Absolute Angularity**. 

- **Zero Radius**: All corners (buttons, cards, inputs, containers) must have a 0px border radius. 
- **Hard Edges**: Use 1px or 2px strokes for all containers. 
- **Clipped Corners**: For specific callouts or primary action buttons, a 45-degree "clipped corner" (chamfer) may be used to reinforce the industrial, tactical aesthetic, but the base geometry remains rectangular.

## Components
- **Buttons**: Rectangular, 0px radius. Primary buttons are solid #8B0000 with White text. Secondary buttons are black with a 1px White border. All text is Uppercase.
- **Inputs**: 1px White border bottom only, or a full 1px border. Background is #000000. Caret is #8B0000 and should ideally blink to simulate a terminal.
- **Cards/Modules**: 1px solid White border. Headers of cards should have a solid #8B0000 background with White text to act as a "title bar."
- **Lists**: Separated by 1px White lines. Hover states should fill the entire row with #8B0000.
- **Status Indicators**: Use square icons or simple "LED" dots. No soft glows.
- **Data Tables**: Use strict vertical and horizontal 1px lines (Grid style). No zebra striping; use hover highlights instead.
- **Scrollbars**: Minimalist 4px wide bars in #8B0000 with no track background.