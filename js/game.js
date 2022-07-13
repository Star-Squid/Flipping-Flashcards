//HELPER FUNCTIONS

//Set theme
function setTheme(theme) {
  document.querySelector(":root").className = theme;
}

//Flip the flashcard
$(function () {
  $(".flip").flip({
    trigger: "click",
  });
});

//shuffle array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

//create rating average
function createAverage(arr) {
  let allRatings = 0;

  arr.forEach((elem) => (allRatings += elem.rating));

  let avgRating = Math.floor(allRatings / arr.length);
  let addDifficulty = (avgRating * 105) / difficulty;
  return addDifficulty;
}

//DIALOGS
function checkAndShow(dlg) {
  if (typeof dlg.showModal === "function") {
    dlg.showModal();
  } else {
    alert("The <dialog> API is not supported by this browser");
  }
}

//"Back to home"
$("#back").on("click", function () {
  let dlg = document.getElementById("backdialog");
  checkAndShow(dlg);
});

//"About"
$("#about").on("click", function () {
  let dlg = document.getElementById("aboutdialog");
  checkAndShow(dlg);
});

//"Options"
$("#options").on("click", function () {
  let dlg = document.getElementById("optionsdialog");
  checkAndShow(dlg);
});

//"Load"
//1.open immediately
$(document).ready(function () {
  let dlg = document.getElementById("loaddialog");
  checkAndShow(dlg);
});

//2.open dialog on button press
$("#loadset").on("click", function () {
  let dlg = document.getElementById("loaddialog");
  checkAndShow(dlg);
});

//CARD HANDLING STARTS HERE
let currentArray = [];
let tempArray = [];
let statusCurrCardVal = 0;
// let statusCurrCardTotal = 0;

//CUSTOM FILE UPLOAD AND PARSE
// --------------------------------------
// const customFileButton = document.getElementById("customFile");
// let fileName = document.getElementById("file-name");
// const reader = new FileReader();
let recentChange;

//check extension
function getExtension(filename) {
  var parts = filename.split(".");
  return parts[parts.length - 1];
}

//handle json
function jsonToArray(str) {
  let fromJson = JSON.parse(str);
  cardsCustom.length = 0;

  for (let i = 0; i < fromJson.length; i++) {
    q = fromJson[i].question;
    a = fromJson[i].answer;
    cardsCustom.push(cardFactory(q, a));
  }
}

//handle csv
function csvToArray(str) {
  // slice from \n index + 1 to the end of the text
  // use split to create an array of each csv value row
  const rows = str.slice(str.indexOf("\n") + 1).split("\n");
  cardsCustom.length = 0;

  for (let i = 0; i < rows.length; i++) {
    let q = rows[i].split(",")[0];
    let a = rows[i].split(",")[1];
    cardsCustom.push(cardFactory(q, a));
  }
}

// update titles when the custom file is selected
$("#customFile").on("change", function () {
  let newFile = document.querySelector("input[type=file]").files[0].name;
  $("#status-name, #file-name").text(newFile);
  recentChange = "custom";
});

//CARD SET SELECTION FORM

// 'select' input sets the value of the submit button
$("select").on("change", function () {
  $("#confirmBtn")[0].value = $("select")[0].value;
  recentChange = "builtin";
});

// when form is submitted - "OK" button triggers "close" on dialog because of [method="dialog"]
$("#loaddialog").on("close", function () {
  let formValue = document.getElementById("loaddialog").returnValue;
  const input = document.querySelector("input[type=file]").files[0];

  if (recentChange === "custom") {
    //check type of file uploaded
    const extension = getExtension(input.name);

    if (extension === "csv") {
      let reader = new FileReader();
      reader.readAsText(input);

      reader.onload = function (e) {
        const text = e.target.result;
        csvToArray(text);
        currentArray = JSON.parse(JSON.stringify(cardsCustom));
        currentArray.forEach((card) => (card.rating = difficulty));

        nextCard(currentArray);
      };
    } else if (extension === "json") {
      let reader = new FileReader();
      reader.readAsText(input);

      reader.onload = function (e) {
        const text = e.target.result;
        jsonToArray(text);
        currentArray = JSON.parse(JSON.stringify(cardsCustom));
        currentArray.forEach((card) => (card.rating = difficulty));
        nextCard(currentArray);
      };
    }

    formValue = input.name;
  } else if (recentChange === "builtin") {
    //fill currentArray depending on form value and difficulty (this is the only place to set new difficulty)
    if (formValue === "English county towns") {
      currentArray = JSON.parse(JSON.stringify(cardsCounty));
      currentArray.forEach((card) => (card.rating = difficulty));
    } else if (formValue === "CSS concepts") {
      currentArray = JSON.parse(JSON.stringify(cardsCSS));
      currentArray.forEach((card) => (card.rating = difficulty));
    } else if (formValue === "Javascript") {
      currentArray = JSON.parse(JSON.stringify(cardsJavascript));
      currentArray.forEach((card) => (card.rating = difficulty));
    }
  } //end recentchange check

  if (formValue !== "cancel" && formValue !== "default") {
    $("#status-name").text(formValue);
    $("#containcard").removeClass("disappear");
    $(".card-menu").removeClass("disappear");
  }

  nextCard(currentArray);
});

//CARD HANDLING
$("#good").mousedown(function () {
  // find this tempArray card in currentArray and remove 2 rating points there
  let currentIndex = currentArray.indexOf(tempArray[0]);
  currentArray[currentIndex].rating -= 2;
  nextCard(currentArray);
});

$("#medium").mousedown(function () {
  // remove 1 rating point
  let currentIndex = currentArray.indexOf(tempArray[0]);
  currentArray[currentIndex].rating--;
  nextCard(currentArray);
});

$("#bad").mousedown(function () {
  nextCard(currentArray);
});

function nextCard(array) {
  // extract all ratings from the questions
  let arrayRatings = [];

  for (let j = 0; j < array.length; j++) {
    arrayRatings.push(array[j].rating);
  }

  tempArray.length = 0;
  // for every question in currentArray, push it to tempArray as many times as its rating shows
  if (currentArray) {
    for (let k = 0; k < array.length; k++) {
      switch (arrayRatings[k]) {
        case 1:
          tempArray.push(array[k]);
          break;
        case 2:
          tempArray.push(array[k], array[k]);
          break;
        case 3:
          tempArray.push(array[k], array[k], array[k]);
          break;
        case 4:
          tempArray.push(array[k], array[k], array[k], array[k]);
          break;
        case 5:
          tempArray.push(array[k], array[k], array[k], array[k], array[k]);
          break;
        case 6:
          tempArray.push(
            array[k],
            array[k],
            array[k],
            array[k],
            array[k],
            array[k]
          );
          break;
        case 7:
          tempArray.push(
            array[k],
            array[k],
            array[k],
            array[k],
            array[k],
            array[k],
            array[k]
          );
          break;
      }
    }
  }

  // shuffle tempArray so you can always serve the first card from it (using a variable as array position doesn't seem to work)
  shuffleArray(tempArray);

  //calculate and update current card's rating
  if (currentArray.length > 0) {
    let i = currentArray.indexOf(tempArray[0]);

    $("#status-curr-card").html(
      "current card <strong>" +
        (i + 1) +
        "/" +
        currentArray.length +
        "</strong>"
    );

    let ratingWithDifficulty = (currentArray[i].rating * 105) / difficulty; //105 is LCD for 3, 5, and 7
    if (ratingWithDifficulty >= 80) {
      $("#status-card-rating").text("card rating ☆☆☆");
    } else if (ratingWithDifficulty >= 55 && ratingWithDifficulty <= 79) {
      $("#status-card-rating").text("card rating ★☆☆");
    } else if (ratingWithDifficulty >= 25 && ratingWithDifficulty <= 54) {
      $("#status-card-rating").text("card rating ★★☆");
    } else if (ratingWithDifficulty <= 24) {
      $("#status-card-rating").text("card rating ★★★");
    } else {
      $("#status-card-rating").text("card rating ?");
    }

    //calculate and update rating for the set
    statusAvgRatingVal = createAverage(currentArray);

    if (statusAvgRatingVal >= 80) {
      $("#status-avg-rating").text("avg rating ☆☆☆");
    } else if (statusAvgRatingVal >= 55 && statusAvgRatingVal <= 79) {
      $("#status-avg-rating").text("avg rating ★☆☆");
    } else if (statusAvgRatingVal >= 25 && statusAvgRatingVal <= 54) {
      $("#status-avg-rating").text("avg rating ★★☆");
    } else if (statusAvgRatingVal <= 24) {
      $("#status-avg-rating").text("avg rating ★★★");
    } else {
      $("#status-avg-rating").text("avg rating ?");
    }
  }

  // check if there is anything left in the array and display message or next card.
  // 0.5s delay so there's no chance to peek the answer before the card flips back
  setTimeout(function () {
    if (tempArray.length <= 0) {
      $("#question").html(
        "✧･ﾟ:*✧ﾟ Finished! ﾟ✧*:･ﾟ✧ <br>There are no more questions left in this set."
      );
      $("#answer").html(
        "You can use a different set now - or load the same one again"
      );
      $(".card-menu").addClass("disappear");
    } else {
      $("#question").html(tempArray[0].question);
      $("#answer").html(tempArray[0].answer);
    }
  }, 300);
}
