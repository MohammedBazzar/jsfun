var words = document.querySelector("div");
var smaller = document.querySelector(".small");
var larger = document.querySelector(".large");

function toLarger(){
    words.classList.add("bigger");
    words.classList.remove("smaller");

}
function toSmaller(){
    words.classList.remove("bigger");
    words.classList.add("smaller");
    

}


smaller.onclick = toSmaller;
larger.onclick = toLarger;