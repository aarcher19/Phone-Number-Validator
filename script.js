const display = document.querySelector(".input");
const buttons = document.querySelector(".buttons");
const answer = document.querySelector(".answer");
const validator = document.querySelector(".verify");

validator.addEventListener("click", (e) => {
  const key = e.target;
  const action = key.dataset.action;

  if (action === "clear") {
    answer.textContent = "";
  }

  if (action === "check") {
    let a = display.value;
    let result = telephoneCheck(a);

    if (result === true) {
      answer.style.color = "rgb(64, 173, 64)";
      answer.textContent = "Valid!";
    } else {
      answer.style.color = "rgb(223, 71, 71)";
      answer.textContent = "Not Valid!";
    }
  }
});

function telephoneCheck(str) {
  let rex1 = /^(1\s?)?\d{3}([-\s]?)\d{3}\2\d{4}$/,
    rex2 = /^(1\s?)?\(\d{3}\)\s?\d{3}[-\s]?\d{4}$/;

  if (rex1.test(str)) {
    return true;
  } else {
    return rex2.test(str) ? true : false;
  }
}
