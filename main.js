var Quotes = [
  "Be ypur self; everyone else is already taken.",
  "So many books,so little time.",
  "You only live once, but if you do it right, once is enough.",
  "If you tell the truth, you don't have to remember anything.",
  "Memories Remain !",
];
var userQuote = [
  "Oscar Wilde",
  "Frank Zappa",
  "Mae West",
  "Mark Twain",
  "Mostafa Zabady",
];

function Random() {
  var text = Math.floor(Math.random() * Quotes.length);
  document.getElementById("Quote").innerHTML = Quotes[text];
  document.getElementById("our-Quote").innerHTML = userQuote[text];
}

Random();
