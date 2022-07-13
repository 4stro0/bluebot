var navbar = document.getElementById("navbarid");
window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    var heightgae = document.getElementById("homepage");
    let height = heightgae.offsetHeight/4;
    navbar.style.backgroundColor = "rgba(0, 62, 197,"+(scroll/height)+")";
    if(scroll < 1) {
        
    } else {
        navbar.classList.add("bg-gradient");
        navbar.classList.add("shadow");
        navbar.classList.add("shadow-sm");
    }
    
});
