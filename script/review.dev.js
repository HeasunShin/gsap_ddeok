"use strict";

gsap.registerPlugin(ScrollTrigger);

function initReviewScroll() {
  var Rwrapper = document.querySelector(".review-wrapper");
  var RscrollHeight = Rwrapper.scrollHeight - window.innerHeight; // 오른쪽 텍스트 고정

  ScrollTrigger.create({
    trigger: ".review-section",
    start: "top top",
    end: "+=".concat(Rwrapper.scrollHeight - 150),
    pin: ".review-left",
    pinSpacing: false
  }); // 내부 콘텐츠만 위로 이동 (왼쪽은 고정)

  gsap.to(Rwrapper, {
    y: -RscrollHeight,
    ease: "none",
    scrollTrigger: {
      trigger: ".review-section",
      start: "top top",
      // end: `+=${Rwrapper.RscrollHeight}`, 수정
      end: "+=".concat(RscrollHeight),
      scrub: true
    }
  });
}

window.addEventListener("load", initReviewScroll);
window.addEventListener("resize", function () {
  ScrollTrigger.refresh();
});