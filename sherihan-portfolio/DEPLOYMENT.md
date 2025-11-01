# Deployment Guide for Sherihan Portfolio

## 📋 Pre-Deployment Checklist

Before deploying to GitHub Pages, ensure you've completed these steps:

### 1. Update Configuration Files

#### A. Update package.json
Replace `YOUR-USERNAME` with your actual GitHub username:

```json
"homepage": "https://YOUR-USERNAME.github.io/sherihan-portfolio"
```

#### B. Verify vite.config.js
Ensure the base path matches your repository name:

```javascript
export default defineConfig({
  base: '/sherihan-portfolio/',
  plugins: [react()],
})
```

If you use a different repository name, update `/sherihan-portfolio/` accordingly.

### 2. Test Locally

```bash
# Install dependencies if you haven't already
npm install

# Test development build
npm run dev

# Test production build locally
npm run build
npm run preview
```

Visit `http://localhost:4173` to verify everything works correctly.

## 🚀 Deployment Steps

### Method 1: Automatic Deployment (Recommended)

```bash
# This command will build and deploy in one step
npm run deploy
```

This will:
1. Build your project (`npm run build`)
2. Create/update the `gh-pages` branch
3. Push the built files to GitHub

### Method 2: Manual Deployment

```bash
# Build the project
npm run build

# Deploy to gh-pages branch
npx gh-pages -d dist
```

## ⚙️ GitHub Repository Setup

### 1. Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Fashion stylist portfolio"

# Add remote (replace YOUR-USERNAME and REPO-NAME)
git remote add origin https://github.com/YOUR-USERNAME/sherihan-portfolio.git

# Push to main branch
git branch -M main
git push -u origin main
```

### 2. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** tab
3. Scroll to **Pages** section (left sidebar)
4. Under **Source**:
   - Select branch: `gh-pages`
   - Select folder: `/ (root)`
5. Click **Save**

### 3. Wait for Deployment

- GitHub will build and deploy your site
- This usually takes 2-5 minutes
- Check the **Actions** tab to monitor progress
- Once complete, your site will be live at:
  ```
  https://YOUR-USERNAME.github.io/sherihan-portfolio
  ```

## 🔄 Updating Your Site

After making changes to your portfolio:

```bash
# Stage and commit changes
git add .
git commit -m "Update portfolio content"

# Push to main branch
git push origin main

# Deploy updated version
npm run deploy
```

## 🌐 Custom Domain (Optional)

To use a custom domain like `www.sherihanmounir.com`:

### 1. Add CNAME File

Create a file named `CNAME` in the `public/` folder:

```
www.sherihanmounir.com
```

### 2. Configure DNS

Add these DNS records with your domain provider:

**For apex domain (sherihanmounir.com):**
```
Type: A
Name: @
Value: 185.199.108.153
       185.199.109.153
       185.199.110.153
       185.199.111.153
```

**For www subdomain:**
```
Type: CNAME
Name: www
Value: YOUR-USERNAME.github.io
```

### 3. Update GitHub Settings

1. Go to repository **Settings** → **Pages**
2. Enter your custom domain
3. Enable **Enforce HTTPS** (recommended)

## 🐛 Troubleshooting

### Issue: 404 Error on GitHub Pages

**Solution:**
- Verify the `base` path in `vite.config.js` matches your repository name
- Check that `gh-pages` branch exists and has content
- Ensure GitHub Pages is enabled in repository settings
- Wait 5-10 minutes for DNS propagation

### Issue: CSS/JS Not Loading

**Solution:**
- Verify `base` path in `vite.config.js` includes leading and trailing slashes
- Clear browser cache and hard refresh (Ctrl+Shift+R)
- Check browser console for 404 errors

### Issue: Video Not Playing

**Solution:**
- Video URLs must be publicly accessible
- Ensure video has `muted` attribute (required for autoplay)
- Check video file size (keep under 10MB for better performance)

### Issue: Deployment Fails

**Solution:**
```bash
# Clear node modules and reinstall
rm -rf node_modules package-lock.json
npm install

# Clear gh-pages cache
rm -rf node_modules/.cache/gh-pages

# Try deploying again
npm run deploy
```

### Issue: Changes Not Appearing

**Solution:**
- Clear browser cache
- Wait a few minutes for GitHub Pages to rebuild
- Check if deployment completed successfully in **Actions** tab
- Try viewing in incognito/private browsing mode

## 📊 Monitoring

### Check Deployment Status

1. Go to repository **Actions** tab
2. Look for recent workflow runs
3. Green checkmark = successful deployment
4. Red X = failed deployment (check logs for errors)

### Analytics (Optional)

To add Google Analytics:

1. Get your tracking ID from Google Analytics
2. Add to `index.html` in the `<head>` section:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

## 🔒 Security Best Practices

1. **Never commit sensitive data**
   - Keep API keys in `.env` files (already in `.gitignore`)
   - Don't commit passwords or tokens

2. **Keep dependencies updated**
   ```bash
   npm audit
   npm audit fix
   ```

3. **Use HTTPS**
   - Enable "Enforce HTTPS" in GitHub Pages settings

## 📞 Support

If you encounter issues:

1. Check the [GitHub Pages Documentation](https://docs.github.com/en/pages)
2. Review [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
3. Check repository **Issues** tab
4. Review browser console for errors

## ✅ Post-Deployment Verification

After deployment, verify:

- [ ] Site loads at GitHub Pages URL
- [ ] Navigation links work correctly
- [ ] Video autoplays (with sound muted)
- [ ] Portfolio modal opens and closes
- [ ] All images load properly
- [ ] Contact buttons link correctly
- [ ] Site is responsive on mobile
- [ ] No console errors

---

**Your portfolio is now live! 🎉**

Share your portfolio URL:
```
https://YOUR-USERNAME.github.io/sherihan-portfolio
```
