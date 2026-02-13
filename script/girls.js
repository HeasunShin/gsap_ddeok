const items = document.querySelectorAll(".item");

const expand = (item, i) => {
  items.forEach((it, ind) => {
    if (i === ind) return;
    it.clicked = false;

    const span = it.querySelector("span");
    gsap.to(span, {
      autoAlpha: 0,
      duration: 0.3,
    });
  });
  gsap.to(items, {
    width: item.clicked ? "15vw" : "8vw",
    duration: 2,
    ease: "elastic(1, .6)",
    opacity: 0.5,
  });

  item.clicked = !item.clicked;
  gsap.to(item, {
    width: item.clicked ? "32vw" : "15vw",
    duration: 2.5,
    ease: "elastic(1, .3)",
    opacity: 1,
  });

  const span = item.querySelector("span");

  gsap.to(span, {
    autoAlpha: item.clicked ? 1 : 0,
    duration: 0.5,
  });
};

items.forEach((item, i) => {
  item.clicked = false;
  gsap.set(item.querySelector("span"), { autoAlpha: 0 });
  item.addEventListener("click", () => expand(item, i));
});
