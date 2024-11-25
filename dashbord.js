const openCloseButton = document.getElementById("open-close-btn");
const opensideNavBar = document.getElementById("side-nav-bar");
const navLink = document.querySelectorAll(".navLink");
const overlay = document.getElementById("overlay");

openCloseButton.addEventListener('click', function() {

    handleCloseButton(opensideNavBar, 'close');
    const title = document.querySelectorAll(".title");
    title.forEach(element => {
        handleCloseButton(element, 'showTitle');
    });
    overlay.classList.remove('h');
    overlay.classList.toggle('showSlide');

});


function handleCloseButton(element, toggleClass) {
    element.classList.toggle(toggleClass);
}

navLink.forEach(element => {
    element.addEventListener("click", function(){
        navLink.forEach(element => element.classList.remove('active'));
        this.classList.add('active');
    });
});

overlay.addEventListener("click", function(){
    opensideNavBar.classList.remove('close');
    const title = document.querySelectorAll(".title");
    title.forEach(element => {
        handleCloseButton(element, 'showTitle');
    });
    overlay.classList.add('h');
    overlay.classList.remove('showSlide');
});