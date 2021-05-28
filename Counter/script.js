const counter = document.getElementById("counter");
const btns = document.querySelectorAll(".container li button");
let i = 0;
btns.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const my = e.currentTarget.classList;
    if (my.contains("decrease")) {
      i--;
    }
    if (my.contains("reset")) {
      i = 0;
    }
    if (my.contains("increase")) {
      i++;
    }
    if (i < 0) {
      counter.style.color = "red";
      counter.style.backgroundColor = "#dd585870"
    }
    if (i > 0) {
      counter.style.color = "green";
      counter.style.backgroundColor = " #00800040"
     
    }
    if (i === 0) {
      counter.style.color = "black";
      counter.style.backgroundColor = "  #0000001f"

    }
    counter.innerText = i;
  });
});
