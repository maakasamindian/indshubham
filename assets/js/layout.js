const 
app = document.getElementById('app'),
tabLinks = document.querySelectorAll('.au-nav-list a'),
navBox = document.querySelector('.au-nav-box'),
navbtn = document.querySelector('#navigation');



tabLinks.forEach(function(e){
   e.onclick = function(){
      navbtn.checked = false
   }
})
app.addEventListener("touchstart", function(){
   navbtn.checked = false
   document.querySelector('#service-contact').checked = false
})
setTimeout(() => {
   document.querySelectorAll("[data-aos]").forEach(function(item){
   item.classList.add("aos-animate")
   item.classList.add("aos-init")
})
}, 1000);