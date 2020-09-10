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

document.addEventListener('DOMContentLoaded', function(event) {
    let button = document.getElementById('calc');
    button.addEventListener('click', calculateSums);
});

/*   
function countDice(dice) {
  let values = [];
  
  for (let i = 0; i <= 6; i++) {
  	values[i] = 0;
  }
    // [0, 0, 0, 0, 0, 0, 0]
  // [0, 0, 0, 1, 0, 0, 0]
  // [0, 0, 0, 1, 1, 0, 0]
  // [0, 0, 0, 1, 1, 1, 0]
  // [0, 0, 0, 1, 1, 2, 0]
  // [0, 0, 0, 1, 1, 2, 1]
  for (let current_dice of dice) {
		values[current_dice]++;
  }
  
  console.log(values);
}

countDice([3, 4, 5, 5, 6]);
*/
