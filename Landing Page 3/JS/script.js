var tl = gsap.timeline()


tl.from('nav img , hr', {
    y: -80,
    duration: 2,
    opacity: 0,

})

tl.from(' nav li ,  .right-nav', {
    opacity: 0,
    y: 4,
    stagger: 0.3,


})


tl.from(' #right img', {
    x: 200,
    opacity: 0,

})



tl.from(' #left', {
    x: 200,
    opacity: 0,

})


