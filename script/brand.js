function setupBrandHover() {
  const section = document.querySelector(".brand-section");
  const left = document.querySelector(".brand-left");
  const right = document.querySelector(".brand-right");
  const leftImg = document.querySelector(".left-img");
  const rightImg = document.querySelector(".right-img");

  const leftBg = "url('/images/bg2.png')";
  const rightBg = "url('/images/bg3.png')";
  const initialBg = leftBg;

  // 이미지 초기 위치 중심 정렬
  gsap.set([leftImg, rightImg], {
    xPercent: -50,
    yPercent: -50,
    autoAlpha: 0,
    // scale: 1,
    // rotation: 0,
  });

  section.style.backgroundImage = initialBg;

  function onMouseMove(e, img) {
    gsap.to(img, {
      x: e.clientX,
      y: e.clientY,
      scale: 1.1,
      rotation: 5,
      ease: "power2.out",
      duration: 0.3,
    });
  }

  function setupHoverArea(area, img, bg) {
    area.addEventListener("mouseenter", () => {
      section.style.backgroundImage = bg;
      gsap.to(img, { autoAlpha: 1, duration: 0.3 });
    });

    area.addEventListener("mousemove", (e) => {
      onMouseMove(e, img);
    });

    area.addEventListener("mouseleave", () => {
      section.style.backgroundImage = initialBg;
      gsap.to(img, {
        autoAlpha: 0,
        scale: 1,
        rotation: 0,
        duration: 0.3,
      });
    });
  }

  setupHoverArea(left, leftImg, leftBg);
  setupHoverArea(right, rightImg, rightBg);
}

document.addEventListener("DOMContentLoaded", setupBrandHover);
