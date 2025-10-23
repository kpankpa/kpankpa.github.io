# GitHub Pages Deployment Guide

## Steps to Host Your Portfolio on GitHub Pages

### 1. Create a New GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the **"+"** icon in the top-right corner → **"New repository"**
3. Repository name: `portfolio` (or `kpankpa.github.io` for a user site)
4. Description: "Personal portfolio website showcasing my projects and skills"
5. Keep it **Public**
6. **DO NOT** initialize with README, .gitignore, or license (we already have these)
7. Click **"Create repository"**

### 2. Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Use these:

```bash
git remote add origin https://github.com/kpankpa/portfolio.git
git push -u origin main
```

**Note**: Replace `kpankpa` with your actual GitHub username if different.

### 3. Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **"Settings"** tab
3. Scroll down to **"Pages"** in the left sidebar
4. Under **"Source"**, select:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click **"Save"**

### 4. Wait for Deployment

- GitHub will build and deploy your site (takes 1-2 minutes)
- Your site will be live at: `https://kpankpa.github.io/portfolio/`
- Or if you named it `kpankpa.github.io`: `https://kpankpa.github.io/`

### 5. Update Contact Form (Important!)

Once deployed, FormSubmit will use the live URL. The first submission will require email verification:

1. Fill out your own contact form
2. Check your email (kaylonprince@gmail.com)
3. Click the verification link from FormSubmit
4. All future submissions will work automatically!

## Commands Summary

Run these commands in PowerShell (already in the Portfolio site folder):

```powershell
# Add GitHub repository as remote (replace with your repo URL)
git remote add origin https://github.com/kpankpa/portfolio.git

# Push code to GitHub
git push -u origin main
```

## Future Updates

When you make changes to your portfolio:

```powershell
cd "c:\Users\Kay\Documents\Portfolio site"
git add .
git commit -m "Description of changes"
git push
```

GitHub Pages will automatically rebuild and deploy (takes 1-2 minutes).

## Troubleshooting

**If you see 404 errors:**

- Wait 2-3 minutes after first push
- Check Settings → Pages shows a green checkmark
- Ensure index.html is in the root folder

**If images/videos don't load:**

- Check all file paths are relative (no absolute paths)
- Verify files are committed to git: `git ls-files`

**If styles don't apply:**

- Clear browser cache (Ctrl + Shift + R)
- Check browser console for errors (F12)

## Custom Domain (Optional)

To use a custom domain like `princekpankpa.com`:

1. Buy domain from Namecheap, GoDaddy, etc.
2. In GitHub Settings → Pages → Custom domain, enter your domain
3. Add DNS records in your domain registrar:
   - CNAME record: `www` → `kpankpa.github.io`
   - A records pointing to GitHub Pages IPs

---

## ✅ Your Portfolio is Ready!

Once deployed, share your portfolio:

- GitHub: Add the live URL to your repository description
- LinkedIn: Add it to your profile and "Featured" section
- Resume: Include the link
- Email signature: Add it to your signature

**Live URL**: https://kpankpa.github.io/portfolio/ (or your custom domain)
