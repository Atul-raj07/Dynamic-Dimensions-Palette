var btn = document.querySelector("#btn")
var height = document.querySelector("#height")
var width = document.querySelector("#width")
var main = document.querySelector("#main")
btn.addEventListener("click",function(){
    var heightvl = height.value
    var widthvl = width.value
    var box = document.createElement("div")
    box.style.height = heightvl + "px";
    box.style.width = widthvl + "px";
    box.style.position = "absolute";
    var top = Math.floor(Math.random() * main.offsetHeight ) + "px";
    var left = Math.floor(Math.random() *main.offsetWidth ) + "px";
    box.style.top =  top ;
    box.style.left = left ;
    

    var r = Math.floor(Math.random() * 256)
    var g = Math.floor(Math.random() * 256)
    var b = Math.floor(Math.random() * 256)
    box.style.backgroundColor = `rgb(${r},${g},${b})`;
    
    main.appendChild(box);
  setTimeout(
    function(){
        main.removeChild(box);
    },5000
  )
})