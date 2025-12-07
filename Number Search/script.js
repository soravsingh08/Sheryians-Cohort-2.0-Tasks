//Write a function that searches for an element in an array and returns the indx if the element i not present then just return -1;
let h1 =  document.querySelector("h1")
let input = document.querySelector("#searchInput");
let btn = document.querySelector("#searchBtn");

let arr =  [12,34,55,3,76,88,2,5,33,55,32,135,2]

btn.addEventListener("click",function(){
    let target = Number(input.value);

    if(input.value.trim() === ""){
        h1.innerText = "Please enter a number"
    }
    let ans = "Number not found"; //defaut value

  for(let i=0; i<arr.length; i++){
   if(arr[i] === target){
   ans = (`${target} is found at index ${i}`)
   break;
   }
}
 h1.innerText = ans
 input.value = "";
 input.focus();
})


