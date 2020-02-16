let imgHeader = document.getElementById("imgHeader");

window.addEventListener('scroll', function(){
let value = window.scrollY;
imgHeader.style.clipPath = "circle("+ value +"px at center)";
});