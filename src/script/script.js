$ = require("jquery");

function init() {
    console.log("Hello World");

    $(window).on("scroll", headerScroll);
}

$(document).ready(init);

/* Funzione per azione scroll, far apparire header */
function headerScroll(){

    
    var heigh_viewport = $(window).height();
    var height_show_header = (heigh_viewport * 60) / 100;
    /* console.log("ALTEZZA VIEWPORT:", heigh_viewport);
    console.log("THIS SCROLL:", $(window).scrollTop()); */
    


    if ($(window).scrollTop() > height_show_header) {
        
        $('.hidden_header').addClass("block");
        
    }else {
        $('.hidden_header').removeClass("block");
        
    }

   
}