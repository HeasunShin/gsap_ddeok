// gsap.registerPlugin(ScrollTrigger);

// // pin 고정 + 왼쪽만 스크롤
// const introSection = document.querySelector(".product-intro-section");
// const productLeft = document.querySelector(".product-left");
// const productRight = document.querySelector(".product-right");

// if (introSection && productLeft && productRight) {
//   const scrollLength = productLeft.scrollHeight - window.innerHeight;

//   // pin 고정
//   ScrollTrigger.create({
//     trigger: introSection,
//     start: "top top",
//     end: `+=${scrollLength}`,
//     pin: productRight,
//     pinSpacing: true,
//     anticipatePin: 1,
//     scrub: true,
//     // markers: true,
//   });

//   // 왼쪽만 위로 스크롤
//   gsap.to(productLeft, {
//     y: -scrollLength,
//     ease: "none",
//     scrollTrigger: {
//       trigger: introSection,
//       start: "top top",
//       end: `+=${scrollLength}`,
//       scrub: true,
//     },
//   });
// }
