const listadoDetalle = document.getElementById("listado-detalle");
const listado = [];
let productsData; //actualiza los datos de los productos

//Elementos de "Carrito de compras"
document.getElementById("addCarro-juntos").addEventListener("click",() =>addCarro("Taza","$1500.00"))
document.getElementById("addCarro-juntos1").addEventListener("click",() =>addCarro("Taza","$2000.00"))
document.getElementById("addCarro-juntos2").addEventListener("click",() =>addCarro("Taza","$2500.00"))
document.getElementById("addCarro-juntos3").addEventListener("click",() =>addCarro("Taza","$3000.00"))

function addCarro(productName, productPrice){
    if(listado.length>= 4){
        alert("Hasta 4 productos")
        return
    }
    //Actualiza datos
    const productsData ={
        nombre: productName,
        price: parseFloat(productPrice.replace ("$",""))
    };
    listado.push(productsData);
    updateListado();

    console.log("Producto añadido: ${productData.nombre}, Precio: $${productData.price}");
} 

function updateListado(){
    listadoDetalle.innerHTML="";

    listado.forEach((product, index) => {
        const detalle= document.createElement ("li");
        detalle.textContent = "${product.nombre} - $${product.price}";

        //para eliminar elementos del carrito (button)
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Eliminar";
        deleteButton.addEventListener("click", () => removerDelListado(index));

        detalle.appendChild(deleteButton);
        listadoDetalle.appendChild(detalle);

    });
}
function removerDelListado(index){
    listado.splice(index, 1); //borra elemento del carrito
    updateListado(); //actualiza carrito

}
//guarda lo elegido por el comprador
function saveListadoLocalStorage(){
    localStorage.setItem("listado",JSON.stringify(listado));
}