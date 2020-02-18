let imgHeader = document.getElementById("imgHeader");

window.addEventListener('scroll', () => {
let value = window.scrollY;
imgHeader.style.clipPath = "circle("+ value +"px at center)";
});