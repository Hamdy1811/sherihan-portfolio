# ✅ Setup Checklist - Before Deployment

Complete this checklist before deploying your portfolio to GitHub Pages.

## 📋 Required Configuration Changes

### 1. Update GitHub Username

- [ ] Open `package.json`
- [ ] Find line: `"homepage": "https://YOUR-USERNAME.github.io/sherihan-portfolio"`
- [ ] Replace `YOUR-USERNAME` with your actual GitHub username
- [ ] Example: `"homepage": "https://john-smith.github.io/sherihan-portfolio"`

### 2. Verify Repository Name

- [ ] Open `vite.config.js`
- [ ] Check line: `base: '/sherihan-portfolio/'`
- [ ] If using different repository name, update this path
- [ ] Must match your GitHub repository name exactly

### 3. Test Locally

- [ ] Run `npm install` to install dependencies
- [ ] Run `npm run dev` to start development server
- [ ] Visit `http://localhost:5173` and verify everything works
- [ ] Check all sections load correctly
- [ ] Test navigation links
- [ ] Verify video plays automatically
- [ ] Click portfolio items and test modals
- [ ] Test contact buttons

### 4. Build Test

- [ ] Run `npm run build` to create production build
- [ ] Run `npm run preview` to test production build
- [ ] Visit `http://localhost:4173` and verify
- [ ] Check browser console for any errors

## 🎨 Optional Customization

### Personal Information (Recommended)

- [ ] Update profile image URL in `src/components/Header.jsx` (line 30)
- [ ] Verify email in `src/components/Contact.jsx` and `src/components/Footer.jsx`
- [ ] Verify LinkedIn URL in `src/components/Contact.jsx` and `src/components/Footer.jsx`
- [ ] Update phone number in `src/components/Contact.jsx`
- [ ] Update location in `src/components/Contact.jsx`

### Content Customization (Optional)

- [ ] Review hero section text in `src/components/Hero.jsx`
- [ ] Review about section text in `src/components/CreativeVision.jsx`
- [ ] Update skills in `src/components/CreativeVision.jsx` (line 8-13)
- [ ] Review portfolio projects in `src/data/portfolioData.js`
- [ ] Update footer copyright year in `src/components/Footer.jsx`

### Brand Customization (Optional)

- [ ] Update accent color in `tailwind.config.js` (default: #FF6B35)
- [ ] Replace favicon in `public/` folder
- [ ] Update meta tags in `index.html` for SEO

## 🚀 Deployment Steps

### 5. Create GitHub Repository

- [ ] Go to [GitHub](https://github.com/new)
- [ ] Create new repository named `sherihan-portfolio` (or your preferred name)
- [ ] Do NOT initialize with README, .gitignore, or license
- [ ] Click "Create repository"

### 6. Push Code to GitHub

Run these commands in your project directory:

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Fashion stylist portfolio"

# Add remote (replace YOUR-USERNAME)
git remote add origin https://github.com/YOUR-USERNAME/sherihan-portfolio.git

# Push to main branch
git branch -M main
git push -u origin main
```

- [ ] Code successfully pushed to GitHub
- [ ] Verify files appear in GitHub repository

### 7. Deploy to GitHub Pages

```bash
npm run deploy
```

- [ ] Build completed without errors
- [ ] Deployment to gh-pages branch successful
- [ ] Check "Actions" tab on GitHub for deployment status

### 8. Enable GitHub Pages

- [ ] Go to repository Settings
- [ ] Click "Pages" in left sidebar
- [ ] Under "Source", select `gh-pages` branch
- [ ] Select `/ (root)` folder
- [ ] Click "Save"
- [ ] Wait 2-5 minutes for deployment

### 9. Verify Deployment

- [ ] Visit `https://YOUR-USERNAME.github.io/sherihan-portfolio`
- [ ] Check all sections load correctly
- [ ] Test navigation and smooth scrolling
- [ ] Verify video autoplays
- [ ] Test portfolio modals
- [ ] Click contact buttons (email and LinkedIn)
- [ ] Test on mobile device or use browser dev tools
- [ ] Check browser console for errors

## ✨ Post-Deployment

### 10. Final Checks

- [ ] Test on different browsers (Chrome, Firefox, Safari, Edge)
- [ ] Test on mobile devices (or use responsive design mode)
- [ ] Share URL with friends for feedback
- [ ] Check page load speed (should be under 3 seconds)
- [ ] Verify all images load
- [ ] Test all external links

### 11. Update Social Media (Optional)

- [ ] Add portfolio URL to LinkedIn profile
- [ ] Add portfolio URL to resume/CV
- [ ] Share on social media
- [ ] Add to email signature

## 🔄 Making Updates

When you make changes to your portfolio:

```bash
# Stage and commit changes
git add .
git commit -m "Description of changes"

# Push to main branch
git push origin main

# Deploy updated version
npm run deploy
```

- [ ] Know how to update and redeploy

## 📊 Monitoring (Optional)

### 12. Analytics Setup

- [ ] Sign up for Google Analytics (optional)
- [ ] Get tracking ID
- [ ] Add tracking code to `index.html`
- [ ] Monitor visitor traffic

### 13. Performance Monitoring

- [ ] Run [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [ ] Check [GTmetrix](https://gtmetrix.com/) score
- [ ] Test on [WebPageTest](https://www.webpagetest.org/)

## 🎉 Launch Ready!

Once all required items (1-9) are checked, your portfolio is ready to launch!

**Your live portfolio URL:**
```
https://YOUR-USERNAME.github.io/sherihan-portfolio
```

---

## 📞 Troubleshooting

If you encounter issues, refer to:
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Detailed deployment guide
- [README.md](./README.md) - Complete documentation
- [QUICK_START.md](./QUICK_START.md) - Quick start guide

Common issues and solutions are documented in DEPLOYMENT.md under the "Troubleshooting" section.

---

**Need help?** Review the documentation files or check browser console for error messages.

**Success tip:** Don't skip the local testing steps (3-4). They help catch issues before deployment!
