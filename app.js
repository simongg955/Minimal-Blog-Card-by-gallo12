const tarjeta = document.querySelector('.tarjeta');
const Design = document.querySelector(".boton")
const titulo = document.querySelector('.titulo');
const cuerpo = document.querySelector('.cuerpo');
const parrafo = document.querySelector('.parrafo');



function colorBoton(){
    if(Design.textContent == "Cambiar color tarjeta"){
        Design.style.color = 'red';
        Design.textContent = 'volver al color original';
        titulo.style.color = "red";
        cuerpo.style.color = "red";
        parrafo.style.color = "red";
        tarjeta.style.background = "black"
    }
    else{
        Design.style.color = '#883AE1';
        Design.textContent = 'Cambiar color tarjeta';
        titulo.style.color = "black";
        cuerpo.style.color = "#6C727F";
        parrafo.style.color = "#6C727F";
        tarjeta.style.background = "white";
    }

}













// function traducir(){
//     if(Design.textContent == "Translate"){
//         Design.style.color = 'red';
//         Design.textContent = 'traducir';
//         titulo.style.color = "red";
//         titulo.textContent = "Embracing Minimalism";
//         cuerpo.style.color = "red";
//         cuerpo.innerHTML = '<h3 class= "cuerpo" style="text-align: left;">Desde esculturas minimalistas hasta pinturas <br>minimalistas este blog te inspirará a <br>apreciar la belleza que reside en la simplicidad.</h3>';
//         parrafo.style.color = "red";
//         tarjeta.style.background = "black"
//     }
//     else{
//         Design.style.color = '#883AE1';
//         Design.textContent = 'Translate';
//         titulo.style.color = "black";
//         titulo.textContent = "Abrazando el minimalismo";
//         cuerpo.style.color = "#6C727F";
//         cuerpo.innerHTML = '<h3 class="cuerpo">From minimalist sculptures to minimalist <br> paintings, this blog will inspire you to<br>appreciate the beauty that lies in simplicity</h3>';
//         parrafo.style.color = "#6C727F";
//         tarjeta.style.background = "white";
        
         
//     }

// }

// document.addEventListener("DOMContentLoaded", function(){
//     tarjeta.onmousemove = function(){
//         tarjeta.style.color = "red";
//         titulo.style.color = "red";
//         cuerpo.style.color = "red";
//         parrafo.style.color = "red";
//         tarjeta.style.background = "black"
//     }
    
// })