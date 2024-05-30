var image = document.querySelector(".container")
var lovebtn = document.querySelector("i")

image.addEventListener("dblclick",function(){
    lovebtn.style.transform='translate(-50%,-50%) scale(1.5)'
    lovebtn.style.opacity='0.8'
    
    setTimeout(() => {
        lovebtn.style.opacity='0'
        lovebtn.style.transform='translate(-50%,-50%) scale(0)'
    }, 1000);
})
