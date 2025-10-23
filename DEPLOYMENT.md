# 🚀 Quick Deployment Guide

## Option 1: GitHub Pages (Recommended - Free!)

### Step 1: Create GitHub Repository

```powershell
# Navigate to your project folder
cd "c:\Users\Kay\Documents\Portfolio site"

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Professional portfolio website"

# Create main branch
git branch -M main
```

### Step 2: Create Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `kpankpa.github.io` (for user site) OR `portfolio` (for project site)
3. Keep it Public
4. Don't add README, .gitignore, or license (we have them)
5. Click "Create repository"

### Step 3: Push to GitHub

```powershell
# Add remote (replace with your repo URL)
git remote add origin https://github.com/kpankpa/kpankpa.github.io.git

# Push
git push -u origin main
```

### Step 4: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings**
3. Scroll to **Pages** (left sidebar)
4. Under **Source**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **Save**
6. Wait 1-2 minutes

### Step 5: Access Your Site

Your site will be live at:

- User site: `https://kpankpa.github.io`
- Project site: `https://kpankpa.github.io/portfolio`

---

## Option 2: Netlify (Easier!)

### Step 1: Create Account

1. Go to [netlify.com](https://netlify.com)
2. Sign up with GitHub

### Step 2: Deploy

1. Drag and drop the `Portfolio site` folder to Netlify
2. Wait for deployment (30 seconds)
3. Your site is live!

### Step 3: Custom Domain (Optional)

1. Go to Site settings → Domain management
2. Click "Add custom domain"
3. Follow DNS configuration steps

---

## Option 3: Vercel

### Step 1: Install Vercel CLI

```powershell
npm install -g vercel
```

### Step 2: Deploy

```powershell
cd "c:\Users\Kay\Documents\Portfolio site"
vercel
```

### Step 3: Follow Prompts

- Set up and deploy: Yes
- Which scope: Your account
- Link to project: No
- Project name: portfolio
- Directory: ./

Your site will be live instantly!

---

## 🎨 Custom Domain Setup

If you purchase a domain (e.g., `kpankpaprince.com`):

### For GitHub Pages:

1. **Add CNAME file** to project root:

   ```
   kpankpaprince.com
   ```

2. **Configure DNS** (at your domain registrar):

   ```
   Type: A
   Host: @
   Value: 185.199.108.153

   Type: A
   Host: @
   Value: 185.199.109.153

   Type: A
   Host: @
   Value: 185.199.110.153

   Type: A
   Host: @
   Value: 185.199.111.153

   Type: CNAME
   Host: www
   Value: kpankpa.github.io
   ```

3. **Wait 24-48 hours** for DNS propagation

### For Netlify/Vercel:

- Just follow their UI instructions (much easier!)

---

## 📱 Share Your Portfolio

Once deployed, share your portfolio:

1. **Update LinkedIn**:

   - Add to "Featured" section
   - Update "Website" field in Contact Info

2. **Update GitHub Profile**:

   - Pin the repository
   - Add website to repository description
   - Update GitHub profile bio with link

3. **Update Resume**:

   - Add portfolio URL
   - Include in email signature

4. **Social Media**:
   - Share on LinkedIn, Twitter, etc.
   - Use hashtags: #WebDevelopment #Portfolio #SoftwareEngineer

---

## 🔄 Update Your Site

### Make Changes Locally

1. Edit files in your project
2. Test locally: `python -m http.server 8000`
3. Preview at `http://localhost:8000`

### Push Updates

```powershell
git add .
git commit -m "Update: description of changes"
git push origin main
```

GitHub Pages will automatically rebuild (1-2 minutes).

---

## ✅ Post-Deployment Checklist

- [ ] Test all pages (Home, Projects, About, Contact)
- [ ] Test mobile responsiveness
- [ ] Check all links (GitHub, LinkedIn)
- [ ] Test contact form
- [ ] Test resume download
- [ ] Verify animations work
- [ ] Check browser console for errors
- [ ] Test on different browsers
- [ ] Share with friends for feedback
- [ ] Update LinkedIn with portfolio link
- [ ] Pin repository on GitHub

---

## 🆘 Troubleshooting

### Site not loading?

- Check GitHub Pages is enabled in Settings
- Verify branch is `main` and folder is `/ (root)`
- Wait a few minutes and refresh

### Images not showing?

- Use relative paths (e.g., `./images/photo.jpg`)
- Ensure files are committed to git

### Animations not working?

- Check browser console for errors (F12)
- Ensure JavaScript files are loading

### Contact form not sending?

- This is expected - you need a backend service
- Consider: Formspree, Netlify Forms, or Emailjs

---

## 🎉 Success!

Your portfolio is now live and professional! 🚀

Next steps:

1. Add real project screenshots
2. Consider adding a blog
3. Monitor with Google Analytics
4. Apply for jobs with confidence! 💼

---

**Need help?** Open an issue on GitHub or reach out!
