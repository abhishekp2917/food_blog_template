
function openSideNav(){
    const sideNav = document.getElementById("side-nav");
    sideNav.style.left = "0";
    sideNav.classList.add("shadow");
}

function closeSideNav(){
    const sideNav = document.getElementById("side-nav");
    sideNav.style.left = "-1000%";
    sideNav.classList.remove("shadow");
}