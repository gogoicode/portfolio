# Aayan Krishna Gogoi - Personal Portfolio - https://gogoicode.github.io/portfolio/

A sleek, responsive, and modern personal portfolio website built with **React** and **Vite**, powered by a single source-of-truth data structure (`src/data/profile.js`).

---

## 📌 Features

- **⚡ Fast & Lightweight**: Powered by **Vite** and modern React 18.
- **🎯 Single Source of Truth**: All profile data (education, experience, projects, skills, certifications, contact info) is defined in [`src/data/profile.js`](file:///c:/Users/aayan/OneDrive/Desktop/Git%20repo%20imprve/src/data/profile.js). Updating this file updates the whole application and navbar automatically.
- **📱 Fully Responsive**: Custom CSS modules & design tokens supporting mobile, tablet, and desktop views.
- **🎨 Modular Architecture**: Clean component separation for sections (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Certifications`, `Contact`, `Navbar`).
- **🚀 One-command GitHub Pages Deployment**: Pre-configured with `gh-pages`.

---

## 🛠️ Tech Stack

- **Frontend**: React 18, HTML5, CSS3 (Design Tokens & CSS Modules)
- **Build Tool**: Vite 5
- **Deployment**: GitHub Pages (`gh-pages`)

---

## 📂 Project Structure

```
├── public/               # Static assets
├── src/
│   ├── components/       # UI components & section styles
│   │   ├── About.jsx & About.css
│   │   ├── Certifications.jsx & Certifications.css
│   │   ├── Contact.jsx & Contact.css
│   │   ├── EntryCard.jsx & EntryCard.css
│   │   ├── Experience.jsx
│   │   ├── Hero.jsx & Hero.css
│   │   ├── ListSection.css
│   │   ├── Navbar.jsx & Navbar.css
│   │   ├── Projects.jsx
│   │   ├── Skills.jsx & Skills.css
│   │   └── Tag.jsx & Tag.css
│   ├── data/
│   │   └── profile.js   # Single source of truth for portfolio content
│   ├── styles/
│   │   ├── global.css   # Global styles & resets
│   │   └── tokens.css   # CSS Variables / Design Tokens
│   ├── App.jsx          # Root application composition
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
└── package.json         # Project dependencies & scripts
```

---

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed (v18 or higher recommended).

### 1. Clone the Repository

```bash
git clone https://github.com/gogoicode/portfolio.git
cd portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Run Development Server

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

---

## ⚙️ Building & Deployment

### Build for Production

```bash
npm run build
```

The output build files will be located in the `dist` folder.

### Deploy to GitHub Pages

1. Update the `homepage` field in [`package.json`](file:///c:/Users/aayan/OneDrive/Desktop/Git%20repo%20imprve/package.json) with your GitHub URL:
   ```json
   "homepage": "https://gogoicode.github.io/portfolio"
   ```
2. Run the deploy script:
   ```bash
   npm run deploy
   ```
