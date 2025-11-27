function showDocs() {
  document.getElementById("view-home").classList.add("fade-out");
  setTimeout(() => {
    document.getElementById("view-home").classList.add("hidden");
    document.getElementById("view-docs").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("view-docs").classList.add("active");
    }, 50);
  }, 300);
  loadDoc(0);
}

function showHome() {
  document.getElementById("view-docs").classList.remove("active");
  setTimeout(() => {
    document.getElementById("view-docs").classList.add("hidden");
    document.getElementById("view-home").classList.remove("hidden");
    setTimeout(() => {
      document.getElementById("view-home").classList.remove("fade-out");
    }, 50);
  }, 300);
}

function closeDocMobile() {
  document.getElementById("view-docs").classList.remove("reading-mode");
}

const docsData = [
  {
    title: "Welcome to Hybrid OS",
    body: `
      <h1>Welcome to Hybrid OS</h1>
      <p class="lead">A design system that bridges the gap between Ubuntu's warmth, iOS's fluidity, and Material Design's adaptability.</p>
      
      <h2>Philosophy</h2>
      <p>Hybrid OS was born from a simple question: <em>"What if we took the best parts of the world's most popular operating systems and combined them into a lightweight, dependency-free web framework?"</em></p>
      <p>The result is a system that feels <strong>familiar yet distinct</strong>.</p>

      <h3>Core Principles</h3>
      <ul>
        <li><strong>Zero Dependencies:</strong> No React, No Vue, No Build Steps. Just pure HTML, CSS, and JS.</li>
        <li><strong>Native Feel:</strong> Uses system fonts and hardware-accelerated animations for 60fps performance.</li>
        <li><strong>Adaptive:</strong> Built-in dark mode engine that respects user preference automatically.</li>
      </ul>
    `,
  },
  {
    title: "Installation",
    body: `
      <h1>Installation</h1>
      <p>Getting started with Hybrid OS is as simple as downloading a file. There are no npm packages to install, no webpack configs to wrestle with.</p>

      <h2>Quick Start</h2>
      <p>1. Download the latest release.</p>
      <p>2. Include the CSS and JS files in your HTML:</p>
      
      <div class="terminal-window">
        <div class="terminal-header">
          <div class="terminal-controls">
            <div class="control-dot dot-close"></div>
            <div class="control-dot dot-min"></div>
            <div class="control-dot dot-max"></div>
          </div>
          <div class="terminal-title">index.html</div>
        </div>
        <div class="terminal-body">&lt;link rel="stylesheet" href="style.css"&gt;
&lt;script src="script.js" defer&gt;&lt;/script&gt;</div>
      </div>

      <h2>File Structure</h2>
      <p>Keep your project organized:</p>
      <div class="notepad-note">
        <div class="notepad-body">
          <ul>
            <li><strong>/css/style.css</strong> - The core engine</li>
            <li><strong>/js/script.js</strong> - Interactivity & Logic</li>
            <li><strong>index.html</strong> - Your markup</li>
          </ul>
        </div>
      </div>
    `,
  },
  {
    title: "Design Tokens",
    body: `
      <h1>Design Tokens</h1>
      <p>Hybrid OS uses CSS Custom Properties (Variables) for a centralized, dynamic theming engine.</p>

      <h2>Colors</h2>
      <p>Our palette is a fusion of Ubuntu's "Aubergine & Orange" and Apple's neutral greys.</p>
      <ul>
        <li><span style="color: #E95420; font-weight: bold;">--brand-orange (#E95420)</span>: Primary action color.</li>
        <li><span style="color: #2C001E; font-weight: bold;">--brand-aubergine (#2C001E)</span>: Deep background color.</li>
        <li><span style="color: #34C759; font-weight: bold;">--success (#34C759)</span>: Success states (iOS Green).</li>
      </ul>

      <h2>Typography</h2>
      <p>We use the <strong>System Font Stack</strong> for instant loading and native feel.</p>
      <div class="terminal-window">
        <div class="terminal-body">font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;</div>
      </div>

      <h2>Spacing & Radii</h2>
      <p>We follow an 8px grid system.</p>
      <ul>
        <li><strong>--space-md (16px)</strong>: Standard padding.</li>
        <li><strong>--radius-lg (24px)</strong>: Card corners.</li>
        <li><strong>--radius-pill (999px)</strong>: Buttons and badges.</li>
      </ul>
    `,
  },
  {
    title: "Components: Buttons",
    body: `
      <h1>Buttons</h1>
      <p>Buttons are the primary interactive elements. They come in several variants to communicate hierarchy.</p>

      <h2>Primary Button</h2>
      <p>Used for the main call-to-action on a page.</p>
      <div class="terminal-window">
        <div class="terminal-body">&lt;button class="btn btn-primary"&gt;
  Get Started
&lt;/button&gt;</div>
      </div>

      <h2>Secondary Button</h2>
      <p>For alternative actions or neutral choices.</p>
      <div class="terminal-window">
        <div class="terminal-body">&lt;button class="btn btn-secondary"&gt;
  Cancel
&lt;/button&gt;</div>
      </div>

      <h2>Ghost Button</h2>
      <p>For low-priority actions, often used in navigation or toolbars.</p>
      <div class="terminal-window">
        <div class="terminal-body">&lt;button class="btn btn-ghost"&gt;
  Learn More
&lt;/button&gt;</div>
      </div>
    `,
  },
  {
    title: "Components: Forms",
    body: `
      <h1>Form Elements</h1>
      <p>Beautiful, accessible form controls that work across all devices.</p>

      <h2>Inputs</h2>
      <p>Standard text inputs with focus states.</p>
      <div class="terminal-window">
        <div class="terminal-body">&lt;input type="text" class="input-field" placeholder="Enter text..." /&gt;</div>
      </div>

      <h2>Sliders (Range)</h2>
      <p>Custom styled range inputs for selecting values.</p>
      <div class="terminal-window">
        <div class="terminal-body">&lt;input type="range" min="0" max="100" /&gt;</div>
      </div>

      <h2>Color Pickers</h2>
      <p>Circular color swatches for intuitive color selection.</p>
      <div class="terminal-window">
        <div class="terminal-body">&lt;input type="color" value="#E95420" /&gt;</div>
      </div>
    `,
  },
  {
    title: "Components: Cards",
    body: `
      <h1>Cards & Containers</h1>
      <p>The building blocks of your layout.</p>

      <h2>Glass Panel</h2>
      <p>A card with a subtle glassmorphism effect, perfect for floating content.</p>
      <div class="terminal-window">
        <div class="terminal-body">&lt;div class="component-section"&gt;
  &lt;div class="section-header"&gt;
    &lt;h2&gt;Card Title&lt;/h2&gt;
  &lt;/div&gt;
  &lt;div class="preview-area"&gt;
    Content goes here...
  &lt;/div&gt;
&lt;/div&gt;</div>
      </div>

      <h2>Notepad</h2>
      <p>A yellow, paper-like container for notes, warnings, or tips.</p>
      <div class="terminal-window">
        <div class="terminal-body">&lt;div class="notepad-note"&gt;
  &lt;div class="notepad-header"&gt;Note&lt;/div&gt;
  &lt;div class="notepad-body"&gt;
    &lt;p&gt;Don't forget to save!&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</div>
      </div>
    `,
  },
  {
    title: "Utilities",
    body: `
      <h1>Utilities</h1>
      <p>Helper classes to speed up development.</p>

      <h2>Gradient Text</h2>
      <p>Apply a beautiful gradient to any text element.</p>
      <div class="terminal-window">
        <div class="terminal-body">&lt;h1 class="gradient-text"&gt;Hybrid OS&lt;/h1&gt;</div>
      </div>

      <h2>Visibility</h2>
      <ul>
        <li><strong>.hidden</strong>: Force hides an element (display: none).</li>
        <li><strong>.fade-out</strong>: Adds opacity transition for removal.</li>
      </ul>
    `,
  },
];

function loadDoc(index) {
  const items = document.querySelectorAll(".doc-item");
  items.forEach((i) => i.classList.remove("active"));
  items[index].classList.add("active");

  const contentArea = document.getElementById("docContent");
  contentArea.style.opacity = 0;

  setTimeout(() => {
    contentArea.innerHTML = docsData[index].body;
    contentArea.style.opacity = 1;
    document.getElementById("docTimestamp").innerText =
      "Edited " +
      new Date().toLocaleDateString() +
      " at " +
      new Date().toLocaleTimeString();
  }, 200);

  if (window.innerWidth <= 850) {
    document.getElementById("view-docs").classList.add("reading-mode");
  }
}

const themeBtn = document.getElementById("themeToggle");
const html = document.documentElement;

themeBtn.addEventListener("click", () => {
  const current = html.getAttribute("data-theme");
  const newTheme = current === "light" ? "dark" : "light";
  html.setAttribute("data-theme", newTheme);
});

window.switchTab = function (event, tabId) {
  const btn = event.currentTarget;
  const parent = btn.parentElement;
  const section = parent.parentElement;
  parent
    .querySelectorAll(".doc-tab")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  section
    .querySelectorAll(".doc-content")
    .forEach((c) => c.classList.remove("active"));
  section.querySelector("#" + tabId).classList.add("active");
};

window.toggleModal = function (isOpen) {
  const modal = document.getElementById("demoModal");
  if (isOpen) {
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
  } else {
    modal.classList.remove("open");
    document.body.style.overflow = "";
  }
};

const btnColorInput = document.getElementById("btnColorInput");
const btnRadiusInput = document.getElementById("btnRadiusInput");

if (btnColorInput) {
  btnColorInput.addEventListener("input", (e) => {
    document.documentElement.style.setProperty(
      "--brand-orange",
      e.target.value
    );
  });
}

if (btnRadiusInput) {
  btnRadiusInput.addEventListener("input", (e) => {
    const val = e.target.value;
    // 50 is max on range, 50px is round enough.
    // If max (50), we set to 999px for true pill
    if (val >= 50) {
      document.documentElement.style.setProperty(
        "--radius-pill",
        "999px"
      );
    } else {
      document.documentElement.style.setProperty(
        "--radius-pill",
        val + "px"
      );
    }
  });
}

const gradTextInput = document.getElementById("gradTextInput");
const gradColor1 = document.getElementById("gradColor1");
const gradColor2 = document.getElementById("gradColor2");
const gradAngle = document.getElementById("gradAngle");
const gradResult = document.getElementById("gradResult");
const gradCodeOutput = document.getElementById("gradCodeOutput");

function updateGradient() {
  const text = gradTextInput.value || "Gradient Text";
  const c1 = gradColor1.value;
  const c2 = gradColor2.value;
  const angle = gradAngle.value;

  gradResult.innerText = text;
  gradResult.style.backgroundImage = `linear-gradient(${angle}deg, ${c1}, ${c2})`;

  gradCodeOutput.innerText = `.gradient-text {
font-weight: 800;
background: linear-gradient(${angle}deg, ${c1}, ${c2});
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
}`;
}

if (gradTextInput) {
  [gradTextInput, gradColor1, gradColor2, gradAngle].forEach((el) => {
    el.addEventListener("input", updateGradient);
  });
}
