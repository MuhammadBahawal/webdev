// This file contains JavaScript code for handling animations and interactivity on the navigation bar and login page.

document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    // Toggle navigation menu visibility
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });

    // Form validation for login page
    const loginForm = document.querySelector('#loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            const username = document.querySelector('#username').value;
            const password = document.querySelector('#password').value;

            if (!username || !password) {
                event.preventDefault();
                alert('Please fill in all fields.');
            }
        });
    }

    // Animation effects for form elements
    const formElements = document.querySelectorAll('.form-element');
    formElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.classList.add('focused');
        });
        element.addEventListener('blur', function() {
            if (!this.value) {
                this.classList.remove('focused');
            }
        });
    });
});