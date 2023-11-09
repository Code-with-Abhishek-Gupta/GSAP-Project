
document.addEventListener('mousemove', function (dets) {
    // console.log(dets)
    console.log("fff")
})

 
gsap.to("nav", {
    height: "10vh",
    backgroundColor: "black",
    duration: 5,
    scrollTrigger: {

        trigger: "nav",
        scroller: "body",
        // markers: true,
        start: "top 0%",



        // true 1,2,3,4,5 
        scrub: 2,


    }


});

gsap.to('main', {
    backgroundColor: "black",
    scrollTrigger: {
        scroller: "body",
        trigger: "main",
        markers: true,
        scrub: 5,

        start: "top -30%",
        end: "top -40%",
    }
})


