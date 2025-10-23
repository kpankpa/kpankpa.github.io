// Contact Form Validation and Submission
// Using FormSubmit for email delivery

document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    
    if (!contactForm) return;
    
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    // Real-time validation
    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    subjectInput.addEventListener('blur', validateSubject);
    messageInput.addEventListener('blur', validateMessage);
    
    // Clear errors on input
    [nameInput, emailInput, subjectInput, messageInput].forEach(input => {
        input.addEventListener('input', () => {
            const formGroup = input.closest('.form-group');
            formGroup.classList.remove('error');
            formGroup.querySelector('.form-error').textContent = '';
        });
    });
    
    // Validation functions
    function validateName() {
        const value = nameInput.value.trim();
        if (value.length < 2) {
            showError('name', 'Name must be at least 2 characters long');
            return false;
        }
        clearFieldError('name');
        return true;
    }
    
    function validateEmail() {
        const value = emailInput.value.trim();
        if (!emailRegex.test(value)) {
            showError('email', 'Please enter a valid email address');
            return false;
        }
        clearFieldError('email');
        return true;
    }
    
    function validateSubject() {
        const value = subjectInput.value.trim();
        if (value.length < 3) {
            showError('subject', 'Subject must be at least 3 characters long');
            return false;
        }
        clearFieldError('subject');
        return true;
    }
    
    function validateMessage() {
        const value = messageInput.value.trim();
        if (value.length < 10) {
            showError('message', 'Message must be at least 10 characters long');
            return false;
        }
        clearFieldError('message');
        return true;
    }
    
    function showError(fieldName, message) {
        const input = document.getElementById(fieldName);
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.form-error');
        
        formGroup.classList.add('error');
        errorElement.textContent = message;
        input.setAttribute('aria-invalid', 'true');
    }
    
    function clearFieldError(fieldName) {
        const input = document.getElementById(fieldName);
        const formGroup = input.closest('.form-group');
        const errorElement = formGroup.querySelector('.form-error');
        
        formGroup.classList.remove('error');
        errorElement.textContent = '';
        input.removeAttribute('aria-invalid');
    }
    
    // Handle form submission
    contactForm.addEventListener('submit', (e) => {
        // Validate all fields before submitting
        const isValid = [
            validateName(),
            validateEmail(),
            validateSubject(),
            validateMessage()
        ].every(result => result === true);
        
        if (!isValid) {
            e.preventDefault();
            console.log('Form validation failed');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        submitBtn.querySelector('span').textContent = 'Sending...';
        submitBtn.disabled = true;
        
        // Form will submit to FormSubmit naturally
        // FormSubmit will send email and redirect to a thank you page
        console.log('Form submitted successfully to FormSubmit');
    });
});
