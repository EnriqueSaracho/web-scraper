const feedDisplay = document.querySelector("#feed");

fetch("http://localhost:8000/results")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((article) => {
      const articleItem =
        "<div><h3>" +
        article.title +
        "</h3><br><h4>" +
        article.url +
        "</h4></div>";
      feedDisplay.insertAdjacentHTML("beforeend", articleItem);
    });
  })
  .catch((err) => console.log(err));
