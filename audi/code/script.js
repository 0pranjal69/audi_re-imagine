for (let i = 0; i < 200; i++) { // here 200 represents number of stars i.e divs
    let star = document.createElement('div');
    star.className = 'star';
    star.style.zIndex="6"
    star.style.top = `${Math.random() * 600}px`;
    star.style.left = `${Math.random() * 98}%`;
    star.style.animationDuration = `${Math.random() * 2 + 1}s`;
    document.body.appendChild(star);
}


var swiper = new Swiper(".mySwiper", {
    slidesPerView: "auto",

  
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,

});

function openSection(sectionNumber) {
    const sections = document.querySelectorAll('.content-section');
    sections.forEach((section, index) => {
        if (index + 1 === sectionNumber) {
            section.classList.toggle('open');
        } else {
            section.classList.remove('open');
        }
    });
}


let scrollTopBtn = document.getElementById("scrollTopBtn");


window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.documentElement.scrollTop > 20) { //after scrolling 20px the button appears
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}


function scrollToTop() {//scroll to the top of the document
    window.scrollTo({ top: 0, behavior: 'smooth' });


    scrollTopBtn.style.transform = 'translateY(-800px)';  // Move the button when clicked


    setTimeout(() => { // Return the button to its original position
        scrollTopBtn.style.transform = 'translateY(0)';
    }, 300);
}
function load(){
    let loader = document.querySelector("#loader")
setTimeout(() => {
    loader.style.top="-110%"
}, 5500);}
load()


let cursor = document.querySelector("#crsr")
let map = document.querySelector(".lwr")
map.addEventListener("mousemove",function(drop){
    crsr.style.top=drop.y+"px"
    crsr.style.left=drop.x+"px"
    crsr.style.opacity="1"
})
