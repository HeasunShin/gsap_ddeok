gsap.registerPlugin(ScrollTrigger);

// 카드 순차 등장
const cards = gsap.utils.toArray(".card");

cards.forEach((card, i) => {
  gsap.to(card, {
    scrollTrigger: {
      trigger: ".section-cards",
      start: `top+=${i * 100} center`,
      end: `top+=${(i + 1) * 100} center`,
      scrub: true,
    },
    x: 0,
    opacity: 1,
    duration: 1,
    ease: "power2.out",
  });
});

// 화면 높이의 절반 계산
const halfScreenHeight = window.innerHeight / 2;

ScrollTrigger.create({
  trigger: ".section-cards",
  start: "top top",
  // end: "bottom+=100% top",
  end: `+=${halfScreenHeight}`,
  scrub: true,
  pin: true,
  anticipatePin: 1,

  onUpdate: (self) => {
    // history-section은 위로 올라감
    gsap.to(".history-section", {
      y: -halfScreenHeight * self.progress,
      ease: "power2.out",
      overwrite: "auto",
    });

    // product-list는 그만큼 올라와서 gap 해소
    gsap.to(".product-list", {
      y: -halfScreenHeight * self.progress,
      ease: "power2.out",
      overwrite: "auto",
    });
  },
});
