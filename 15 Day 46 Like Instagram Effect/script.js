var img = document.querySelector("img");
var love = document.querySelector(".ri-heart-fill");

img.addEventListener("click", function () {

    love.style.opacity = 1;
    love.style.transform = "translate(-50%, -50%) scale(1)";

    // Hide after animation
    setTimeout(() => {
        love.style.transform = "translate(-50%, -50%) scale(0)";
        love.style.opacity = 0;
    }, 900);
});
