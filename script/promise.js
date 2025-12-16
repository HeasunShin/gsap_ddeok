gsap.registerPlugin(ScrollTrigger, SplitText);

// 왼쪽 고정(pin) 설정
ScrollTrigger.create({
  trigger: ".promise-inner", // .promise-fixed와 .promise-scroll을 포함하는 부모
  start: "top top",
  end: () => "+=" + document.querySelector(".promise-scroll").offsetHeight,
  pin: ".promise-fixed",
  pinSpacing: true,
  anticipatePin: 1,
});

// 오른쪽 개별 promise-item 애니메이션
document.querySelectorAll(".promise-item").forEach((item) => {
  const img = item.querySelector("img");
  const text = item.querySelector("p");

  // SplitText로 글자 단위 분리
  const split = new SplitText(text, { type: "chars" });

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: "top 80%",
      once: true,
    },
  });

  // 이미지 슬라이드 인
  tl.from(img, {
    x: -40,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  });

  // 텍스트 글자 단위 등장
  tl.from(
    split.chars,
    {
      y: 30,
      opacity: 0,
      stagger: 0.03,
      duration: 0.6,
      ease: "power2.out",
    },
    "-=0.4"
  );
});
