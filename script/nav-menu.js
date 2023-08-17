const toggleButton = document.querySelector('.toggle-button');
const closeButton = document.querySelector('.close-button');
const mobileNav = document.querySelector('nav ul');
const navItem = document.querySelectorAll('li a');

const Display = () => {
    mobileNav.style.display = 'block';
    closeButton.style.display = 'block';
};

const Close = () => {
    mobileNav.style.display = 'none';
    closeButton.style.display = 'none';
}

// When pressed toggle button then mobile navmenu should appear
toggleButton.addEventListener('click', () => {
    Display();
});

// When pressed clicked on close button, the mobile navmenu should disappear

closeButton.addEventListener('click', () => {
    Close();
});

// When clicked on navitems the mobile navmenu should close;
// Attach click event listeners to each nav item
navItem.forEach(navItem => {
    navItem.addEventListener('click', () => {
        if (window.innerWidth < 876) // Adjust the breakpoint as needed
            Close();
    });
});
