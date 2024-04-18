var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n){
    showDivs(slideIndex += n);
}

function showDivs(n){
    console(n)
    // entramos a show divs
    // variable auxiliar
    var i;
    // selector de los elementos con clase mySlides
    // returns array of HTML Collection
    var x = document.getElementsByClassName("myslides");
    //Si n es más grande que el número de elementos, reiniciamos implementación
    if(n > x.length) {
        //reasignamos variable global al inicio 
        slideIndex = 1
    }
    if(n < 1) {
        //reasignamos variable global al final
        slideIndex = x.length
    }
    for(i = 0; i < x.length; i++){
        x[i].style.display = "none";
    }
    x[slideIndex-1].style.display = "block";
}





