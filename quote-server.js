const http = require("http");
const quotesFile = require("./quotes.json");
const quotes = quotesFile.quotes;

const hostname = "127.0.0.1";
const port = 3000;

const randN = (n) => Math.round(Math.random() * n);

const server = http.createServer((req, res) => {
  const randomQuoteIndex = randN(quotes.length);
  const quoteObject = quotes[randomQuoteIndex];

  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  res.end(`<p>${quoteObject.quote} - <small>${quoteObject.author}</small></p>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
