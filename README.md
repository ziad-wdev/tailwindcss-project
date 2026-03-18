# DigitalPro — Marketing Agency Landing Page

A modern, fully responsive marketing agency landing page built with **React 19**, **Tailwind CSS v4**, and **Vite**. DigitalPro showcases services, team members, key statistics, and a contact form — all within a clean single-page layout with smooth scroll navigation and subtle hover animations.

---

## ✨ Features

- **Responsive design** — mobile-first layout that adapts across all screen sizes
- **Sticky navigation** — fixed header with smooth-scroll links to each section
- **Hero section** — full-viewport introduction with a gradient visual and call-to-action buttons
- **Services section** — dynamically colored service cards (SEO, Social Media Marketing, Web Design & Development)
- **Stats banner** — gradient highlight strip with key agency metrics
- **Team section** — animated member cards with on-hover social media links
- **Contact form** — name, email, and message fields with focus ring feedback
- **Font Awesome icons** — throughout for visual consistency
- **GitHub Pages ready** — pre-configured `base` path for deployment

---

## 🛠️ Tech Stack

| Tool                                                     | Version                 |
| -------------------------------------------------------- | ----------------------- |
| [React](https://react.dev/)                              | ^19.2                   |
| [Tailwind CSS](https://tailwindcss.com/)                 | ^4.2                    |
| [Vite](https://vite.dev/)                                | ^7.3                    |
| [React Compiler](https://react.dev/learn/react-compiler) | ^1.0 (via Babel plugin) |
| [ESLint](https://eslint.org/)                            | ^9.39                   |
| [gh-pages](https://github.com/tschaub/gh-pages)          | ^6.3                    |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** v18 or later
- **npm** v9 or later

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/tailwindcss-project.git
cd tailwindcss-project

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser. The page hot-reloads on every file save.

---

## 📜 Available Scripts

| Command           | Description                                      |
| ----------------- | ------------------------------------------------ |
| `npm run dev`     | Start the local development server               |
| `npm run build`   | Build the optimised production bundle to `dist/` |
| `npm run preview` | Preview the production build locally             |
| `npm run lint`    | Run ESLint across the codebase                   |

---

## 📁 Project Structure

```
src/
├── components/
│   ├── Header.jsx          # Sticky nav with smooth-scroll
│   ├── Hero.jsx            # Full-viewport intro section
│   ├── Services.jsx        # Services grid
│   ├── ServiceCard.jsx     # Reusable, dynamically colored card
│   ├── Stats.jsx           # Gradient metrics banner
│   ├── Team.jsx            # Team grid
│   ├── TeamMemberCard.jsx  # Animated member card with social links
│   ├── Contact.jsx         # Contact form + info panel
│   └── Footer.jsx          # Footer with social icons
├── App.jsx                 # Root component — composes all sections
├── App.css                 # Global app styles
├── all.css                 # Additional global styles
└── main.jsx                # React entry point
```

---

## 🌐 Deployment to GitHub Pages

The project is pre-configured with `base: '/tailwindcss-project/'` in `vite.config.js`.

```bash
# Build the project
npm run build

# Deploy to GitHub Pages (requires gh-pages package, already installed)
npx gh-pages -d dist
```

To point to a different repository path, update the `base` option in `vite.config.js`:

```js
// vite.config.js
export default defineConfig({
  base: '/your-repo-name/'
  // ...
});
```

---

## 🤝 Contributing

Contributions are welcome! To get started:

1. Fork the repository
2. Create a feature branch: `git checkout -b feat/your-feature`
3. Commit your changes: `git commit -m "feat: add your feature"`
4. Push to your branch: `git push origin feat/your-feature`
5. Open a Pull Request

Please run `npm run lint` before submitting and keep pull requests focused on a single concern.

---

## 📄 License

This project is open-source. See the [LICENSE](LICENSE) file for details.
