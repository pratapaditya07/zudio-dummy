gsap.from("#hero h1" , {
    fontSize : "20vw",
    scrollTrigger:{
        trigger: "#hero h1",
        scroll:"#main",
        start : "top 31",
        end : "top -150%",
        scrub : 2,
        pin : "#hero"
    }
})

gsap.to("#inn",{
    height: " 95%",
    width: "95%",
    borderRadius : "15px",
    scrollTrigger:{
        trigger: "#inn",
        scroll: "#main",
        start : "top 100%",
        end :"top 10%",
        scrub : 2
    }
})

const btn = document.querySelector("#menu");
const page1 = document.querySelector("#page1");

btn.addEventListener("click", () => {
    if(page1.style.transform === "translateX(0px)")
        {
        page1.style.transform = "translateX(74%)";
        }
        else{
            page1.style.transform = "translateX(0px)";  
        }
});

gsap.to("#page4 h1", {
    transform: "translateX(-70%)",
    scrollTrigger: {
        trigger: "#page4",
        scroll: "#page4",
        markers: true,
        start: "top 0", 
        end: "top -200%",
        scrub: 2,
        pin: true
    }

})












/* gsap.from("#hero h1" , {
    fontSize: "20.5vw",
    scrollTrigger: {
        trigger: "#hero h1",
        scroll: "#hero",
        scrub: 1,
    }
})
 */
