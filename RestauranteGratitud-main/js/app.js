
const header_nav = document.getElementById("header_nav_mas_opciones");
const btn_menu = document.getElementById("btn_menu_header");
//const header_nav_lista = document.getElementById("header_nav_lista");

let carritoDeCompras = [];


//mostrarHeadrerlateral
btn_menu.addEventListener("click", () => {
    header_nav.classList.toggle("header_nav_mas_opciones_active")


})


const btn_muestros_platos = document.getElementById("btn_mostrarPlatos");
const main_presentacion = document.querySelector(".main-presentacion");
const btn_sobre_nosoros = document.getElementById("btn-sobre-nosoros");



btn_muestros_platos.addEventListener("click", (e) => {
    e.preventDefault();
    main_presentacion.style.display = "none"
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

                                <button class="plato-detalle-botones-show-details" data-id="${plato.id}">Ver Detalles <i
                                        class="bi bi-eye-fill"></i></button>
                            </div>
                        </div> `;

        contenedor_platos.insertAdjacentHTML("beforeend", contenedor_platos_actual);



    });

    const botonesMostarDetalles = document.querySelectorAll(".plato-detalle-botones-show-details");

    botonesMostarDetalles.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            plato = e.target.getAttribute("data-id");
            mostrarDetallesPlato(plato);



        })
    });

    const btn_menu_home = document.querySelector(".main-presentacion-descipcion-btn-ver-menu");

    btn_menu_home.addEventListener("click", (e) => {
        e.preventDefault();
        nuestrosPlatos();

        window.scrollTo({
            top: document.body.scrollHeight * 0.15,
            behavior: "smooth"
        });

    });



    agregarCarrito();

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

                                <button class="plato-detalle-botones-show-details" data-id = "${plato.id}">Ver Detalles <i
                                        class="bi bi-eye-fill"></i></button>
                            </div>
                        </div> `;

        contenedor_platos.insertAdjacentHTML("beforeend", contenedor_platos_actual);

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });



    const botonesMostarDetalles = document.querySelectorAll(".plato-detalle-botones-show-details");


    botonesMostarDetalles.forEach(btn => {
        btn.addEventListener("click", (e) => {
            plato = e.target.closest("button").getAttribute("data-id");
            mostrarDetallesPlato(plato);
            main_presentacion.style.display = "block";




        })
    });



    agregarCarrito();






}

btn_muestros_platos.addEventListener("click", () => {

    nuestrosPlatos();
})


function mostrarDetallesPlato(plato) {

    let platoActual = platosDesdeAPI.find(platos => platos.id === Number(plato))

    main_presentacion.innerHTML = "";

    let DetallesPlato = `
     <section class="main-presentacion-ver-detalles">
    <div class="main-detalle-plato">
                    <h2 class="main-detalle-plato-nombre">Hamburguesa</h2>
                    <p class="main-detalle-plato-descripcion">Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                        Porro eaque error excepturi beatae amet cum alias repellat optio voluptas, vel non fugiat
                        aliquid est dolorum totam neque ducimus! Debitis, odit.</p>
                    <p class="plato-detalle-precio">Precio: $ ${platoActual.precio}</p>

                    <ul class="plato-detalle-atributos">
                        <li><strong>Sabor:</strong> Jugoso, con un toque ahumado y ligeramente picante.</li>
                        <li><strong>Textura:</strong> Crujiente por fuera y suave por dentro.</li>
                        <li><strong>Presentación:</strong> Acompañada con papas fritas y ensalada fresca.</li>
                        <li><strong>Porción:</strong> 1 unidad grande.</li>
                        <li><strong>Peso:</strong> Aproximadamente 250 gramos.</li>
                    </ul>

                    <div class="plato-detalle-botones-add-car plato-detalle-botones-add-car-ver-detalles">
                        <button class="add-car-btn" data-id="${platoActual.id}">Agregar al Carrito<i class="bi bi-bag-plus-fill"></i></button>
                        <div class="plato-detalle-cantidad">
                            <input type="number" name="" id="" class="cantidad-producto" min="1" step="1" value="1">
                            <p class="plato-detalle-cantidad">Cantidad</p>
                        </div>
                    </div>

                </div>

                <img src="img/hamburguesa.jpg" alt="" class="hamburguesa hamburguesa-ver-detalles">
                   </section>

    `

    main_presentacion.insertAdjacentHTML("beforeend", DetallesPlato);




    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });


    const btn_add_car = document.querySelector(".add-car-btn");
    btn_add_car.addEventListener("click", (e) => {
        let id_plato = e.target.getAttribute("data-id");

        let platoCarrito = carritoDeCompras.find(plato => Number(plato.id) === Number(id_plato))
        let plato = platosDesdeAPI.find(plato => Number(plato.id) === Number(id_plato))
        let plato_contenedor = e.target.closest(".plato-detalle-botones-add-car");
        let input_cantidad = plato_contenedor.querySelector(".cantidad-producto").value;
        let input_cantidad_contenedor = plato_contenedor.querySelector(".cantidad-producto")





        if (platoCarrito) {
            platoCarrito.cantidad += Number(input_cantidad);
            platoCarrito.precio = plato.precio * Number(input_cantidad)
            mostrarCarrito();
            input_cantidad_contenedor.value = 1;
            return;

        } else {
            carritoDeCompras.push({ id: plato.id, precio: plato.precio * Number(input_cantidad), cantidad: Number(input_cantidad) });
            mostrarCarrito();
        }


    })
}



function agregarCarrito() {
    const btn_carrito = document.querySelectorAll(".add-car-btn");
    const carrito = document.querySelector(".carrito-general-contenido");
    const carritoj = document.querySelector(".carrito-contenedor");
    const btn_vaciar_pedido = document.querySelector(".carrito-contenedor-pedidos-btn-vaciar");
    const btn_realizar_pedido = document.querySelector(".carrito-contenedor-pedidos-btn-realizar-pedido");
    const carrito_vacio = document.querySelector(".carrito-contenedor-vacio");




    btn_carrito.forEach(btn => {


        btn.addEventListener("click", (e) => {


            id_producto = e.target.getAttribute("data-id");
            const cantidad_producto = e.target.closest(".plato-detalle-botones").querySelector(".cantidad-producto").value;
            const plato = platosDesdeAPI.find(plato => Number(plato.id) === Number(id_producto));
            exixteProducto = carritoDeCompras.find(plato => Number(plato.id) === Number(id_producto));




            if (exixteProducto) {
                exixteProducto.cantidad = Number(cantidad_producto);
                exixteProducto.precio = plato.precio * exixteProducto.cantidad;
                mostrarCarrito();


                return;

            } else {
                carritoDeCompras.push({ id: id_producto, cantidad: Number(cantidad_producto), precio: plato.precio * cantidad_producto });
                mostrarCarrito();



            }












        })
       
    });

    const inputsCantidad = document.querySelectorAll(".cantidad-producto");

    inputsCantidad.forEach(input => {
        input.addEventListener("input", (e) => {
            const cantidad = Number(e.target.value);
            const cantidad_input = Number(e.target.value)
            const id_producto = e.target.closest(".plato-detalle-botones").querySelector(".add-car-btn").getAttribute("data-id");
            const plato = platosDesdeAPI.find(plato => Number(plato.id) === Number(id_producto));
            const exixteProducto = carritoDeCompras.find(plato => Number(plato.id) === Number(id_producto));

            if (exixteProducto) {
                exixteProducto.cantidad = cantidad;
                exixteProducto.precio = plato.precio * cantidad;



            } else if (cantidad > 0) {
                carritoDeCompras.push({ id: id_producto, cantidad: cantidad, precio: plato.precio * cantidad });
            }

            mostrarCarrito();

        });
    });




    document.addEventListener("input", (e) => {
        if (e.target.classList.contains("carrito-input-cantidad")) {
            const cantidadValue = Number(e.target.value);
            const id_producto = e.target.closest(".carrito-contenedor-articulo-cantidad").getAttribute("data-id");

            const platoActual = platosDesdeAPI.find(plato => Number(plato.id) === Number(id_producto));
            const platoexiste = carritoDeCompras.find(plato => Number(plato.id) === Number(id_producto));

            if (platoexiste) {

                platoexiste.cantidad = cantidadValue;
                const precioUnitario = platoActual.precio;
                platoexiste.precio = precioUnitario * cantidadValue;

                mostrarCarrito();


            }


        }
    });





    carritoDeCompras.forEach(element => {
        alert(element.id)
    });

}

agregarCarrito();




function eliminarProductoCarrito(id_plato) {

    //plato = platosDesdeAPI.find(plato => Number(plato.id) === Number(id_plato));
    carritoDeCompras = carritoDeCompras.filter(producto => Number(producto.id) !== Number(id_plato));

    mostrarCarrito();

}



function mostrarCarrito() {

    const carrito = document.querySelector(".carrito-contenedor");



    carrito.innerHTML = ` <div class="carrito-general-contenido">
            <div class="carrito-contenedor-presentacion">
                <h2 class="carrito-contenedor-titulo">Carrito de Compras</h2>
                <button class="carrito-contenedor-presentacion-btn-salir"><i
                        class="bi bi-x-circle-fill"></i>Salir</button>
            </div>

            
            <div class="carrito-contenedor-vacio">
                <img src="img/carro-vacio.png" alt="" class="carrito-contenedor-vacio-imagen">
                <h3 class="carrito-contenedor-vacio-titulo"><strong>Tu carrito está vacío... </strong><br>¡es hora de llenarlo con sabor!</h3>
            </div>

            <div class="carrito-contenedor-pedidos">
                <button class="carrito-contenedor-pedidos-btn-vaciar">Vaciar carrito</button>
                <button class="carrito-contenedor-pedidos-btn-realizar-pedido">Realizar Pedido</button>
            </div>
        </div>`;

    const btn_vaciar_pedido = document.querySelector(".carrito-contenedor-pedidos-btn-vaciar");
    const btn_realizar_pedido = document.querySelector(".carrito-contenedor-pedidos-btn-realizar-pedido");
    const carrito_vacio = document.querySelector(".carrito-contenedor-vacio");


    if (carritoDeCompras.length === 0) {

        btn_vaciar_pedido.style.display = "none";
        btn_realizar_pedido.style.display = "none";
    } else {
        carrito_vacio.style.display = "none";
        btn_vaciar_pedido.style.display = "block";
        btn_realizar_pedido.style.display = "block";
    }

    carrito.style.display = "block";
    carritoDeCompras.forEach(plato => {

        let producto = `
              <div class="carrito-contenedor-articulo">
                <div class="carrito-contenedor-articulo-presentacion">
                    <h3 class="carrito-contenedor-articulo-nombre">${plato.id}</h3>
                    <img src="img/hamburguesa.jpg" alt="" style="width: 100px;"
                        class="carrito-contenedor-articulo-imagen">
                </div>
                <p class="carrito-contenedor-articulo-descripcion"><strong>Descripción</strong>Lorem ipsum dolor sit
                    amet
                    consectetur adipisicing elit. Fugiat eos, voluptates porro quo commodi, eaque sit sint unde ea fuga
                </p>
                <div class="carrito-contenedor-articulo-precio-detalles">
                    <div class="carrito-contenedor-articulo-precio">

                        <h4 class="carrito-contenedor-articulo-precio-titulo">Precio:</h4>
                        <p class="carrito-contenedor-articulo-precio-item">$${plato.precio}</p>
                    </div>

                    <div class="carrito-contenedor-articulo-cantidad " data-id="${plato.id}">
                        <h4>Cantidad</h4><input type="number" name="" id="" step="1" min="1" value ="${plato.cantidad}" class="carrito-input-cantidad">

                    </div>
                    <div class="carrito-contenedor-articulo-delete">
                        <button class="carrito-contenedor-btn-delete" data-id ="${plato.id}"><i class="bi bi-trash-fill"></i></button>
                    </div>

                </div>


            </div>`

        carrito.insertAdjacentHTML("beforeend", producto);






    });

    let pedido_total = `  <div class="carrito-contenedor-precio-total">
                <h2 class="total-pagar-titulo">Total a Pagar</h2>
                <p class="total-pagar-cantidad">$: 100000 </p>
            </div>`

    carrito.insertAdjacentHTML("beforeend", pedido_total);

    const btn_delete_plato = document.querySelectorAll(".carrito-contenedor-btn-delete");
    btn_delete_plato.forEach(plato => {

        plato.addEventListener("click", (e) => {
            const boton = e.target.closest(".carrito-contenedor-btn-delete");
            if (boton) {
                const id_plato = boton.getAttribute("data-id");
                eliminarProductoCarrito(id_plato);
            }


        })
    });



    salirCarrito();
    vaciarCarrito();

}






/* function agregarCarrito() {
    const btn_carrito = document.querySelectorAll(".add-car-btn");
    const carrito = document.querySelector(".carrito-general-contenido");
    const carritoj = document.querySelector(".carrito-contenedor");
    const btn_vaciar_pedido = document.querySelector(".carrito-contenedor-pedidos-btn-vaciar");
    const btn_realizar_pedido = document.querySelector(".carrito-contenedor-pedidos-btn-realizar-pedido");
    const carrito_vacio = document.querySelector(".carrito-contenedor-vacio");




    btn_carrito.forEach(btn => {
        btn.addEventListener("click", (e) => {

            id_producto = e.target.getAttribute("data-id");
            alert(id_producto)

            const productoExiste = carritoDeCompras.find(plato => Number(plato.id) === Number(id_producto));
            const cantidad_producto = 0;

















        })
    });

    const inputsCantidad = document.querySelectorAll(".cantidad-producto");

    inputsCantidad.forEach(input => {
        input.addEventListener("input", (e) => {
            const cantidad = Number(e.target.value);
            const id_producto = e.target.closest(".plato-detalle-botones").querySelector(".add-car-btn").getAttribute("data-id");
            const plato = platosDesdeAPI.find(plato => Number(plato.id) === Number(id_producto));
            const exixteProducto = carritoDeCompras.find(plato => Number(plato.id) === Number(id_producto));

            if (exixteProducto) {
                exixteProducto.cantidad = cantidad;
                exixteProducto.precio = plato.precio * cantidad;
            } else if (cantidad > 0) {
                carritoDeCompras.push({ id: id_producto, cantidad: cantidad, precio: plato.precio * cantidad });
            }

            mostrarCarrito();
        });
    });




    document.addEventListener("input", (e) => {
        if (e.target.classList.contains("carrito-input-cantidad")) {
            const cantidadValue = Number(e.target.value);
            const id_producto = e.target.closest(".carrito-contenedor-articulo-cantidad").getAttribute("data-id");

            const platoActual = platosDesdeAPI.find(plato => Number(plato.id) === Number(id_producto));
            const platoexiste = carritoDeCompras.find(plato => Number(plato.id) === Number(id_producto));

            if (platoexiste) {

                platoexiste.cantidad = cantidadValue;
                const precioUnitario = platoActual.precio;
                platoexiste.precio = precioUnitario * cantidadValue;

                mostrarCarrito();


            }


        }
    });





} */









function salirCarrito() {
    const btn_salir = document.querySelector(".carrito-contenedor-presentacion-btn-salir");
    const carrito = document.querySelector(".carrito-contenedor");

    btn_salir.addEventListener("click", (e) => {
        e.preventDefault();
        carrito.style.display = "none";
    })



}
salirCarrito();

const btn_home = document.querySelector(".btn_home");

btn_home.addEventListener("click", (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
})


const btn_mostrarCarrito = document.querySelector(".btn_mostrar-carrito");

btn_mostrarCarrito.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarCarrito();
    vaciarCarrito();
})


function vaciarCarrito() {
    const btn_vaciar_carrito = document.querySelector(".carrito-contenedor-pedidos-btn-vaciar");

    btn_vaciar_carrito.addEventListener("click", () => {
        carritoDeCompras = [];
        mostrarCarrito();

        setTimeout(() => {
            const contenedor_total_pagar = document.querySelector(".carrito-contenedor-precio-total");
            if (contenedor_total_pagar) {
                contenedor_total_pagar.style.display = "none";
            }
        }, 0);


    });

}













