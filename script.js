gsap.from("#hero h1" , {
    fontSize : "20vw",
    scrollTrigger:{
        trigger: "#hero h1",
        scroll:"main",
        markers : true,
        start : "top 31",
        end : "top -150%",
        scrub : 2,
        pin: "main"
    }
})

gsap.to("#circle",{
    height: " 100vh",
    width: "100%",
    borderRadius : "20px",
    scrollTrigger:{
        trigger: "#circle",
        scroll: "main",
        markers : true,
        start : "top -45%",
        end :"top -165%",
        scrub: 2
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
