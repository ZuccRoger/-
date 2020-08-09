/*
Author: Yong Cho
Email: Yong_Cho@student.uml.edu
Created: 12/3/2015
File Description: JavaScript for assignment 9 page.
*/

"use strict";

var Z_INDEX_DIALOG = 100;
var Z_INDEX_TILE_ON_DRAG = 99;
var TEXT_COLOR_ACTIVE = "#339933";
var TEXT_COLOR_NORMAL = "";
var TEXT_COLOR_INVALID = "red";

// This array is copied from https://teaching.cs.uml.edu/~heines/91.461/91.461-2015-16f/461-lecs/lecture26.jsp.
// I added "image" property to it.
var scrabbleTiles = [] ;
scrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/scrabble/Scrabble_Tile_A.jpg"  } ;
scrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_B.jpg"  } ;
scrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_C.jpg"  } ;
scrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/scrabble/Scrabble_Tile_D.jpg"  } ;
scrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image" : "img/scrabble/Scrabble_Tile_E.jpg"  } ;
scrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_F.jpg"  } ;
scrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image" : "img/scrabble/Scrabble_Tile_G.jpg"  } ;
scrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_H.jpg"  } ;
scrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/scrabble/Scrabble_Tile_I.jpg"  } ;
scrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/scrabble/Scrabble_Tile_J.jpg"  } ;
scrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/scrabble/Scrabble_Tile_K.jpg"  } ;
scrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/scrabble/Scrabble_Tile_L.jpg"  } ;
scrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_M.jpg"  } ;
scrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/scrabble/Scrabble_Tile_N.jpg"  } ;
scrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image" : "img/scrabble/Scrabble_Tile_O.jpg"  } ;
scrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_P.jpg"  } ;
scrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/scrabble/Scrabble_Tile_Q.jpg"  } ;
scrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/scrabble/Scrabble_Tile_R.jpg"  } ;
scrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/scrabble/Scrabble_Tile_S.jpg"  } ;
scrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/scrabble/Scrabble_Tile_T.jpg"  } ;
scrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/scrabble/Scrabble_Tile_U.jpg"  } ;
scrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_V.jpg"  } ;
scrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_W.jpg"  } ;
scrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/scrabble/Scrabble_Tile_X.jpg"  } ;
scrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_Y.jpg"  } ;
scrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/scrabble/Scrabble_Tile_Z.jpg"  } ;
scrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/scrabble/Scrabble_Tile_Blank.jpg"  } ;

var scrabbleBoard = {};

// Single row for now. Maybe upgrade to 2d board later.
// Images are downloaded from
// https://teaching.cs.uml.edu/~heines/91.461/91.461-2015-16f/461-assn/ImplementingScrabble-v01.jsp.
scrabbleBoard.slots = [];
scrabbleBoard.slots[0] = [];
scrabbleBoard.slots[0][0] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/scrabble/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[0][1] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "img/scrabble/Scrabble_DoubleWordScore_81x87.jpg"};
scrabbleBoard.slots[0][2] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/scrabble/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[0][3] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/scrabble/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[0][4] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/scrabble/Scrabble_BlankSquare_81x87.jpg"};
scrabbleBoard.slots[0][5] = { "letterMultiplier": 1, "wordMultiplier": 2, "image": "img/scrabble/Scrabble_DoubleWordScore_81x87.jpg"};
scrabbleBoard.slots[0][6] = { "letterMultiplier": 1, "wordMultiplier": 1, "image": "img/scrabble/Scrabble_BlankSquare_81x87.jpg"};

scrabbleBoard.rowCount = Object.keys(scrabbleBoard.slots).length;
scrabbleBoard.columnCount = Object.keys(scrabbleBoard.slots[0]).length;

// Globals to track current score.
var scrabbleScore = { "totalScore": 0, "highestScore": 0 };

// Calculates and returns the score for the tiles currently on the board.
// Yes. This algorithm will need to change if we decide to implement multiple rows.
scrabbleScore.calculateBoardScore = function() {
  var iRow, iCol, letter, letterValue, wordMultiplier = 1, boardScore = 0;

  if (!validateWord()) {
    return 0;
  }

  // Add up all the letters' values. Count for letter modifiers on the way.
  for (iRow = 0; iRow < scrabbleBoard.rowCount; ++iRow) {
    for (iCol = 0; iCol < scrabbleBoard.columnCount; ++iCol) {
      letter = scrabbleBoard.slots[iRow][iCol].letter;
      if (letter) {
        letterValue = scrabbleTiles[letter].value;
        boardScore += letterValue * scrabbleBoard.slots[iRow][iCol].letterMultiplier;

        // We're pre-multiplying all the word modifiers here.
        wordMultiplier *= scrabbleBoard.slots[iRow][iCol].wordMultiplier;
      }
    }
  }

  // Now apply the word modifier.
  boardScore *= wordMultiplier;

  return boardScore;
}

// Updates the scoreboard texts based on the current tiles layout.
scrabbleScore.refresh = function() {
  var boardScore = scrabbleScore.calculateBoardScore();

  $("#score").css("color", TEXT_COLOR_NORMAL);
  $("#score").html(scrabbleScore.totalScore + " (+<span id='boardScore'>" + boardScore + "</span>)");
  if (boardScore > 0) {
    $("#boardScore").css("color", TEXT_COLOR_ACTIVE);
  } else {
    $("#boardScore").css("color", TEXT_COLOR_INVALID);
  }

  $("#highestScore").html(scrabbleScore.highestScore);
}

// Updates the total score and the highest score variables based on the current tiles layout.
// Also updates the scoreboard texts with the new total score and highest score (if total > highest).
scrabbleScore.commit = function() {
  var boardScore = scrabbleScore.calculateBoardScore();

  scrabbleScore.totalScore += boardScore;
  $("#score").html(scrabbleScore.totalScore);
  if (scrabbleScore.totalScore > 0) {
    $("#score").css("color", TEXT_COLOR_ACTIVE);
  }

  if (scrabbleScore.totalScore > scrabbleScore.highestScore) {
    scrabbleScore.highestScore = scrabbleScore.totalScore;
    $("#highestScore").html(scrabbleScore.totalScore);
    $("#highestScore").css("color", TEXT_COLOR_ACTIVE);
  }
}

// Resets the score to 0 and updates the page as necessary.
scrabbleScore.restart = function() {
  scrabbleScore.totalScore = 0;
  $("#score").html(0);
  $("#highestScore").css("color", TEXT_COLOR_NORMAL);
}

// Creates all DOM elements necessary to construct the board.
scrabbleBoard.createBoardHtml = function() {
  var row, col, bgImagePath, newSlot;
  var BG_IMAGE_WIDTH = 81, BG_IMAGE_HEIGHT = 87, SLOT_MARGIN = 1, SLOT_BORDER_WIDTH = 1;

  // Set the fixed height for the board appropriate for the number of rows.
  $("#board").css("height", (BG_IMAGE_HEIGHT + 2 * (SLOT_MARGIN + SLOT_BORDER_WIDTH)) * scrabbleBoard.rowCount);
  // Set the fixed width for the board to accomodate one full row.
  $("#board").css("width", (BG_IMAGE_WIDTH + 2 * (SLOT_MARGIN + SLOT_BORDER_WIDTH)) * scrabbleBoard.columnCount);

  // Lay down the board images.
  for (row = 0; row < scrabbleBoard.rowCount; ++row) {
    for (col = 0; col < scrabbleBoard.columnCount; ++col) {
      bgImagePath = scrabbleBoard.slots[row][col].image;
      newSlot = $("<div class=\"boardSlot\" row=\"" + row + "\" col=\"" + col + "\" style=\"background-image: url(" + bgImagePath + ")\" />");
      $("#board").append(newSlot);
      newSlot.css({"width": BG_IMAGE_WIDTH, "height": BG_IMAGE_HEIGHT, "margin": SLOT_MARGIN, "border-width": SLOT_BORDER_WIDTH});
    }
  }
}

// Drops all tile images from the board and updates the board slot data structure accordingly.
scrabbleBoard.clearBoard = function() {
  var iRow, iCol;

  $("#board img").remove();

  // Reset the slot data structure.
  for (iRow = 0; iRow < scrabbleBoard.rowCount; ++iRow) {
    for (iCol = 0; iCol < scrabbleBoard.columnCount; ++iCol) {
      delete scrabbleBoard.slots[iRow][iCol].tileId;
      delete scrabbleBoard.slots[iRow][iCol].letter;
    }
  }
}

// Returns the id of the tile that is on the slot.
scrabbleBoard.getTileIdFromSlot = function(row, col) {
  return scrabbleBoard.slots[row][col].tileId;
}

// Returns the letter of the tile that is on the slot. ex) "A"
scrabbleBoard.getLetterFromSlot = function(row, col) {
  return scrabbleBoard.slots[row][col].letter;
}

// Returns true if the slot is marked as empty. False, otherwise.
scrabbleBoard.isSlotEmpty = function(row, col) {
  return typeof(scrabbleBoard.slots[row][col].tileId) === "undefined";
}

// Updates the board slot data structure so that the slot at [row][col] contains
// the given tile id.
scrabbleBoard.addToSlot = function(tileId, letter, row, col) {
  var iRow, iCol;

  // If the tile came from another slot, clear that slot.
  for (iRow = 0; iRow < scrabbleBoard.rowCount; ++iRow) {
    for (iCol = 0; iCol < scrabbleBoard.columnCount; ++iCol) {
      if (scrabbleBoard.slots[iRow][iCol].tileId === tileId) {
        delete scrabbleBoard.slots[iRow][iCol].tileId;
        delete scrabbleBoard.slots[iRow][iCol].letter;
      }
    }
  }

  // Record that this slot has the tile now.
  scrabbleBoard.slots[row][col].letter = letter;
  scrabbleBoard.slots[row][col].tileId = tileId;
}

// Marks the slot empty.
scrabbleBoard.deleteFromSlot = function(row, col) {
  delete scrabbleBoard.slots[row][col].tileId;
  delete scrabbleBoard.slots[row][col].letter;
}

// Locate the position of the tile on the board.
// Returns [row, col] if the tile is found in the board data structure.
// Returns false if it is not.
scrabbleBoard.findSlotFromTileId = function(tileId) {
  var iRow, iCol;

  for (iRow = 0; iRow < scrabbleBoard.rowCount; ++iRow) {
    for (iCol = 0; iCol < scrabbleBoard.columnCount; ++iCol) {
      if (scrabbleBoard.slots[iRow][iCol].tileId === tileId) {
        return [iRow, iCol];
      }
    }
  }

  return false;
}

// Debug function to print the status of the board.
scrabbleBoard.printBoard = function() {
  var iRow, iCol;

  for (iRow = 0; iRow < scrabbleBoard.rowCount; ++iRow) {
    for (iCol = 0; iCol < scrabbleBoard.columnCount; ++iCol) {
      console.log("scrabbleBoard.slots[" + iRow + "][" + iCol + "] letter: " + scrabbleBoard.slots[iRow][iCol].letter + ", tileId: " + scrabbleBoard.slots[iRow][iCol].tileId);
    }
  }
}

// For convenience.
var printBoard = scrabbleBoard.printBoard;

// Removes n random letter tiles from the deck adjusting the number-remaining properties for the scrabbleTiles.
// Returns the selected letters as an array of strings. (["A", "K", "Z", ...])
// If there are not enough tiles in the deck to meet the request, then returns all remaining tiles.
// If the deck is already empty, returns an empty array.
function getFromDeck(n) {
  var hand = [];
  var allTiles = [];

  // Make an array of all remaining tiles for a random selection.
  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      var remaining = scrabbleTiles[key]["number-remaining"];
      for (var i = 0; i < remaining; ++i) {
        allTiles.push(key);
      }
    }
  }

  // Try to pick out n letter tiles. If we don't have n tiles, then hand out whatever we have.
  for (var i = 0; i < n; ++i) {
    if (allTiles.length) {
      var randomIndex = getRandomInt(0, Object.keys(allTiles).length - 1);
      var randomLetter = allTiles[randomIndex];
      hand.push(randomLetter);
      --scrabbleTiles[randomLetter]["number-remaining"];
      allTiles.splice(randomIndex, 1);  // Removes one element from the array.
      // console.log("Handing out " + randomLetter + ". Remaining: " + scrabbleTiles[randomLetter]["number-remaining"] + ". Available: " + allTiles + ".");
    }
  }

  // Update the number of remaining tiles on the page.
  $("#remainingTiles").html(allTiles.length);

  return hand;
}

// Returns the total number of tiles remaining in the deck.
function numTilesInDeck() {
  var numTotalTiles = 0;

  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      numTotalTiles += scrabbleTiles[key]["number-remaining"];
    }
  }

  return numTotalTiles;
}

// Returns the number of tiles currently on the rack.
function numTilesOnRack() {
  return $("#letterRack img").length;
}

// Toggles the appearance and functionality of the 'next-word' button. If the argument is true,
// changes the button to 'finish' button. This may happen when we run out of tiles to hand out and
// cannot proceed to the next word. Does the opposite if the argument is false.
function toggleFinishButton(toFinishButton) {
  var nextWordButton = document.getElementById("nextWordButton");
  if (toFinishButton) {
    nextWordButton.innerHTML = "Finish";
    nextWordButton.onclick = function(event) {
      finish();
    }
  } else {
    nextWordButton.innerHTML = "Next Word";
    nextWordButton.onclick = function(event) {
      nextWord();
    }
  }
}

// Resets the board and tiles. Starts the first word with a fresh score.
function restart() {
  // Clear the rack. (We're putting all tiles back to the deck.)
  $("#letterRack img").remove();

  // Remove all tiles from the board.
  scrabbleBoard.clearBoard();

  // Reset the deck data structure.
  for (var key in scrabbleTiles) {
    if (scrabbleTiles.hasOwnProperty(key)) {
      scrabbleTiles[key]["number-remaining"] = scrabbleTiles[key]["original-distribution"];
    }
  }

  // If we had consumed all tiles in the previous round, 'finish' button would be up.
  // We need 'next-word' button instead now as we're starting a fresh round.
  toggleFinishButton(false);

  scrabbleScore.restart();

  // Start the first word.
  nextWord();
}

// Adds up the score. Removes all tiles from the board and adds to the rack whatever number of
// new tiles needed.
function nextWord() {
  var i, key, tileImageId, newTile, hand;

  scrabbleScore.commit();

  // Clear the board.
  scrabbleBoard.clearBoard();

  // Draw as many tiles as needed to refill the rack with 7 tiles. Lay out the tile images.
  hand = getFromDeck(7 - numTilesOnRack());
  for (i = 0; i < hand.length; ++i) {
    key = hand[i];
    tileImageId = generateTileId();
    newTile = $("<img id=\"" + tileImageId + "\" src=\"" + scrabbleTiles[key]["image"] + "\" class=\"letterTile\" letter=\"" + key + "\" />");
    if (key == "_") {
      newTile.addClass("blankTile");
    }
    // Add tile image.
    $("#letterRack").append(newTile);

    // Apply CSS condition for the tile being on the rack. Apply CSS rule to this class to do minor position
    // adjustment to the tile image in order to make it sit naturally on the rack background image.
    newTile.addClass("letterTileOnRack");

    // Make the tile draggable.
    newTile.draggable({
      revertDuration: 200,  // msec
      start: function(event, ui) {
        // Tile should be on top of everything else when being dragged.
        $(this).css("z-index", Z_INDEX_TILE_ON_DRAG);

        // Revert option needs to be manually reset because it may be modified by droppables
        // to force reverting after dropping has occured.
        $(this).draggable("option", "revert", "invalid");
      },
      stop: function() {
        // Once finished dragging, revert the z-index.
        $(this).css("z-index", "");
      }
    });
  }

  // Clear the current word display.
  $("#word").html("");

  // Clear the check marks next to the instruction texts as nothing has been played yet.
  checkSingleWord(false);
  checkTwoLettersAndMore(false);
  checkDictionary(false);

  if (numTilesInDeck() == 0) {
    // We ran out of tiles to hand out. Disable moving on to the next word by switching 'next-word'
    // button to 'finish' button.
    toggleFinishButton(true);
    document.getElementById("nextWordButton").disabled = false;
  } else {
    // Disable 'next Word' button initially. A valid word must be created in order to
    // proceed to the next word.
    document.getElementById("nextWordButton").disabled = true;
  }
}

// Adds up the current board score to the total score and stops the play.
// The only action that can be taken after this point is restarting the play from the beginning.
function finish() {
  scrabbleScore.commit();

  // Once you finish, it doesn't make sense to finish again.
  // Disable next-word/finish button.
  document.getElementById("nextWordButton").disabled = true;

  // Also prevent all tiles from being dragged any more.
  $(".letterTile").draggable("disable");
}

// Generates a unique string to be used as a tile ID. This function generates a unique string
// as long as the page stays loaded.
function generateTileId() {
  var id;

  generateTileId.id = ++generateTileId.id || 1;
  id = "tile" + generateTileId.id.toString();

  return id;
}

// Returns a random integer between min (inclusive) and max (inclusive).
// Source: http://stackoverflow.com/questions/1527803/generating-random-numbers-in-javascript-in-a-specific-range
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Checks if a string is a valid dictionary word.
// Source: Student note on Piazza (https://piazza.com/class/icm9jynacvn5kx?cid=43)
function isDictionaryWord(possibleWord) {
  if (possibleWord.length > 0 && isDictionaryWord.dict[possibleWord]) {
    return true;
  }

  return false;
}
// The dictionary lookup object
isDictionaryWord.dict = {};
// Do an ajax request for the dictionary file.
$.ajax({
  url: "assignment9/dictionary.txt",
  success: function(result) {
    // Get an array of all the words.
    var words = result.split("\n");

    // Add them as properties to the dictionary lookup object.
    // This will allow for fast lookups later. All words are converted to capital letters
    // to make things simple since Scrabble is case insensitive.
    for (var i = 0; i < words.length; ++i) {
      isDictionaryWord.dict[words[i].toUpperCase()] = true;
    }
  }
});

// Reads the letters on the board and checks if it is a valid Scrabble word.
// Updates the page contents based on the validation result.
// This function assumes we only have one horizontal line on the board. It needs to be
// changed if we're going to upgrade to 2D board.
// Returns
// The word: for a valid word
// false   : for an invalid word
function validateWord() {
  var iCol, letter, errorCount, word = "", ROW = 0;

  // Read each letter from the board and append them to word string.
  for (iCol = 0; iCol < scrabbleBoard.columnCount; ++iCol) {
    letter = scrabbleBoard.getLetterFromSlot(ROW, iCol);
    if (typeof(letter) === "undefined") {
      // Use special character to represent an empty slot.
      word += "\xB7";  // middle dot character
    } else {
      word += letter;
    }
  }

  // Remove leading and trailing empty slot characters.
  word = word.replace(/^\xB7+/, "");
  word = word.replace(/\xB7+$/, "");

  $("#word").html(word);

  // Now let's check for any errors in the word. Update the page contents as we check each condition.
  errorCount = 0;

  // Check if we have anything on the board.
  if (word == "") {
    checkSingleWord(false);
    ++errorCount;
  } else {
    // Check if there is a gap within letters. Gap is not allowed.
    var rgxDisconnectedWord = new RegExp("[A-Z_]\xB7+[A-Z_]");
    if (rgxDisconnectedWord.test(word)) {
      checkSingleWord(false);
      ++errorCount;
    } else {
      checkSingleWord(true);
    }
  }

  // Check if the word has at least 2 letters. Words with one letter may show up in an English dictinonary
  // but are not allowed in Scrabble.
  if (word.length >= 2) {
    checkTwoLettersAndMore(true);
  } else {
    checkTwoLettersAndMore(false);
    ++errorCount;
  }

  // Check if the word shows up in our dictionary.
  if (isDictionaryWord(word)) {
    checkDictionary(true);
  } else {
    checkDictionary(false);
    ++errorCount;
  }

  if (errorCount) {
    document.getElementById("nextWordButton").disabled = true;
    $("#word").css("color", TEXT_COLOR_INVALID);
    return false;
  }

  $("#word").css("color", TEXT_COLOR_ACTIVE);
  document.getElementById("nextWordButton").disabled = false;
  return word;
}

// Make a jQuery object grayscale and semi-transparent making it look like it's 'deactivated'.
// CSS source: http://blog.nmsdvid.com/css-filter-property/
function grayscaleAndFade(jQueryObject, yes) {
  if (yes) {
    jQueryObject.css({
      "-webkit-filter": "grayscale(100%)",
      "-moz-filter": "grayscale(100%)",
      "-o-filter": "grayscale(100%)",
      "-ms-filter": "grayscale(100%)",
      "filter": "grayscale(100%)",
      "opacity": 0.2
    });
  } else {
    jQueryObject.css({
      "-webkit-filter": "",
      "-moz-filter": "",
      "-o-filter": "",
      "-ms-filter": "",
      "filter": "",
      "opacity": 1.0
    });
  }
}

// Following three functions toggle the check (v) icon next to each instruction message on or off.
function checkTwoLettersAndMore(check) {
  if (check) {
    grayscaleAndFade($("#minLengthIcon"), false);
  } else {
    grayscaleAndFade($("#minLengthIcon"), true);
  }
}

function checkSingleWord(check) {
  if (check) {
    grayscaleAndFade($("#oneWordCheckIcon"), false);
  } else {
    grayscaleAndFade($("#oneWordCheckIcon"), true);
  }
}

function checkDictionary(check) {
  if (check) {
    grayscaleAndFade($("#dictionaryCheckIcon"), false);
  } else {
    grayscaleAndFade($("#dictionaryCheckIcon"), true);
  }
}

// Opens up a dialog box asking to pick a letter for the blank tile played. When the user picks the letter,
// replaces the "letter" attribute of the blank tile draggable with the selected letter and then
// does everything else that needs to be done when a tile draggable is dropped on the board.
// Argument:
// blankTileDroppable: jQuery draggable blank tile object that was just dropped
// tileId: DOM ID of the above droppable element
// row, col: position on the board where the tile is dropped
function openBlankTileDialog(blankTileDraggable, tileId, row, col) {
  var tileSelectorDialog = $("<div id='blankTileDialog'></div>");
  var letterKey, newTile;
  for (letterKey in scrabbleTiles) {
    if (letterKey != "_") {
      // Add each tile image into the dialog so the user can click it to select the letter.
      newTile = $("<img src='" + scrabbleTiles[letterKey]["image"] + "' class='letterTileInDialog' letter='" + letterKey + "'>");

      // Register click event to the image. This callback must make sure everything gets processed
      // with the selected letter as if it was played normally.
      newTile.click(function() {
        var newLetter = $(this).attr("letter");

        // Replace the letter attribute and the image source of the draggable tile img.
        blankTileDraggable.attr("letter", newLetter);
        blankTileDraggable.attr("src", scrabbleTiles[newLetter]["image"]);

        // Update the board data structure.
        tileId = blankTileDraggable.attr("id");
        scrabbleBoard.addToSlot(tileId, newLetter, row, col);

        // Validate and display the word we have so far.
        validateWord();

        // Update the score with the selected letter.
        scrabbleScore.refresh();

        tileSelectorDialog.dialog("close");
      });
      tileSelectorDialog.append(newTile);
    }
  }
  tileSelectorDialog.css("z-index", Z_INDEX_DIALOG);
  tileSelectorDialog.dialog({
    modal: true,
    draggable: false,
    resizable: false
  });
}


$(window).load(function() {
  var row, col;

  scrabbleBoard.createBoardHtml();

  // Make the board slots droppable.
  $(".boardSlot").droppable({
    // This function determines whether the slot gets highlighted as an acceptable dropping zone
    // when a tile is being dragged.
    accept: function(draggable) {
      var row, col;

      row = $(this).attr("row");
      col = $(this).attr("col");

      if (scrabbleBoard.getTileIdFromSlot(row, col) === draggable.attr("id")) {
        // The tile should be allowed to drop back in to the slot it was lifted out of.
        return true;
      } else if (scrabbleBoard.isSlotEmpty(row, col)) {
        // The slot is empty.
        return true;
      } else {
        // The slot is already occupied.
        return false;
      }
    },
    activeClass: "dragHighlight",
    hoverClass: "hoverHighlight",
    drop: function(event, ui) {
      var row, col, letter, word, tileId, previousPositionOnBoard;

      ui.draggable.removeClass("letterTileOnRack");
      ui.draggable.addClass("letterTileOnBoard");

      row = $(this).attr("row");
      col = $(this).attr("col");

      letter = ui.draggable.attr("letter");
      tileId = ui.draggable.attr("id");

      // Make the dropped tile snap to the board image.
      // TODO: I think there is a built-in jQuery UI way of doing this.
      $(ui.draggable).css("top", "");
      $(ui.draggable).css("left", "");
      $(this).append(ui.draggable);

      console.log("Dropped " + letter + " (" + tileId + ") on (" + row + ", " + col + ").");

      // When a blank tile is first placed on the board, open up a dialog and let the user
      // pick a letter for the blank tile. Otherwise move on.
      previousPositionOnBoard = scrabbleBoard.findSlotFromTileId(tileId);
      if ($(ui.draggable).hasClass("blankTile") && !previousPositionOnBoard) {
        // var newLetter = openBlankTileDialog();  // NOT POSSIBLE
        // We cannot have this function return the new letter selected from the dialog because
        // there is no way to make a blocking dialog. Everything that needs to happen
        // after the user picks the letter for the blank tile must happen in some kind of
        // callback function supplied to the dialog.
        openBlankTileDialog($(ui.draggable), tileId, row, col);
      } else {
        scrabbleBoard.addToSlot(tileId, letter, row, col);
        // Validate and display the word we have so far.
        validateWord();

        // Calculate the score and update the page.
        scrabbleScore.refresh();
      }
    }
  });

  // Make the rack droppable so the tiles can be moved from the board to the rack.
  $("#letterRack").droppable({
    activeClass: "dragHighlight",
    hoverClass: "hoverHighlight",
    tolerance: "touch",
    drop: function(event, ui) {
      var tileId, word, pos;

      ui.draggable.removeClass("letterTileOnBoard");
      ui.draggable.addClass("letterTileOnRack");

      // When a blank tile comes back on to the rack, change its image back to the
      // blank tile image.
      if ($(ui.draggable).hasClass("blankTile")) {
        $(ui.draggable).attr("src", scrabbleTiles["_"]["image"]);
      }

      tileId = ui.draggable.attr("id");
      pos = scrabbleBoard.findSlotFromTileId(tileId);
      if (pos) {
        // The tile came from the board. Mark it off the board data structure.
        scrabbleBoard.deleteFromSlot(pos[0], pos[1]);  // pos[0]: row, pos[1]: column

        // Snap the tile image to the back of the rack.
        $("#letterRack").append(ui.draggable);
        ui.draggable.css({"position": "relative", "top": "", "left": ""});

        // Validate and display the word we have so far.
        word = validateWord();

        // Calculate the score and update the page.
        scrabbleScore.refresh();
      } else {
        // User grabbed the tile and put it right back on the rack. Use the revert function
        // to put the tile in the same spot it came out of.
        ui.draggable.draggable("option", "revert", true);
      }
    }
  });

  // Set the board and tiles. Start the first word.
  restart();
});
