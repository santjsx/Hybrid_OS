# Hybrid OS UI System

![Version](https://img.shields.io/badge/version-1.0_Public_Beta-blue?style=flat-square)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)
![Dependencies](https://img.shields.io/badge/dependencies-none-lightgrey?style=flat-square)

**A design system that bridges the gap between Ubuntu's warmth, iOS's fluidity, and Material Design's adaptability.**

Hybrid OS is a practical, lightweight design framework built to deliver bold visuals, responsive behavior, and consistent UI patterns across every screen. It requires **no build steps, no frameworks, and no dependencies**.

## Technologies

![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=flat-square&logo=javascript&logoColor=%23F7DF1E)

## Philosophy

Hybrid OS was born from a simple question: *"What if we took the best parts of the world's most popular operating systems and combined them into a lightweight, dependency-free web framework?"*

The result is a system that feels **familiar yet distinct**.

*   **Ubuntu's Warmth:** Rich, human-centric colors like Aubergine & Orange.
*   **iOS's Fluidity:** Smooth transitions, glassmorphism, and rounded aesthetics.
*   **Material's Adaptability:** Responsive grid, depth effects, and tactile interactions.

## Key Features

| Feature | Description |
| :--- | :--- |
| **Zero Dependencies** | No React, Vue, or Webpack. Just pure HTML, CSS, and JS. |
| **Native Dark Mode** | Built-in theming engine that respects user preference automatically. |
| **Interactive Playground** | Live customization tools for buttons and typography directly in the UI. |
| **Mobile-First** | Fully responsive layout that scales from phones to desktops. |
| **Built-in Documentation** | Integrated docs viewer for instant reference. |

## Screenshots

<div align="center">
  <img src="images/Screenshot1.png" alt="Home Screen" width="800" style="border-radius: 10px; margin-bottom: 20px;">
</div>

<div align="center" style="display: flex; gap: 10px; justify-content: center;">
  <img src="images/Screenshot2.png" alt="Components" width="45%">
  <img src="images/Screenshot3.png" alt="Documentation" width="45%">
</div>
<div align="center" style="margin-top: 10px;">
  <img src="images/Screenshot4.png" alt="Mobile View" width="400" style="border-radius: 10px;">
</div>

## Quick Start

Getting started is as simple as downloading a file.

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/santjsx/Hybrid_OS.git
    ```
2.  **Open `index.html`** in your browser.
3.  **Start designing!**

### Usage

Include the core files in your project:

```html
<link rel="stylesheet" href="style.css" />
<script src="script.js" defer></script>
```

## Project Structure

| File | Purpose |
| :--- | :--- |
| `style.css` | The core styling engine and CSS variables. |
| `script.js` | Handles interactivity, theme toggling, and the documentation viewer. |
| `index.html` | The main entry point and component showcase. |

## Customization

Hybrid OS uses **CSS Custom Properties (Variables)** for a centralized theming engine. You can easily customize the look and feel by overriding these variables in your CSS.

### Colors
```css
:root {
  --brand-orange: #E95420;    /* Primary Action */
  --brand-aubergine: #2C001E; /* Deep Background */
  --success: #34C759;         /* Success State */
}
```

### Spacing & Radius
```css
:root {
  --space-md: 16px;           /* Standard Padding */
  --radius-lg: 24px;          /* Card Corners */
  --radius-pill: 999px;       /* Buttons & Badges */
}
```

## Components

The system includes a growing library of components:

| Category | Variants |
| :--- | :--- |
| **Buttons** | Primary, Secondary, Outline, Ghost |
| **Typography** | Gradient Text (Webkit-masked) |
| **Cards** | Glass Panels, Notepads, Skeleton Loaders |
| **Forms** | Inputs, Sliders, Color Pickers |
| **Loaders** | Liquid Gooey Loader (SVG Filter) |
| **Widgets** | Premium Media Player (Glassmorphism) |

## Credits

Crafted with **♥** by **Santhosh Reddy**.

---
&copy; 2025 Hybrid OS Design System. All rights reserved.
