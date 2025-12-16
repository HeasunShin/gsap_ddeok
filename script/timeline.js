gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".timeline-item").forEach((item) => {
  const img = item.querySelector(".timeline-right img");

  gsap.fromTo(
    img,
    { x: "100%", opacity: 0 },
    {
      x: "0%",
      opacity: 1,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        toggleActions: "play none none reverse",
      },
    }
  );
});
