// About page JavaScript

import { initPagePreloading, initPageTransitions } from './utils.js';
import { initSmoothReveal, initScrollProgress } from './animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initializeNavigation();
    initializeAnimations();
});

function initializeNavigation() {
    const navbar = document.getElementById('navbar');
    const mobileMenuToggle = document.getElementById('mobileMenuToggle');
    const navLinks = document.getElementById('navLinks');
    
    // Sticky navbar
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar?.classList.add('scrolled');
        } else {
            navbar?.classList.remove('scrolled');
        }
    });
    
    // Mobile menu toggle
    if (mobileMenuToggle && navLinks) {
        mobileMenuToggle.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Mobile menu clicked'); // Debug log
            mobileMenuToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        
        // Close menu when clicking nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                if (mobileMenuToggle && navLinks) {
                    mobileMenuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                }
            });
        });
    } else {
        console.log('Mobile menu elements not found:', { mobileMenuToggle, navLinks }); // Debug
    }
}

function initializeAnimations() {
    initSmoothReveal();
    initScrollProgress();
    initPagePreloading();
    initPageTransitions();
}
