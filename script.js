// Array of quotes (at least 15 quotes stored in JavaScript)
const quotes = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs"
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill"
  },
  {
    text: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  },
  {
    text: "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt"
  },
  {
    text: "It does not matter how slowly you go as long as you do not stop.",
    author: "Confucius"
  },
  {
    text: "In the middle of every difficulty lies opportunity.",
    author: "Albert Einstein"
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb"
  },
  {
    text: "Your time is limited, so don't waste it living someone else's life.",
    author: "Steve Jobs"
  },
  {
    text: "You miss 100% of the shots you don't take.",
    author: "Wayne Gretzky"
  },
  {
    text: "Whether you think you can or you think you can't, you're right.",
    author: "Henry Ford"
  },
  {
    text: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu"
  },
  {
    text: "What you do today can improve all your tomorrows.",
    author: "Ralph Marston"
  },
  {
    text: "Do what you can, with what you have, where you are.",
    author: "Theodore Roosevelt"
  },
  {
    text: "Happiness is not something ready made. It comes from your own actions.",
    author: "Dalai Lama"
  },
  {
    text: "It always seems impossible until it's done.",
    author: "Nelson Mandela"
  },
  {
    text: "Act as if what you do makes a difference. It does.",
    author: "William James"
  },
  {
    text: "Quality is not an act, it is a habit.",
    author: "Aristotle"
  },
  {
    text: "Keep your face always toward the sunshine—and shadows will fall behind you.",
    author: "Walt Whitman"
  }
];

// Reference DOM elements
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

// Track the index of the currently displayed quote to prevent consecutive repeats
let currentQuoteIndex = -1;

/**
 * Generates and displays a random quote.
 * Ensures the newly selected quote is not the same as the previous one.
 */
function getRandomQuote() {
  if (quotes.length === 0) return;

  let newIndex;
  
  // If there are multiple quotes, loop until a different index is picked
  if (quotes.length > 1) {
    do {
      newIndex = Math.floor(Math.random() * quotes.length);
    } while (newIndex === currentQuoteIndex);
  } else {
    newIndex = 0;
  }

  // Update current index
  currentQuoteIndex = newIndex;

  // Retrieve selected quote object
  const selectedQuote = quotes[currentQuoteIndex];

  // Display the quote text and author name
  quoteText.textContent = `"${selectedQuote.text}"`;
  quoteAuthor.textContent = `— ${selectedQuote.author}`;
}

// Show a random quote automatically when the page loads
window.addEventListener("DOMContentLoaded", getRandomQuote);

// Show a different quote when the "New Quote" button is clicked
newQuoteBtn.addEventListener("click", getRandomQuote);
