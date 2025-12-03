const p = document.querySelector("p")
const text = p.innerText
const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let iteration = 0;

p. addEventListener("click",function(){
  
})


function randomText(){
   const str = text.split("").map((char,index)=>{
    if(index<iteration){
        return char
    }
        return characters.split("")[Math.floor(Math.random() *52)]
    }).join("")
    console.log(str)
    p.innerText = str;
    iteration += 0.25
}


setInterval(randomText,30)