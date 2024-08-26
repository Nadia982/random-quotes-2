console.clear()
let voices = [];
let synth = window.speechSynthesis;

window.speechSynthesis.addEventListener("voiceschanged", function () {
  voices = window.speechSynthesis.getVoices();
});

const newQuoteBtn = document.querySelector(".new-quote");
const quoteContent = document.querySelector(".quote-content");
const authorName = document.querySelector(".author-name");
const authorPicture = document.querySelector(".author-picture");
const quotesFinishedMessage = document.querySelector(
  ".quotes-finished-message"
);

const getRandomColor = () => {
  const hue = Math.round(Math.random() * 360);
  const saturation = Math.round(Math.random() * 40) + 60;
  const lightness = Math.round(Math.random() * 15) + 80;
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`
};

document.querySelector("blockquote").style.backgroundColor = getRandomColor();

const quotes = [
  {
    author: "Shakespeare",
    text: '"This above all: to thine own self be true"',
    src: "https://assets.codepen.io/6669924/shakespeare.png?format=auto",
  },
  {
    author: "Shakespeare",
    text: '"Our doubts are traitors, And make us lose the good we oft might win, By fearing to attempt"',
    src: "https://assets.codepen.io/6669924/shakespeare.png?format=auto",
  },
  {
    author: "Shakespeare",
    text: '"We know what we are, but know not what we may be."',
    src: "https://assets.codepen.io/6669924/shakespeare.png?format=auto",
  },
  {
    author: "Shakespeare",
    text: '"Be not afraid of greatness: some are born great, some achieve greatness and some have greatness thrust upon them."',
    src: "https://assets.codepen.io/6669924/shakespeare.png?format=auto",
  },
  {
    author: "Aristotle",
    text: '"Education is bitter, but its fruit is sweet."',
    src: "https://assets.codepen.io/6669924/aristotle.png?format=auto"
  },
  {
    author: "Aristotle",
    text: '"Pleasure in the job puts perfection in the work."',
    src: "https://assets.codepen.io/6669924/aristotle.png?format=auto"
  },
  {
    author: "Aristotle",
    text: '"Good habits formed at youth make all the difference"',
  src: "https://assets.codepen.io/6669924/aristotle.png?format=auto"
  },
  {
    author: "Aristotle",
    text: '"Well begun is half done"',
  src: "https://assets.codepen.io/6669924/aristotle.png?format=auto"
  },
  {
    author: "Plato",
    text: '"Do not train a child to learn by force or harshness; but direct them to it by what amuses their minds, so that you may be better able to discover with accuracy the peculiar bent of the genius of each."',
    src: "https://assets.codepen.io/6669924/plato.png?format=auto"
  },
  {
    author: "Plato",
    text: '"Necessity is the mother of invention."',
    src: "https://assets.codepen.io/6669924/plato.png?format=auto"
  },
  {
    author: "Plato",
    text: '"Beauty lies in the eyes of the beholder"',
    src: "https://assets.codepen.io/6669924/plato.png?format=auto"
  },
  {
    author: "Plato",
    text: '"Character is simply habit long continued"',
    src: "https://assets.codepen.io/6669924/plato.png?format=auto"
  },
  {
    author: "Socrates",
    text: '"The only true wisdom is in knowing that you know nothing"',
  src: "https://assets.codepen.io/6669924/socrates.png?format=auto"
  },
  {
    author: "Socrates",
    text: '"True wisdom comes to each of us when we realise how little we understand about life, ourselves, and the world around us."',
    src: "https://assets.codepen.io/6669924/socrates.png?format=auto"
  },
  {
    author: "Socrates",
    text: '"Wisdom begins in wonder"',
    src: "https://assets.codepen.io/6669924/socrates.png?format=auto"
  },
  {
    author: "Socrates",
    text: '"Employ your time in improving yourself by other men\'s writings, so that you shall gain easily what others have laboured hard for."',
  src: "https://assets.codepen.io/6669924/socrates.png?format=auto"
  },
  {
    author: "Socrates",
    text: '"Knowledge will make you be free."',
  src: "https://assets.codepen.io/6669924/socrates.png?format=auto"
  },
];
let quoteIndices = [...Array(quotes.length).keys()];


const davidVoice = voices.find((voice) => voice.name === "Microsoft David - English (United States)");
const englishMaleVoice = voices.find((voice) => voice.name === "Google UK English Male");
const markVoice = voices.find((voice) => voice.name === "Microsoft Mark - English (United States)");
const georgeVoice = voices.find((voice) => voice.name === "Microsoft George - English (United Kingdom)");

const getQuote = () => {
  quoteIndices = quoteIndices.sort((a, b) => 0.5 - Math.random());
  const quote = quotes[quoteIndices[quoteIndices.length - 1]];
  const quoteText = quote.text;
  quoteContent.innerHTML = quoteText;
  const quoteAuthor = quote.author;
  authorName.innerHTML = quoteAuthor;
  const quoteSrc = quote.src;
  authorPicture.src = quoteSrc;
  const readQuote = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    if (quoteAuthor === "Plato") {
      speech.voice = davidVoice;
    } else if (quoteAuthor === "Shakespeare") {
      speech.voice = englishMaleVoice;
    } else if (quoteAuthor === "Aristotle") {
      speech.voice = markVoice;
    } else {
      speech.voice = georgeVoice;
    }
    speech.pitch = 0.7;
    speech.volume = 0.5;
    speech.rate = 0.9;
    window.speechSynthesis.speak(speech);
  };
  
  readQuote(quoteText);
  quoteIndices.pop();
};

getQuote();

const handleNext = () => {
  synth.cancel();
  quotesFinishedMessage.innerText = "";
  document.querySelector("blockquote").style.backgroundColor = getRandomColor();
  getQuote();

  if (quoteIndices.length === 0) {
    quotesFinishedMessage.innerText = `All ${quotes.length} quotes have been now been shown. Resetting quote list.`;
    quoteIndices = [...Array(quotes.length).keys()];
  }
};

newQuoteBtn.addEventListener("click", (e) => {
  handleNext();
});

document.addEventListener("keydown", (e) => {
  if (e.key == " ") {
    handleNext();
    // The code below is to prevent the code from going forward two quotes when the user uses the keyboard to focus on the "new quote button" then presses the spacebar.
    // Without the code below, the browser would handleNext twice with a single press of the spacebar (once because the spacebar has been pressed, and once because pressing spacebar or enter while the "new quote" button is in focus will also forward to the next quote)
    // I wanted to keep the option to forward to the next quote by tabbing to the "new quote" button and pressing "enter" or "spacebar" as this is an expected functionality for accessibility (for keyboard users and those who can't use a mouse).
    newQuoteBtn.disabled = true;
    setTimeout(() => (newQuoteBtn.disabled = false), 300);
  }
});
 