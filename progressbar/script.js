// Normal
function progress() {
  const progressBars = document.querySelectorAll("span");
  const myarray = Array.from(progressBars);

  let width1 = 0;
  let width2 = 0;
  let width3 = 0;
  let interval1 = setInterval(myprogress1, 15);
  let interval2 = setInterval(myprogress2, 15);
  let interval3 = setInterval(myprogress3, 15);
  function myprogress1() {
    if (width1 == 98) {
      clearInterval(interval1);
    } else {
      width1++;
      myarray[0].style.width = width1 + "%";
      myarray[0].innerText = width1;
    }
  }
  function myprogress2() {
    if (width2 == 80) {
      clearInterval(interval2);
    } else {
      width2++;
      myarray[1].style.width = width2 + "%";
      myarray[1].innerText = width2 + "%";
    }
  }
  function myprogress3() {
    if (width3 == 75) {
      clearInterval(interval3);
    } else {
      width3++;
      myarray[2].style.width = width3 + "%";
      myarray[2].innerText = width3 + "%";
    }
  }
}

setTimeout(progress, 1000);
