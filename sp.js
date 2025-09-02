const menu = document.getElementById("puxa_menu")
const menu_pag = document.querySelectorAll(".menu_pag")



menu.addEventListener("click", ()=>{
menu_pag.forEach((el)=>{
el.classList.toggle("menu_block")

})
})