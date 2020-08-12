/**
 * @description: AuthorName contact:xxxx
 * @param {type} 
 * @return {type} 
 */
jQuery.support.cors = true;
const tileNumList = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    '_'
]
var scrabbleTiles = [];
scrabbleTiles["A"] = {
    "value": 1,
    "totalCount": 9,
    "currCount": 9,
    "image": "public/images/Scrabble_Tile_A.jpg"
};
scrabbleTiles["B"] = {
    "value": 3,
    "totalCount": 2,
    "currCount": 2,
    "image": "public/images/Scrabble_Tile_B.jpg"
};
scrabbleTiles["C"] = {
    "value": 3,
    "totalCount": 2,
    "currCount": 2,
    "image": "public/images/Scrabble_Tile_C.jpg"
};
scrabbleTiles["D"] = {
    "value": 2,
    "totalCount": 4,
    "currCount": 4,
    "image": "public/images/Scrabble_Tile_D.jpg"
};
scrabbleTiles["E"] = {
    "value": 1,
    "totalCount": 12,
    "currCount": 12,
    "image": "public/images/Scrabble_Tile_E.jpg"
};
scrabbleTiles["F"] = {
    "value": 4,
    "totalCount": 2,
    "currCount": 2,
    "image": "public/images/Scrabble_Tile_F.jpg"
};
scrabbleTiles["G"] = {
    "value": 2,
    "totalCount": 3,
    "currCount": 3,
    "image": "public/images/Scrabble_Tile_G.jpg"
};
scrabbleTiles["H"] = {
    "value": 4,
    "totalCount": 2,
    "currCount": 2,
    "image": "public/images/Scrabble_Tile_H.jpg"
};
scrabbleTiles["I"] = {
    "value": 1,
    "totalCount": 9,
    "currCount": 9,
    "image": "public/images/Scrabble_Tile_I.jpg"
};
scrabbleTiles["J"] = {
    "value": 8,
    "totalCount": 1,
    "currCount": 1,
    "image": "public/images/Scrabble_Tile_J.jpg"
};
scrabbleTiles["K"] = {
    "value": 5,
    "totalCount": 1,
    "currCount": 1,
    "image": "public/images/Scrabble_Tile_K.jpg"
};
scrabbleTiles["L"] = {
    "value": 1,
    "totalCount": 4,
    "currCount": 4,
    "image": "public/images/Scrabble_Tile_L.jpg"
};
scrabbleTiles["M"] = {
    "value": 3,
    "totalCount": 2,
    "currCount": 2,
    "image": "public/images/Scrabble_Tile_M.jpg"
};
scrabbleTiles["N"] = {
    "value": 1,
    "totalCount": 6,
    "currCount": 6,
    "image": "public/images/Scrabble_Tile_N.jpg"
};
scrabbleTiles["O"] = {
    "value": 1,
    "totalCount": 8,
    "currCount": 8,
    "image": "public/images/Scrabble_Tile_O.jpg"
};
scrabbleTiles["P"] = {
    "value": 3,
    "totalCount": 2,
    "currCount": 2,
    "image": "public/images/Scrabble_Tile_P.jpg"
};
scrabbleTiles["Q"] = {
    "value": 10,
    "totalCount": 1,
    "currCount": 1,
    "image": "public/images/Scrabble_Tile_Q.jpg"
};
scrabbleTiles["R"] = {
    "value": 1,
    "totalCount": 6,
    "currCount": 6,
    "image": "public/images/Scrabble_Tile_R.jpg"
};
scrabbleTiles["S"] = {
    "value": 1,
    "totalCount": 4,
    "currCount": 4,
    "image": "public/images/Scrabble_Tile_S.jpg"
};
scrabbleTiles["T"] = {
    "value": 1,
    "totalCount": 6,
    "currCount": 6,
    "image": "public/images/Scrabble_Tile_T.jpg"
};
scrabbleTiles["U"] = {
    "value": 1,
    "totalCount": 4,
    "currCount": 4,
    "image": "public/images/Scrabble_Tile_U.jpg"
};
scrabbleTiles["V"] = {
    "value": 4,
    "totalCount": 2,
    "currCount": 2,
    "image": "public/images/Scrabble_Tile_V.jpg"
};
scrabbleTiles["W"] = {
    "value": 4,
    "totalCount": 2,
    "currCount": 2,
    "image": "public/images/Scrabble_Tile_W.jpg"
};
scrabbleTiles["X"] = {
    "value": 8,
    "totalCount": 1,
    "currCount": 1,
    "image": "public/images/Scrabble_Tile_X.jpg"
};
scrabbleTiles["Y"] = {
    "value": 4,
    "totalCount": 2,
    "currCount": 2,
    "image": "public/images/Scrabble_Tile_Y.jpg"
};
scrabbleTiles["Z"] = {
    "value": 10,
    "totalCount": 1,
    "currCount": 1,
    "image": "public/images/Scrabble_Tile_Z.jpg"
};
scrabbleTiles["_"] = {
    "value": 0,
    "totalCount": 2,
    "currCount": 2,
    "image": "public/images/Scrabble_Tile_Blank.jpg"
};
let Board = ['', '', '', '', '', '', '']
let prevBoard = ['', '', '', '', '', '', '']
let positionArr = []
let score = 0
let highestScore = 0
let dict = []

$(window).load(function() {
    initTileBoard();
    $.ajax({
        url: "http://yongcho.github.io/GUI-Programming-1/assignment9/dictionary.txt",
        success: function(result) {
            // Get an array of all the words.
            var words = result.split("\n");
            // Add them as properties to the dictionary lookup object.
            // This will allow for fast lookups later. All words are converted to capital letters
            // to make things simple since Scrabble is case insensitive.
            for (var i = 0; i < words.length; ++i) {
                dict.push([words[i].toUpperCase()]);
            }
            console.log('dict', dict)
        }
    });
    $(".square").droppable({
        accept: ".dragItem",
        activeClass: "dragHighlight",
        hoverClass: "hoverHighlight",
        drop: function(event, ui) {

            let str = event.target.id
            let index = str[str.length - 1] - 1
            if (isBoardValidate(index)) {
                $(event.toElement).css('display', 'none')
                let letter = ui.draggable.attr("letter")
                let newTile = $(`<img src=${scrabbleTiles[letter]["image"]} class="dragItem" letter=${letter} />`);
                $(this).append(newTile)
                Board[index] = letter
                    // console.log(Board)
                culculateScore(Board)
            } else {
                // console.log(positionArr)
                // console.log(ui.draggable)
                // ui.draggable.mouseup(function() {
                // var top = ui.draggable.position('orgTop');
                // var left = ui.draggable.position('orgLeft');
                // ui.offset = {
                //     top: ui.draggable.position('orgTop'),
                //     left: ui.draggable.position('orgLeft')
                // };
                // });            
                console.log(positionArr)
                console.log(event, ui)
                ui.offset = positionArr[index]
                ui.position = positionArr[index]
            }
        }
    });
});

function isBoardValidate(index) {
    // 1. null
    if (!Board.join().replace(/,/g, "")) {
        return true
    }
    if (index == 0 && index[1] !== '') {
        return true
    }
    if (Board[index - 1] || Board[index + 1]) {
        return true
    }
    return false
}


/**
 * @description: culculateScore
 * @param {type} 
 * @return {type} 
 */
function culculateScore(Board) {
    let word = Board.join().replace(/,/g, "")

    $('#word').html(`<span>${word}</span>`)
    if (word.length >= 2) {
        $('#oneWordCheckIcon').removeClass('instructionIcon')
        $('#minLengthIcon').removeClass('instructionIcon')
    } else {
        $('#oneWordCheckIcon').addClass('instructionIcon')
        $('#minLengthIcon').addClass('instructionIcon')
    }
    for (let i = 0; i < Board.length; i++) {
        if (Board[i] != prevBoard[i]) {
            if (i == 1 || i == 5) {
                score += (scrabbleTiles[Board[i]].value) * 2
            } else {
                score += scrabbleTiles[Board[i]].value
            }
        }
    }
    prevBoard = JSON.parse(JSON.stringify(Board))
        // console.log('score', score)
    $('#score').html(`<span>${score}</span>`)
}

/**
 * @description: init tileRack Board => append img to #tileRack
 *               recycle current hand and reInitTileRacks
 * @param {type} 
 * @return {type} 
 */
function initTileBoard() {
    while ($('.tileRack img').length < 7 || calculateRemain() < 7) {
        let index = Random(0, 26)
        let currentLetter = tileNumList[index]
            // console.log('currentLetter', currentLetter, index) //TODO 如果牌很少了的逻辑 
        if (scrabbleTiles[currentLetter].currCount > 0) {
            let newTile = $(`<img id=${$('.tileRack').length-1} src=${scrabbleTiles[currentLetter]["image"]} class="dragItem" letter=${currentLetter} />`);
            $('.tileRack').append(newTile)
            newTile.draggable({
                revertDuration: 200, // msec
                start: function(event, ui) {
                    // Tile should be on top of everything else when being dragged.
                    $(this).css("z-index", 100);
                    // Revert option needs to be manually reset because it may be modified by droppables
                    // to force reverting after dropping has occured.
                    $(this).draggable("option", "revert", "invalid");
                    // $('.square').addClass('dragHighlight')
                },
                // stop: function(event, ui) {
                //     // Once finished dragging, revert the z-index.
                //     console.log('stop dtagger')
                //     let str = event.target.id
                //     let index = str[str.length - 1] - 1
                //     isBoardValidate(index)
                //     $(this).css("z-index", "1");
                //     // $('.square').removeClass('dragHighlight')
                // }
            }).each(function() {
                var top = $(this).position().top;
                var left = $(this).position().left;
                $(this).data('orgTop', top);
                $(this).data('orgLeft', left);
                positionArr.push({
                        "orgTop": top,
                        "orgLeft": left
                    })
                    // console.log('$(this).data', top, left)
            });
            scrabbleTiles[currentLetter].currCount--
        }
        let remainSum = calculateRemain()
        $('#remain').html(`<span>${remainSum}</span>`)
    }
}

function calculateRemain() {
    let sum = 0
    Object.values(scrabbleTiles).map(item => {
        sum += item.currCount
    })
    return sum
}

/**
 * @description: 
 * @param {type} 
 * @return {type} 
 */
function generateTileId() {
    var id;
    generateTileId.id = ++generateTileId.id || 1;
    id = "tile" + generateTileId.id.toString();
    return id;
}

/**
 * @description: recycleHand tiles and add them into scrabbleTiles
 * @param {type} 
 * @return {type} 
 */
function recycleHand() {
    return document.querySelectorAll(".tileRack>img").length;
}


/**
 * @description: game next
 * @param {type} 
 * @return {type} 
 */
function nextWord() {

}

/**
 * @description: game reset
 * @param {type} 
 * @return {type} 
 */
function reset() {

}

/**
 * @description: generate int number 
 * @param {type} 
 * @return {type} 
 */
function Random(min, max) {
    return Math.round(Math.random() * (max - min)) + min;
}
return Math.round(Math.random() * (max - min)) + min;
}