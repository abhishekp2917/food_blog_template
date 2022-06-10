// opening menu
const openMenu = (element, index) => {

    let option = document.querySelectorAll("#menu div div div")
    let menu = document.querySelectorAll("#menu div ul")

    for(let i=0; i<option.length; ++i){
        option[i].classList.remove("menu-option-active")
        menu[i].classList.remove("menu-active")
    }

    element.classList.add("menu-option-active")
    menu[index].classList.add("menu-active")
}