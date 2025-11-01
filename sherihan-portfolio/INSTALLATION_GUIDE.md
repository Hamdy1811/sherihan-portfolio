# 📥 Installation & Deployment Guide
## Sherihan Mounir Fashion Stylist Portfolio

---

## 🎉 Welcome!

You've received a complete, production-ready fashion portfolio website built with React, Vite, Tailwind CSS, and Framer Motion. This guide will walk you through everything from installation to deployment.

---

## 📦 Package Contents

Your download includes:

```
sherihan-portfolio/
├── 📁 src/                    # Source code
│   ├── components/            # React components (8 files)
│   ├── data/                  # Portfolio data
│   ├── App.jsx               # Main app
│   ├── index.css             # Global styles
│   └── main.jsx              # Entry point
│
├── 📁 public/                 # Static assets
├── 📄 package.json            # Dependencies
├── 📄 vite.config.js          # Vite configuration
├── 📄 tailwind.config.js      # Tailwind configuration
├── 📄 postcss.config.js       # PostCSS configuration
│
├── 📖 README.md               # Complete documentation
├── 🚀 QUICK_START.md          # Quick start (3 steps)
├── 🚢 DEPLOYMENT.md           # Deployment guide
├── ✅ SETUP_CHECKLIST.md      # Pre-deployment checklist
├── 📊 PROJECT_SUMMARY.md      # Project overview
└── 🌳 COMPONENT_TREE.txt      # Component hierarchy
```

---

## ⚡ Quick Start (3 Steps)

### Step 1: Extract & Install

```bash
# Extract the ZIP file
unzip sherihan-portfolio-final.zip

# Navigate to the project
cd sherihan-portfolio

# Install dependencies
npm install
```

**Installation time**: ~30 seconds

### Step 2: Start Development Server

```bash
npm run dev
```

Visit **http://localhost:5173** in your browser.

**You should see**:
- Fixed navigation with profile image
- Hero section with "FASHION STYLIST" title
- Full-screen autoplay video
- About section with animations
- 5 portfolio projects
- Contact section
- Footer

### Step 3: Deploy to GitHub Pages

**Before deployment**, update your GitHub username:

1. Open `package.json`
2. Find: `"homepage": "https://YOUR-USERNAME.github.io/sherihan-portfolio"`
3. Replace `YOUR-USERNAME` with your actual GitHub username

Then deploy:

```bash
# Initialize git
git init
git add .
git commit -m "Initial commit"

# Create GitHub repository and push
git remote add origin https://github.com/YOUR-USERNAME/sherihan-portfolio.git
git branch -M main
git push -u origin main

# Deploy to GitHub Pages
npm run deploy
```

**Enable GitHub Pages**:
1. Go to repository Settings
2. Click Pages (left sidebar)
3. Select `gh-pages` branch
4. Click Save

Your site will be live at: `https://YOUR-USERNAME.github.io/sherihan-portfolio`

---

## 📋 System Requirements

### Required Software
- **Node.js**: 16.x or higher
- **npm**: 8.x or higher
- **Git**: 2.x or higher (for deployment)

### Check Your Versions
```bash
node --version    # Should be v16.0.0 or higher
npm --version     # Should be 8.0.0 or higher
git --version     # Should be 2.0.0 or higher
```

### Don't Have Node.js?
Download from: https://nodejs.org/ (LTS version recommended)

---

## 🛠 Available Commands

```bash
npm install       # Install all dependencies
npm run dev       # Start development server (http://localhost:5173)
npm run build     # Build for production (creates /dist folder)
npm run preview   # Preview production build (http://localhost:4173)
npm run deploy    # Deploy to GitHub Pages
```

---

## 🎨 Customization Quick Guide

### 1. Update Personal Information

**Contact Details** (`src/components/Contact.jsx`):
```javascript
// Line 36-38 (Email button)
href="mailto:YOUR-EMAIL@example.com"

// Line 47-49 (LinkedIn button)
href="https://www.linkedin.com/in/YOUR-PROFILE"

// Line 58-59 (Contact info)
<p>📍 Your Location</p>
<p>📱 Your Phone Number</p>
```

**Footer** (`src/components/Footer.jsx`):
- Update social links (same as above)
- Update copyright year if needed

### 2. Update Profile Image

**Header** (`src/components/Header.jsx`, line 30):
```javascript
src="YOUR-IMAGE-URL"
```

### 3. Edit Portfolio Projects

**Portfolio Data** (`src/data/portfolioData.js`):
```javascript
{
  id: 1,
  title: "Project Name",
  role: "Your Role",
  category: "Category",
  thumbnail: "thumbnail-url",
  images: ["image1", "image2", "image3"],
  concept: "Project description",
  execution: "How it was made",
  mood: "Mood",
  aesthetic: "Visual style",
  productFocus: "Products"
}
```

### 4. Change Brand Color

**Tailwind Config** (`tailwind.config.js`):
```javascript
colors: {
  accent: '#FF6B35',  // Change to your brand color
}
```

### 5. Update Content

**Hero Section** (`src/components/Hero.jsx`):
- Line 18-21: Main title
- Line 23-26: Subtitle

**About Section** (`src/components/CreativeVision.jsx`):
- Line 7: Title
- Line 8-13: Skills list
- Line 52-85: About paragraphs

---

## 🐛 Troubleshooting

### Problem: `npm install` fails
**Solution**: 
```bash
# Clear npm cache
npm cache clean --force

# Delete node_modules and package-lock.json
rm -rf node_modules package-lock.json

# Reinstall
npm install
```

### Problem: Port 5173 already in use
**Solution**: Kill the process or use a different port
```bash
# Use different port
npm run dev -- --port 3000
```

### Problem: Video not playing
**Solution**: The video must be muted for autoplay to work (already configured). If still not working, check browser console for errors.

### Problem: Animations not working
**Solution**: 
1. Check if Framer Motion is installed: `npm list framer-motion`
2. If not installed: `npm install framer-motion`
3. Clear browser cache and hard refresh (Ctrl+Shift+R)

### Problem: Deployment fails
**Solution**: 
```bash
# Clear gh-pages cache
rm -rf node_modules/.cache/gh-pages

# Try deploying again
npm run deploy
```

### Problem: GitHub Pages shows 404
**Solution**: 
1. Verify `base` in `vite.config.js` matches repository name
2. Ensure `gh-pages` branch is selected in repository settings
3. Wait 2-5 minutes and hard refresh browser

---

## 📚 Documentation Files

| File | Purpose | When to Read |
|------|---------|--------------|
| **README.md** | Complete documentation | For detailed information |
| **QUICK_START.md** | Get started fast | First time setup |
| **DEPLOYMENT.md** | Deployment instructions | Before deploying |
| **SETUP_CHECKLIST.md** | Pre-deployment tasks | Before going live |
| **PROJECT_SUMMARY.md** | Technical overview | Understanding architecture |
| **COMPONENT_TREE.txt** | Component structure | Development reference |

---

## 🎯 Next Steps

### After Installation

1. ✅ Test locally with `npm run dev`
2. ✅ Review and customize content
3. ✅ Update personal information
4. ✅ Replace portfolio images if needed
5. ✅ Test on mobile (or use dev tools)

### Before Deployment

1. ✅ Complete **SETUP_CHECKLIST.md**
2. ✅ Update GitHub username in `package.json`
3. ✅ Verify `vite.config.js` base path
4. ✅ Test production build with `npm run preview`
5. ✅ Check for console errors

### After Deployment

1. ✅ Verify site loads correctly
2. ✅ Test all navigation links
3. ✅ Check video autoplay
4. ✅ Test portfolio modals
5. ✅ Test on different browsers
6. ✅ Test on mobile devices

---

## 🔑 Key Features

✨ **Dynamic Animations**: Letter-by-letter title animations, scroll-triggered effects
📱 **Fully Responsive**: Works on all devices (mobile, tablet, desktop)
🎥 **Video Hero**: Full-screen autoplay video section
🎨 **5 Portfolio Projects**: Complete with images and detailed information
⚡ **Fast Performance**: Optimized bundle size, lazy loading
♿ **Accessible**: Semantic HTML, ARIA labels, keyboard navigation
🔍 **SEO Friendly**: Meta tags, OpenGraph support

---

## 💡 Pro Tips

1. **Always test locally** before deploying: `npm run build && npm run preview`
2. **Use version control**: Commit changes regularly
3. **Backup your data**: Keep a copy of `portfolioData.js`
4. **Optimize images**: Use ImageKit or similar CDN for better performance
5. **Monitor performance**: Use Lighthouse in Chrome DevTools
6. **Update dependencies**: Run `npm outdated` periodically

---

## 📞 Support Resources

### Documentation
- Read **README.md** for complete documentation
- Check **DEPLOYMENT.md** for deployment issues
- Review **SETUP_CHECKLIST.md** before going live

### External Resources
- [React Documentation](https://react.dev/)
- [Vite Documentation](https://vitejs.dev/)
- [Tailwind CSS Docs](https://tailwindcss.com/)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [GitHub Pages Guide](https://docs.github.com/en/pages)

### Browser Console
Press F12 in your browser to open developer tools and check for errors.

---

## 🎉 Success Checklist

Before considering your setup complete:

- [ ] Successfully ran `npm install`
- [ ] Development server starts with `npm run dev`
- [ ] Can see the portfolio at http://localhost:5173
- [ ] All sections load correctly
- [ ] Video plays automatically
- [ ] Portfolio modals open and close
- [ ] Navigation works smoothly
- [ ] Customized personal information
- [ ] Updated GitHub username in config
- [ ] Successfully deployed to GitHub Pages
- [ ] Live site is accessible and working

---

## 🚀 You're Ready!

Congratulations! Your fashion stylist portfolio is ready to launch. 

**Quick Deploy**:
```bash
npm install
npm run dev          # Test locally
npm run deploy       # Deploy to GitHub Pages
```

**Live at**: `https://YOUR-USERNAME.github.io/sherihan-portfolio`

---

**Need help?** Review the documentation files or check browser console for errors.

**Built with ❤️ for Sherihan Mounir**
