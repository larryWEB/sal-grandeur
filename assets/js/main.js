let menu = document.querySelector(".hamburger-menu");
let nav = document.querySelector(".hidden-nav");


//function for menu
menu.addEventListener("click", ()=>{
    nav.classList.toggle("active");
})


//function for small sliding images
var index = 0;
var slides = document.querySelectorAll(".slides");


function changeSlide(){

  if(index < 0){
    index = slides.length-1;
  }
  
  if(index > slides.length-1){
    index = 0;
  }
  
  for(let i=0;i<slides.length;i++){
    slides[i].style.display = "none";
  }
  
  slides[index].style.display= "block";
  
  index++;
  
  setTimeout(changeSlide,5000);
  
}

changeSlide();


//function for  big screen sliding images
var index = 0;
var slideBig = document.querySelectorAll(".slide-big");


function Slides(){

  if(index < 0){
    index = slideBig.length-1;
  }
  
  if(index > slideBig.length-1){
    index = 0;
  }
  
  for(let i=0;i < slideBig.length;i++){
    slideBig[i].style.display = "none";
  }
  
  slideBig[index].style.display= "block";
  
  index++;
  
  setTimeout(Slides,9000);
  
}

Slides();




//function for sliding testimonial images
var larry = 0;
var spin = document.querySelectorAll("#zero");


function changeSpin(){

  if(larry < 0){
    larry = spin.length-1;
  }
  
  if(larry > spin.length-1){
    larry = 0;
  }
  
  for(let i=0;i<spin.length;i++){
    spin[i].style.display = "none";
  }
  
  spin[larry].style.display= "block";
  
  larry++;
  
  setTimeout(changeSpin,10000);
  
}

changeSpin();


/*FAQ */

const faqHeaders = document.querySelectorAll(".faq-header")
faqHeaders.forEach(faqHeaders => {
  faqHeaders.addEventListener("click", event => {
    faqHeaders.classList.toggle("active");
    const faqAnswer = faqHeaders.nextElementSibling;
    if(faqHeaders.classList.contains("active")){
      faqAnswer.style.maxHeight = faqAnswer.scrollHeight + "px";
    }
    else{
      faqAnswer.style.maxHeight = 0;
    }
});
});

/*FAQ */
