document.addEventListener('DOMContentLoaded', function() {
    // Form validation
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', function(event) {
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (!name || !email || !message) {
            alert('All fields are required.');
            event.preventDefault();
        } else if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault();
        }
    });

    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }

    // Dynamic content update
    const dynamicContentButton = document.getElementById('dynamicContentButton');
    dynamicContentButton.addEventListener('click', function() {
        const dynamicContent = document.getElementById('dynamicContent');
        dynamicContent.innerHTML = '<p>This is additional dynamic content loaded on button click.</p>';
    });
});
