// // 스크롤 시 헤더 숨기기
// let lastScroll = 0;
// const header = document.querySelector(".site-header");

// window.addEventListener("scroll", () => {
//   const curr = window.scrollY;
//   if (curr > lastScroll) {
//     header.classList.add("hide");
//   } else {
//     header.classList.remove("hide");
//   }
//   lastScroll = curr;
// });

// // 햄버거 메뉴 열기 / 닫기
// const logo = document.getElementById("logo");
// const menu = document.getElementById("hamburgerMenu");
// const closeBtn = document.getElementById("closeMenu");

// logo.addEventListener("click", () => {
//   menu.style.display = "flex";
// });

// closeBtn.addEventListener("click", () => {
//   menu.style.display = "none";
// });

// gsap.registerPlugin(ScrollTrigger);

// const teokData = [
//   { left: "부드러운 팥앙금", right: "쫀득한 찹쌀피" },
//   { left: "제주쑥의 향", right: "쫀쫀한 식감" },
//   { left: "복분자의 단맛", right: "촉촉한 떡결" },
//   { left: "흑임자의 고소함", right: "탄력 있는 피" },
// ];

// // pin된 hero 영역에 따라 이미지 슬라이드
// ScrollTrigger.create({
//   trigger: ".hero-section",
//   start: "top top",
//   end: "+=" + window.innerHeight * teokData.length,
//   pin: ".hero-fixed",
//   scrub: true,
// });

// // 이미지 전체 박스를 스크롤에 따라 위로 이동
// gsap.to("#heroImgSlide", {
//   y: () => -1 * window.innerHeight * (teokData.length - 1),
//   ease: "none",
//   scrollTrigger: {
//     trigger: ".hero-section",
//     start: "top top",
//     end: "+=" + window.innerHeight * teokData.length,
//     scrub: true,
//   },
// });

// // 텍스트 교체
// teokData.forEach((teok, index) => {
//   ScrollTrigger.create({
//     trigger: ".hero-section",
//     start: () => `top -=${window.innerHeight * index}`,
//     end: () => `top -=${window.innerHeight * (index + 1)}`,
//     onEnter: () => updateTexts(teok),
//     onEnterBack: () => updateTexts(teok),
//   });
// });

// function updateTexts(teok) {
//   document.getElementById("leftText").textContent = teok.left;
//   document.getElementById("rightText").textContent = teok.right;
// }

// -----------------------------
// 상단 고정 헤더 스크롤 숨김
// -----------------------------
const header = document.querySelector(".site-header");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY > lastScrollY) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollY = currentScrollY;
});

// -----------------------------
// 햄버거 메뉴 열기/닫기
// -----------------------------
const logo = document.getElementById("logo");
const hamburgerMenu = document.getElementById("hamburgerMenu");
const closeBtn = document.getElementById("closeMenu");

logo.addEventListener("click", () => {
  hamburgerMenu.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  hamburgerMenu.style.display = "none";
});

// -----------------------------
// GSAP ScrollTrigger 설정
// -----------------------------
gsap.registerPlugin(ScrollTrigger);

// 텍스트와 이미지 데이터
const teokData = [
  { left: "부드러운 팥앙금", right: "쫀득한 찹쌀피" },
  { left: "제주쑥의 향", right: "쫀쫀한 식감" },
  { left: "복분자의 단맛", right: "촉촉한 떡결" },
  { left: "흑임자의 고소함", right: "탄력 있는 피" },
];

// 기준값 계산
const section = document.querySelector(".hero-section");
const slideHeight = window.innerHeight;
const totalScrollHeight = slideHeight * teokData.length;

// 이미지 박스 스크롤 이동
gsap.to("#heroImgSlide", {
  y: -1 * slideHeight * (teokData.length - 1),
  ease: "none",
  scrollTrigger: {
    trigger: section,
    start: "top top",
    end: `+=${totalScrollHeight}`,
    scrub: true,
    pin: ".hero-fixed",
  },
});

// 텍스트 변경 함수
function updateTexts({ left, right }) {
  document.getElementById("leftText").textContent = left;
  document.getElementById("rightText").textContent = right;
}

// 텍스트 전환 ScrollTrigger 구간 생성
teokData.forEach((data, index) => {
  ScrollTrigger.create({
    trigger: section,
    start: `${slideHeight * index}`,
    end: `${slideHeight * (index + 1)}`,
    onEnter: () => updateTexts(data),
    onEnterBack: () => updateTexts(data),
  });
});
