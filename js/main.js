//status menu displayed for the user
let statusName = document.getElementById("status-name");
// $("#status-name")
let statusAvgRating = document.getElementById("status-avg-rating");
// $("#status-avg-rating")
let statusAvgRatingVal;
let statusCurrCard = document.getElementById("status-curr-card");
// $("#status-curr-card")
//let statusCardRating = document.getElementById("status-card-rating");
// $("#status-card-rating")
let statusCurrCardVal = 1;
let statusCurrCardTotal = 15;
//let statusDifficulty = document.getElementById("status-difficulty");
// $("#status-difficulty")

// display the "help" dialog when the button is pressed
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

// display the "options" dialog
const optionsButton = document.getElementById('options');
const optionsDialog = document.getElementById('optionsdialog');
const optionsBtn = document.getElementById('optionsBtn');

optionsButton.addEventListener('click', function onOpen() {
    if (typeof optionsDialog.showModal === "function") {
        optionsDialog.showModal();
    } else {
        alert("The <dialog> API is not supported by this browser");
    }
});

//this changes with difficulty level
var difficulty = 5

function setDifficulty(x){
    difficulty = x;
    let message;

        switch (x){
            case 7: message = "difficulty - hard";
            break;
            case 5: message = "difficulty - medium";
            break;
            case 3: message = "difficulty - easy";
            break;
        }
        $("#status-difficulty").innerText = message;
}

// create flashcard objects
function cardFactory (question, answer){
    return {
        question: question,
        answer: answer,
        rating: difficulty,
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

//Custom questions
let cardsCustom = [];

// flip the flashcard
$(function(){
    $(".flip").flip({
        trigger: 'click'
    });
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
//const containcard = document.getElementById('containcard');

//create rating average
function createAverage(arr){
    let allRatings = 0;

    for (let i=0; i<arr.length; i++){
        //console.log(arr[i].rating);
        allRatings = allRatings + arr[i].rating;
    }
    //console.log(allRatings);

    let avgRating = Math.floor(allRatings/arr.length);
    //console.log("avgRating: " + avgRating);
    return avgRating;
};

//open dialog immediately
$(document).ready(function() {
    if (typeof loadDialog.showModal === "function") {
        loadDialog.showModal();
      } else {
        alert("The <dialog> API is not supported by this browser");
      }
    }
);

//open dialog on button press
loadButton.addEventListener('click', function onOpen() {
  if (typeof loadDialog.showModal === "function") {
    loadDialog.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  };

      //remove previous selection
    //   document.querySelector("input[type=file]")[0] = null;
    //   confirmBtn.value = null;
    //   $("#upload-form").reset();
});

// 'select' input sets the value of the submit button
selectEl.addEventListener('change', function onSelect(e) {
    //confirmBtn.value = null;
  confirmBtn.value = selectEl.value;
});

// when the load dialog is closed
// "OK" button triggers "close" on dialog because of [method="dialog"]
loadDialog.addEventListener('close', function onClose() {

//if a custom file was selected, it is turned into currentArray, else one of the dropdown options does
if (customFile.files[0]){
    currentArray = JSON.parse(JSON.stringify(cardsCustom))
} else {
    // copy the chosen array into currentArray through JSON to retain nested structure
    switch (loadDialog.returnValue){
        case "English county towns" : currentArray = JSON.parse(JSON.stringify(cardsCounty));
        break;
        case "CSS concepts" : currentArray = JSON.parse(JSON.stringify(cardsCSS));
        break;
        case "Javascript" : currentArray = JSON.parse(JSON.stringify(cardsJavascript));
        break;
    };
}
    //update different elements of the status menu
    // if (currentArray){
    //     statusCurrCardTotal = currentArray.length
    //     };
    // if (loadDialog.returnValue !== ("cancel" || "default")){
    //     statusName.innerHTML = loadDialog.returnValue
    //     };    
    
    //show the card
    makeAppear($("#containcard"));

    //show rating
    $(".card-menu").removeClass("disappear");

    // serve the first flashcard
    nextCard(currentArray);
});

// rating buttons behaviour
$("#good").mousedown(function() {

    // find this tempArray card in currentArray and remove 2 rating points there
    for (let i=0; i<currentArray.length; i++){
        if (currentArray[i].question === tempArray[0].question){
                currentArray[i].rating -=2;
        }
    };

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

    // serve a new card
    nextCard(currentArray);
});

$("#bad").mousedown(function() {
    nextCard(currentArray);
});

// all "next card" behaviour
function nextCard (array){
    // extract all ratings from the questions
    console.log(currentArray[2].rating)

    let arrayRatings = [];

    if (currentArray){
        for (let j=0; j<array.length; j++){
            arrayRatings.push(array[j].rating)
        }
    };
    // clear out tempArray if needed
    tempArray.length = 0;

    // for every question in currentArray, push it to tempArray as many times as its rating shows
    if (currentArray){
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
    };
}

    // shuffle tempArray so you can always serve the first card from it (using a variable as array position doesn't seem to work)
    shuffleArray(tempArray);

    // find this tempArray card in currentArray, save the card index (counting from 1), update status menu
    if (currentArray){

    for (let i=0; i<currentArray.length; i++){
        if (currentArray[i].question === tempArray[0].question){
                statusCurrCardVal = i + 1;
                $("#status-curr-card").innerHTML = 'current card <strong>' + statusCurrCardVal + '/' + statusCurrCardTotal + '</strong>';

                switch (currentArray[i].rating){
                    case 5 : $("#status-card-rating").innerHTML = 'card rating ☆☆☆';
                      break;
                    case 4 : $("#status-card-rating").innerHTML = 'card rating ★☆☆';
                      break;
                    case 3 : $("#status-card-rating").innerHTML = 'card rating ★★☆';
                      break;
                    case 2 : $("#status-card-rating").innerHTML = 'card rating ★★☆';
                    break;
                    case 1 : $("#status-card-rating").innerHTML = 'card rating ★★★';
                    break;
                    case 0 : $("#status-card-rating").innerHTML = 'card rating ★★★';
                    break;
                  };
        }

        statusAvgRatingVal = createAverage(currentArray);

        switch (currentArray[i].rating){
            case 5 : statusAvgRating.innerHTML = 'avg rating ☆☆☆';
              break;
            case 4 : statusAvgRating.innerHTML = 'avg rating ★☆☆';
              break;
            case 3 : statusAvgRating.innerHTML = 'avg rating ★★☆';
              break;
            case 2 : statusAvgRating.innerHTML = 'avg rating ★★☆';
            break;
            case 1 : statusAvgRating.innerHTML = 'avg rating ★★★';
            break;
            case 0 : statusAvgRating.innerHTML = 'avg rating ★★★';
            break;
          };
        };
    };
    
    // check if there is anything left in the array and display message or next card
    // 0.5s delay so there's no chance to peek the answer before the card flips back
    setTimeout(function() {
        if (tempArray.length <= 0){    
            $("#question").html("✧･ﾟ:*✧ﾟ Finished! ﾟ✧*:･ﾟ✧ <br>There are no more questions left in this set.");
            $("#answer").text("You can use a different set now - or load the same one again");
            $(".card-menu").addClass("disappear");
        } else {
            $("#question").text(tempArray[0].question);
            $("#answer").text(tempArray[0].answer);
        };
    }, 200);
};

//Upload button
const uploadForm = document.getElementById("upload-form");
const customFile = document.getElementById("customFile");
let fileName = document.getElementById("file-name");

//check extension
function getExtension(filename) {
    var parts = filename.split('.');
    return parts[parts.length - 1];
  }

//handle json
function jsonToArray(str){
    let fromJson = JSON.parse(str);
  for (let i = 0; i < fromJson.length; i++){
        q = fromJson[i].question;
        a = fromJson[i].answer;
        cardsCustom.push(cardFactory(q, a));
        console.log(cardsCustom)
    }
}

//handle csv
function csvToArray(str){
    // slice from \n index + 1 to the end of the text
    // use split to create an array of each csv value row
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");

  for (let i = 0; i<rows.length; i++){
      let q = rows[i].split(",")[0];
      let a = rows[i].split(",")[1];
      cardsCustom.push(cardFactory(q, a));
  }
}

// when the custom file is selected
customFile.addEventListener('change', ()=>{
    //display file name
    let newFile = document.querySelector("input[type=file]").files[0];
    fileName.innerText = newFile.name;
    statusName.innerText = newFile.name;
    //convert file into array of cards?
    //make this array customArray?
})

// when the form is submitted with confirmBtn
uploadForm.addEventListener("submit", function () {
  const input = customFile.files[0];
  const reader = new FileReader();
  const extension = getExtension(input.name)
  //console.log(input)

  if (extension == "csv") {
      //reader.readAsText(input);
    reader.onload = function (e) {
        const text = e.target.result;
        csvToArray(text);
        }
        currentArray = JSON.parse(JSON.stringify(cardsCustom))

    } else if (extension == "json") {
        reader.onload = function (e) {
            const text = e.target.result;
            console.log(text)
            jsonToArray(text);
            }

        //confirmBtn.value = selectEl.value
        //currentArray = JSON.parse(JSON.stringify(cardsCustom))
        confirmBtn.value =  JSON.parse(JSON.stringify(cardsCustom))
        }

    reader.readAsText(input)

    
  //make sure the card displays the question side
  $("#card").flip(false)
});


//KEYBOARD SHORTCUTS
$(document).keydown(function(e){
    //console.log(e.which);

    //backspace
    if (e.which == 8){    
        document.getElementById("back").click();
    }

    //r
    if (e.which == 82){    
        document.getElementById("loadset").click();
    }

    //q
    if (e.which == 81){    
        document.getElementById("about").click();
    }

    //o
    if (e.which == 79){    
        document.getElementById("options").click();
    }

    //space
    if (e.which == 32){    
        document.getElementById("card").click();
        //$("#card").flip()
    } 

    //a/left
    if (e.which == 65) {    
        for (let i=0; i<currentArray.length; i++){
            if (currentArray[i].question === tempArray[0].question){
                    currentArray[i].rating -= 2;
            }
        };

        $("#card").flip(false);
        nextCard(currentArray); 

    } else if (e.which == 37){
        for (let i=0; i<currentArray.length; i++){
            if (currentArray[i].question === tempArray[0].question){
                    currentArray[i].rating -= 2;
            }
        };

        $("#card").flip(false);
        nextCard(currentArray); 
    }

    //s/down
    if (e.which == 83) {     
        for (let i=0; i<currentArray.length; i++){
            if (currentArray[i].question === tempArray[0].question){
                    currentArray[i].rating--;
            }
        };

        $("#card").flip(false);
        nextCard(currentArray); 

    } else if (e.which == 40){
        for (let i=0; i<currentArray.length; i++){
            if (currentArray[i].question === tempArray[0].question){
                    currentArray[i].rating--;
            }
        };

        $("#card").flip(false);
        nextCard(currentArray);
    }

    //d/right
    if (e.which == 68) {     
        $("#card").flip(false);
        nextCard(currentArray);
    } else if (e.which == 39){
        $("#card").flip(false);
        nextCard(currentArray);
    }
});

//change themes
function setTheme (theme) {
    document.documentElement.className = theme
};