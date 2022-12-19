import { useState } from "react";

const QuoteBox = function ({ quote, author, color, btnHandler }) {
  return (
    <div className="quote-box" style={{ color: color }}>
      <div className="quote-phrase">
        <div className="quote-phrase-icon">
          <i class="fa-solid fa-quote-left"></i>
        </div>
        <blockquote className="quote-phrase-text">{quote}</blockquote>
      </div>
      <div className="quote-author">
        <p>{author}</p>
      </div>
      <button
        className="btn-random"
        onClick={btnHandler}
        style={{ backgroundColor: color }}
      >
        <i class="fa-solid fa-chevron-right"></i>
      </button>
    </div>
  );
};

export default QuoteBox;
