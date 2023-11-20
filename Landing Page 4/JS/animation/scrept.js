
var cur = document.getElementById("cursor");
var blur = document.querySelector("#blur");



document.addEventListener('mousemove', function (dets) {
    console.log(dets.x)
    cur.style.left = dets.x + "px";
    cur.style.top = dets.y + "px";


    blur.style.left = dets.x - 200 + "px";
    blur.style.top = dets.y - 200 + "px";
    // blur.style.top = dets.y + "px";








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
        // markers: true, 
        scrub: 3,

        start: "top -20%",
        end: "top -30%",
    }
})



gsap.to('#page1 video', {
    height: "115vh",
    scrollTrigger: {
        trigger: "#page1",
        scroller: "body",
        // markers:true, 
        start: "top 20%",
        end: "top 25%",
        scrub: 1,
        scale: 1,

    }
})







gsap.to('#page2 , #page3 ', {
  
    y: -180,
    duration: 2,

   

    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        // markers: true, 
        start: "top 40%",
        end: "top 42%",
        scrub: 2,
        scale: 2,

    }
})


gsap.from('#page2 ', {

    opacity: 0.8,
    backgroundColor: "black",
    background: "none",

    scrollTrigger: {
        trigger: "#page2",
        scroller: "body",
        markers: true,
        start: "top 55%",
        end: "top 58%",
        scrub: 2,
        scale: 2,

    }
})