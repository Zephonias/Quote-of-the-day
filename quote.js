const quotes = [
    {quote: "You must be the change you wish to see in the world.",
        name: "Mahatma Gandhi"
    },
    {quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
        name: "Mother Teresa"
    },
    {quote: "The only thing we have to fear is fear itself.",
        name: "Franklin D. Roosevelt"
    },
    {quote: "Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate: only love can do that.",
        name: "Martin Luther King Jr."
    },
    {quote: "Do one thing every day that scares you.",
        name: "Eleanor Roosevelt"
    },
    {quote: "Well done is better than well said.",
        name: "Benjamin Franklin"
    },
    {quote: "The best and most beautiful things in the world cannot be seen or even touched they must be felt with the heart.",
        name: "Helen Keller"
    },
    {quote: "It is during our darkest moments that we must focus to see the light.",
        name: "Aristotle"
    },
    {quote: "Be yourself; everyone else is already taken.",
        name: "Oscar Wilde"
    },
    {quote: "Do not go where the path may lead; go instead where there is no path and leave a trail.",
        name: "Ralph Waldo Emerson"
    }
]

const quote = document.querySelector('.quote');
const quoteName = document.querySelector('.name');
const newQuote = document.querySelector(".new");
const tweet = document.querySelector('.tweet');

let displayed = [];

function generateNewQuote(){
    let current;
    
    current = generateRandom();

    while (displayed.includes(current)){
        current = generateRandom();
    }
    
    quote.innerHTML = quotes[current].quote;
    quoteName.textContent = quotes[current].name;
    displayed.push(current);
    
    if(displayed.lenth === quotes.length){
        displayed = [];
    }
}
function generateRandom(){
    return Math.floor(Math.random() * quotes.length);
}

newQuote.addEventListener('click', ()=> {
    event.preventDefault();
    generateNewQuote();
})