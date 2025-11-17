var arr = [
  {
    team: 'CSK',
    primary: 'yellow',
    secondary: 'blue',
    fullName: 'Chennai Super Kings',
    trophies: 5,
    captain: 'MS Dhoni',
    img : "https://imgs.search.brave.com/wiYj7RBFb61FkcQWcK0OxG11_8dq3tEHtcdsRjroklk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzLzA4LzQz/Lzg1LzA4NDM4NTc5/NjhlOTlkYTIxNjU1/NDlkOGYwMzZiYTZk/LmpwZw"

  },
  {
    team: 'RCB',
    primary: 'red',
    secondary: 'black',
    fullName: 'Royal Challengers Bengaluru',
    trophies: 0,
    captain: 'Faf du Plessis'
  },
  {
    team: 'MI',
    primary: 'blue',
    secondary: 'gold',
    fullName: 'Mumbai Indians',
    trophies: 5,
    captain: 'Hardik Pandya'
  },
  {
    team: 'KKR',
    primary: 'purple',
    secondary: 'gold',
    fullName: 'Kolkata Knight Riders',
    trophies: 3,
    captain: 'Shreyas Iyer'
  },
  {
    team: 'RR',
    primary: 'pink',
    secondary: 'blue',
    fullName: 'Rajasthan Royals',
    trophies: 1,
    captain: 'Sanju Samson'
  },
  {
    team: 'DC',
    primary: 'blue',
    secondary: 'red',
    fullName: 'Delhi Capitals',
    trophies: 0,
    captain: 'Rishabh Pant'
  },
  {
    team: 'PBKS',
    primary: 'red',
    secondary: 'silver',
    fullName: 'Punjab Kings',
    trophies: 0,
    captain: 'Shikhar Dhawan'
  },
  {
    team: 'SRH',
    primary: 'orange',
    secondary: 'black',
    fullName: 'Sunrisers Hyderabad',
    trophies: 1,
    captain: 'Pat Cummins'
  },
  {
    team: 'GT',
    primary: 'darkblue',
    secondary: 'gold',
    fullName: 'Gujarat Titans',
    trophies: 1,
    captain: 'Shubman Gill'
  },
  {
    team: 'LSG',
    primary: 'teal',
    secondary: 'orange',
    fullName: 'Lucknow Super Giants',
    trophies: 0,
    captain: 'KL Rahul'
  }
];


let btn = document.querySelector("button")
let h1 = document.querySelector("h1")
let bgContent = document.querySelector("#bg-content")
let card = document.querySelector("#card")
let img =  document.querySelector("img")
let bgImg =  document.querySelector("img")

btn.addEventListener("click", function(){
    let res = Math.floor(Math.random()*arr.length)
    h1.innerHTML = `
        Team: ${arr[res].team} <br>
        Full Name: ${arr[res].fullName} <br>
        Trophies: ${arr[res].trophies} <br>
        Captain: ${arr[res].captain}
    `;
   card.style.backgroundColor = arr[res].primary;
   bgContent.style.backgroundColor = arr[res].secondary;
    card.style.backgroundImage = `url(${arr[res].img})`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "center"; 
})