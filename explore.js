document.addEventListener('DOMContentLoaded', function() {
    // Search functionality
    const searchBox = document.querySelector('.search-box input');
    const searchContainer = document.querySelector('.search-box');

    searchBox.addEventListener('focus', function() {
        searchContainer.classList.add('active');
    });

    searchBox.addEventListener('blur', function() {
        if (this.value === '') {
            searchContainer.classList.remove('active');
        }
    });

    searchBox.addEventListener('input', function() {
        // Implement search logic here
        console.log('Searching for:', this.value);
    });

    // Recipe button functionality
    const recipeButtons = document.querySelectorAll('.btnrecipe');
    recipeButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Recipe button clicked');
            // Implement recipe action here
        });
    });

    // Share button functionality
    const shareButtons = document.querySelectorAll('.btnrecipe2');
    shareButtons.forEach(button => {
        button.addEventListener('click', function() {
            console.log('Share button clicked');
            // Implement share action here
        });
    });

    // Smooth scrolling for footer links
    const footerLinks = document.querySelectorAll('footer a');
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
