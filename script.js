let voices = [];
let synth = speechSynthesis;

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
  //rn = randomNumber;
  const rn1 = Math.round(Math.random() * 105) + 150;
  const rn2 = Math.round(Math.random() * 105) + 170;
  const rn3 = Math.round(Math.random() * 105) + 190;

  const decider = Math.floor(Math.random() * 6);

  const randomColor =
    decider === 0
      ? `rgba(${rn1}, ${rn2}, ${rn3})`
      : decider === 1
      ? `rgba(${rn1}, ${rn3}, ${rn2})`
      : decider === 2
      ? `rgba(${rn2}, ${rn1}, ${rn3})`
      : decider === 3
      ? `rgba(${rn2}, ${rn3}, ${rn1})`
      : decider === 4
      ? `rgba(${rn3}, ${rn1}, ${rn2})`
      : `rgba(${rn3}, ${rn2}, ${rn1})`;
  return randomColor;
};

document.querySelector("blockquote").style.backgroundColor = getRandomColor();

const quotes = [
  {
    author: "Shakespeare",
    text: '"This above all: to thine own self be true"',
  },
  {
    author: "Shakespeare",
    text: '"Our doubts are traitors, And make us lose the good we oft might win, By fearing to attempt"',
  },
  {
    author: "Shakespeare",
    text: '"We know what we are, but know not what we may be."',
  },
  {
    author: "Shakespeare",
    text: '"Be not afraid of greatness: some are born great, some achieve greatness and some have greatness thrust upon them."',
  },
  {
    author: "Aristotle",
    text: '"Education is bitter, but its fruit is sweet."',
  },
  {
    author: "Aristotle",
    text: '"Pleasure in the job puts perfection in the work."',
  },
  {
    author: "Aristotle",
    text: '"Good habits formed at youth make all the difference"',
  },
  {
    author: "Aristotle",
    text: '"Well begun is half done"',
  },
  {
    author: "Plato",
    text: '"Do not train a child to learn by force or harshness; but direct them to it by what amuses their minds, so that you may be better able to discover with accuracy the peculiar bent of the genius of each."',
  },
  {
    author: "Plato",
    text: '"Necessity is the mother of invention."',
  },
  {
    author: "Plato",
    text: '"Beauty lies in the eyes of the beholder"',
  },
  {
    author: "Plato",
    text: '"Character is simply habit long continued"',
  },
  {
    author: "Socrates",
    text: '"The only true wisdom is in knowing that you know nothing"',
  },
  {
    author: "Socrates",
    text: '"True wisdom comes to each of us when we realise how little we understand about life, ourselves, and the world around us."',
  },
  {
    author: "Socrates",
    text: '"Wisdom begins in wonder"',
  },
  {
    author: "Socrates",
    text: '"Employ your time in improving yourself by other men\'s writings, so that you shall gain easily what others have laboured hard for."',
  },
  {
    author: "Socrates",
    text: '"Knowledge will make you be free."',
  },
];
let quoteIndices = [...Array(quotes.length).keys()];

const getQuote = () => {
  quoteIndices = quoteIndices.sort((a, b) => 0.5 - Math.random());
  const quote = quotes[quoteIndices[quoteIndices.length - 1]];
  const quoteText = quote.text;
  quoteContent.innerHTML = quoteText;
  const quoteAuthor = quote.author;
  authorName.innerHTML = quoteAuthor;
  if (quoteAuthor === "Plato") {
    authorPicture.src =
      "https://assets.codepen.io/6669924/plato.png?format=auto";
  } else if (quoteAuthor === "Shakespeare") {
    authorPicture.src =
      "https://assets.codepen.io/6669924/shakespeare.png?format=auto";
  } else if (quoteAuthor === "Aristotle") {
    authorPicture.src =
      "https://assets.codepen.io/6669924/aristotle.png?format=auto";
  } else {
    authorPicture.src =
      "https://assets.codepen.io/6669924/socrates.png?format=auto";
  }

  const readQuote = (text) => {
    const speech = new SpeechSynthesisUtterance(text);
    if (quoteAuthor === "Plato") {
      speech.voice = voices.find(
        (voice) => voice.name === "Microsoft David - English (United States)"
      );
    } else if (quoteAuthor === "Shakespeare") {
      speech.voice = voices.find(
        (voice) => voice.name === "Google UK English Male"
      );
    } else if (quoteAuthor === "Aristotle") {
      speech.voice = voices.find(
        (voice) => voice.name === "Microsoft Mark - English (United States)"
      );
    } else {
      speech.voice = voices.find(
        (voice) => voice.name === "Microsoft George - English (United Kingdom)"
      );
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
    setTimeout(() => (newQuoteBtn.disabled = false), 200);
  }
});
