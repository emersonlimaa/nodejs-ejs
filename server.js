const express = require('express');
const app = express();

app.set("view engine", "ejs")

app.get("/", function(req, res){
  const items = [
    {
      title: "D",
      message: "esenvolver aplicações/serviços de forma fácil"
    },
    {
      title: "E",
      message: "JS usa javascript para redenrizar o html"
    },
    {
      title: "M",
      message: "uito fácil de usar"
    },
    {
      title: "A",
      message: " aplicação ficará incrivel"
    },
    {
      title: "I",
      message: "nstall ejs"
    },
    {
      title: "S",
      message: "intaxe simples"
    }
  ]
  const subtitle = "Uma linguagem de modelagem para criação de página HTML"
  res.render("pages/index", {
    qualitys: items,
    subtitle: subtitle,
  })
})

app.get("/sobre", function(req, res){
  res.render("pages/about")
})

app.get("/nodejs-ejs", function(req, res){
  res.render("pages/nodejs-ejs")
})

app.listen(8080)