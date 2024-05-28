//  event get
const btn = document.querySelector("#myPress");
console.log(btn);

btn.addEventListener("click", function () {
  console.log("Clicou aqui !!!!");
});

// Event remove
const btnSecond = document.querySelector("#insert");
function showClick() {
  console.log("Insert event btn pressed");
}
btnSecond.addEventListener("click", showClick);

const btnThird = document.querySelector("#remove");

btnThird.addEventListener("click", () => {
  console.log("Remove event btn pressed");
  btnSecond.removeEventListener("click", showClick);
});

//  event  geralmente escrito como e somente
const mainTitle = document.querySelector("#title");
mainTitle.addEventListener("click", (event) => {
  console.log(event);
  console.log(event.offsetX);
  console.log(event.pointerType);
  console.log(event.type);
  console.log(event.target);
});

// stopPropagation
const parentEvent = document.querySelector("#prop");
const childEvent = document.querySelector("#btnProp");

parentEvent.addEventListener("click", (e) => {
  console.log("Parent event !");
});

childEvent.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("Child event !");
});

// preventDefault
const linkGoogle = document.querySelector("a");
linkGoogle.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Google link was prevent !!");
});

// keyUp KeyDown
document.addEventListener("keyup", (e) => {
  console.log(`Released key was ${e.key}`);
});
document.addEventListener("keydown", (e) => {
  console.log(`Pressed key was ${e.key}`);
});

// dblclick mouse up mousedown

const mouseEvents = document.querySelector("#mouse");

mouseEvents.addEventListener("mousedown", () => {
  console.log("Pressed mouse button !");
});

mouseEvents.addEventListener("mouseup", () => {
  console.log("Released mouse button !");
});

mouseEvents.addEventListener("dblclick", () => {
  console.log("Double click any mouse button !");
});

// mousemove
document.addEventListener("mousemove", (e) => {
  console.log(`X axel: ${e.x}`);
  console.log(`y axel: ${e.y}`);
});

// scroll
window.addEventListener("scroll", (e) => {
  if (window.scrollY > 200) {
    console.log(`Scroll down more than 200px`);
  }
});

// focus and blur
const input = document.querySelector("#input");
input.addEventListener("focus", (e) => {
  console.log(`Input field chosen`);
});
input.addEventListener("blur", (e) => {
  console.log(`Input field left`);
});

// load and beforeunload
window.addEventListener("load", () => {
  console.log("Page load");
});
window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});

// debounce
const debounce = (f, delay) => {
  let timeout;
  return (...arguments) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      f.apply(arguments);
    }, delay);
  };
};

window.addEventListener(
  "mousemove",
  debounce(() => {
    console.log("Event execution each 400ms");
  }, 400)
);
