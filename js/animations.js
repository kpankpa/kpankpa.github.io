// Advanced animations and effects

import { throttle } from './utils.js';

// Parallax effect
export function initParallax() {
    const parallaxElements = document.querySelectorAll('[data-parallax]');
    
    if (parallaxElements.length === 0) return;
    
    const handleScroll = throttle(() => {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach(element => {
            const speed = element.dataset.parallax || 0.5;
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }, 16);
    
    window.addEventListener('scroll', handleScroll);
}

// 3D tilt effect on mouse move
export function init3DTilt() {
    const tiltElements = document.querySelectorAll('.project-card, .floating-card');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', handleTilt);
        element.addEventListener('mouseleave', resetTilt);
    });
    
    function handleTilt(e) {
        const card = e.currentTarget;
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    }
    
    function resetTilt(e) {
        const card = e.currentTarget;
        card.style.transform = '';
    }
}

// Stagger animation for multiple elements
export function staggerAnimation(elements, delay = 100) {
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.style.animation = 'fadeInUp 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
        }, index * delay);
    });
}

// Magnetic button effect
export function initMagneticButtons() {
    const buttons = document.querySelectorAll('.btn-primary, .btn-secondary');
    
    buttons.forEach(button => {
        button.addEventListener('mousemove', (e) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = '';
        });
    });
}

// Smooth reveal on scroll
export function initSmoothReveal() {
    const revealElements = document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, index * 50);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });
    
    revealElements.forEach(element => observer.observe(element));
}

// Cursor follower
export function initCursorFollower() {
    if (window.matchMedia('(pointer: coarse)').matches) return; // Skip on touch devices
    
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    cursor.style.cssText = `
        position: fixed;
        width: 20px;
        height: 20px;
        border: 2px solid var(--primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10000;
        transition: transform 0.2s, background 0.3s;
        mix-blend-mode: difference;
    `;
    document.body.appendChild(cursor);
    
    const cursorDot = document.createElement('div');
    cursorDot.style.cssText = `
        position: fixed;
        width: 6px;
        height: 6px;
        background: var(--primary);
        border-radius: 50%;
        pointer-events: none;
        z-index: 10001;
    `;
    document.body.appendChild(cursorDot);
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        
        dotX = mouseX - 3;
        dotY = mouseY - 3;
        
        cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`;
    });
    
    function animateCursor() {
        cursorX += (mouseX - cursorX - 10) * 0.15;
        cursorY += (mouseY - cursorY - 10) * 0.15;
        
        cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;
        
        requestAnimationFrame(animateCursor);
    }
    
    animateCursor();
    
    // Scale cursor on interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, textarea');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform += ' scale(1.5)';
            cursor.style.background = 'rgba(99, 102, 241, 0.2)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = cursor.style.transform.replace(' scale(1.5)', '');
            cursor.style.background = '';
        });
    });
}

// Page transition
export function pageTransition() {
    const links = document.querySelectorAll('a[href^="/"]:not([target="_blank"]), a[href$=".html"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');
            
            // Skip if same page or external
            if (href === window.location.pathname || href.startsWith('http')) return;
            
            e.preventDefault();
            
            // Create overlay
            const overlay = document.createElement('div');
            overlay.style.cssText = `
                position: fixed;
                inset: 0;
                background: var(--bg-primary);
                z-index: 9999;
                animation: slideDown 0.5s ease-out;
            `;
            document.body.appendChild(overlay);
            
            setTimeout(() => {
                window.location.href = href;
            }, 400);
        });
    });
}

// Text animation on scroll
export function animateTextOnScroll() {
    const textElements = document.querySelectorAll('h1, h2, h3');
    
    textElements.forEach(element => {
        const text = element.textContent;
        element.innerHTML = '';
        
        text.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.textContent = char === ' ' ? '\u00A0' : char;
            span.style.cssText = `
                display: inline-block;
                opacity: 0;
                transform: translateY(20px);
                animation: fadeInUp 0.5s ease forwards;
                animation-delay: ${index * 0.03}s;
            `;
            element.appendChild(span);
        });
    });
}

// Gradient animation for hero background
export function animateGradientOrbs() {
    const orbs = document.querySelectorAll('.gradient-orb');
    
    orbs.forEach((orb, index) => {
        let x = 0, y = 0;
        const speed = 0.5 + Math.random() * 0.5;
        
        function moveOrb() {
            x += Math.sin(Date.now() * 0.001 * speed + index) * 0.5;
            y += Math.cos(Date.now() * 0.001 * speed + index) * 0.5;
            
            orb.style.transform = `translate(${x}px, ${y}px)`;
            
            requestAnimationFrame(moveOrb);
        }
        
        moveOrb();
    });
}

// Scroll progress indicator
export function initScrollProgress() {
    const progressBar = document.createElement('div');
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: var(--gradient-1);
        z-index: 10000;
        transition: width 0.1s;
    `;
    document.body.appendChild(progressBar);
    
    const updateProgress = throttle(() => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.pageYOffset;
        const progress = (scrolled / scrollHeight) * 100;
        progressBar.style.width = progress + '%';
    }, 16);
    
    window.addEventListener('scroll', updateProgress);
    updateProgress();
}

// Image reveal on scroll
export function initImageReveal() {
    const images = document.querySelectorAll('img, .project-image');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'scaleIn 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.2
    });
    
    images.forEach(img => {
        img.style.opacity = '0';
        img.style.transform = 'scale(0.8)';
        observer.observe(img);
    });
}

// Add CSS animations
const style = document.createElement('style');
style.textContent = `
    @keyframes scaleIn {
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
    
    @keyframes slideDown {
        from {
            transform: translateY(-100%);
        }
        to {
            transform: translateY(0);
        }
    }
    
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);
