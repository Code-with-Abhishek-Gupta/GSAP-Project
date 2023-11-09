var tl = gsap.timeline()


tl.from('nav img , hr ,  nav li ,  .right-nav' , {
    y: -80,
    duration: 2,
    opacity: 0,
    stagger:0.3,

})



tl.from(' #right img', {
    x: 200,
    opacity: 0,
    scale: 3,
    duration:1,

})



tl.from(' #left', {
    x: 200,
    opacity: 0,

})


// gsap.to(' #right img , #left', {
//     y: 280,
//     // opacity: 0,
//     start: 'top 10%',
//     end: 'bottom -5%',
//     // markers: true,
//     scrollTrigger: {
//         trigger: 'page1',
//         // markers: true,
//         scrub: 0.5,



//     }

// })


gsap.from('.box', {
    y: 800,
    opacity: 0,
    start: 'bottom -50%',
    end: 'bottom -6%',
    scrollTrigger: {
        trigger: '#page1',
        scroller:"body",
        // markers: true,

        scrub: 1,


    }
})