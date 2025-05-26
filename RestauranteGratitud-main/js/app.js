
const header_nav = document.getElementById("header_nav_mas_opciones");
const btn_menu = document.getElementById("btn_menu_header");
//const header_nav_lista = document.getElementById("header_nav_lista");

btn_menu.addEventListener("click", () => {
    header_nav.classList.toggle("header_nav_mas_opciones_active")


})

let plato = {

    nombre: "sospa de pollo",
    precio: "12500",
    imagen: "https://www.chefzeecooks.com/wp-content/uploads/2019/03/Sopa_de_Pollo_web2.jpg"
}

function MostralPlatos() {



    const nombrepalto = document.getElementById("nombre-prdocuto");
    nombrepalto.innerHTML = plato.nombre;
    const precio = document.getElementById("precio-producto");
    precio.innerHTML = plato.precio;
    const imagen = document.getElementById("imagen_plato");
    imagen.src = plato.imagen;


}

const btn_mostrar_menu = document.getElementById("btn_mostrarPlatos");
btn_mostrar_menu.addEventListener("click", (e) => {
    e.preventDefault();
    MostralPlatos();

})




