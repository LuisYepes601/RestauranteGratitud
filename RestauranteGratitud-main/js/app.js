
const header_nav = document.getElementById("header_nav_mas_opciones");
const btn_menu = document.getElementById("btn_menu_header");
//const header_nav_lista = document.getElementById("header_nav_lista");


//mostrarHeadrerlateral
btn_menu.addEventListener("click", () => {
    header_nav.classList.toggle("header_nav_mas_opciones_active")


})

let plato = {

    nombre: "sospa de pollo",
    precio: "12500",
    imagen: "https://www.chefzeecooks.com/wp-content/uploads/2019/03/Sopa_de_Pollo_web2.jpg"
}

const btn_muestros_platos = document.getElementById("btn_mostrarPlatos");
const main_presentacion = document.getElementById("main-presentacion");
const btn_sobre_nosoros = document.getElementById("btn-sobre-nosoros");


function MostralPlatos() {


}


btn_muestros_platos.addEventListener("click", (e) => {
    e.preventDefault();
    main_presentacion.style.display = "none"
})
MostralPlatos();

const btn_mostrar_menu = document.getElementById("btn_mostrarPlatos");
btn_mostrar_menu.addEventListener("click", (e) => {
    e.preventDefault();
    MostralPlatos();

})




