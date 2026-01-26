gsap.registerPlugin(ScrollTrigger);

const storySection = document.querySelector(".story-section");

// product intro step
const productStep = storySection.querySelector(".product-intro-step");
const productInner = productStep.querySelector(".product-inner");
const productItemsWrapper = productStep.querySelector(".product-items-wrapper");
const productRight = productStep.querySelector(".product-right");

console.log(productItemsWrapper.scrollHeight);
console.log(productStep.offsetHeight);

// const reviewStep = storySection.querySelector(".review-step");
// const reviewWrapper = reviewStep.querySelector(".review-wrapper");
// const reviewLeft = reviewStep.querySelector(".review-left");

function getProductScrollDistance() {
  const leftHeight = productItemsWrapper.scrollHeight;
  const rightHeight = productRight.offsetHeight;
  const viewportHeight = window.innerHeight;

  const wrapperOffsetTop =
    productItemsWrapper.getBoundingClientRect().top -
    productStep.getBoundingClientRect().top;

  /*
    의미:
    왼쪽 마지막 하단이
    오른쪽 고정 영역 하단과
    같은 Y 라인에 오기까지 필요한 스크롤 거리
  */
  return Math.max(leftHeight - rightHeight + wrapperOffsetTop, 0);
}

// product 영역 오른쪽 고정
ScrollTrigger.create({
  trigger: productStep,
  start: "top top",
  end: () => `+=${getProductScrollDistance()}`,
  pin: productRight,
  pinSpacing: true, // 기본값, 지금은 반드시 true
  // markers: true,
});

function getReviewScrollDistance() {
  const scrollContentHeight = reviewWrapper.scrollHeight;
  const fixedHeight = reviewLeft.offsetHeight;

  const wrapperOffsetTop =
    reviewWrapper.getBoundingClientRect().top -
    reviewStep.getBoundingClientRect().top;

  return Math.max(scrollContentHeight - fixedHeight + wrapperOffsetTop, 0);
}
// ScrollTrigger.create({
//   trigger: reviewStep,
//   start: "top top",
//   end: () => `+=${getReviewScrollDistance()}`,
//   pin: reviewLeft,
//   pinSpacing: true,
// });
