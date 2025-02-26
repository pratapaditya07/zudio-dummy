gsap.from("#hero h1" , {
    fontSize : "20vw",
    scrollTrigger:{
        trigger: "#hero h1",
        scroll:"#main",
        markers : true,
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
        markers : true,
        start : "top 100%",
        end :"top 10%",
        scrub : 2
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
