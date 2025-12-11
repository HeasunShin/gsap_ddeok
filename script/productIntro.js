// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.create({
//   trigger: ".product-intro-section",
//   start: "top top",
//   // start: "top+=100 top",
//   end: () => "+=" + document.querySelector(".product-left").scrollHeight,
//   pin: ".product-right",
//   pinSpacing: true,
// });

// gsap.to(".product-left", {
//   y: () => {
//     const left = document.querySelector(".product-left");
//     return -1 * (left.scrollHeight - window.innerHeight);
//   },
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".product-intro-section",
//     start: "top top",
//     end: () => "+=" + document.querySelector(".product-left").scrollHeight,
//     scrub: true,
//   },
// });

// gsap.registerPlugin(ScrollTrigger);

// function initProductIntroScroll() {
//   const left = document.querySelector(".product-left");
//   const scrollAmount = left.scrollHeight - window.innerHeight;

//   // pin 고정
//   ScrollTrigger.create({
//     trigger: ".product-intro-section",
//     start: "top top",
//     end: `+=${left.scrollHeight}`,
//     pin: ".product-right",
//     pinSpacing: true,
//   });

//   // 스크롤 이동
//   gsap.to(".product-left", {
//     y: -scrollAmount,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".product-intro-section",
//       start: "top top",
//       end: `+=${left.scrollHeight}`,
//       scrub: true,
//     },
//   });
// }

// // 이미지 및 폰트 로드 이후에 실행
// window.addEventListener("load", () => {
//   initProductIntroScroll();
// });

// // 리사이즈 대응
// window.addEventListener("resize", () => {
//   ScrollTrigger.refresh();
// });

gsap.registerPlugin(ScrollTrigger);

function initProductIntroScroll() {
  const wrapper = document.querySelector(".product-items-wrapper");
  const scrollHeight = wrapper.scrollHeight - window.innerHeight;

  // 오른쪽 텍스트 고정
  ScrollTrigger.create({
    trigger: ".product-intro-section",
    start: "top top",
    end: `+=${wrapper.scrollHeight - 150}`,
    pin: ".product-right",
    pinSpacing: false,
  });

  // 내부 콘텐츠만 위로 이동 (왼쪽은 고정)
  gsap.to(wrapper, {
    y: -scrollHeight,
    ease: "none",
    scrollTrigger: {
      trigger: ".product-intro-section",
      start: "top top",
      end: `+=${wrapper.scrollHeight}`,
      scrub: true,
    },
  });
}

window.addEventListener("load", initProductIntroScroll);
window.addEventListener("resize", () => {
  ScrollTrigger.refresh();
});
