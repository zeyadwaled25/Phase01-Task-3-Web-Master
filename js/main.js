// let landingPage = document.querySelector(".home");

// let imageArray = ["home1.jpg" , "home2.jpg" , "home3.jpg"];

// landingPage.style.backgroundImage = 'url("img/home1.jpg)';


// let randomNumber = Math.floor(Math.random() * imageArray.length );


// let randomOption = true;


// function randomizeImgs(){
//   if( randomOption === true){
//     setInterval(() => {

//       let randomNumber = Math.floor(Math.random() * imageArray.length );
    
//       landingPage.style.backgroundImage = 'url("img/'+  imageArray[randomNumber] +'")';
    
//     }, 4000);
    
//   }
// }
// randomizeImgs();

let header = document.querySelector("header");
let menuIcon = document.querySelector(".navbar-toggler");
let navbar = document.querySelector(".navbar");


menuIcon.onclick = () => {
  navbar.classList.toggle("active");
}
window.onscroll = () => {
  navbar.classList.remove("active");
}
window.addEventListener('scroll', () => {
    header.classList.toggle("shadow" , window.scrollY > 0);
    header.classList.toggle("rounded" , window.scrollY > 0);
});

