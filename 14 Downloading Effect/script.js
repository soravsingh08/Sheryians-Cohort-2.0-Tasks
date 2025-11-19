var grow = 0
var btn = document.querySelector('button')
var h2 = document.querySelector('h2')
var inner = document.querySelector('.inner')
var h3 = document.querySelector("h3")


btn.addEventListener('click',function(){
    btn.style.pointerEvents = 'none'
    var num = 50 + Math.floor(Math.random()*10)
    
    h3.innerHTML=`Your file will be downloaded in <span style="color:rgb(63, 63, 205);">${num/10}</span>  seconds.`;

    var int = setInterval(() => {
        grow++
        h2.innerHTML = grow+'%'
        inner.style.width = grow+'%'
    },num);

    setTimeout(() => {
        clearInterval(int)
        btn.innerHTML = 'Downloaded'
        btn.style.opacity = 0.5
    }, num*100);

    
    
})