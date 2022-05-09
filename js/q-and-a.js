// display the "about" dialog when the button is pressed

const aboutButton = document.getElementById('about');
const aboutDialog = document.getElementById('aboutdialog');
const aboutBtn = document.getElementById('aboutBtn');

aboutButton.addEventListener('click', function onOpen() {
    if (typeof aboutDialog.showModal === "function") {
        aboutDialog.showModal();
    } else {
        alert("The <dialog> API is not supported by this browser");
    }
});

// create flashcard objects
function cardFactory (question, answer){
    return {
        question: question,
        answer: answer,
        rating: 5,
    };
};

//County town questions
let county01 = cardFactory("What is the county town of Surrey?", "Guildford");
let county02 = cardFactory("What is the county town of Northumberland?", "Morpeth");
let county03 = cardFactory("What is the county town of Tyne and Wear?", "Newcastle upon Tyne");
let county04 = cardFactory("What is the county town of County Durham?", "Durham");
let county05 = cardFactory("What is the county town of Cumbria?", "Carlisle");
let county06 = cardFactory("What is the county town of North Yorkshire?", "Northallerton");
let county07 = cardFactory("What is the county town of Lancashire?", "Lancaster");
let county08 = cardFactory("What is the county town of West Yorkshire?", "Wakefield");
let county09 = cardFactory("What is the county town of East Riding of Yorkshire?", "Beverley");
let county10 = cardFactory("What is the county town of Cheshire?", "Chester");

let county11 = cardFactory("What is the county town of Derbyshire?", "Derby");
let county12 = cardFactory("What is the county town of South Yorkshire?", "Barnsley");
let county13 = cardFactory("What is the county town of Lincolnshire?", "Lincoln");
let county14 = cardFactory("What is the county town of Nottinghamshire?", "Nottingham");
let county15 = cardFactory("What is the county town of Leicestershire?", "Leicester");
let county16 = cardFactory("What is the county town of Rutland?", "Oakham");
let county17 = cardFactory("What is the county town of Staffordshire?", "Stafford");
let county18 = cardFactory("What is the county town of Shropshire?", "Shrewsbury");
let county19 = cardFactory("What is the county town of West Midlands?", "Birmingham");
let county20 = cardFactory("What is the county town of Worcestershire?", "Worcester");

let county21 = cardFactory("What is the county town of Herefordshire?", "Hereford");
let county22 = cardFactory("What is the county town of Somerset?", "Taunton");
let county23 = cardFactory("What is the county town of Gloucestershire?", "Gloucester");
let county24 = cardFactory("What is the county town of Wiltshire?", "Trowbridge");
let county25 = cardFactory("What is the county town of Oxfordshire?", "Oxford");
let county26 = cardFactory("What is the county town of Buckinghamshire?", "Aylesbury");
let county27 = cardFactory("What is the county town of Bedfordshire?", "Bedford");
let county28 = cardFactory("What is the county town of Norfolk?", "Norwich");
let county29 = cardFactory("What is the county town of Suffolk?", "Ipswich");
let county30 = cardFactory("What is the county town of Essex?", "Chelmsford");

let county31 = cardFactory("What is the county town of Kent?", "Maidstone");
let county32 = cardFactory("What is the county town of East Sussex?", "Lewes");
let county33 = cardFactory("What is the county town of West Sussex?", "Chichester");
let county34 = cardFactory("What is the county town of Berkshire?", "Reading");
let county35 = cardFactory("What is the county town of Dorchester?", "Dorset");
let county36 = cardFactory("What is the county town of Isle of Wight?", "Newport");
let county37 = cardFactory("What is the county town of Devon?", "Exeter");
let county38 = cardFactory("What is the county town of Cornwall?", "Truro");
let county39 = cardFactory("What is the county town of Cambridgeshire?", "Cambridge");
let county40 = cardFactory("What is the county town of Merseyside?", "Liverpool");

let cardsCounty = [
    county01, county02, county03, county04, county05, county06, county07, county08, county09, county10,
    county11, county12, county13, county14, county15, county16, county17, county18, county19, county20,
    county21, county22, county23, county24, county25, county26, county27, county28, county29, county30,
    county31, county32, county33, county34, county35, county36, county37, county38, county39, county40
];

// CSS questions
let css01 = cardFactory("Which has priority: flex-basis or width?", "flex-basis, you can set both");
let css02 = cardFactory("Which position values does z-index go with?", "absolute and fixed");
let css03 = cardFactory("What is vmax?", "Percentage of the viewport’s larger dimension");
let css04 = cardFactory("What is vmin?", "Percentage of the viewport’s smaller dimension");
let css05 = cardFactory("What is vw?", "Percentage of viewport width");
let css06 = cardFactory("What is lh?", "line height of the element (for other elements choose 1em)");
let css07 = cardFactory("What is rem?", "font size of the root element (html)");
let css08 = cardFactory("What is ch?", "width of 0 in this font, usually wider than typical character");
let css09 = cardFactory("What is ex?", "x-height of the element’s font");
let css10 = cardFactory("What is em?", "font size of the parent, or font size of the element itself in some cases, suitable for adjusting any element to text height.");

let cardsCSS = [
    css01, css02, css03, css04, css05, css06, css07, css08, css09, css10
];

// Javascript questions
let javascript01 = cardFactory("3 ways to initialize an object", "1. object constructor: const obj = newObject() obj.value = 42; 2.using an existing object as prototype: const new = Object.create(old); 3. literal/initializer notation: const obj = {}");
let javascript02 = cardFactory("Describe the array method .filter()", "1. it executes a callback function on each element in the array; 2. the callback function must return true or false; 3. it returns a new array only with elements that were true; const filteredArray = randomNumbers.filter(n => {return n>5})");
let javascript03 = cardFactory("Describe the for ... in loop", "It is used to iterate over the KEYS of an object; for (let k in obj){console.log('The value of ${k} is ${obj[k]}')}");
let javascript04 = cardFactory("What are object methods?", "Method - property value that is a function. It can be defined with an arrow function expression or shorthand method syntax; const engine = {start(adverb): {console.log('The engine started ${adverb}')}, sputter: ()=>{console.log('The engine sputtered')}}");
let javascript05 = cardFactory("Describe array method forEach", "1. It executes a callback function on each array element; 2. It modifies the original array; 3. It returns undefined; randomnumbers.forEach(n => console.log(n ))");
let javascript06 = cardFactory("Describe the Object.keys() method", "It returns an array of a given object's own enumerable property names. Object.keys(obj)");
let javascript07 = cardFactory("Describe spread syntax", "1. It can be used when all elements of an array or object need to be included on some sort of list; 2. It copies the original array");

let cardsJavascript = [
    javascript01, javascript02, javascript03, javascript04, javascript05, javascript06, javascript07
];


///////////////////////
// DYNAMIC BEHAVIOUR //
///////////////////////

// flip the flashcard
$(function(){
    $(".flip").flip({
        trigger: 'click'
    });
});

// make rating buttons appear when a live card is flipped
$("#card").on('click',function(){
    makeAppear(".live-buttons");
  });

//turn things invisible when needed (rating buttons)
function makeDisappear(item){
    $(item).addClass("disappear");
}

function makeAppear(item){
    $(item).removeClass("disappear");
}

// make ready empty arrays
let currentArray;
let tempArray = [];

// basic shuffling function
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
};

// "Load new set" dialog behaviour

const loadButton = document.getElementById('loadset');
const loadDialog = document.getElementById('loaddialog');
const selectEl = document.querySelector('select');
const confirmBtn = document.getElementById('confirmBtn');

loadButton.addEventListener('click', function onOpen() {
  if (typeof loadDialog.showModal === "function") {
    loadDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
});

// input sets the value of the submit button
selectEl.addEventListener('change', function onSelect(e) {
  confirmBtn.value = selectEl.value;
});

// "OK" button triggers "close" on dialog because of [method="dialog"]
loadDialog.addEventListener('close', function onClose() {

    // copy the chosen array into currentArray through JSON to retain nested structure
    switch (loadDialog.returnValue){
        case "English county towns" : currentArray = JSON.parse(JSON.stringify(cardsCounty));
        break;
        case "CSS concepts" : currentArray = JSON.parse(JSON.stringify(cardsCSS));
        break;
        case "Javascript" : currentArray = JSON.parse(JSON.stringify(cardsJavascript));
        break;

    };

    // serve the first card
    nextCard(currentArray);

    // enable appearance and disappearance of rating buttons
    $(".tickform").addClass("live-buttons");
});

//// rating buttons behaviour
$("#good").mousedown(function() {

    // find this tempArray card in currentArray and remove 2 rating points there
    for (let i=0; i<currentArray.length; i++){
        if (currentArray[i].question === tempArray[0].question){
                currentArray[i].rating -=2;
        }
    };

    // hide answer rating buttons for the next card
    makeDisappear(".live-buttons");

    // serve a new card
    nextCard(currentArray);
});

$("#medium").mousedown(function() {

    // remove 1 rating point
    for (let i=0; i<currentArray.length; i++){
        if (currentArray[i].question === tempArray[0].question){
                currentArray[i].rating --;
        }
    };

    // hide answer rating buttons for the next card
    makeDisappear(".live-buttons");

    // serve a new card
    nextCard(currentArray);
});

$("#bad").mousedown(function() {
    makeDisappear(".live-buttons");
    nextCard(currentArray);
});

//// all "next card" behaviour
function nextCard (array){
    // make sure the question side is displayed
    $("#card").flip(false);

    // start without showing answer rating buttons, they appear on flip
    makeDisappear(".live-buttons");

    // extract all ratings from the questions
    let arrayRatings = [];
    for (let j=0; j<array.length; j++){
        arrayRatings.push(array[j].rating)
    }

    // clear out tempArray if needed
    tempArray.length = 0;

    // for every question in currentArray, push it to tempArray as many times as its rating shows
    for (let k = 0; k<array.length; k++){
        switch (arrayRatings[k]){
            case 1 : tempArray.push(array[k]);
              break;
            case 2 : tempArray.push(array[k], array[k]);
              break;
            case 3 : tempArray.push(array[k], array[k], array[k]);
              break;
            case 4 : tempArray.push(array[k], array[k], array[k], array[k]);
              break;
            case 5 : tempArray.push(array[k], array[k], array[k], array[k], array[k]);
              break;
          };

        console.log("current: " + currentArray.length);
        console.log("temp: " + tempArray.length);
        console.log("ratings:" + arrayRatings);
    }

    // shuffle tempArray so you can always serve the first card from it (using a variable as array position doesn't seem to work)
    shuffleArray(tempArray);

    // check if there is anything left in the array and display message or next card
    // 0.5s delay so there's no chance to peek the answer before the card flips back
    setTimeout(function() {
        if (tempArray.length <= 0){    
            $("#question").text("🎉🎉 Finished! There are no more questions left in this set. 🎉🎉");
            $("#answer").text("You can use a different set now - or load this one again, I'm not telling you what to do");
            $(".tickform").removeClass("live-buttons");
        } else {
            $("#question").text(tempArray[0].question);
            $("#answer").text(tempArray[0].answer);
        };
    }, 500);
};