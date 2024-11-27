
const sidebarShow = document.querySelector(".dashbord-top-nav-btn");
const dashbordSidenav = document.getElementById("dashbordSidenav");
const overlay = document.querySelector(".overlay");

sidebarShow.addEventListener("click", () => {
    document.body.classList.toggle("hide-scroll");
    dashbordSidenav.classList.toggle("w-230");
    dashbordSidenav.classList.toggle("translateX-0");
    document.querySelector(".content").classList.toggle("m-235");
    document.querySelector(".dashbord-top-nav").classList.toggle("m-235");
    document.querySelector(".dashbord-top-nav").classList.toggle("top_nav_w_230");
    overlay.classList.toggle("overlay-effect");

    document.querySelectorAll(".dashbord-sidebar-tittle").forEach(title => {
        title.classList.toggle("showTitle");
    });
})

overlay.addEventListener('click', () => {
    document.body.classList.remove("hide-scroll");
    dashbordSidenav.classList.remove("w-230");
    dashbordSidenav.classList.remove("translateX-0");
    overlay.classList.remove("overlay-effect");

    document.querySelectorAll(".dashbord-sidebar-tittle").forEach(title => {
        title.classList.remove("showTitle");
    });
});

//Select the sidebar all navlinks
const sidebarNavLink = document.querySelectorAll(".dashbord-sidebar-link");

// Function to set active link based on index
function setActiveLink(index) {
sidebarNavLink.forEach((link, i) => {
        link.classList.remove('active-navlink'); // Remove active class from all links
        if (i === index) {
            link.classList.add('active-navlink'); // Add active class to the current link
        }
    });
}

// Load active link index from localStorage on page load
window.addEventListener('load', () => {
    const activeIndex = localStorage.getItem('activeLinkIndex'); // Get the active link index from localStorage
    if (activeIndex !== null) {
        setActiveLink(parseInt(activeIndex)); // Set the active link if it exists
    }
});

// Add click event listeners to each link
sidebarNavLink.forEach((link, index) => {
    link.addEventListener('click', function() {
        localStorage.setItem('activeLinkIndex', index); // Save the active link index to localStorage
        setActiveLink(index); // Set the active link
    });
});