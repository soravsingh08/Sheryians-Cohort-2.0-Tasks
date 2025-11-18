let main = document.querySelector("main")
let btn = document.querySelector("button")

let quotes = [
  "Rise. Grind. Repeat.",
  "Pain makes you stronger.",
  "Discipline beats motivation always.",
  "Small steps create empires.",
  "Stay hungry, stay focused.",
  "Dream big, work bigger.",
  "Nothing changes if you don't.",
  "Be loyal to your goals.",
  "Your future needs you.",
  "Prove yourself to yourself."
];

let count = 0;
btn.addEventListener("click", function(){
    let random = Math.floor(Math.random()*quotes.length);
    let h1 = document.createElement("h1");
    h1.innerHTML = quotes[random];
    let x = Math.random()*100;
    let y = Math.random()*100;
    
    h1.style.position = 'absolute'
    h1.style.left = x +'%';
    h1.style.top = y + '%';

 count++;

  // Counter element
  let counter = document.querySelector("#counter");
  if (!counter) {
    counter = document.createElement("h2");
    counter.id = "counter";
    counter.style.color = "cadetblue";
    counter.style.position = "fixed";
    counter.style.top = "10px";
    counter.style.right = "10px";
    document.body.appendChild(counter);
  }

  counter.innerHTML = "Quotes Added: " + count;
  

    main.appendChild(h1);
   

})