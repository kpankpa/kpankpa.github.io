// Main JavaScript for index.html

import { initScrollAnimations, animateCounter, typeWriter, initPagePreloading, initPageTransitions } from './utils.js';
import { 
    init3DTilt, 
    initSmoothReveal, 
    initScrollProgress,
    animateGradientOrbs
} from './animations.js';

// Projects data
const projectsData = [
    {
        id: 1,
        title: 'WACCI Marketplace',
        description: 'A comprehensive seed and agricultural marketplace application built with Flutter. Features include product listings, secure payments, and farmer-buyer connections.',
        image: '/asserts/pic/WACCI_screenshot.jpg',
        tags: ['Flutter', 'Dart', 'Mobile', 'E-commerce'],
        category: ['flutter', 'mobile'],
        github: 'https://github.com/kpankpa/WACCI',
        demo: null,
        featured: false
    },
    {
        id: 2,
        title: 'FirstBank CMS',
        description: 'Content Management System developed with TypeScript for efficient content organization and management. Features modern UI and robust backend architecture.',
        image: '/asserts/pic/CMS.png',
        tags: ['TypeScript', 'Web', 'CMS', 'Full-Stack'],
        category: ['typescript', 'web'],
        github: 'https://github.com/kpankpa/firstbank-CMS',
        demo: null,
        featured: true
    },
    {
        id: 3,
        title: 'Nuts - Open Banking',
        description: 'Contributing to Nuts, an open-source open banking application. Working on implementing secure financial data sharing, API integrations, and compliance with open banking standards.',
        image: null,
        tags: ['Open Banking', 'API', 'Security', 'FinTech'],
        category: ['web', 'typescript'],
        github: 'https://github.com/kpankpa/nuts',
        demo: null,
        featured: true
    },
    {
        id: 4,
        title: 'First Pool',
        description: 'A carpooling application designed to facilitate ride-sharing among employees. Features MVP architecture for scalability, real-time ride matching, route optimization, and cost splitting.',
        image: null,
        video: '/videos/firstpool_tut.mp4',
        tags: ['Flutter', 'MVP', 'Mobile', 'Ride-sharing'],
        category: ['flutter', 'mobile'],
        github: null,
        demo: null,
        featured: true
    }
];

// DOM elements
let navbar, mobileMenuToggle, navLinks, typewriterElement;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    initializeNavigation();
    initializeHero();
    initializeStats();
    loadFeaturedProjects();
    initializeAnimations();
});

function initializeElements() {
    navbar = document.getElementById('navbar');
    mobileMenuToggle = document.getElementById('mobileMenuToggle');
    navLinks = document.getElementById('navLinks');
    typewriterElement = document.querySelector('.typewriter');
}

function initializeNavigation() {
    // Sticky navbar on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', () => {
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active') && 
            !navLinks.contains(e.target) && 
            !mobileMenuToggle.contains(e.target)) {
            mobileMenuToggle.classList.remove('active');
            navLinks.classList.remove('active');
        }
    });
}

function initializeHero() {
    // Typewriter effect for roles
    if (typewriterElement) {
        const roles = [
            'Software Engineer',
            'Flutter Developer',
            'Web Developer',
            'UI/UX Enthusiast',
            'Problem Solver'
        ];
        typeWriter(typewriterElement, roles, 100, 50, 2000);
    }
}

function initializeStats() {
    // Animate counters when they come into view
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.target);
                animateCounter(entry.target, 0, target, 2000);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    
    statNumbers.forEach(stat => observer.observe(stat));
}

function loadFeaturedProjects() {
    const featuredProjects = projectsData.filter(project => project.featured);
    const projectsGrid = document.getElementById('featuredProjects');
    
    if (!projectsGrid) return;
    
    projectsGrid.innerHTML = featuredProjects.map(project => createProjectCard(project)).join('');
    
    // Add click handlers for project cards
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.projectId);
            const project = projectsData.find(p => p.id === projectId);
            if (project) {
                window.location.href = `/projects/?id=${projectId}`;
            }
        });
    });
}

function createProjectCard(project) {
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ];
    
    const randomGradient = gradients[Math.floor(Math.random() * gradients.length)];
    
    // Determine what to show in the project image area
    let mediaContent = '';
    if (project.video) {
        mediaContent = `
            <video autoplay loop muted playsinline class="project-video">
                <source src="${project.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else if (project.image) {
        mediaContent = `<img src="${project.image}" alt="${project.title}" class="project-img">`;
    } else {
        mediaContent = `
            <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
        `;
    }
    
    return `
        <div class="project-card fade-in-up" data-project-id="${project.id}">
            <div class="project-image" style="background: ${project.video || project.image ? 'transparent' : randomGradient}">
                ${mediaContent}
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-links">
                    ${project.github ? `
                        <a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                            <span>GitHub</span>
                        </a>
                    ` : ''}
                    ${project.demo ? `
                        <a href="${project.demo}" class="project-link" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                <polyline points="15 3 21 3 21 9"></polyline>
                                <line x1="10" y1="14" x2="21" y2="3"></line>
                            </svg>
                            <span>Live Demo</span>
                        </a>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
}

function initializeAnimations() {
    // Initialize scroll animations
    initSmoothReveal();
    
    // Initialize 3D tilt effect
    init3DTilt();
    
    // Initialize scroll progress
    initScrollProgress();
    
    // Animate gradient orbs
    animateGradientOrbs();
    
    // Initialize page preloading
    initPagePreloading();
    
    // Initialize page transitions
    initPageTransitions();
}

// Export projects data for use in other files
window.projectsData = projectsData;
