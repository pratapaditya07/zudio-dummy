gsap.to("#pg1_video h1" , {
    fontSize: "2.5vw",
    top: "0.8vw",
    left: "0vw",
    color: "#101000",
    scrollTrigger: {
        trigger: "#pg1_video h1",
        scroll: "#pg1_video",
        start: "top 75.9%",
        end: "top -15%",
        scrub: 1,
        pin: "#pg1_video"
    }
})

