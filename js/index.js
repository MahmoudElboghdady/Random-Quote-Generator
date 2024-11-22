var arrayOfQuotes = [
  {
    author: "Mark Twain",
    quote: "If you tell the truth, you don't have to remember anything.",
  },
  {
    author: "Marilyn Monroe",
    quote:
      "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",
  },

  {
    author: "Epictetus",
    quote:
      "It's not what happens to you, but how you react to it that matters.",
  },
  { author: "Frank Sinatra", quote: "The best revenge is massive success." },
  {
    author: "Oscar Wilde",
    quote: "Be yourself; everyone else is already taken.",
  },
  {
    author: "Friedrich Nietzsche, Twilight of the Idols",
    quote: "Without music, life would be a mistake.",
  },
  {
    author: "Mahatma Gandhi",
    quote:
      "Live as if you were to die tomorrow. Learn as if you were to live forever.",
  },
  {
    author: "Elbert Hubbard",
    quote: "A friend is someone who knows all about you and still loves you.”",
  },

  {
    author: "Wayne Gretzy",
    quote: "You miss 100% of the shots you don't take.",
  },
  {
    author: " Dr. Seuss",
    quote:
      "You know you're in love when you can't fall asleep because reality is finally better than your dreams.",
  },
  {
    author: " Narcotics Anonymous",
    quote:
      "Insanity is doing the same thing, over and over again, but expecting different results.",
  },
  {
    author: " Ralph Waldo Emerson",
    quote:
      "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
  },
];

function generateQuote() {
  var random = Number.parseInt(Math.random() * arrayOfQuotes.length + 1);
  document.querySelector(
    "#quoteOutput"
  ).textContent = `\"${arrayOfQuotes[random].quote}\"`;
  document.querySelector(
    "#authorOutput"
  ).textContent = `--${arrayOfQuotes[random].author}`;
}
