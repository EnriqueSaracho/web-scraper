const PORT = 8000;
const axios = require("axios");
const cheerio = require("cheerio");
const express = require("express");
const app = express();

const url = "https://www.theguardian.com/uk";

// app.get(); // get data
// app.post(); // add data
// app.put(); // edit data
// app.delete(); // delete data

app.get("/", (req, res) => {
  res.json("Kiki");
});

app.get("/results", (req, res) => {
  axios(url)
    .then((response) => {
      const html = response.data;
      const $ = cheerio.load(html);
      const articles = [];

      $(".fc-item__title", html).each(function () {
        const title = $(this).text();
        const url = $(this).find("a").attr("href");
        articles.push({
          title,
          url,
        });
      });
      res.json(articles);
    })
    .catch((err) => console.log(err));
});

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));
