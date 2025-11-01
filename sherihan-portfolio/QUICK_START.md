# 🚀 Quick Start Guide - Sherihan Portfolio

## ⚡ Get Started in 3 Steps

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Start Development Server
```bash
npm run dev
```
Visit `http://localhost:5173` to see your portfolio!

### Step 3: Deploy to GitHub Pages

1. **Update your GitHub username** in `package.json`:
```json
"homepage": "https://YOUR-USERNAME.github.io/sherihan-portfolio"
```

2. **Create GitHub repository and push code**:
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/YOUR-USERNAME/sherihan-portfolio.git
git branch -M main
git push -u origin main
```

3. **Deploy**:
```bash
npm run deploy
```

4. **Enable GitHub Pages**:
   - Go to your repository on GitHub
   - Settings → Pages
   - Select `gh-pages` branch
   - Click Save

Your site will be live at: `https://YOUR-USERNAME.github.io/sherihan-portfolio`

---

## 📦 What's Included

✅ Modern React 19 + Vite setup
✅ Tailwind CSS for styling
✅ Framer Motion animations
✅ Fully responsive design
✅ 5 portfolio projects with modal details
✅ Video hero section with autoplay
✅ Smooth scroll navigation
✅ Contact section with email & LinkedIn
✅ Optimized images via ImageKit CDN
✅ SEO-friendly with meta tags
✅ Ready for GitHub Pages deployment

---

## 🎨 Customization

### Update Personal Information

**Contact Details** - `src/components/Contact.jsx`:
- Email address
- LinkedIn profile
- Phone number
- Location

**Footer** - `src/components/Footer.jsx`:
- Social media links
- Copyright year

### Add/Edit Portfolio Projects

Edit `src/data/portfolioData.js`:
```javascript
{
  id: 6,
  title: "Your Project",
  role: "Your Role",
  category: "Category",
  thumbnail: "thumbnail-url",
  images: ["img1", "img2", "img3"],
  concept: "Project description",
  execution: "How it was made",
  mood: "Project mood",
  aesthetic: "Visual style",
  productFocus: "Products featured"
}
```

### Change Colors

Edit `tailwind.config.js`:
```javascript
colors: {
  accent: '#FF6B35', // Your brand color
}
```

---

## 📁 Project Structure

```
sherihan-portfolio/
├── src/
│   ├── components/         # All React components
│   │   ├── Header.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero section
│   │   ├── VideoHero.jsx   # Video section
│   │   ├── CreativeVision.jsx  # About section
│   │   ├── Portfolio.jsx   # Portfolio grid
│   │   ├── ProjectModal.jsx    # Project details
│   │   ├── Contact.jsx     # Contact section
│   │   └── Footer.jsx      # Footer
│   ├── data/
│   │   └── portfolioData.js    # Portfolio projects
│   ├── App.jsx             # Main component
│   └── index.css           # Global styles
├── package.json
├── vite.config.js
└── tailwind.config.js
```

---

## 🛠 Available Commands

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run deploy   # Deploy to GitHub Pages
```

---

## 💡 Pro Tips

1. **Test locally before deploying**: Always run `npm run build` and `npm run preview` to test production build
2. **Update images**: Replace ImageKit URLs with your own optimized images
3. **Mobile first**: Test on mobile devices - site is fully responsive
4. **Performance**: All images use lazy loading for faster page loads
5. **Accessibility**: Site includes proper ARIA labels and semantic HTML

---

## 🐛 Common Issues

**Problem**: CSS not loading after deployment
**Solution**: Check that `base` in `vite.config.js` matches your repository name

**Problem**: Video not autoplaying
**Solution**: Video must be muted for autoplay to work (already configured)

**Problem**: GitHub Pages shows 404
**Solution**: Wait 2-5 minutes after deployment and hard refresh browser

---

## 📞 Need Help?

1. Check [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment guide
2. Check [README.md](./README.md) for complete documentation
3. Review browser console for error messages

---

**You're ready to launch! 🎉**

Remember to replace placeholder URLs and personal information before deploying!
