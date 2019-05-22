var slider = document.querySelector("#slider");
var right = document.querySelector(".right");
var left = document.querySelector(".left");

right.addEventListener("click", function() {
   
    var active = document.querySelector(".active");
    if (active.nextElementSibling != null) {
        active.nextElementSibling.classList.add("active");
        active.classList.remove("active");
    } else {
        slider.children[0].children[0].classList.add("active");
        active.classList.remove("active");
    }

})

left.addEventListener("click", function() {
 
    var active = document.querySelector(".active");
    if (active.previousElementSibling != null) {
        active.previousElementSibling.classList.add("active");
        active.classList.remove("active");
    } else {
        var count = slider.children[0].childElementCount;
        slider.children[0].children[count - 1].classList.add("active");
        active.classList.remove("active");
    }

})

document.body.addEventListener("keydown", function (ev) {
    //sol
    if (ev.which == 37 ) {
        var active = document.querySelector(".active");
    if (active.previousElementSibling != null) {
        active.previousElementSibling.classList.add("active");
        active.classList.remove("active");
    } else {
        var count = slider.children[0].childElementCount;
        slider.children[0].children[count - 1].classList.add("active");
        active.classList.remove("active");
    }

    }
   
    //sag
    if (ev.which == 39) {
        var active = document.querySelector(".active");
        if (active.nextElementSibling != null) {
            active.nextElementSibling.classList.add("active");
            active.classList.remove("active");
        } else {
            slider.children[0].children[0].classList.add("active");
            active.classList.remove("active");
        }
    }

   
})


