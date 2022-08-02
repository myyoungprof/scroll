// const navsecond = document.querySelector(".navsecond")
const header = document.querySelector(".header")
const hamburger = document.querySelector(".hamburger-menu")
const link = document.querySelector(".link")
const nav = document.querySelector("nav")
const home = document.querySelector('#home');
// console.log(home.getBoundingClientRect().height);
// console.log(nav.getBoundingClientRect().height)

hamburger.addEventListener("click", function(){
    header.classList.toggle("showman")
// const containerhight = header.getBoundingClientRect().height
// const linkhight = link.getBoundingClientRect().height

// if(containerhight === 0){
//     header.style.height = `${linkhight}px`
//     header.classList.toggle("showman")
//     header.classList.add("showman")
// }

// else{
//     header.style.height = 0;
//     header.classList.remove("showman")
// }
// header.classList.toggle("showman")

})

const upbar = document.querySelector(".upbar")
const bars = document.querySelector(".bars")

const navbar = document.querySelector(".nav")
window.addEventListener("scroll", function(){
 const scrollheight = window.pageYOffset;
 const navheight = nan.getBoundingClientRect().height

if(scrollheight > navheight){
navbar.classList.add("navsecond")
// upbar.classList.remove("gett")
}

else{
    navbar.classList.remove("navsecond")
    // upbar.classList.add("gett")
}

const baner = bars.getBoundingClientRect().height
console.log(baner)
if(scrollheight > baner){
   upbar.classList.remove("gett")
}

else{
   upbar.classList.add("gett")
}

})


const scrolllinks = document.querySelectorAll(".btnlink")

scrolllinks.forEach(function(btns){
  btns.addEventListener("click", function(e) {
    e.preventDefault();
    // console.log(554)
    let navHeight = nav.getBoundingClientRect().height;
    const fixedNav = nav.classList.contains('navsecond');
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id)
    let position = element.offsetTop - navHeight;
    if(fixedNav === false)  {
       position = position - navHeight; 
    }
        
    console.log(navHeight)
   //console.log(position)
    window.scrollTo({
    left: 0,
    top: position,
   })
   header.classList.remove("showman")
//    console.log(navbar)

})
})















const date = document.querySelector(".date")
date.innerHTML = new Date()
// .getFullTime()
