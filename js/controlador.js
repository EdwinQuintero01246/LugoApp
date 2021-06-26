///-----------------------------------------------USUARIOS
var UserSelect=0;
var usuarios = [
    {
        nombre:"Pedro",
        apellido:"Martinez",
        ordenes:[
            {
                nombreProducto:"Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            },
            {
                nombreProducto:"Producto 2",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            }
        ]
    },
    {
        nombre:"Juan",
        apellido:"Perez",
        ordenes:[
            {
                nombreProducto:"Producto 3",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            },
            {
                nombreProducto:"",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            }
        ]
    },
    {
        nombre:"Maria",
        apellido:"Rodriguez",
        ordenes:[
            {
                nombreProducto:"Producto 4",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            },
            {
                nombreProducto:"Producto 1",
                descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                cantidad:2,
                precio:49.99
            }
        ]
    }
];


///-----------------------------------------------CATEGORIAS
var categorias = [
    {
        nombreCategoria:"Farmacias",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#01C8E8",
        icono:"fa fa-medkit",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Restaurantes",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#FFD14A",
        icono:"fab fa-angellist",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Salud",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#9482C4",
        icono:"fa fa-heartbeat",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Café",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#A6D5D6",
        icono:"fa fa-coffee",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    },
    {
        nombreCategoria:"Bebidas",
        descripcion:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
        color:"#E3A6BF",
        icono:"fa fa-beer",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 2",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            },
            {
                nombreEmpresa: "Empresa 3",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    }
];

console.log ('Usuarios', usuarios);
console.log ('Categorias', categorias);

$(document).ready(function(){
    localStorage.clear();

    localStorage.setItem("Categorias",JSON.stringify(categorias));
    localStorage.setItem("Usuarios",JSON.stringify(usuarios));
    var CategoriasLocal = JSON.parse(localStorage.getItem("Categorias"));
    var UsuariosLocal = JSON.parse(localStorage.getItem("Usuarios"));
    for(let i=0;i<UsuariosLocal.length;i++){
        $("#select-css").append($(`
            <option  value="${i+1}">${UsuariosLocal[i].nombre}  ${UsuariosLocal[i].apellido}</option>
        `));
    };
    //CategoryDynamic
    for(let i=0;i<CategoriasLocal.length;i++){
        $("#CategoryDynamic").append($(`
                <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-11 category" style="background-color: ${CategoriasLocal[i].color};"  onclick="ModalApp(${i+1})" data-toggle="modal" data-target="#exampleModalXl">
                    <i class="${CategoriasLocal[i].icono} imgIcone" aria-hidden="true"></i>
                    <h4 class="textCategoryH4" >${CategoriasLocal[i].nombreCategoria}</h4>
                    <h5 class="textCategoryH5">${CategoriasLocal[i].empresas.length} Comercios</h5>
                </div>
        `));
    };
})
function CambiarUsuarios(){
    console.log("Usuario: "+document.getElementById("select-css").value);
    UserSelect = document.getElementById("select-css").value;
    //textUser
    if(UserSelect>0){
        document.getElementById('textUser').innerHTML = `${usuarios[UserSelect-1].nombre}`
    }
}
function ModalApp(X){
    var UsuariosLocal = JSON.parse(localStorage.getItem("Usuarios"));
    var CategoriasLocal = JSON.parse(localStorage.getItem("Categorias"));
    console.log(CategoriasLocal);
    //console.log(UserSelect,X,UsuariosLocal);
    if(X==0){
        if(UserSelect!=0){
            $("#ModalHeader").html($(`
                <h5 class="modal-title h4" id="exampleModalXlLabel">${UsuariosLocal[UserSelect-1].nombre}, esta son sus ordenes</h5>
            `));
            $("#OrdensUserModal").html($(``));
            $("#OrdensUserModal2").html($(``));
            for(var i=0; i<UsuariosLocal[UserSelect-1].ordenes.length;i++){
                $("#OrdensUserModal2").append($(`
                    <div class="" style="padding-left: 15px;">
                        <h1 style="color: #4B0081;">${UsuariosLocal[UserSelect-1].ordenes[i].nombreProducto}</h1>
                        <h3 style="color: rgb(50, 50, 50);">${UsuariosLocal[UserSelect-1].ordenes[i].descripcion}</h3>
                        <h6 >Cantidad de producto: ${UsuariosLocal[UserSelect-1].ordenes[i].cantidad}</h6>
                        <h6 style="text-align: end;">$ ${UsuariosLocal[UserSelect-1].ordenes[i].precio}</h6>
                        <hr>
                    </div>
                `));
            }
        }else{
            alert("Selecione un usuario");
            $("#OrdensUserModal").html($(``));
        };
    }else{
        $("#ModalHeader").html($(`
            <h3 class="modal-title h4" id="exampleModalXlLabel">${CategoriasLocal[X-1].nombreCategoria}</h3>
        `));
        $("#OrdensUserModal").html($(``));
        $("#OrdensUserModal2").html($(``));
        for(var i=0; i<CategoriasLocal[X-1].empresas.length;i++){
            $("#OrdensUserModal").append($(`
                <div class="ProdCOnte col-sm-12 col-md-6 col-lg-6 col-xl-6 col-12" style="padding: 0px;margin-top: 12px;">
                <div style="height: 375px;"><img src="img/banner.jpg" alt="" style="border-top-left-radius: 20px; width: 100%; border-top-right-radius: 20px;"></div>    
                    <div style="padding-left: 10px;">
                        <h1 style="color: white;font-weight: 800;">${CategoriasLocal[X-1].empresas[i].nombreEmpresa}</h1>
                        <div class="row" id="DetailProductEmpresa${i}">
                            
                        <hr>
                        </div>
                    </div>
                </div>       
            `));
            for(var j=0; j<CategoriasLocal[X-1].empresas[i].productos.length;j++){
                document.getElementById('DetailProductEmpresa'+i).innerHTML += `
                    <div class="col-10">
                        <h3 style="color: rgb(50, 50, 50);">${CategoriasLocal[X-1].empresas[i].productos[j].nombreProducto}</h3>
                    </div>
                    <div class="col-2">
                        <button type="button" class="btn" id="ButtonsModals" onclick="PedirOrden(${X-1},${i},${j})" data-toggle="modal" data-target=".bd-example-modal-sm">Pedir</button>
                    </div>
                    <h5 class="col-12" style="color: rgb(50, 50, 50);">${CategoriasLocal[X-1].empresas[i].productos[j].descripcion}</h5>
                    <h6 class="col-12" style="text-align: end;padding-right: 25px;">$ ${CategoriasLocal[X-1].empresas[i].productos[j].precio}</h6>
                    <div class="modal-footer" style="width: 95%;"></div>
                `;
            }
        }
    }
}
function PedirOrden(idCategory,Idempresa,idProducto){
    //QuantityOrdensReqest
    var CategoriasLocal = JSON.parse(localStorage.getItem("Categorias"));
    $("#ModalHeaderModal2").html($(`<h3 style="color: #7900AC;">${CategoriasLocal[idCategory].empresas[Idempresa].productos[idProducto].nombreProducto}</h3>`));
    $("#QuantityOrdensRequest").html($(`
        <form>
            <fieldset>
            <div>
                <h3 style="color: rgb(50, 50, 50); padding-left: 15px;">${CategoriasLocal[idCategory].empresas[Idempresa].productos[idProducto].descripcion}</h3>
            </div>
            <div class="form-group " style=" display: flex; ">
                <label class="col-6" for="disabledTextInput">Cantidad a solicitar</label>
                <input class="col-6 form-control" type="number" id="disabledTextInput"  placeholder="Ingrese la cantidad">
            </div>
            <div>
                <h6 class="col-12" style="text-align: end;padding-right: 25px;">$ ${CategoriasLocal[idCategory].empresas[Idempresa].productos[idProducto].precio}</h6>
            </div>
            <button onclick="generarPedidos(
                '${CategoriasLocal[idCategory].empresas[Idempresa].productos[idProducto].nombreProducto}',
                '${CategoriasLocal[idCategory].empresas[Idempresa].productos[idProducto].descripcion}',
                '${CategoriasLocal[idCategory].empresas[Idempresa].productos[idProducto].precio}'
                )" style="display: flex;margin-left: auto;" type="button" class="btn" id="ButtonsModals">Generar Pedido</button>
            </fieldset>
        </form>
    `));
}
function generarPedidos(NameProduct,Description,Price){
    Quantity = document.getElementById("disabledTextInput").value;
    var CategoriasLocal = JSON.parse(localStorage.getItem("Categorias"));
    var UsuariosLocal = JSON.parse(localStorage.getItem("Usuarios"));
    localStorage.clear();
    UsuariosLocal[UserSelect-1]["ordenes"][UsuariosLocal[UserSelect-1].ordenes.length]={
        nombreProducto:NameProduct,
        descripcion: Description,
        cantidad:Quantity,
        precio:Price
    };
    localStorage.setItem("Categorias",JSON.stringify(CategoriasLocal));
    localStorage.setItem("Usuarios",JSON.stringify(UsuariosLocal));
}

function MoreCategory(){
    $("#ModalHeaderModal2").html($(`<h3 style="color: #7900AC;">Agregar categoria</h3>`));
}
function AddMoreCategory(){
    var CategoriasLocal = JSON.parse(localStorage.getItem("Categorias"));
    var UsuariosLocal = JSON.parse(localStorage.getItem("Usuarios"));
    console.log(document.getElementById("Description").value);
    localStorage.clear();
    console.log(CategoriasLocal);
    CategoriasLocal[CategoriasLocal.length]={
        nombreCategoria:document.getElementById("NameCategory").value,
        descripcion:document.getElementById("Description").value,
        color:"rgb("+document.getElementById("ColorRed").value+","+document.getElementById("ColorGreen").value+","+document.getElementById("ColorBlue").value+");",
        icono:"fab fa-angellist",
        empresas:[
            {
                nombreEmpresa: "Empresa 1",
                imagen:"img/banner.jpg",
                productos:[
                    {
                        nombreProducto: "Producto 1",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 2",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 3",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    },
                    {
                        nombreProducto: "Producto 4",
                        descripcion: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolore, modi!",
                        precio: 49.99
                    }
                ]
            }
        ]
    }
    console.log(CategoriasLocal);
    localStorage.setItem("Categorias",JSON.stringify(CategoriasLocal));
    localStorage.setItem("Usuarios",JSON.stringify(UsuariosLocal));
    actualizarcategorias();
}
function actualizarcategorias(){
    //CategoryDynamic
    var CategoriasLocal = JSON.parse(localStorage.getItem("Categorias"));
    $("#CategoryDynamic").html($(``));
    for(let i=0;i<CategoriasLocal.length;i++){
        $("#CategoryDynamic").append($(`
                <div class="col-sm-6 col-md-6 col-lg-4 col-xl-3 col-11 category" style="background-color: ${CategoriasLocal[i].color};"  onclick="ModalApp(${i+1})" data-toggle="modal" data-target="#exampleModalXl">
                    <i class="${CategoriasLocal[i].icono} imgIcone" aria-hidden="true"></i>
                    <h4 class="textCategoryH4" >${CategoriasLocal[i].nombreCategoria}</h4>
                    <h5 class="textCategoryH5">${CategoriasLocal[i].empresas.length} Comercios</h5>
                </div>
        `));
    };
}