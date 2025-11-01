# Sherihan Mounir - Fashion Stylist Portfolio

A modern, dynamic, and fully responsive portfolio website for fashion stylist Sherihan Mounir, built with React, Vite, Tailwind CSS, and Framer Motion.

## 🌟 Features

- **Modern Tech Stack**: React 18+, Vite, Tailwind CSS, Framer Motion
- **Smooth Animations**: Letter-by-letter title animations, scroll-triggered effects, hover interactions
- **Responsive Design**: Mobile-first approach, optimized for all screen sizes
- **Video Integration**: Full-screen autoplay hero video section
- **Interactive Portfolio**: Modal-based project showcase with detailed information
- **Performance Optimized**: Lazy loading, optimized images via ImageKit CDN
- **Accessibility**: Proper semantic HTML, ARIA labels, keyboard navigation
- **SEO Friendly**: Meta tags, OpenGraph tags, proper heading hierarchy

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 📦 Deployment to GitHub Pages

### Step 1: Update Configuration

1. Open `package.json` and update the homepage field:
```json
"homepage": "https://YOUR-USERNAME.github.io/sherihan-portfolio"
```

2. Open `vite.config.js` and verify the base path matches your repository name:
```javascript
export default defineConfig({
  base: '/sherihan-portfolio/',
  plugins: [react()],
})
```

### Step 2: Deploy

```bash
# Build and deploy to GitHub Pages
npm run deploy
```

### Step 3: Enable GitHub Pages

1. Go to your GitHub repository
2. Navigate to **Settings** → **Pages**
3. Under "Source", select the `gh-pages` branch
4. Click **Save**
5. Your site will be live at `https://YOUR-USERNAME.github.io/sherihan-portfolio`

## 📁 Project Structure

```
sherihan-portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Header.jsx          # Fixed navigation with scroll effects
│   │   ├── Hero.jsx             # Main hero section with CTAs
│   │   ├── VideoHero.jsx        # Full-screen video section
│   │   ├── CreativeVision.jsx   # About section with animations
│   │   ├── Portfolio.jsx        # Project grid
│   │   ├── ProjectModal.jsx     # Project detail modal
│   │   ├── Contact.jsx          # Contact section
│   │   └── Footer.jsx           # Footer with social links
│   ├── data/
│   │   └── portfolioData.js     # Portfolio project data
│   ├── App.jsx                  # Main app component
│   ├── main.jsx                 # App entry point
│   └── index.css                # Global styles and Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🎨 Design System

### Colors
- **Background**: Pure black (#000000)
- **Primary Text**: White (#FFFFFF)
- **Secondary Text**: Light gray (#D1D5DB, #9CA3AF)
- **Accent**: Orange-red (#FF6B35)
- **Cards**: Dark zinc (#18181B, #27272A)

### Typography
- **Headings**: "Playfair Display" (serif) - 700, 800 weights
- **Body**: "Inter" (sans-serif) - 400, 500, 600 weights

### Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔧 Technologies Used

- **React 19.1.1** - UI library
- **Vite 7.1.7** - Build tool
- **Tailwind CSS 4.1.16** - Utility-first CSS
- **Framer Motion 12.23.24** - Animation library
- **gh-pages 6.3.0** - GitHub Pages deployment

## 📸 Image Optimization

All images are served through ImageKit CDN with the following optimizations:
- Responsive image transformations
- Quality optimization (75 for thumbnails, 85 for modal)
- Automatic format selection
- Lazy loading

## 🎭 Animation Features

- Letter-by-letter title animation
- Scroll-triggered section reveals
- Staggered skill card animations
- Smooth hover effects on portfolio cards
- Modal fade and scale animations
- Responsive to `prefers-reduced-motion` setting

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📱 Contact Information

- **Email**: sherihanmounir26@gmail.com
- **LinkedIn**: [Sherihan Mounir](https://www.linkedin.com/in/sherihan-mounir-5b9ab3154)
- **Location**: Cairo, Egypt
- **Phone**: +20 109 903 3069

## 📄 License

© 2024 Sherihan Mounir. All rights reserved.

## 🛠 Development Tips

### Adding New Projects

Edit `src/data/portfolioData.js` to add new portfolio projects:

```javascript
{
  id: 6,
  title: "Project Name",
  role: "Your Role",
  category: "Category",
  thumbnail: "thumbnail-url",
  images: ["image1-url", "image2-url", "image3-url"],
  concept: "Project concept description",
  execution: "Project execution description",
  mood: "Mood description",
  aesthetic: "Aesthetic description",
  productFocus: "Product focus description"
}
```

### Customizing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      accent: '#FF6B35', // Change this to your preferred accent color
    },
  },
}
```

### Performance Optimization

- All images use lazy loading
- Video is optimized for autoplay
- Smooth scroll behavior is implemented
- Animations respect user motion preferences

## 🐛 Troubleshooting

### Video Not Autoplaying
- Ensure video is muted (required for autoplay)
- Check that `playsInline` attribute is present (for iOS)
- Verify video URL is accessible

### GitHub Pages 404 Error
- Verify `base` path in `vite.config.js` matches repository name
- Ensure `gh-pages` branch is selected in repository settings
- Wait a few minutes for GitHub Pages to build

### Animations Not Working
- Check browser console for errors
- Verify Framer Motion is properly installed
- Test with `prefers-reduced-motion` disabled

---

Built with ❤️ for Sherihan Mounir
