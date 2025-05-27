
const header_nav = document.getElementById("header_nav_mas_opciones");
const btn_menu = document.getElementById("btn_menu_header");
//const header_nav_lista = document.getElementById("header_nav_lista");


//mostrarHeadrerlateral
btn_menu.addEventListener("click", () => {
    header_nav.classList.toggle("header_nav_mas_opciones_active")


})


const btn_muestros_platos = document.getElementById("btn_mostrarPlatos");
const main_presentacion = document.querySelector(".main-presentacion");
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

const platosDesdeAPI = [
    { id: 1, titulo: "Pizza", imagen: "https://images.app.goo.gl/ybNpkEEXyhgHU1ScA", precio: 12000, descripcion: "Deliciosa pizza con ingredientes frescos y masa artesanal." },
    { id: 2, titulo: "Hamburguesa", imagen: "https://images.app.goo.gl/S4UFFySQLMdmxK5R7", precio: 10000, descripcion: "Jugosa hamburguesa con doble carne y queso cheddar." },
    { id: 3, titulo: "Ensalada César", imagen: "https://images.app.goo.gl/JVzK5fk6EbcKqZBKA", precio: 8000, descripcion: "Ensalada fresca con pollo, crutones y aderezo césar." },
    { id: 4, titulo: "Sushi", imagen: "img/sushi.jpg", precio: 15000, descripcion: "Rollos de sushi con salmón fresco y aguacate." },
    { id: 5, titulo: "Tacos", imagen: "img/tacos.jpg", precio: 9000, descripcion: "Tacos mexicanos con carne al pastor y salsa picante." },
    { id: 6, titulo: "Pollo Frito", imagen: "img/pollofrito.jpg", precio: 11000, descripcion: "Crujiente pollo frito con papas a la francesa." },
    { id: 7, titulo: "Lasaña", imagen: "img/lasagna.jpg", precio: 13000, descripcion: "Lasaña con carne, bechamel y mucho queso." },
    { id: 8, titulo: "Arepas Rellenas", imagen: "img/arepas.jpg", precio: 7000, descripcion: "Arepas rellenas con queso, pollo y guacamole." },
    { id: 9, titulo: "Pasta Alfredo", imagen: "img/alfredo.jpg", precio: 12500, descripcion: "Pasta en salsa alfredo con pollo y champiñones." },
    { id: 10, titulo: "Empanadas", imagen: "img/empanadas.jpg", precio: 6000, descripcion: "Empanadas de carne y pollo con ají casero." },
    { id: 11, titulo: "Churrasco", imagen: "img/churrasco.jpg", precio: 18000, descripcion: "Churrasco de res con yuca frita y ensalada." },
    { id: 12, titulo: "Ramen", imagen: "img/ramen.jpg", precio: 14000, descripcion: "Ramen japonés con huevo, cerdo y vegetales." },
    { id: 13, titulo: "Ceviche", imagen: "img/ceviche.jpg", precio: 12000, descripcion: "Ceviche de camarón con limón y cilantro." },
    { id: 14, titulo: "Croissant", imagen: "img/croissant.jpg", precio: 4000, descripcion: "Croissant de mantequilla recién horneado." },
    { id: 15, titulo: "Sopa de Mariscos", imagen: "img/sopamariscos.jpg", precio: 13000, descripcion: "Sopa caliente con variedad de mariscos frescos." },
    { id: 16, titulo: "Perro Caliente", imagen: "img/perro.jpg", precio: 8500, descripcion: "Hot dog con todos los ingredientes." },
    { id: 17, titulo: "Pancakes", imagen: "img/pancakes.jpg", precio: 9000, descripcion: "Pancakes con miel y frutas." },
    { id: 18, titulo: "Brownie con Helado", imagen: "img/brownie.jpg", precio: 9500, descripcion: "Brownie caliente con bola de helado de vainilla." },
    { id: 19, titulo: "Churros", imagen: "img/churros.jpg", precio: 5000, descripcion: "Churros rellenos de arequipe y azúcar." },
    { id: 20, titulo: "Helado de Frutas", imagen: "img/helado.jpg", precio: 6000, descripcion: "Helado artesanal de mango, fresa y piña." }
];
const add_car_btn = document.querySelectorAll(".add-car-btn");


//cargar platpos al inicio
function cargarPlatosHome() {




    const contenedor_platos = document.querySelector(".main-nuestros-platos-contenido");
    contenedor_platos.innerHTML = "";


    platosDesdeAPI.slice(0, 8).forEach(plato => {


        let contenedor_platos_actual = `  
                    <div class="main-nuestros-platos-item">
                        <div class="plato-detalle" data-id="${plato.id}">

                            <h3 class="plato-detalle-titulo">${plato.titulo}</h3>
                            <img src="img/pizza.jpg" alt="">
                            <p class="plato-detalle-precio">Precio: $ ${plato.precio}</p>
                            <div class="plato-detalle-descripcion">
                                <p class="plato-descripcion">${plato.descripcion}</p>
                            </div>
                            <div class="plato-detalle-botones">
                                <div class="plato-detalle-botones-add-car">
                                    <button class="add-car-btn" data-id="${plato.id}">Agregar al Carrito<i
                                            class="bi bi-bag-plus-fill"></i></button>
                                    <div class="plato-detalle-cantidad">
                                        <input type="number" name="" id="" class="cantidad-producto" min="1" step="1"
                                            value="1">
                                        <p class="plato-detalle-cantidad">Cantidad</p>
                                    </div>
                                </div>

                                <button class="plato-detalle-botones-show-details">Ver Detalles <i
                                        class="bi bi-eye-fill"></i></button>
                            </div>
                        </div> `;

        contenedor_platos.insertAdjacentHTML("beforeend", contenedor_platos_actual);



    });

    const botonesAgregard = document.querySelectorAll(".add-car-btn");

    botonesAgregard.forEach(btn => {
        btn.addEventListener("click", (e) => {
            console.log(e.target.getAttribute("data-id"))
            mostrarDetallesPlato();
        })
    });






}
cargarPlatosHome();


//mostrar platos secion nuestros platos
function nuestrosPlatos() {


    const contenedor_platos = document.querySelector(".main-nuestros-platos-contenido");

    contenedor_platos.innerHTML = "";

    platosDesdeAPI.forEach(plato => {


        let contenedor_platos_actual = `  
                    <div class="main-nuestros-platos-item">
                        <div class="plato-detalle" data-id="${plato.id}">

                            <h3 class="plato-detalle-titulo">${plato.titulo}</h3>
                            <img src="img/pizza.jpg" alt="">
                            <p class="plato-detalle-precio">Precio: $ ${plato.precio}</p>
                            <div class="plato-detalle-descripcion">
                                <p class="plato-descripcion">${plato.descripcion}</p>
                            </div>
                            <div class="plato-detalle-botones">
                                <div class="plato-detalle-botones-add-car">
                                    <button class="add-car-btn" data-id="${plato.id}">Agregar al Carrito<i
                                            class="bi bi-bag-plus-fill"></i></button>
                                    <div class="plato-detalle-cantidad">
                                        <input type="number" name="" id="" class="cantidad-producto" min="1" step="1"
                                            value="1">
                                        <p class="plato-detalle-cantidad">Cantidad</p>
                                    </div>
                                </div>

                                <button class="plato-detalle-botones-show-details">Ver Detalles <i
                                        class="bi bi-eye-fill"></i></button>
                            </div>
                        </div> `;

        contenedor_platos.insertAdjacentHTML("beforeend", contenedor_platos_actual);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });



    main_presentacion.style.display = "none";


}

btn_muestros_platos.addEventListener("click", () => {

    nuestrosPlatos();
})


function mostrarDetallesPlato() {

    main_presentacion.innerHTML = "";

    let DetallesPlato = `
    <div class="main-presentacion-descipcion">
                    <h2 class="main-presentacion-descipcion-titulo"> Detalles del plato
                    </h2>
                    <p class="main-presentacion-descipcion-subtitulo">Sabores únicos y frescos que te harán sentir bien
                        por dentro y por fuera. Descubre un menú creado para cuidarte sin renunciar al placer.</p>
                    <button class="main-presentacion-descipcion-btn-ver-menu"><i class="bi bi-book-half"></i>Ver
                        Menú</button>
                </div>
                <img src="img/hamburguesa.jpg" alt="" class="hamburguesa">
    `

    main_presentacion.insertAdjacentHTML("beforeend", DetallesPlato)
}









