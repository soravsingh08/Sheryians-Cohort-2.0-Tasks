var menu = document.querySelector(".menu")
var winBtn = document.querySelector(".winBtn")
var hide = document.querySelector(".hide")
var hideb = document.querySelector(".hideb")
var hidep = document.querySelector(".hidep")
var braveBtn =document.querySelector(".braveBtn")
var psBtn =document.querySelector(".psBtn")

document.body.addEventListener("contextmenu", function(e){
    e.preventDefault();
   menu.style.left = e.pageX + "px";
   menu.style.top = e.pageY + "px";  
   menu.style.display = "block";
})

document.addEventListener("click", function(){
    menu.style.display = "none";
});

/// task bar ka kam

winBtn.addEventListener("click",function(){
   if (hide.style.display === "block") {
    hide.style.display = "none";
  } else {
    hide.style.display = "block";
  }
})

braveBtn.addEventListener("click",function(){
   if (hideb.style.display === "block") {
    hideb.style.display = "none";
  } else {
    hideb.style.display = "block";
  }
})

psBtn.addEventListener("click",function(){
   if (hidep.style.display === "block") {
    hidep.style.display = "none";
  } else {
    hidep.style.display = "block";
  }
})

