import { useState } from "react";
import QuoteBox from "./assets/components/QuoteBox";
import quotes from "./assets/data/quotes.json";
import "./App.css";

function App() {
  // Variables
  const colors = [
    "#EA047E",
    "#FF6D28",
    "#F9D923",
    "#00F5FF",
    "#0E49B5",
    "#54E346",
  ];

  const quotesLen = quotes.length;
  const colorsLen = colors.length;

  const randomNumber = function (limit) {
    return Math.floor(Math.random() * limit);
  };

  // Initiate random quote and color
  const [quoteIndex, setQuoteIndex] = useState(randomNumber(quotesLen));
  const [colorIndex, setColorIndex] = useState(randomNumber(colorsLen));

  // Generate random quote and color
  const randomQuote = function () {
    setQuoteIndex(randomNumber(quotesLen));
    setColorIndex(randomNumber(colorsLen));
  };

  // Set variables to random values
  const quote = quotes[quoteIndex].quote;
  const author = quotes[quoteIndex].author;
  const color = colors[colorIndex];

  return (
    <div className="App">
      <div className="card-container" style={{ backgroundColor: color }}>
        <QuoteBox
          quote={quote}
          author={author}
          color={color}
          btnHandler={randomQuote}
        />
      </div>
    </div>
  );
}

export default App;
