
// // //  //R A N D O M  Q U O T E S 
// let main = document.querySelector("main")
// let btn = document.querySelector("button")

// let quotes = [
//   "Rise. Grind. Repeat.",
//   "Pain makes you stronger.",
//   "Discipline beats motivation always.",
//   "Small steps create empires.",
//   "Stay hungry, stay focused.",
//   "Dream big, work bigger.",
//   "Nothing changes if you don't.",
//   "Be loyal to your goals.",
//   "Your future needs you.",
//   "Prove yourself to yourself."
// ];

// let count = 0;
// btn.addEventListener("click", function(){
//     let random = Math.floor(Math.random()*quotes.length);
//     let h1 = document.createElement("h1");
//     h1.innerHTML = quotes[random];
//     let x = Math.random()*80;
//     let y = Math.random()*80;
//     let rot = Math.random()*360;
//     let scl = Math.floor(Math.random()*3)
    
//     h1.style.position = 'absolute'
//     h1.style.left = x +'%';
//     h1.style.top = y + '%';
//     h1.style.rotate = rot + 'deg'
//     h1.style.scale = scl

//  count++;

//   // Counter element
//   let counter = document.querySelector("#counter");
//   if (!counter) {
//     counter = document.createElement("h2");
//     counter.id = "counter";
//     counter.style.color = "cadetblue";
//     counter.style.position = "fixed";
//     counter.style.top = "10px";
//     counter.style.right = "10px";
//     document.body.appendChild(counter);
//   }

//   counter.innerHTML = "Quotes Added: " + count;
  

//     main.appendChild(h1);
   

// })


// // // // // R A NDO M  B O X E S 

let btn = document.querySelector("button")
let main = document.querySelector("main")

btn.addEventListener("click", function(){

    let div =  document.createElement("div");
    let x = Math.floor(Math.random()*90);
    let y = Math.floor(Math.random()*90);
    let c1 = Math.floor(Math.random()*255);
    let c2 = Math.floor(Math.random()*255);
    let c3 = Math.floor(Math.random()*255);
    let rot = Math.random()*100;


    div.style.width = "50px";
    div.style.height = "50px";
    div.style.backgroundColor = `rgb( ${c1} ${c2} ${c3})`;
    div.style.position = "absolute"
    div.style.left = x + '%'
    div.style.top = y + '%'
    div.style.rotate = rot + 'deg'
    

   main.appendChild(div);

})