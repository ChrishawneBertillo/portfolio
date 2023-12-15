/*
const allSection = nav.querySelectorAll(".Section"),
totalSection = allSection.length; 


*/

var typed = new Typed (".typing", {
strings:["", "Web Designer", "Web Developer", "Frontend Developer","Game Streamer"], 
typeSpeed: 100,
backSpeed:60,
loop: true
})





const navTogglerBtn = document.querySelector(".nav-toggler"), 
aside = document.querySelector(".aside"); 
navTogglerBtn.addEventListener("click",() => {
asideSectionTogglerBtn(); 
})


function asideSectionTogglerBtn() {
aside.classList.toggle("open"); 

navTogglerBtn.classList.toggle("open"); 
/* 
for(let i = 0; i < totalSection; i++) {

allSection[i].classList.toggle("open"); 
}
*/
}