Shery.mouseFollower()
Shery.makeMagnet(".magnet")
Shery.hoverWithMediaCircle(".website", {
    videos: ['https://cuberto.com/assets/home/hero/header.mp4', 'https://cuberto.com/assets/projects/puntopago/cover.mp4', 'https://cuberto.com/assets/projects/magma/cover.mp4?2']
})
Shery.hoverWithMediaCircle(".footer", {
    videos: ['https://cuberto.com/assets/home/summary/2.mp4?3']
})


gsap.to(".fleftelm", {
  scrollTrigger: {
    trigger: "#fimages",
    pin: true,
    start: "top top",
    end: "bottom bottom",
    endTrigger: ".last",
    scrub: 1,
  },
  y: "-330%",
  ease: Power1,
});

let sections = document.querySelectorAll(".fleftelm");
Shery.imageEffect(".images", {
  style: 5,
  config: { onMouse: { value: 1 } },
  slideStyle: (setScroll) => {
    sections.forEach(function (section, index) {
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        scrub: 1,
        onUpdate: function (prog) {
          setScroll(prog.progress + index);
        },
      });
    });
  },
});

  Shery.textAnimate(".text-target" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: 0.1,
    duration: 1.5,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
  });
  Shery.imageMasker(".mask-target" /* Element to target.*/, {
    //Parameters are optional.
    mouseFollower: true,
    text: "Hello",
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });

 

  gsap.to(".video-img", {
    scrollTrigger:{
      trigger: ".parent",
      pin : true,
      scrub : 2.5,
      start : "0 40%",
      end : "0 0",
     
      ease : Expo.easeInOut
    },
    width : "100%",
    height : "100%"

  })