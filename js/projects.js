// Projects page JavaScript

import { initScrollAnimations } from './utils.js';
import { init3DTilt, initSmoothReveal, initScrollProgress } from './animations.js';

// Get projects data from main.js or define locally
const projectsData = window.projectsData || [
    {
        id: 1,
        title: 'WACCI Marketplace',
        description: 'A comprehensive seed and agricultural marketplace application built with Flutter. Features include product listings, secure payments, and farmer-buyer connections.',
        longDescription: 'WACCI Marketplace is a mobile application designed to connect farmers with buyers in the agricultural sector. Built with Flutter and Dart, it provides a seamless platform for trading seeds and agricultural products. The app features a modern UI, real-time updates, secure payment integration, and user authentication.',
        image: 'asserts/pic/WACCI_screenshot.jpg',
        tags: ['Flutter', 'Dart', 'Mobile', 'E-commerce'],
        category: ['flutter', 'mobile'],
        github: 'https://github.com/kpankpa/WACCI',
        demo: null,
        featured: false,
        features: [
            'Product listing and search functionality',
            'Secure user authentication',
            'Real-time notifications',
            'Payment gateway integration',
            'Responsive mobile UI'
        ]
    },
    {
        id: 2,
        title: 'FirstBank CMS',
        description: 'Content Management System developed with TypeScript for efficient content organization and management. Features modern UI and robust backend architecture.',
        longDescription: 'FirstBank CMS is a modern content management system built with TypeScript. It provides a powerful interface for managing digital content with features like version control, user permissions, and a flexible content structure. The system is designed for scalability and ease of use.',
        image: 'asserts/pic/CMS.png',
        tags: ['TypeScript', 'Web', 'CMS', 'Full-Stack'],
        category: ['typescript', 'web'],
        github: 'https://github.com/kpankpa/firstbank-CMS',
        demo: null,
        featured: true,
        features: [
            'Modern TypeScript architecture',
            'Intuitive content editor',
            'User role management',
            'Version control system',
            'RESTful API integration'
        ]
    },
    {
        id: 3,
        title: 'Nuts - Open Banking',
        description: 'Contributing to Nuts, an open-source open banking application. Working on implementing secure financial data sharing, API integrations, and compliance with open banking standards.',
        longDescription: 'Nuts is an open-source infrastructure for digital identity and consent management in healthcare and financial services. As a contributor, I work on implementing secure data sharing protocols, API integrations, and ensuring compliance with open banking standards. The project focuses on decentralized identity management and secure credential exchange.',
        image: null,
        tags: ['Open Banking', 'API', 'Security', 'FinTech'],
        category: ['web', 'typescript'],
        github: 'https://github.com/nuts-foundation',
        demo: null,
        featured: true,
        features: [
            'Open banking API implementation',
            'Secure financial data sharing',
            'OAuth 2.0 and OpenID Connect',
            'Decentralized identity management',
            'Compliance with PSD2 standards'
        ]
    },
    {
        id: 4,
        title: 'First Pool',
        description: 'A carpooling application designed to facilitate ride-sharing among employees. Features MVP architecture for scalability, real-time ride matching, route optimization, and cost splitting.',
        longDescription: 'First Pool is a mobile carpooling application built with Flutter that enables employees to share rides efficiently. The app follows the MVP (Model-View-Presenter) architecture pattern for clean code separation and testability. It includes real-time ride matching algorithms, route optimization using Google Maps API, automated cost calculation and splitting, and a rating system for drivers and passengers.',
        image: null,
        video: 'videos/firstpool_tut.mp4', // Add your video file here
        tags: ['Flutter', 'MVP', 'Mobile', 'Ride-sharing'],
        category: ['flutter', 'mobile'],
        github: null,
        demo: null,
        featured: true,
        features: [
            'MVP architecture pattern',
            'Real-time ride matching',
            'Route optimization with Google Maps',
            'Automated cost splitting',
            'Driver and passenger ratings',
            'Push notifications for ride updates'
        ]
    }
];

let currentFilter = 'all';
let projectModal, modalBody, modalOverlay, modalClose;

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initializeElements();
    initializeNavigation();
    initializeFilters();
    loadProjects();
    initializeModal();
    initializeAnimations();
});

function initializeElements() {
    projectModal = document.getElementById('projectModal');
    modalBody = document.getElementById('modalBody');
    modalOverlay = document.getElementById('modalOverlay');
    modalClose = document.getElementById('modalClose');
}

function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Sticky navbar
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
        
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }
}

function initializeFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Update current filter
            currentFilter = btn.dataset.filter;
            
            // Filter and reload projects
            filterProjects();
        });
    });
}

function filterProjects() {
    const filteredProjects = currentFilter === 'all' 
        ? projectsData 
        : projectsData.filter(project => 
            project.category.includes(currentFilter.toLowerCase())
        );
    
    const projectsGrid = document.getElementById('projectsGrid');
    const emptyState = document.getElementById('emptyState');
    
    if (filteredProjects.length === 0) {
        projectsGrid.innerHTML = '';
        emptyState.style.display = 'block';
    } else {
        emptyState.style.display = 'none';
        projectsGrid.innerHTML = filteredProjects.map(project => createProjectCard(project)).join('');
        
        // Re-attach event listeners
        attachProjectCardListeners();
        
        // Re-initialize animations
        initSmoothReveal();
        init3DTilt();
    }
}

function loadProjects() {
    const projectsGrid = document.getElementById('projectsGrid');
    
    if (!projectsGrid) return;
    
    // Check if specific project ID in URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id');
    
    if (projectId) {
        const project = projectsData.find(p => p.id === parseInt(projectId));
        if (project) {
            setTimeout(() => openProjectModal(project), 300);
        }
    }
    
    filterProjects();
}

function createProjectCard(project) {
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
        'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    ];
    
    const randomGradient = gradients[project.id % gradients.length];
    
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

function attachProjectCardListeners() {
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            const projectId = parseInt(card.dataset.projectId);
            const project = projectsData.find(p => p.id === projectId);
            if (project) {
                openProjectModal(project);
            }
        });
    });
}

function initializeModal() {
    if (!projectModal || !modalOverlay || !modalClose) return;
    
    modalOverlay.addEventListener('click', closeProjectModal);
    modalClose.addEventListener('click', closeProjectModal);
    
    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && projectModal.classList.contains('active')) {
            closeProjectModal();
        }
    });
}

function openProjectModal(project) {
    if (!projectModal || !modalBody) return;
    
    const gradients = [
        'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    ];
    
    const randomGradient = gradients[project.id % gradients.length];
    
    // Determine what media to show in the modal
    let modalMediaContent = '';
    if (project.video) {
        modalMediaContent = `
            <video controls loop muted playsinline preload="metadata" class="project-video" style="width: 100%; height: 100%; object-fit: contain; border-radius: var(--radius-xl);">
                <source src="${project.video}" type="video/mp4">
                Your browser does not support the video tag.
            </video>
        `;
    } else if (project.image) {
        modalMediaContent = `<img src="${project.image}" alt="${project.title}" class="project-img" style="width: 100%; height: 100%; object-fit: contain; border-radius: var(--radius-xl);">`;
    } else {
        modalMediaContent = `
            <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
        `;
    }
    
    modalBody.innerHTML = `
        <div class="project-detail">
            <div class="project-image" style="background: ${project.video || project.image ? '#000' : randomGradient}; height: 300px; border-radius: var(--radius-xl); margin-bottom: var(--spacing-lg); position: relative; overflow: hidden; display: flex; align-items: center; justify-content: center;">
                ${modalMediaContent}
            </div>
            <h2 style="margin-bottom: var(--spacing-sm);">${project.title}</h2>
            <div class="project-tags" style="margin-bottom: var(--spacing-md);">
                ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
            </div>
            <p style="color: var(--text-secondary); margin-bottom: var(--spacing-md);">
                ${project.longDescription || project.description}
            </p>
            ${project.features ? `
                <h3 style="margin-bottom: var(--spacing-sm);">Key Features</h3>
                <ul style="color: var(--text-secondary); margin-bottom: var(--spacing-lg); padding-left: 1.5rem;">
                    ${project.features.map(feature => `<li style="margin-bottom: 0.5rem;">${feature}</li>`).join('')}
                </ul>
            ` : ''}
            <div style="display: flex; gap: var(--spacing-md); flex-wrap: wrap;">
                ${project.github ? `
                    <a href="${project.github}" class="btn btn-primary" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                        </svg>
                        <span>View on GitHub</span>
                    </a>
                ` : ''}
                ${project.demo ? `
                    <a href="${project.demo}" class="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        <span>Live Demo</span>
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = '';
}

function initializeAnimations() {
    initSmoothReveal();
    init3DTilt();
    initScrollProgress();
}
