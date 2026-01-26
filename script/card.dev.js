"use strict";

// gsap.registerPlugin(ScrollTrigger);
// // 카드 순차 등장
// const cards = gsap.utils.toArray(".card");
// cards.forEach((card, i) => {
//   gsap.to(card, {
//     scrollTrigger: {
//       trigger: ".section-cards",
//       start: `top+=${i * 700} center`,
//       end: `top+=${(i + 1) * 700} center`,
//       scrub: true,
//     },
//     x: 0,
//     opacity: 1,
//     duration: 1,
//     ease: "power2.out",
//   });
// });
// // 화면 높이의 절반 계산
// const halfScreenHeight = window.innerHeight / 2;
// ScrollTrigger.create({
//   trigger: ".section-cards",
//   start: "top top",
//   // end: "bottom+=100% top",
//   // end: `+=${halfScreenHeight}`,
//   end: `+=${window.innerHeight * 2.5}`,
//   scrub: true,
//   pin: true,
//   anticipatePin: 1,
//   onUpdate: (self) => {
//     const revealStart = 0.6; // 스크롤 60% 이후부터 덮기 시작
//     if (self.progress > revealStart) {
//       const localProgress = (self.progress - revealStart) / (1 - revealStart);
//       gsap.to(".history-section", {
//         y: -halfScreenHeight * localProgress,
//         ease: "power2.out",
//         overwrite: "auto",
//       });
//       gsap.to(".product-list", {
//         y: -halfScreenHeight * localProgress,
//         ease: "power2.out",
//         overwrite: "auto",
//       });
//     }
//   },
// });
gsap.registerPlugin(ScrollTrigger);
/* =========================
   1. section-cards pin + 카드 타임라인
========================= */

var cards = gsap.utils.toArray(".card");
var halfScreenHeight = window.innerHeight / 2;
var cardsTL = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-cards",
    start: "top top",
    end: "+=".concat(window.innerHeight * 2.5),
    // 체류 시간
    pin: true,
    scrub: true,
    anticipatePin: 1
  }
});
/* =========================
   2. 카드 순차 등장 (오른쪽 → 왼쪽)
   - section이 완전히 보인 뒤 시작
========================= */
// 처음 여백 (section 먼저 보여주기)

cardsTL.to({}, {
  duration: 0.3
});
cards.forEach(function (card) {
  cardsTL.fromTo(card, {
    x: 150,
    opacity: 0
  }, {
    x: 0,
    opacity: 1,
    duration: 0.6,
    ease: "power2.out"
  });
});
/* =========================
   3. 후반부 덮임 연출
========================= */

cardsTL.to({}, {
  duration: 0.3
});
cardsTL.to(".history-section", {
  y: -halfScreenHeight,
  ease: "power2.out"
}, "cover");
cardsTL.to(".product-list", {
  y: -halfScreenHeight,
  ease: "power2.out"
}, "cover");
/* =========================
   4. 리사이즈 대응
========================= */

window.addEventListener("resize", function () {
  ScrollTrigger.refresh();
});