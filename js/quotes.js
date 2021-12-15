const quotes = [
  {
    quotes: "When you go through hardships and decide not to surrender, that is strength.",
    author: "Arnold Schwarzenegger",
  },
  {
    quotes:"It is kind of fun to do the impossible",
    author: "Walt Disney",
  },

  {
    quotes:"it takes a lot of courage to go into the unknown.",
    author:"unknown",
  },

  {
    quotes:"Tough times never last, but tough people do. ",
    author:"Robert H. Schuller",
  },

  {
    quotes:"I’ve failed over and over and over again in my life and that is why I succeed.",
    author:"Qeen",
  },
  {
    quotes:"If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is. ",
    author:"Angelina Jolie",
  },
  {
    quotes:"I didn’t get there by wishing for it or hoping for it, but by working for it.",
    author:"Estée Lauder",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length )];

quote.innerText = todayQuote.quotes;
author.innerText = todayQuote.author;


