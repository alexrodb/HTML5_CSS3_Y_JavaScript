window.addEventListener("load", function(){
    console.log("Web cargada");
    var b_order = document.getElementById("reorder");
    b_order.addEventListener("click", function(){
        var contenedor = document.getElementById("dining-container");
        contenedor.classList.toggle("inverso");
    })
})
