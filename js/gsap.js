class GsapExample {
    constructor() {
      gsap.registerPlugin(ScrollTrigger); // utilisation de ScrollTrigger
      this.init();
    }
    init() {
      if (document.querySelector(".gsap-test")) {
        const plusimg = document.querySelector(".overlay");
  
        gsap.to(
            plusimg,
            { opacity:1},
            {
              opacity:0,
            scrollTrigger: {
              start: "top 30%",
              end: "bottom 60%",
              trigger: ".gsap-test",
              scrub: 1,
              markers: true,              
            },
          }
        ); 
   
      }
  
      }
    }
      const gsapExample = new GsapExample();
  