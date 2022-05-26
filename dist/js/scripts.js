const mainEl = document.querySelector(".main");
const underWorkEl = document.querySelector(".under-work");
const serviceBtn = document.querySelector("#services");
const otherRouteBtns = document.querySelectorAll(".under-maintenance");
const togglerBtn = document.querySelector(".toggler");
const navsEl = document.querySelectorAll(".navs");
serviceBtn.addEventListener("click", () => {
  mainEl.classList.remove("hidden");
  underWorkEl.classList.add("hidden");
});
togglerBtn.addEventListener("click", () => {
  navsEl.forEach((el) => {
    el.classList.toggle("hidden");
  });
});
otherRouteBtns.forEach((el) => {
  el.addEventListener("click", () => {
    mainEl.classList.add("hidden");
    underWorkEl.classList.remove("hidden");
  });
});
