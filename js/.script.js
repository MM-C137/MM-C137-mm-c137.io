const linkRede = document.getElementById("link-redes")
const containerRede = document.getElementById("container-rede")
const AsOfcontainerRede = document.querySelector("#rede-menu li a")
const imgMenuItems = document.getElementById("img-menu-items")
const menuItems = document.getElementById("menu-items")

linkRede.addEventListener("mouseenter", ()=>{
    containerRede.style.display = 'block'
})

containerRede.addEventListener("mouseenter", ()=>{
    containerRede.style.display = 'block'
})

linkRede.addEventListener("mouseout", ()=>{
    containerRede.style.display = 'none'
})

containerRede.addEventListener("mouseout", ()=>{
    containerRede.style.display = 'none'
})

imgMenuItems.addEventListener("click", ()=>{
    menuItems.classList.add("mobile-bar-active")
})
