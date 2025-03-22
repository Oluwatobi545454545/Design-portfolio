
window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".nav"); 
    if (window.scrollY > 50) {  
        navbar.style.top = "0%"; 
        navbar.style.width = "100%"; 
    } else {
        navbar.style.top = "5%"; 
        navbar.style.width = "70%"; 
    }
});

