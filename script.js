const header = document.querySelector("#header ul");
fetch("./folder.json")
  .then((response) => response.json())
  .then((data) =>
    data.forEach((element) => {
      var list = element.folder;
      var url = element.url + "/index.html"
      header.innerHTML += "<li><a href='"+url+"'>"+list+"</a></li>";
    })
  );
