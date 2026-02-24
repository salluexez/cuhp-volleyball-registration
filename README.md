<div align="center">

# 🏐 CUHP Volleyball Registration
### National Science Day 2026 — Sports Event Landing Page

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.4.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)

> Official landing page for the **Inter-Departmental Volleyball Tournament** organized by the Office of the Sports Coordinator, Central University of Himachal Pradesh (CUHP), Shahpur Campus — held on the occasion of **National Science Day 2026**.

</div>

---

## 📋 Table of Contents

- [About the Event](#-about-the-event)
- [Features](#-features)
- [Tech Stack](#-tech-stack)
- [Project Structure](#-project-structure)
- [Getting Started](#-getting-started)
- [Deployment](#-deployment)
- [Event Coordinators](#-event-coordinators)

---

## 🎓 About the Event

| Detail | Info |
|---|---|
| 🏛️ **University** | Central University of Himachal Pradesh |
| 📍 **Venue** | Main Playground, Shahpur Campus, Kangra, HP |
| 🏐 **Tournament Date** | **26 February 2026** |
| 🔬 **National Science Day** | **28 February 2026** |
| 📝 **Registration Deadline** | 26 February 2026 |
| 👥 **Team Size** | 6 Main Players + 2 Substitutes |
| 🏆 **Format** | Knockout Rounds |

### Eligibility
- Undergraduate Students (UG)
- Postgraduate Students (PG)
- PhD Research Scholars

> ⚠️ University email verification required for registration.

---

## ✨ Features

- 🌑 **Dark, premium hero** with animated gradient background, floating particles, and glowing orbs
- 🧭 **Sticky Navbar** with glass-morphism effect — dark on hero, solid white on scroll
- 📱 **Fully responsive** — mobile menu with hamburger toggle
- 🏐 **Sports section** with Volleyball stats grid and registration CTA
- 📋 **Eligibility section** with UG / PG / PhD category cards
- 📍 **Venue section** with details and link to CUHP Academic Calendar
- 📝 **Registration section** with 4-step process guide
- 👨‍💼 **Coordinators section** with live `mailto:` links
- 🦶 **Footer** with quick links to CUHP website and academic calendar
- ⚡ **Smooth animations** — fade-in, slide-up, float, pulse

---

## 🛠 Tech Stack

| Technology | Purpose |
|---|---|
| [React 18](https://react.dev/) | UI Framework |
| [Vite](https://vitejs.dev/) | Build Tool & Dev Server |
| [Tailwind CSS 3](https://tailwindcss.com/) | Utility-first Styling |
| [Lexend](https://fonts.google.com/specimen/Lexend) | Primary Font (Google Fonts) |
| [Google Material Icons](https://fonts.google.com/icons) | Icon Set |

---

## 📁 Project Structure

```
college-event/
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── src/
    ├── main.jsx
    ├── index.css
    ├── App.jsx
    └── components/
        ├── Navbar.jsx        # Sticky navbar with scroll effect
        ├── Hero.jsx          # Full-screen animated hero section
        ├── About.jsx         # Event philosophy & feature cards
        ├── Sports.jsx        # Volleyball tournament details
        ├── Eligibility.jsx   # Participant categories
        ├── Venue.jsx         # Location and calendar link
        ├── Register.jsx      # 4-step registration guide + CTA
        ├── Coordinators.jsx  # Contact cards with mailto links
        └── Footer.jsx        # Quick links and navigation
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js `v18+`
- npm `v9+`

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/salluexez/cuhp-volleyball-registration.git
cd cuhp-volleyball-registration

# 2. Install dependencies
npm install

# 3. Start the development server
npm run dev
```

The app will be running at **http://localhost:5173**

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

---

## ☁️ Deployment

This project is deployed on **Vercel**. To deploy your own copy:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or import directly from GitHub at **[vercel.com](https://vercel.com)**.

> Vercel auto-detects Vite. No extra configuration needed.

---

## 📞 Event Coordinators

| Name | Role | Email |
|---|---|---|
| **Dr. Pankaj Kumar** | Event Coordinator, Dept. of Mathematics | [pkumar240183@gmail.com](mailto:pkumar240183@gmail.com) |
| **Mr. Manoj Dhiman** | Event Coordinator, Dept. of CS & Informatics | [manojdhiman.it@gmail.com](mailto:manojdhiman.it@gmail.com) |

---

## 🔗 Useful Links

- 🌐 [University Website](https://www.cuhimachal.ac.in/)
- 📅 [Academic Calendar](https://www.cuhimachal.ac.in/index.php/Academics/academic_calender)
- 📝 [Registration Form](https://docs.google.com/forms/d/e/1FAIpQLSdK0uuXQ2WNmIB_JD6a849obvLCsxjQC2Z_TSIm6n9EWLInkg/viewform?usp=header)

---

<div align="center">

Made with ❤️ for **National Science Day 2026**
**Central University of Himachal Pradesh, Shahpur Campus**

</div>
