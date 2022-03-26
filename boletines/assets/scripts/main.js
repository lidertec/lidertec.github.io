//Obtener los elementos de la clase: .colse
let links = document.querySelectorAll(".close");

//Recorrer los elementos de la clase: .close
links.forEach(function(link) {
    link.addEventListener("click", function(ev){
        ev.preventDefault();
        let content = document.querySelector(".content");

        //Quitarle las clases de animacion que ya tiene
        content.classList.remove("animate__backInDown");
        content.classList.remove("animate__animated");

        //Agregarle clases para animar su salida
        content.classList.add("animate__backOutUp");
        content.classList.add("animate__animated");

        setTimeout(function(){
            location.href = "/boletines";
        },600);

        return false;
    });
});