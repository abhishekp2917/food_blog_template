// opening menu
const openMenu = (element, index) => {

    var option = document.querySelectorAll("#menu div div div")
    var menu = document.querySelectorAll("#menu div ul")
    var i

    for(i=0; i<option.length; ++i){
        option[i].classList.remove("menu-option-active")
        menu[i].classList.remove("menu-active")
    }

    element.classList.add("menu-option-active")
    menu[index].classList.add("menu-active")
}