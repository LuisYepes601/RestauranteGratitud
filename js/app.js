
const header_nav = document.getElementById("header_nav_mas_opciones");
const btn_menu = document.getElementById("btn_menu_header");
//const header_nav_lista = document.getElementById("header_nav_lista");

let carritoDeCompras = [];
let platosDesdeAPI = [];


//mostrarHeadrerlateral
btn_menu.addEventListener("click", () => {
    header_nav.classList.toggle("header_nav_mas_opciones_active")


})


const btn_muestros_platos = document.getElementById("btn_mostrarPlatos");
const main_presentacion = document.querySelector(".main-presentacion");
const btn_sobre_nosoros = document.getElementById("btn-sobre-nosoros");


if (btn_muestros_platos) {
    btn_muestros_platos.addEventListener("click", (e) => {
        e.preventDefault();
        main_presentacion.style.display = "none"
    })

}



const add_car_btn = document.querySelectorAll(".add-car-btn");



//cargar platpos al inicio
async function cargarPlatosHome() {


    const response = await fetch("https://restaurantegratitudbackend.onrender.com/plato/obtenenerPlatos");
    const datos = await response.json();
    platosDesdeAPI = datos;






    const contenedor_platos = document.querySelector(".main-nuestros-platos-contenido");

    if (contenedor_platos) {
        contenedor_platos.innerHTML = "";



        platosDesdeAPI.forEach(plato => {


            let contenedor_platos_actual = `  
                    <div class="main-nuestros-platos-item">
                        <div class="plato-detalle" data-id="${plato.id}">

                            <h3 class="plato-detalle-titulo">${plato.nombre}</h3>
                            <img src="${plato.imagen}" alt="" class="plato-detalle-imagen" >
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
                        </div> 
                        
                        `;

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
                top: document.body.scrollHeight * 0.35,
                behavior: "smooth"
            });

        });



        agregarCarrito();
    }
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

                            <h3 class="plato-detalle-titulo">${plato.nombre}</h3>
                            <img src="${plato.imagen}" alt="">
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


if (btn_muestros_platos) {
    btn_muestros_platos.addEventListener("click", () => {

        nuestrosPlatos();
    })
}




function mostrarDetallesPlato(plato) {

    let platoActual = platosDesdeAPI.find(platos => platos.id === Number(plato))

    main_presentacion.innerHTML = "";

    let DetallesPlato = `
     <section class="main-presentacion-ver-detalles">
    <div class="main-detalle-plato">
                    <h2 class="main-detalle-plato-nombre">${platoActual.nombre}</h2>
                    <p class="main-detalle-plato-descripcion"></strong>Descripcion: ${platoActual.descripcion}</p>
                    <p class="plato-detalle-precio">Precio: $ ${platoActual.precio}</p>

                    <ul class="plato-detalle-atributos">
                        <li><strong>Sabor:</strong> ${platoActual.sabor}.</li>
                        <li><strong>Textura:</strong> ${platoActual.textura}.</li>
                        <li><strong>Presentación:</strong>${platoActual.presentacion}.</li>
                        <li><strong>Porción:</strong> ${platoActual.porcion}.</li>
                        <li><strong>Peso:</strong> Aproximadamente ${platoActual.peso} gramos.</li>
                    </ul>

                    <div class="plato-detalle-botones-add-car plato-detalle-botones-add-car-ver-detalles">
                        <button class="add-car-btn" data-id="${platoActual.id}">Agregar al Carrito<i class="bi bi-bag-plus-fill"></i></button>
                        <div class="plato-detalle-cantidad">
                            <input type="number" name="" id="" class="cantidad-producto" min="1" step="1" value="1">
                            <p class="plato-detalle-cantidad">Cantidad</p>
                        </div>
                    </div>

                </div>

                <img src="${platoActual.imagen}" alt="" class="hamburguesa hamburguesa-ver-detalles">
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
            platoCarrito.precio += plato.precio * Number(input_cantidad)
            mostrarCarrito();

            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));

            setTimeout(() => {
                if (carritoDeCompras.length > 0) {
                    let total = 0;
                    carritoDeCompras.forEach(item => {
                        total += item.precio * item.cantidad;
                    });
                    let total_pagar_cantidad = document.querySelector(".total-pagar-cantidad")
                    total_pagar_cantidad.innerHTML = total;
                    let total_pagar = document.querySelector(".carrito-contenedor-precio-total").style.display = "flex"

                }
            }, 100);
            return;

        } else {
            carritoDeCompras.push({ id: plato.id, precio: plato.precio * Number(input_cantidad), cantidad: Number(input_cantidad) });
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
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
    let total = 0;



    btn_carrito.forEach(btn => {


        btn.addEventListener("click", (e) => {


            id_producto = e.target.getAttribute("data-id");
            const cantidad_producto = e.target.closest(".plato-detalle-botones").querySelector(".cantidad-producto").value;
            const plato = platosDesdeAPI.find(plato => Number(plato.id) === Number(id_producto));
            exixteProducto = carritoDeCompras.find(plato => Number(plato.id) === Number(id_producto));

            if (carritoDeCompras.length > 0) {
                let total = 0;
                carritoDeCompras.forEach(item => {
                    total += item.precio;
                });

            }




            if (exixteProducto) {
                exixteProducto.cantidad = Number(cantidad_producto);
                exixteProducto.precio = plato.precio * exixteProducto.cantidad;
                localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
                mostrarCarrito();


            } else {
                carritoDeCompras.push({ id: id_producto, cantidad: Number(cantidad_producto), precio: plato.precio * cantidad_producto });
                localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
                mostrarCarrito();




            }
            setTimeout(() => {
                if (carritoDeCompras.length > 0) {
                    let total = 0;
                    carritoDeCompras.forEach(item => {
                        total += item.precio;
                    });
                    let total_pagar_cantidad = document.querySelector(".total-pagar-cantidad")
                    total_pagar_cantidad.innerHTML = total;
                    let total_pagar = document.querySelector(".carrito-contenedor-precio-total").style.display = "flex"

                }
            }, 100);














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
            localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));

            if (carritoDeCompras.length > 0) {
                let total = 0;
                carritoDeCompras.forEach(item => {
                    total += item.precio;
                });
                let total_pagar_cantidad = document.querySelector(".total-pagar-cantidad")


                setTimeout(() => {
                    if (carritoDeCompras.length > 0) {
                        let total = 0;
                        carritoDeCompras.forEach(item => {
                            total += item.precio;
                        });
                        let total_pagar_cantidad = document.querySelector(".total-pagar-cantidad")
                        total_pagar_cantidad.innerHTML = total;
                        let total_pagar = document.querySelector(".carrito-contenedor-precio-total").style.display = "flex"

                    }
                }, 100);
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

                localStorage.setItem("carrito", JSON.stringify(carritoDeCompras));
            }




            setTimeout(() => {
                if (carritoDeCompras.length > 0) {
                    let total = 0;
                    carritoDeCompras.forEach(item => {
                        total += item.precio;
                    });
                    let total_pagar_cantidad = document.querySelector(".total-pagar-cantidad")
                    total_pagar_cantidad.innerHTML = total;
                    let total_pagar = document.querySelector(".carrito-contenedor-precio-total").style.display = "flex"

                }
            }, 100);



        }
    });









}

agregarCarrito();




function eliminarProductoCarrito(id_plato) {

    //plato = platosDesdeAPI.find(plato => Number(plato.id) === Number(id_plato));
    carritoDeCompras = carritoDeCompras.filter(producto => Number(producto.id) !== Number(id_plato));
    localStorage.setItem("carrito", JSON.stringify(carritoDeCompras))

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
        const plato_desde_api = platosDesdeAPI.find(plato_actual => Number(plato_actual.id) === Number(plato.id));



        let producto = `
              <div class="carrito-contenedor-articulo">
                <div class="carrito-contenedor-articulo-presentacion">
                    <h3 class="carrito-contenedor-articulo-nombre">${plato_desde_api.nombre}</h3>
                    <img src="${plato_desde_api.imagen}" alt="" style="width: 160px; max-width:100%"
                        class="carrito-contenedor-articulo-imagen">
                </div>
                <p class="carrito-contenedor-articulo-descripcion"><strong>Descripción</strong>${plato_desde_api.descripcion}
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
    setTimeout(() => {
        if (carritoDeCompras.length > 0) {
            let total = 0;
            carritoDeCompras.forEach(item => {
                total += item.precio;
            });
            let total_pagar_cantidad = document.querySelector(".total-pagar-cantidad")
            total_pagar_cantidad.innerHTML = `$: ${total}`
            let total_pagar = document.querySelector(".carrito-contenedor-precio-total").style.display = "flex"

        }
    }, 100);


    realizarPedido();
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
    carritoDeCompras.forEach(element => {
        console.log(element);

    });
})

carritoDeCompras = JSON.parse(localStorage.getItem("carrito")) || [];



function vaciarCarrito() {
    const btn_vaciar_carrito = document.querySelector(".carrito-contenedor-pedidos-btn-vaciar");

    btn_vaciar_carrito.addEventListener("click", () => {
        carritoDeCompras = [];
        localStorage.removeItem("carrito")
        mostrarCarrito();


        setTimeout(() => {
            const contenedor_total_pagar = document.querySelector(".carrito-contenedor-precio-total");
            if (contenedor_total_pagar) {
                contenedor_total_pagar.style.display = "none";
            }
        }, 0);


    });




}

function realizarPedido() {

    const btn_realizar_pedido = document.querySelector(".carrito-contenedor-pedidos-btn-realizar-pedido");

    btn_realizar_pedido.addEventListener("click", () => {
        carritoDeCompras.forEach(plato => {
            console.log(plato);

        });


        window.location.href = "pedido.html";

    })

}

/**
 * REGISTRO
 */


async function cargarPaises() {
    const contenedor_paises = document.querySelector(".contenedor-paises");
    if (!contenedor_paises) {
        // No hacer nada si no existe el contenedor (posiblemente otro HTML)
        return;
    }

    try {
        const response = await fetch("https://restcountries.com/v3.1/all?fields=name,capital,flags");
        const data = await response.json();

        const paises = data.sort((a, b) =>
            a.name.common.localeCompare(b.name.common)
        );

        paises.forEach(pais => {
            const option = document.createElement("option");
            option.value = pais.name.common;
            option.textContent = pais.name.common;
            contenedor_paises.appendChild(option);
        });
    } catch (error) {
        console.error("Error al cargar los países:", error);
    }
}

// Espera a que el DOM cargue, y solo ejecuta si hay contenedor de países
document.addEventListener("DOMContentLoaded", cargarPaises);
async function cargarDepartamentos() {
    const contenedor_dptos = document.querySelector(".contenedor-departamentos");

    // Validación para evitar error si el contenedor no existe
    if (!contenedor_dptos) {
        return; // No hace nada si no existe (es otro HTML)
    }

    try {
        const response = await fetch("https://api-colombia.com/api/v1/Department?sortBy=name&sortDirection=asc");
        const data = await response.json();

        data.forEach(dpto => {
            const option = document.createElement("option");
            option.value = dpto.name;
            option.textContent = dpto.name;
            contenedor_dptos.appendChild(option);
        });
    } catch (error) {
        console.error("Error al cargar departamentos:", error);
    }
}

document.addEventListener("DOMContentLoaded", cargarDepartamentos);

async function cargarCiudadesMunicipios() {
    const contenedor_ciudades = document.querySelector(".contenedor-ciudades-municipios");

    // Validación para evitar errores si no existe el contenedor
    if (!contenedor_ciudades) {
        return;
    }

    try {
        const response = await fetch("https://api-colombia.com/api/v1/City?sortBy=name&sortDirection=asc");
        const data = await response.json();

        data.forEach(ciudad => {
            const option = document.createElement("option");
            option.value = ciudad.name;
            option.textContent = ciudad.name;
            contenedor_ciudades.appendChild(option);
        });
    } catch (error) {
        console.error("Error al cargar ciudades o municipios:", error);
    }
}

document.addEventListener("DOMContentLoaded", cargarCiudadesMunicipios);



/**
 * 
 * PERFIL
 */
async function caragarDatosUsuarioByID() {
    try {
        const user = JSON.parse(localStorage.getItem("credenciales"));

        if (user == null) {
            return;
        }

        const id_user = user.id;




        const response = await fetch("https://restaurantegratitudbackend.onrender.com/registrar/get/user/ByiD/"+ id_user);
        const data = await response.json();

        const setInputValue = (selector, value) => {
            const input = document.querySelector(selector);
            if (input) input.value = value;
        };

        setInputValue('input[name="name"]', data.nombre);
        setInputValue('input[name="apellido_p"]', data.apellidoP);
        setInputValue('input[name="apellido_m"]', data.apellidoM);
        setInputValue('input[name="fecha_nacimiento"]', data.fechaNacimiento);
        setInputValue('input[name="registro"]', data.fechaRegistro);
        setInputValue('input[name="correo"]', data.gmail);
        setInputValue('input[name="telefono"]', data.telefono);
        setInputValue('input[name="tipo_de_identificacion"]', data.tipoIdentificacion?.nombre);
        setInputValue('input[name="numero_dni"]', data.numeroDni);
        setInputValue('input[name="pais"]', data.direccion?.pais);
        setInputValue('input[name="departamento"]', data.direccion?.departamento);
        setInputValue('input[name="ciudad"]', data.direccion?.ciudad);
        setInputValue('input[name="barrio"]', data.direccion?.barrio);

    } catch (error) {
        console.error("Error al cargar los datos del usuario:", error);
    }
}

document.addEventListener("DOMContentLoaded", caragarDatosUsuarioByID);


function IniciarSesion() {
    const btn_enviar = document.querySelector(".main-login-btn-entrar");
    const email = document.querySelector(".inp-email");
    const contraseña = document.querySelector(".inp-contraseña");

    // Verificamos que los elementos existan
    if (!btn_enviar || !email || !contraseña) {
        console.warn("Algunos elementos del formulario de login no están presentes en este HTML.");
        return;
    }

    btn_enviar.addEventListener("click", async (e) => {
        e.preventDefault();
        try {
            const credenciales = {
                email: email.value,
                password: contraseña.value
            };

            const response = await fetch("https://restaurantegratitudbackend.onrender.com/login/verificarCredenciales", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(credenciales)
            });

            if (!response.ok) {
                throw new Error("Credenciales incorrectas o error en el servidor");
            }

            const data = await response.json();
            console.log("Respuesta del servidor:", data);

            localStorage.setItem("email", credenciales.email);
            localStorage.setItem("credenciales", JSON.stringify(data))

            window.location.href = "index.html";
            window.addEventListener('load', () => {
                window.scrollTo(0, 0);
            });





        } catch (error) {
            console.error("Error en inicio de sesión:", error.message);
            alert("Error al iniciar sesión: " + error.message);
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    IniciarSesion();
});

/**
 * 
 * REGISTRO
 */

async function registrarUsuario() {



    document.addEventListener("DOMContentLoaded", () => {
        const form = document.getElementById("form-registro");

        if (!form) {
            return;
        }

        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            const credenciales = {
                nombre: document.getElementById("nombre").value,
                apellidoP: document.getElementById("apellido_p").value,
                apellidoM: document.getElementById("apellido_m").value,
                gmail: document.getElementById("gmail").value,
                contrasenia: document.getElementById("contrasenia").value,
                telefono: document.getElementById("telefono").value,
                tipoIdentificacionId: document.querySelector(".tipo_de_identificacion").value,
                numeroDni: document.getElementById("numero_dni").value,
                fechaNacimiento: document.getElementById("fecha_nacimiento").value,
                pais: document.querySelector(".contenedor-paises").value,
                departamento: document.querySelector(".contenedor-departamentos").value,
                ciudad: document.querySelector(".contenedor-ciudades-municipios").value,
                barrio: document.querySelector("input[name='barrio']").value || "",
                fechaRegistro: new Date().toISOString().split("T")[0] // YYYY-MM-DD
            };

            try {
                const response = await fetch("https://restaurantegratitudbackend.onrender.com/registrar/usuario", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(credenciales)
                });

                if (response.ok) {
                    const data = await response.json();
                    alert("Registro exitoso");


                    window.location.replace("login.html");
                } else {
                    const error = await response.text();
                    console.error("Error:", error);
                    alert("No se pudo registrar el usuario.");
                }
            } catch (error) {
                console.error("Error de red:", error);
                alert("No se pudo conectar al servidor.");
            }
        });
    });



}

registrarUsuario();

//verifica si hay una cuenta abierta, si no hay no muestra el boton cerrar sesion

function cerrarSesion() {


    const btn_logout = document.querySelector(".btn-logout");

    if (btn_logout == null) {
        return;
    }

    const email = localStorage.getItem("email");

    // Ocultar botón si no hay sesión
    if (email == null) {
        btn_logout.style.display = "none";
    }

    btn_logout.addEventListener("click", (e) => {
        e.preventDefault();

        const emailActual = localStorage.getItem("email");

        if (emailActual != null) {



            localStorage.clear();
            window.location.href = "login.html"


        }
    });
}

document.addEventListener("DOMContentLoaded", cerrarSesion);



//verifica si hay una cuenta abierta, si no hay no muestra el boton login


function ocultarLogin() {
    console.log("Se ejecutó ocultarLogin");

    const btn_login = document.querySelector(".btn-login");
    const email = localStorage.getItem("email");

    console.log(email);



    if (email != null) {
        btn_login.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded", ocultarLogin)


//verifica si hay una cuenta abierta, si no hay no muestra el boton perfil

function ocultarMiPerfil() {

    const btn_perfil = document.querySelector(".btn-perfil");
    const email = localStorage.getItem("email");



    if (!btn_perfil) {
        return;
    }

    if (email == null) {
        btn_perfil.style.display = "none";
    }

}

document.addEventListener("DOMContentLoaded", ocultarMiPerfil)




////PEDIDO AGRAGANDOLE UN EVENTO AL BOTON MIS PEDIDOS QUE MUESTRE LOS PEDIDOS DE X USUARIO POR ID
async function gestionarPedidos() {
    const credencial = JSON.parse(localStorage.getItem("credenciales"));
    if (!credencial || !credencial.id) {
        console.warn("No hay credenciales válidas en localStorage.");
        return;
    }

    const userId = credencial.id;

    const btnPedidos = document.querySelector(".btn-mis-pedidos");
    const contenedorPedidos = document.querySelector(".pedido-info");

    if (btnPedidos) {
        btnPedidos.addEventListener("click", (e) => {
            e.preventDefault();
            window.location.href = "pedido.html";
        });
    }

    if (contenedorPedidos) {
        try {


            // 2. Obtener pedidos
            const response = await fetch(`https://restaurantegratitudbackend.onrender.com/pedido/obtner/ByUsuario/${userId}`);
            const pedidos = await response.json();

            if (!Array.isArray(pedidos)) {
                console.warn("La respuesta de pedidos no es un arreglo:", pedidos);
                return;
            }

            contenedorPedidos.innerHTML = "";


            pedidos.forEach(pedido => {
                let detallesHTML = pedido.detalles.map(detalle => {
                    console.log(platosDesdeAPI);
                    console.log("Detalle:", detalle);
                    // Buscar el plato por ID
                    const plato = platosDesdeAPI.find(p => p.id === detalle.id_plato);
                    console.log(plato);

                    console.log("Detalle del pedido:", detalle);



                    return `
                        <div class="lista-detalle-contenido">
                            <div class="lista-detalle-presentacion">
                                <h4>${plato?.nombre || 'Plato desconocido'}</h4>
                                <img src="${plato?.imagen || 'img/pizza.jpg'}" alt="${plato?.nombre || ''}" style="width: 300px;">
                            </div>
                            <div class="lista-detalle-cantidad">
                                <label>Cantidad</label>
                                <input type="text" value="${detalle.cantidad}" readonly>
                                <label>Precio</label>
                                <input type="text" value="${(Number(pedido.total) / Number(detalle.cantidad)) / Number(detalle.cantidad)}" readonly>
                                <label>Sub-total</label>
                                <input type="text" value="${Number(pedido.total) / Number(detalle.cantidad)}" readonly>
                            </div>
                        </div>
                    `;
                }).join("");

                const pedidoHTML = `
                    <div class="pedido-info-general">
                        <h3>Información General</h3>
                        <p><strong>ID del pedido:</strong> <span>${pedido.id}</span></p>
                        <p><strong>Fecha:</strong> <span>${new Date(pedido.fecha).toLocaleString()}</span></p>
                        <p><strong>Total:</strong> $<span>${pedido.total}</span></p>
                    </div>
                    <div class="lista-detalle">
                        <h3>Detalles</h3>
                        ${detallesHTML}
                    </div>
                `;

                contenedorPedidos.insertAdjacentHTML("beforeend", pedidoHTML);
            });

        } catch (error) {
            console.error("Error al cargar los pedidos:", error);
        }
    }
}

document.addEventListener("DOMContentLoaded", gestionarPedidos);





function oculatrVerMisPedidos() {

    const btn_mis_pedidos = document.querySelector(".btn-mis-pedidos");

    if (btn_mis_pedidos == null) {
        return;
    }

    const credencial = localStorage.getItem("email")

    if (credencial == null) {
        btn_mis_pedidos.style.display = "none";
    } else {
        btn_mis_pedidos.style.display = "flex";
    }


}

document.addEventListener("DOMContentLoaded", oculatrVerMisPedidos)














