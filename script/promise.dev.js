"use strict";

// gsap.registerPlugin(ScrollTrigger, SplitText);
// const promiseSection = document.querySelector(".promise-section");
// if (promiseSection) {
//   const promiseFixed = promiseSection.querySelector(".promise-fixed");
//   const promiseScroll = promiseSection.querySelector(".promise-scroll");
//   const promiseItems = promiseSection.querySelectorAll(".promise-item");
//   // pin 종료 거리 계산
//   function getPromiseScrollDistance() {
//     return Math.max(promiseScroll.scrollHeight - promiseFixed.offsetHeight, 0);
//   }
//   /* =========================
//      1. 왼쪽 fixed pin 설정
//   ========================== */
//   ScrollTrigger.create({
//     trigger: promiseSection,
//     start: "top+=100 top", // padding-top 만큼 보정
//     end: () => `+=${getPromiseScrollDistance()}`,
//     pin: promiseSection.querySelector(".promise-fixed"),
//     pinSpacing: true,
//   });
//   // ScrollTrigger.create({
//   //   trigger: promiseFixed, // 🔥 변경 핵심
//   //   start: "top top", // 화면 상단에 붙는 순간 pin
//   //   end: () => `+=${getPromiseScrollDistance()}`,
//   //   pin: true, // 자기 자신 pin
//   //   pinSpacing: true,
//   //   anticipatePin: 1,
//   // });
//   /* =========================
//      2. 오른쪽 promise-item 애니메이션
//   ========================== */
//   document.querySelectorAll(".promise-item").forEach((item) => {
//     const img = item.querySelector("img");
//     const title = item.querySelector("h3");
//     const text = item.querySelector("p:not(.caption)");
//     const caption = item.querySelector(".caption");
//     const ul = item.querySelector("ul");
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: item,
//         start: "top 80%",
//         once: true,
//       },
//     });
//     // 이미지가 있는 경우만
//     if (img) {
//       tl.from(img, {
//         x: -40,
//         opacity: 0,
//         duration: 0.6,
//         ease: "power2.out",
//       });
//     }
//     // 제목
//     if (title) {
//       tl.from(
//         title,
//         {
//           y: 20,
//           opacity: 0,
//           duration: 0.4,
//           ease: "power2.out",
//         },
//         img ? "-=0.3" : 0
//       );
//     }
//     // 본문 텍스트 (SplitText)
//     if (text) {
//       const split = new SplitText(text, { type: "chars" });
//       tl.from(
//         split.chars,
//         {
//           y: 30,
//           opacity: 0,
//           stagger: 0.025,
//           duration: 0.6,
//           ease: "power2.out",
//         },
//         "-=0.2"
//       );
//     }
//     // 캡션
//     if (caption) {
//       tl.from(
//         caption,
//         {
//           opacity: 0,
//           y: 10,
//           duration: 0.3,
//           ease: "power2.out",
//         },
//         "-=0.3"
//       );
//     }
//     // ul
//     if (ul) {
//       const liItems = ul.querySelectorAll("li");
//       liItems.forEach((li, index) => {
//         const split = new SplitText(li, { type: "chars" });
//         tl.from(
//           split.chars,
//           {
//             y: 30,
//             opacity: 0,
//             stagger: 0.025,
//             duration: 0.6,
//             ease: "power2.out",
//           },
//           index === 0 ? "-=0.2" : "-=0.45"
//         );
//       });
//     }
//   });
//   /* =========================
//      3. 리사이즈 대응
//   ========================== */
//   window.addEventListener("resize", () => {
//     ScrollTrigger.refresh();
//   });
// }
gsap.registerPlugin(ScrollTrigger, SplitText);

function initPromiseSection() {
  var promiseSection = document.querySelector(".promise-section");
  if (!promiseSection) return;
  var promiseFixed = promiseSection.querySelector(".promise-fixed");
  var promiseScroll = promiseSection.querySelector(".promise-scroll");
  var promiseItems = promiseSection.querySelectorAll(".promise-item");

  function getPromiseScrollDistance() {
    return Math.max(promiseScroll.scrollHeight - promiseFixed.offsetHeight, 0);
  }
  /* =========================
     1. 왼쪽 pin
  ========================== */


  ScrollTrigger.create({
    trigger: promiseSection,
    start: "top top",
    end: function end() {
      return "+=".concat(getPromiseScrollDistance());
    },
    pin: promiseFixed,
    pinSpacing: true,
    anticipatePin: 1
  });
  /* =========================
     2. 오른쪽 item 애니메이션
  ========================== */

  promiseItems.forEach(function (item) {
    var title = item.querySelector("h3");
    var images = item.querySelectorAll("img");
    var textBlocks = item.querySelectorAll("p:not(.caption)");
    var captions = item.querySelectorAll(".caption");
    var tl = gsap.timeline({
      scrollTrigger: {
        trigger: item,
        start: "top 80%",
        once: true
      }
    });
    /* 제목 */

    if (title) {
      tl.from(title, {
        y: 20,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    }
    /* 이미지 여러 개 대응 */


    if (images.length) {
      tl.from(images, {
        y: 40,
        opacity: 0,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out"
      }, "-=0.2");
    }
    /* 본문 텍스트 — 글자 단위 */


    textBlocks.forEach(function (p) {
      var split = new SplitText(p, {
        type: "chars"
      });
      tl.from(split.chars, {
        y: 25,
        opacity: 0,
        stagger: 0.02,
        duration: 0.5,
        ease: "power2.out"
      }, "-=0.3");
    });
    /* 캡션 */

    if (captions.length) {
      tl.from(captions, {
        opacity: 0,
        y: 10,
        stagger: 0.15,
        duration: 0.3,
        ease: "power2.out"
      }, "-=0.3");
    }

    var listItems = item.querySelectorAll("li");
    listItems.forEach(function (li) {
      var split = new SplitText(li, {
        type: "chars"
      });
      tl.from(split.chars, {
        y: 25,
        opacity: 0,
        stagger: 0.02,
        duration: 0.45,
        ease: "power2.out"
      }, "-=0.3");
    });
  });
  /* =========================
     3. resize 대응
  ========================== */

  window.addEventListener("resize", function () {
    ScrollTrigger.refresh();
  });
}

initPromiseSection();