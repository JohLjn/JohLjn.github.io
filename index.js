function fadeinMain() {
  const mainOnLoad = document.querySelector("main");
  mainOnLoad.classList.add("main-load");
}

function fadeInContent1() {
  const contentOnLoad = document.querySelector("#content-container-one");
  contentOnLoad.classList.add("content-container-load");
}

function fadeInContent2() {
  const contentOnLoad2 = document.querySelector("#content-container-two");
  contentOnLoad2.classList.add("content-container-load");
}

function fadeInContent3() {
  const contentOnLoad3 = document.querySelector("#content-container-three");
  contentOnLoad3.classList.add("content-container-load");
}

setTimeout(fadeInContent1, 1700);
setTimeout(fadeInContent2, 2200);
setTimeout(fadeInContent3, 2700);
