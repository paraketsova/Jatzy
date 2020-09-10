document.addEventListener('DOMContentLoaded', function(event) {
    let button = document.getElementById('throw_of_dice');
    button.addEventListener('click', handleDiceButton);
});

let handleDiceButton = function() {
    let dice = throwTheDice();
    // fillNumberCells(dice);
    // fillSumsAndBonus(dice);
    fillSpecialCombinations(dice);
    // fillTotal();
};

let throwTheDice = function(event) {
    let diceResult = [];
    for (let i=1; i<=5; i++) {
        let position = getRndInteger(1, 6);
        diceResult.push(position);
    }
    console.log(diceResult);
    return countDice(diceResult);
};

let getRndInteger = function(min, max) {
    return Math.floor (Math.random() * (max - min + 1) ) + min;
};

let countDice = function(dice) {
    let values = [];
    
    for (let i = 0; i <= 5; i++) {
        values[i] = 0;
    }
    for (let current_dice of dice) {
          values[current_dice-1]++;
    }

    console.log(values);

    return values;
};

// TODO: rewtrite this as fillNumberCells()
/*
let calculateSums = function(event) {
    for (let i=1; i<=4; i++) {
        let sum = 0;
        for (let j=1; j<=6; j++) {
            let id = 'player' + i + '_' + j;
            let v = parseInt(document.getElementById(id).value) || 0;
            sum += v;
        }
        document.getElementById('player' + i + '_sum').value = sum;
        if (sum>=63) {
            document.getElementById('player' + i + '_bonus').value = 50;
        } else {
            document.getElementById('player' + i + '_bonus').value = 0;
        }
    };
};
 */

let fillSpecialCombinations = function(dice) {
    if (checkFullHouse(dice)) {
        document.getElementById('player1_fullhouse').value = 1;
    }
    else {
        document.getElementById('player1_fullhouse').value = 0;
    }
};

let checkFullHouse = function(dice) {
    // TODO: algorithm for the check
    let values = [];
    let pair = false;
    let threeOfKind = false;
    for (let i = 0; i < dice.length; i++) {
       if (dice[i] === 2) {
           pair = true;
       }
       else if (dice[i] === 3) {
           threeOfKind = true;
       }
    };
    if (pair && threeOfKind) {
        return true;
    }
};