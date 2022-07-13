//Change difficulty
let difficulty = 5; //must be accessible for many functions

function setDifficulty(x) {
  difficulty = x;
  let message;

  switch (x) {
    case 7:
      message = "difficulty - hard";
      break;
    case 5:
      message = "difficulty - medium";
      break;
    case 3:
      message = "difficulty - easy";
      break;
  }

  $("#status-difficulty").text(message);
  console.log(message);
}

// create flashcard objects
function cardFactory(question, answer) {
  return {
    question: question,
    answer: answer,
    rating: difficulty,
  };
}

//County town questions
let county01 = cardFactory("What is the county town of Surrey?", "Guildford");
let county02 = cardFactory(
  "What is the county town of Northumberland?",
  "Morpeth"
);
let county03 = cardFactory(
  "What is the county town of Tyne and Wear?",
  "Newcastle upon Tyne"
);
let county04 = cardFactory(
  "What is the county town of County Durham?",
  "Durham"
);
let county05 = cardFactory("What is the county town of Cumbria?", "Carlisle");
let county06 = cardFactory(
  "What is the county town of North Yorkshire?",
  "Northallerton"
);
let county07 = cardFactory(
  "What is the county town of Lancashire?",
  "Lancaster"
);
let county08 = cardFactory(
  "What is the county town of West Yorkshire?",
  "Wakefield"
);
let county09 = cardFactory(
  "What is the county town of East Riding of Yorkshire?",
  "Beverley"
);
let county10 = cardFactory("What is the county town of Cheshire?", "Chester");
let county11 = cardFactory("What is the county town of Derbyshire?", "Derby");
let county12 = cardFactory(
  "What is the county town of South Yorkshire?",
  "Barnsley"
);
let county13 = cardFactory(
  "What is the county town of Lincolnshire?",
  "Lincoln"
);
let county14 = cardFactory(
  "What is the county town of Nottinghamshire?",
  "Nottingham"
);
let county15 = cardFactory(
  "What is the county town of Leicestershire?",
  "Leicester"
);
let county16 = cardFactory("What is the county town of Rutland?", "Oakham");
let county17 = cardFactory(
  "What is the county town of Staffordshire?",
  "Stafford"
);
let county18 = cardFactory(
  "What is the county town of Shropshire?",
  "Shrewsbury"
);
let county19 = cardFactory(
  "What is the county town of West Midlands?",
  "Birmingham"
);
let county20 = cardFactory(
  "What is the county town of Worcestershire?",
  "Worcester"
);
let county21 = cardFactory(
  "What is the county town of Herefordshire?",
  "Hereford"
);
let county22 = cardFactory("What is the county town of Somerset?", "Taunton");
let county23 = cardFactory(
  "What is the county town of Gloucestershire?",
  "Gloucester"
);
let county24 = cardFactory(
  "What is the county town of Wiltshire?",
  "Trowbridge"
);
let county25 = cardFactory("What is the county town of Oxfordshire?", "Oxford");
let county26 = cardFactory(
  "What is the county town of Buckinghamshire?",
  "Aylesbury"
);
let county27 = cardFactory(
  "What is the county town of Bedfordshire?",
  "Bedford"
);
let county28 = cardFactory("What is the county town of Norfolk?", "Norwich");
let county29 = cardFactory("What is the county town of Suffolk?", "Ipswich");
let county30 = cardFactory("What is the county town of Essex?", "Chelmsford");

let county31 = cardFactory("What is the county town of Kent?", "Maidstone");
let county32 = cardFactory("What is the county town of East Sussex?", "Lewes");
let county33 = cardFactory(
  "What is the county town of West Sussex?",
  "Chichester"
);
let county34 = cardFactory("What is the county town of Berkshire?", "Reading");
let county35 = cardFactory("What is the county town of Dorchester?", "Dorset");
let county36 = cardFactory(
  "What is the county town of Isle of Wight?",
  "Newport"
);
let county37 = cardFactory("What is the county town of Devon?", "Exeter");
let county38 = cardFactory("What is the county town of Cornwall?", "Truro");
let county39 = cardFactory(
  "What is the county town of Cambridgeshire?",
  "Cambridge"
);
let county40 = cardFactory(
  "What is the county town of Merseyside?",
  "Liverpool"
);

let cardsCounty = [
  county01,
  county02,
  county03,
  county04,
  county05,
  county06,
  county07,
  county08,
  county09,
  county10,
  county11,
  county12,
  county13,
  county14,
  county15,
  county16,
  county17,
  county18,
  county19,
  county20,
  county21,
  county22,
  county23,
  county24,
  county25,
  county26,
  county27,
  county28,
  county29,
  county30,
  county31,
  county32,
  county33,
  county34,
  county35,
  county36,
  county37,
  county38,
  county39,
  county40,
];

// CSS questions
let css01 = cardFactory(
  "Which has priority: flex-basis or width?",
  "flex-basis, you can set both"
);
let css02 = cardFactory(
  "Which position values does z-index go with?",
  "absolute and fixed"
);
let css03 = cardFactory(
  "What is vmax?",
  "Percentage of the viewport’s larger dimension"
);
let css04 = cardFactory(
  "What is vmin?",
  "Percentage of the viewport’s smaller dimension"
);
let css05 = cardFactory("What is vw?", "Percentage of viewport width");
let css06 = cardFactory(
  "What is lh?",
  "line height of the element (for other elements choose 1em)"
);
let css07 = cardFactory("What is rem?", "font size of the root element (html)");
let css08 = cardFactory(
  "What is ch?",
  "width of 0 in this font, usually wider than typical character"
);
let css09 = cardFactory("What is ex?", "x-height of the element’s font");
let css10 = cardFactory(
  "What is em?",
  "font size of the parent, or font size of the element itself in some cases, suitable for adjusting any element to text height."
);

let cardsCSS = [
  css01,
  css02,
  css03,
  css04,
  css05,
  css06,
  css07,
  css08,
  css09,
  css10,
];

// Javascript questions
let javascript01 = cardFactory(
  "3 ways to initialize an object",
  "1. object constructor:<br><em>const obj = newObject() obj.value = 42</em>;<br>2. using an existing object as prototype: <em>const new = Object.create(old)</em>;<br>3. literal/initializer notation: <em>const obj = {}</em>"
);
let javascript02 = cardFactory(
  "Describe the array method .filter()",
  "1. it executes a callback function on each element in the array;<br>2. the callback function must return true or false;<br>3. it returns a new array only with elements that were true;<br><em>const filteredArray = randomNumbers.filter(n => {return n>5})</em>"
);
let javascript03 = cardFactory(
  "Describe the for ... in loop",
  "It is used to iterate over the KEYS of an object;<br><br><em>for (let k in obj){console.log('The value of ${k} is ${obj[k]}')}</em>"
);
let javascript04 = cardFactory(
  "What are object methods?",
  "Method - property value that is a function. It can be defined with an arrow function expression or shorthand method syntax;<br><br><em>const engine = {start(adverb): {console.log('The engine started ${adverb}')},<br>sputter: ()=>{console.log('The engine sputtered')}}</em>"
);
let javascript05 = cardFactory(
  "Describe array method forEach",
  "1. It executes a callback function on each array element;<br><br> 2. It modifies the original array;<br><br>3. It returns undefined;<br><br><em>randomnumbers.forEach(n => console.log(n))</em>"
);
let javascript06 = cardFactory(
  "Describe the Object.keys() method",
  "It returns an array of a given object's own enumerable property names.<br><br><em>Object.keys(obj)</em>"
);
let javascript07 = cardFactory(
  "Describe spread syntax",
  "1. It can be used when all elements of an array or object need to be included on some sort of list;<br><br>2. It copies the original array"
);

let cardsJavascript = [
  javascript01,
  javascript02,
  javascript03,
  javascript04,
  javascript05,
  javascript06,
  javascript07,
];

//from uploaded files
let cardsCustom = [];
