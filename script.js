function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    // inbuilt system that taragets tthe element on the webpage and using the element on the page.
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    // add a class list, using the inbuilt function toggle and adding the open class.
    icon.classList.toggle("open");
}

function iconClick(){
    window.location.replace("./")
}

