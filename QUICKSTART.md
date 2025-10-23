# ⚡ QUICK START GUIDE

## 🚀 Get Your Portfolio Live in 5 Minutes!

### Step 1: Test Locally (30 seconds)

```powershell
# Double-click this file or run in PowerShell:
start-server.bat

# Then open browser to:
http://localhost:8000
```

### Step 2: Create GitHub Account (1 minute)

- Already have one! ✅ https://github.com/kpankpa

### Step 3: Create Repository (1 minute)

```powershell
# In PowerShell, navigate to project:
cd "c:\Users\Kay\Documents\Portfolio site"

# Initialize git:
git init
git add .
git commit -m "🎉 Initial commit: Professional portfolio"
git branch -M main
```

### Step 4: Push to GitHub (1 minute)

```powershell
# Create repo on GitHub named: kpankpa.github.io
# Then run:
git remote add origin https://github.com/kpankpa/kpankpa.github.io.git
git push -u origin main
```

### Step 5: Enable GitHub Pages (1 minute)

1. Go to: https://github.com/kpankpa/kpankpa.github.io/settings/pages
2. Under "Source", select: Branch `main`, Folder `/ (root)`
3. Click **Save**
4. Wait 2 minutes ⏱️

### Step 6: Visit Your Live Site! 🎉

```
https://kpankpa.github.io
```

---

## 📝 Checklist Before Going Live

- [ ] Test all pages work locally
- [ ] Update email in `contact.html` (line 85)
- [ ] Add your actual photo to `about.html`
- [ ] Review all text for typos
- [ ] Test contact form
- [ ] Test mobile view (F12 → device toolbar)
- [ ] Check all links work

---

## 🎨 Quick Customizations

### Change Main Color

Open `styles.css`, line 12:

```css
--primary: #6366f1; /* Change to any hex color */
```

### Add Profile Picture

Open `about.html`, replace lines 65-72 with:

```html
<img
  src="pic/my_pic.jpg"
  alt="Your Name"
  style="width: 100%; border-radius: 1.5rem;"
/>
```

### Add New Project

Open `js/main.js`, add to `projectsData` array:

```javascript
{
    id: 3,
    title: 'Your Project',
    description: 'Brief description',
    tags: ['Tag1', 'Tag2'],
    category: ['web'],
    github: 'https://github.com/...',
    featured: true
}
```

---

## 🆘 Quick Troubleshooting

### Server won't start?

```powershell
# Try this instead:
python3 -m http.server 8000
# OR
npx http-server -p 8000
```

### Git not found?

- Install from: https://git-scm.com/download/win
- Restart PowerShell

### GitHub Pages not working?

- Wait 5 minutes
- Check Settings → Pages is enabled
- Verify branch is `main`

### Animations not working?

- Clear browser cache (Ctrl + Shift + Delete)
- Try incognito mode (Ctrl + Shift + N)
- Check browser console (F12) for errors

---

## 📱 Share Your Portfolio

Once live, update:

**LinkedIn** → Profile → Contact Info → Website  
**Resume** → Add portfolio URL  
**GitHub** → Profile → Edit → Website  
**Email Signature** → Add link

---

## 🎯 Next Steps (After Launch)

1. **Week 1**: Gather feedback from friends
2. **Week 2**: Add more project details and screenshots
3. **Week 3**: Submit to job applications
4. **Ongoing**: Update regularly with new projects

---

## 📞 Need Help?

1. Check `README.md` - Full documentation
2. Check `DEPLOYMENT.md` - Deployment guide
3. Check `SUMMARY.md` - Feature overview
4. Open browser console (F12) for error messages

---

## 🎉 That's It!

Your portfolio is **ready to impress**!

**You have:**
✅ Professional design  
✅ Smooth animations  
✅ Mobile responsive  
✅ SEO optimized  
✅ Production ready

**Now go land that dream job!** 💼🚀

---

_Made with ❤️ - Good luck with your career!_
