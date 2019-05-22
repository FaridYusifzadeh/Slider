// var p = document.querySelector("#test");


// p.addEventListener("click", function(ev) {
//     console.log(this)
// })

// document.body.addEventListener("click", function(ev) {
//     if (ev.target.nodeName == "LI") {
//         ev.target.style.border = "1px solid red";
//     }
// })
// var circle = document.querySelector("#circle");
// var circle2 = document.querySelector("#circle2");
// document.body.addEventListener("mousemove", function(ev) {
//     circle.style.top = ev.pageY + "px";
//     circle.style.left = ev.pageX + "px";
//     circle2.style.top = ev.pageY + 30 + "px";
//     circle2.style.left = ev.pageX + 30 + "px";
//     console.log(ev)
// })

//task ayi

// var picture = document.querySelector(".picture");

// picture.addEventListener("click", function(ev) {
//     console.log(this.offsetLeft + " " + this.offsetTop)
//         // console.log(ev.pageX + " " + ev.pageY);
//     var span = document.createElement("span");
//     span.style.top = ev.pageY - 7.5 + "px";
//     span.style.left = ev.pageX - 7.5 + "px";
//     this.appendChild(span);

// })
var picture = document.querySelector(".picture");
var top_p = 0;
var left_p = 0;
document.body.addEventListener("keyup", function(ev) {
    //sol
    if (ev.which == 37) {
        left_p -= 10;
    }
    //yuxari
    if (ev.which == 38) {
        top_p -= 10;
    }
    //sag
    if (ev.which == 39) {
        left_p += 10;
    }

    //ashagi
    if (ev.which == 40) {
        top_p += 10;
    }

    picture.style.left = left_p + "px";
    picture.style.top = top_p + "px";
})