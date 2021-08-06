const imgMenuItems = document.getElementById("img-menu-items")
const menuItems = document.getElementById("menu-items")

imgMenuItems.addEventListener("click", ()=>{
    menuItems.classList.toggle("mobile-bar-active")
})
