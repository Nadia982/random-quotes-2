let synth = speechSynthesis;

const newQuoteBtn = document.querySelector(".new-quote");
const quoteContent = document.querySelector(".quote-content");
const authorName = document.querySelector(".author-name");
const authorPicture = document.querySelector(".author-picture");

console.log(quoteContent);

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
    author: " Shakespeare",
    quote: '"This above all: to thine own self be true"',
    image: "./images/shakespeare.png",
  },
  {
    author: "Shakespeare",
    quote:
      '"Our doubts are traitors, And make us lose the good we oft might win, By fearing to attempt"',
    image: "./images/shakespeare.png",
  },
  {
    author: "Shakespeare",
    quote: '"We know what we are, but know not what we may be."',
    image: "./images/shakespeare.png",
  },
  {
    author: "Shakespeare",
    quote:
      '"Be not afraid of greatness: some are born great, some achieve greatness and some have greatness thrust upon them."',
    image: "./images/shakespeare.png",
  },
  {
    author: "Aristotle",
    quote: '"Education is bitter, but its fruit is sweet."',
    image: "./images/aristotle.png",
  },
  {
    author: "Aristotle",
    quote: '"Pleasure in the job puts perfection in the work."',
    image: "./images/aristotle.png",
  },
  {
    author: "Aristotle",
    quote: '"Good habits formed at youth make all the difference"',
    image: "./images/aristotle.png",
  },
  {
    author: "Aristotle",
    quote: '"Well begun is half done"',
    image: "./images/aristotle.png",
  },
  {
    author: "Plato",
    quote:
      '"Do not train a child to learn by force or harshness; but direct them to it by what amuses their minds, so that you may be better able to discover with accuracy the peculiar bent of the genius of each."',
    image: "./images/plato.png",
  },
  {
    author: "Plato",
    quote: '"Necessity is the mother of invention."',
    image: "./images/plato.png",
  },
  {
    author: "Plato",
    quote: '"Beauty lies in the eyes of the beholder"',
    image: "./images/plato.png",
  },
  {
    author: "Plato",
    quote: '"Character is simply habit long continued"',
    image: "./images/plato.png",
  },
  {
    author: "Socrates",
    quote: '"The only true wisdom is in knowing that you know nothing"',
    image: "./images/socrates.png",
  },
  {
    author: "Socrates",
    quote:
      '"True wisdom comes to each of us when we realise how little we understand about life, ourselves, and the world around us."',
    image: "./images/socrates.png",
  },
  {
    author: "Socrates",
    quote: '"Wisdom begins in wonder"',
    image: "./images/socrates.png",
  },
  {
    author: "Socrates",
    quote:
      '"Employ your time in improving yourself by other men\'s writings, so that you shall gain easily what others have laboured hard for."',
    image: "./images/socrates.png",
  },
  {
    author: "Socrates",
    quote: '"Knowledge will make you be free."',
    image: "./images/socrates.png",
  },
];
let quoteIndices = [...Array(quotes.length).keys()];

const getQuote = () => {
  quoteIndices = quoteIndices.sort((a, b) => 0.5 - Math.random());
  quoteContent.innerHTML = quotes[quoteIndices[quoteIndices.length - 1]].quote;
  authorName.innerHTML = quotes[quoteIndices[quoteIndices.length - 1]].author;
  authorPicture.src = quotes[quoteIndices[quoteIndices.length - 1]].image;
  quoteIndices.pop();
};



getQuote();

const handleNext = () => {
  document.querySelector("blockquote").style.backgroundColor = getRandomColor();
  getQuote();

  if (quoteIndices.length === 0) {
    console.log(
      `************* All ${quotes.length} quotes have been now been shown. Resetting quote list. *************`
    );
    quoteIndices = [...Array(quotes.length).keys()];
  }
};

newQuoteBtn.addEventListener("click", (e) => {
  handleNext();
});

document.addEventListener("keydown", (e) => {
  if (e.key == " ") {
    handleNext();
    newQuoteBtn.disabled = true;
    setTimeout(() => newQuoteBtn.disabled = false, 500)
  }
});
