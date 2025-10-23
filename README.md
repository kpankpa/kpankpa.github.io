# Portfolio Website - Kpankpa Dornu Prince

A modern, responsive portfolio website showcasing my work as a software engineer specializing in mobile and web application development.

## 🚀 Features

- **Modern Design**: Clean, professional UI with gradient accents and smooth animations
- **Fully Responsive**: Optimized for all devices (desktop, tablet, mobile)
- **Multi-page Layout**: Separate pages for Home, Projects, About, and Contact
- **Interactive Animations**: Scroll animations, 3D tilt effects, parallax, and smooth transitions
- **Project Showcase**: Dynamic project filtering and detailed project modals
- **Contact Form**: Functional contact form with validation
- **Downloadable Resume**: Generate and download resume as HTML/PDF
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility
- **Accessible**: WCAG compliant with keyboard navigation and screen reader support

## 🛠️ Tech Stack

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid, Flexbox, and custom properties
- **JavaScript (ES6+)**: Vanilla JS with modules for animations and interactions
- **No Frameworks**: Pure HTML/CSS/JS for fast loading and easy maintenance

## 📁 Project Structure

```
Portfolio site/
├── index.html              # Homepage
├── projects.html           # Projects page
├── about.html              # About page
├── contact.html            # Contact page
├── styles.css              # Main stylesheet
├── js/
│   ├── utils.js           # Utility functions
│   ├── animations.js      # Animation effects
│   ├── main.js            # Homepage logic
│   ├── projects.js        # Projects page logic
│   ├── about.js           # About page logic
│   └── contact.js         # Contact page logic
└── README.md              # This file
```

## 🎨 Design Features

### Animations & Effects

- **Scroll Animations**: Fade-in effects on scroll
- **3D Tilt Effect**: Interactive card tilting on mouse hover
- **Parallax**: Smooth parallax background effects
- **Gradient Orbs**: Animated floating gradient backgrounds
- **Typewriter Effect**: Dynamic text animation on homepage
- **Smooth Transitions**: Page and element transitions
- **Scroll Progress**: Visual indicator of page scroll progress

### UI Components

- **Glassmorphism**: Semi-transparent elements with backdrop blur
- **Gradient Accents**: Modern gradient colors throughout
- **Interactive Buttons**: Hover effects with magnetic pull
- **Project Cards**: Hover animations with 3D transforms
- **Modal Windows**: Smooth popup modals for project details
- **Form Validation**: Real-time form validation with error messages

## 🚀 Getting Started

### Local Development

1. **Clone or download** this repository
2. **Open the project folder** in your code editor
3. **Launch a local server**:

   **Option A - Using Python:**

   ```powershell
   # Python 3
   python -m http.server 8000
   ```

   **Option B - Using Node.js (http-server):**

   ```powershell
   npx http-server -p 8000
   ```

   **Option C - Using VS Code:**

   - Install the "Live Server" extension
   - Right-click `index.html` and select "Open with Live Server"

4. **Open your browser** and navigate to:
   ```
   http://localhost:8000
   ```

## 📤 Deployment

### Deploy to GitHub Pages

1. **Create a GitHub repository**:

   ```powershell
   git init
   git add .
   git commit -m "Initial commit: Portfolio website"
   git branch -M main
   git remote add origin https://github.com/kpankpa/kpankpa.github.io.git
   git push -u origin main
   ```

2. **Enable GitHub Pages**:

   - Go to repository Settings
   - Navigate to "Pages" section
   - Source: Deploy from branch
   - Branch: `main` (or `master`)
   - Folder: `/ (root)`
   - Click "Save"

3. **Access your site**:

   ```
   https://kpankpa.github.io
   ```

   or

   ```
   https://yourusername.github.io/repository-name
   ```

4. **Custom Domain** (Optional):
   - Purchase a domain from a registrar (Namecheap, GoDaddy, etc.)
   - Add a `CNAME` file to the root with your domain name
   - Configure DNS settings:
     - Type: A
     - Host: @
     - Value: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153
   - Add CNAME record:
     - Type: CNAME
     - Host: www
     - Value: yourusername.github.io

### Deploy to Netlify

1. **Create account** at [netlify.com](https://netlify.com)
2. **Drag and drop** your project folder
3. **Configure** (optional): Site settings > Domain management
4. **Deploy**: Automatic deployment on every git push

### Deploy to Vercel

1. **Install Vercel CLI**:

   ```powershell
   npm install -g vercel
   ```

2. **Deploy**:

   ```powershell
   vercel
   ```

3. **Follow prompts** to complete deployment

## 📝 Customization

### Update Personal Information

1. **Edit `index.html`**:
   - Update name, bio, and links
2. **Edit `js/main.js`**:

   - Update `projectsData` array with your projects

3. **Edit `js/about.js`**:

   - Update resume data in `generateAndDownloadResume()` function

4. **Edit `styles.css`**:
   - Modify CSS variables in `:root` for colors and spacing

### Add New Projects

Edit `js/main.js` and `js/projects.js`, add new project objects:

```javascript
{
    id: 3,
    title: 'Your Project Name',
    description: 'Short description',
    longDescription: 'Detailed description',
    tags: ['Tag1', 'Tag2'],
    category: ['web', 'mobile'],
    github: 'https://github.com/username/repo',
    demo: 'https://demo-url.com',
    featured: true,
    features: [
        'Feature 1',
        'Feature 2'
    ]
}
```

### Change Color Scheme

Edit `:root` variables in `styles.css`:

```css
:root {
  --primary: #6366f1; /* Main color */
  --secondary: #ec4899; /* Accent color */
  --bg-primary: #0f172a; /* Background */
}
```

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 Mobile Responsive

The website is fully responsive with breakpoints at:

- Desktop: 1280px+
- Tablet: 768px - 1279px
- Mobile: < 768px

## ♿ Accessibility

- Semantic HTML5 elements
- ARIA labels where needed
- Keyboard navigation support
- Focus indicators
- Alt text for images (when added)
- Reduced motion support for users with motion sensitivity

## 🐛 Known Issues & Improvements

### Current Limitations:

- Contact form doesn't send emails (uses `mailto:` as fallback)
- No backend for form submissions
- Projects are hardcoded in JavaScript

### Future Enhancements:

- Add backend API for contact form
- Integrate CMS for project management
- Add blog section
- Add dark/light theme toggle
- Add more project images
- Implement analytics (Google Analytics, Plausible)

## 📧 Contact

- **Email**: kpankpa@example.com
- **GitHub**: [github.com/kpankpa](https://github.com/kpankpa)
- **LinkedIn**: [linkedin.com/in/prince-kpankpa-8bb709235](https://www.linkedin.com/in/prince-kpankpa-8bb709235)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Inspiration from [Awwwards](https://www.awwwards.com/)
- Animation techniques from [GSAP](https://greensock.com/) and [Anime.js](https://animejs.com/)
- UI/UX best practices from [Motion for React](https://motion.dev/)
- Icons from inline SVG

## 📚 Resources

- [MDN Web Docs](https://developer.mozilla.org/)
- [CSS-Tricks](https://css-tricks.com/)
- [Web.dev](https://web.dev/)
- [A11y Project](https://www.a11yproject.com/)

---

**Built with ❤️ and ☕ by Kpankpa Dornu Prince**
