gsap.to("#pg1_video h1" , {
    fontSize: "2.5vw",
    top: "0.8vw",
    left: "0vw",
    scrollTrigger: {
        trigger: "#pg1_video h1",
        scroll: "#pg1_video",
        start: "top 75.8%",
        end: "top -15%",
        scrub: 1,
        pin: "#pg1_video"
    }
})

    /* gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
        scrollTrigger: {
        trigger: "#pg1_video",
        start: "top top",
        end: "+=500px",
        scrub: true,
        pin: true
        }
    });
    
    tl.to("#brand_name", {
        top: "10px", // Adjust as per your design
        left: "10px", // Adjust as per your design
        scale: 0.5, // Adjust to make the text smaller if needed
        position: "absolute", // Ensure the positioning works as intended
        ease: "power1.out"
    });
    
    // Enable normal page scrolling after text is positioned
    ScrollTrigger.create({
        trigger: "#pg1_video",
        start: "bottom top",
        end: "bottom top+=1",
        onEnter: () => {
        gsap.to(".page-content", {
            y: 0,
            ease: "none"
        });
        },
        onLeaveBack: () => {
        gsap.to(".page-content", {
            y: 0,
            ease: "none"
        });
        }
    }); */
    
