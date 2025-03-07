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



const btn2 = document.querySelector("#signup");
const signinn = document.querySelector("#signinn");

btn2.addEventListener("click",()=>{
    if(signinn.style.transform === "translateX(0px)")
    {
        signinn.style.transform = "translateX(-100%)";
    }
    else{
        signinn.style.transform = "translateX(0px)";
    }
})



    gsap.to("#page3 img", {
        height: "30vh",
        width : "30vh",
        scrollTrigger:{
            trigger: "#page3",
            scroll: "#main",
            markers : true,
            start : "top 0%",
            end : "top -200%",
            pin : "#page3",
            scrub : 2
        }
    })

    gsap.to("#page3l p",{
        transform: "translateX(-25%)",
        scrollTrigger:{
            trigger : "#page3 p",
            scroll : "#main",   
            start : "top 0%",
            end : "top -100%",
            scrub : 2
        }
    })

    gsap.to("#page3R p",{
        transform: "translateX(25%)",
        scrollTrigger:{
            trigger : "#page3 p",
            scroll : "#main",   
            start : "top 0%",
            end : "top -100%",
            scrub : 2
        }
    })

















    gsap.to("#page4 h1", {
        transform: "translateX(-70%)",
        scrollTrigger: {
            trigger: "#page4 h1",
            scroll: "#main",
            start: "top 9%", 
            end: "top -200%",
            scrub: 2,
            pin: "#page4"
        }
    
    })
    



















