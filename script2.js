const quotes = [{author: ' Shakespeare', quote: 'This above all: to thine own self be true', image: './images/shakespeare.png'},
    {author: 'Shakespeare', quote: 'Our doubts are traitors, And make us lose the good we oft might win, By fearing to attempt', image: './images/shakespeare.png'},
    {author: 'Shakespeare', quote: 'We know what we are, but know not what we may be.', image: './images/shakespeare.png'},
    {author: 'Shakespeare', quote: 'Be not afraid of greatness: some are born great, some achieve greatness and some have greatness thrust upon them.', image: './images/shakespeare.png'},
    {author: 'Aristotle', quote: 'Education is bitter, but its fruit is sweet.', image: './images/aristotle.png'},
    {author: 'Aristotle', quote: 'Pleasure in the job puts perfection in the work.', image: './images/aristotle.png'},
    {author: 'Aristotle', quote: 'Good habits formed at youth make all the difference', image: './images/aristotle.png'},
    {author: 'Aristotle', quote: 'Well begun is half done', image: './images/aristotle.png'},
    {author: 'Plato', quote: 'Do not train a child to learn by force or harshness; but direct them to it by what amuses their minds, so that you may be better able to discover with accuracy the peculiar bent of the genius of each.', image: './images/plato.png'},
    {author: 'Plato', quote: 'Necessity is the mother of invention.', image: './images/plato.png'},
    {author: 'Plato', quote: 'Beauty lies in the eyes of the beholder', image: './images/plato.png'},
    {author: 'Plato', quote: 'Character is simply habit long continued', image: './images/plato.png'},
    {author: 'Socrates', quote: 'The only true wisdom is in knowing that you know nothing', image: './images/socrates.png'},
    {author: 'Socrates', quote: 'True wisdom comes to each of us when we realise how little we understand about life, ourselves, and the world around us.', image: './images/socrates.png'},
    {author: 'Socrates', quote: 'Wisdom begins in wonder', image: './images/socrates.png'},
    {author: 'Socrates', quote: 'Employ your time in improving yourself by other men\'s writings, so that you shall gain easily what others have laboured hard for.', image: './images/socrates.png'},
    {author: 'Socrates', quote: 'Knowledge will make you be free.', image: './images/socrates.png'}]
  
    const newQuoteBtn = document.querySelector(".new-quote");
    const quoteContent = document.querySelector(".quote-content");
    
    console.log(newQuoteBtn);
    console.log(quoteContent);
    console.log(quotes[0].quote);
  
    // newQuoteBtn.addEventListener("click", () =>{
    //   document.querySelector("blockquote").style.backgroundColor = randomColor;
    //   quoteContent.innerHTML = quotes[0].quote;
    // })