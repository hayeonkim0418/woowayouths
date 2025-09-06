export const Gsap = () => {
  gsap.to(".img1", {
    transform: "translateX(-113%) translateY(-103%)",
    opacity: 1,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".sec02",
      start: "0 center",
      end: "bottom top",
      markers: false,
      scrub: false,
    },
  });

  gsap.to(".img2", {
    transform: "translateX(113%) translateY(-92%)",
    opacity: 1,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".sec02",
      start: "0 center",
      end: "bottom top",
      markers: false,
      scrub: false,
    },
  });

  gsap.to(".img3", {
    transform: "translateX(197%) translateY(56%)",
    opacity: 1,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".sec02",
      start: "0 center",
      end: "bottom top",
      markers: false,
      scrub: false,
    },
  });

  gsap.to(".img4", {
    transform: "translateX(0%) translateY(102%)",
    opacity: 1,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".sec02",
      start: "0 center",
      end: "bottom top",
      markers: false,
      scrub: false,
    },
  });

  gsap.to(".img5", {
    transform: "translateX(-211%) translateY(38%)",
    opacity: 1,
    duration: 1.4,
    scrollTrigger: {
      trigger: ".sec02",
      start: "0 center",
      end: "bottom top",
      markers: false,
      scrub: false,
    },
  });
};
