function initChangeColorBase() {
  const colors = [
    "green",
    "red",
    "rgb(255, 150, 00)",
    "yellow",
    "gray",
    "#545852",
  ];
  const text = document.getElementById("color");

  const i = 0;
  const random = Math.round((Math.random(i) * 10) / 2);
  let colorBg = (document.body.style.backgroundColor = colors[random]);
  text.innerText = colorBg;
}

function initChangeColorHex() {
  const text = document.getElementById("color");
  const random = Math.round(Math.random() * 255 + 1);
  const random2 = Math.round(Math.random() * 255 + 1);
  const random3 = Math.round(Math.random() * 255 + 1);
  const hex = random.toString(16) + random2.toString(16) + random3.toString(16);
  const hexcomp = hex;
  document.body.style.backgroundColor = "#" + hexcomp;
  text.innerText = '#'+hexcomp;
}
