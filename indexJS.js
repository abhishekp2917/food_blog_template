
function openSideNav(){
    const sideNav = document.getElementById("side-nav");
    sideNav.style.left = "0";
    sideNav.classList.add("shadow");
}

function closeSideNav(){
    const sideNav = document.getElementById("side-nav");
    sideNav.style.left = "-100%";
    sideNav.classList.remove("shadow");
}