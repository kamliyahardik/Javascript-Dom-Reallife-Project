var elem = document.querySelectorAll(".elem")
elem.forEach(function(val){

    val.addEventListener("mousemove",function(eve){
        val.childNodes[3].style.left= eve.x+ "px"
        val.childNodes[3].style.top= eve.y+ "px"
    })
    // console.log(val.childNodes[3]);
  val.addEventListener("mouseenter",function(){
  
    val.childNodes[3].style.opacity=1
  })
  val.addEventListener("mouseleave",function(){
    val.childNodes[3].style.opacity=0
  })
});