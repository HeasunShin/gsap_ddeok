"use strict";

gsap.set(".container img.swipeimage", {
  yPercent: -50,
  xPercent: 50
});
var firstEnter;
gsap.utils.toArray(".container").forEach(function (el) {
  var image = el.querySelector("img.swipeimage"),
      setX = gsap.quickTo(image, "x", {
    duration: 0.4,
    ease: "power3"
  }),
      setY = gsap.quickTo(image, "y", {
    duration: 0.4,
    ease: "power3"
  }),
      align = function align(e) {
    if (firstEnter) {
      setX(e.clientX, e.clientX); //https://gsap.com/docs/v3/GSAP/gsap.quickTo()/#optionally-define-a-start-value

      setY(e.clientY, e.clientY);
      firstEnter = false;
    } else {
      setX(e.clientX);
      setY(e.clientY);
    }
  },
      startFollow = function startFollow() {
    return document.addEventListener("mousemove", align);
  },
      stopFollow = function stopFollow() {
    return document.removeEventListener("mousemove", align);
  },
      fade = gsap.to(image, {
    autoAlpha: 1,
    ease: "none",
    paused: true,
    duration: 0.1,
    onReverseComplete: stopFollow
  });

  el.addEventListener("mouseenter", function (e) {
    firstEnter = true;
    fade.play();
    startFollow();
    align(e);
  });
  el.addEventListener("mouseleave", function () {
    return fade.reverse();
  });
});