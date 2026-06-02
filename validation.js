// Basic form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

function validatePassword(password) {
    return password.length >= 6;
}

function getFieldValue(form, selectors) {
    for (const selector of selectors) {
        const field = form.querySelector(selector);
        if (field) {
            return field.value.trim();
        }
    }
    return '';
}

function validateForm(form) {
    const email = getFieldValue(form, ['[name="email"]', 'input[type="email"]', '#email']);
    const password = getFieldValue(form, ['[name="password"]', 'input[type="password"]', '#password']);
    const confirmPassword = getFieldValue(form, ['[name="confirm_password"]', '[name="confirmPassword"]', '#confirm_password', '#confirmPassword']);

    if (email && !validateEmail(email)) {
        alert('Invalid email address');
        return false;
    }

    if (password && !validatePassword(password)) {
        alert('Password must be at least 6 characters');
        return false;
    }

    if (confirmPassword && password !== confirmPassword) {
        alert('Passwords do not match');
        return false;
    }

    return true;
}

// Attach validation to forms when the DOM is ready
document.addEventListener('DOMContentLoaded', function() {
    const forms = document.querySelectorAll('form');

    forms.forEach(form => {
        form.addEventListener('submit', function(e) {
            if (!validateForm(form)) {
                e.preventDefault();
            }
        });
    });
});