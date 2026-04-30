# BrewNoire — Premium Cafe Website

A modern, premium business website for a local artisan cafe built with React (Vite) + Tailwind CSS + Framer Motion.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- npm or yarn

### Installation & Running

```bash
# 1. Navigate to project folder
cd cafe-website

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev

# 4. Open in browser
# http://localhost:5173
```

### Build for Production

```bash
npm run build
npm run preview
```

## 📁 Folder Structure

```
cafe-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Sticky navbar with mobile menu
│   │   ├── Hero.jsx            # Full-screen hero with parallax bg
│   │   ├── About.jsx           # About section with image collage
│   │   ├── Menu.jsx            # Filterable menu cards
│   │   ├── Gallery.jsx         # Masonry-style photo gallery
│   │   ├── Testimonials.jsx    # Customer reviews grid
│   │   ├── Contact.jsx         # Contact form + Google Maps
│   │   ├── Footer.jsx          # Footer with social links
│   │   └── WhatsAppButton.jsx  # Floating WhatsApp CTA
│   ├── data/
│   │   └── content.js          # All dummy data (menu, reviews, etc.)
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css               # Tailwind + custom CSS
├── index.html
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── package.json
```

## ✨ Features

- **Sticky Navbar** — Transparent to blurred dark on scroll
- **Mobile Responsive** — Full hamburger menu with overlay
- **Smooth Animations** — Framer Motion scroll-triggered reveals
- **Menu Filtering** — Filter by coffee category
- **Gallery Grid** — Masonry-style with hover overlays
- **Contact Form** — With success state animation
- **Google Maps** — Dark-themed embed
- **WhatsApp Float** — With pulsing animation + tooltip
- **Custom Typography** — Cormorant Garamond + DM Sans pairing
- **Premium Color System** — Espresso/obsidian/cream theme

## 🎨 Design System

**Colors:**
- `espresso` — Warm amber-brown palette (primary)
- `obsidian` — Deep dark browns (backgrounds)
- `cream` — Light warm tones (text)

**Fonts:**
- Display: Cormorant Garamond (headlines)
- Body: DM Sans (UI text)
- Accent: Playfair Display (card names)

## 🔧 Customization

1. **Content** — Edit `src/data/content.js` to change menu items, testimonials, gallery
2. **Colors** — Edit `tailwind.config.js` to adjust the color palette
3. **Logo** — Update the brand name in `Navbar.jsx` and `Footer.jsx`
4. **Map** — Replace the iframe src in `Contact.jsx` with your Google Maps embed URL
5. **WhatsApp** — Update the phone number in `WhatsAppButton.jsx`

## 📦 Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| React | 18 | UI Framework |
| Vite | 5 | Build tool |
| Tailwind CSS | 3 | Styling |
| Framer Motion | 11 | Animations |
| Lucide React | latest | Icons |
