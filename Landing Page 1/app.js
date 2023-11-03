

var tl = gsap.timeline();






tl.from("#nav_left img ,#nav_center li, #nav_right", {
   y: -20,
   opacity: 0,


   stagger: 0.3,

})

tl.from("h1", {
   opacity: 0,
   stagger: 0.2,
   y: -25,


});




tl.from("#left_image1 , #left_image2", {

   x: 75,
   stagger: 0.2,
   opacity: 0,


   rotate: 25,


});


tl.from("#right_image1 , #right_image2", {

   x: -75,
   rotate: 25,
   opacity: 0,


});


