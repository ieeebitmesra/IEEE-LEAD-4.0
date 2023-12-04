// Add this to the existing JavaScript
const body = document.body;
const darkModeToggle = document.getElementById('darkModeToggle');

function toggleDarkMode() {
    body.classList.toggle('dark-mode');
    updateToggleButtonText();
}

function updateToggleButtonText() {
    const isDarkMode = body.classList.contains('dark-mode');
    darkModeToggle.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';
}

// Optional: Check user's preference for dark mode
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    toggleDarkMode();
}


function updateToggleButtonText() {
    const isDarkMode = body.classList.contains('dark-mode');
    const darkModeIcon = document.getElementById('darkModeIcon');
    const lightModeIcon = document.getElementById('lightModeIcon');

    darkModeIcon.style.display = isDarkMode ? 'inline-block' : 'none';
    lightModeIcon.style.display = isDarkMode ? 'none' : 'inline-block';
}

// Update the button icons initially
updateToggleButtonText();
// Add this to the existing JavaScript
const goToTopBtn = document.getElementById('goToTopBtn');

window.onscroll = function () {
    showGoToTopButton();
};

function showGoToTopButton() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        goToTopBtn.style.display = 'block';
    } else {
        goToTopBtn.style.display = 'none';
    }
}

function goToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
