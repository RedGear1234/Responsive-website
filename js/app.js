// navigator toggle 
const mobilebtn = document.getElementById("mobile-cta")

nav = document.querySelector("nav")
mobilebtnexit = document.getElementById('mobile-cta-exit')


mobilebtn.addEventListener("click",()=>{
    nav.classList.add("menu-btn")

})

mobilebtnexit.addEventListener("click",()=>{
    nav.classList.remove("menu-btn")
})


