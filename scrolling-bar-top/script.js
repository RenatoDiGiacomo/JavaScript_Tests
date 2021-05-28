
  function scrollBar() {
    const bar = document.getElementById("topbar");
    const y = bar.offsetHeight
    let top = Math.round(document.documentElement.scrollTop);
    const bottom = document.documentElement.offsetHeight;
    // const fixed = Math.round((top / bottom *100 + 20));
    // bar.style.cssText = `width:${fixed}%;`;
    console.log((1 + top)/100)
  }

  document.addEventListener("scroll", scrollBar);
