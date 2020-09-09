let calculateSums = function(event) {
    let v11 = parseInt(document.getElementById('player1_1').value) || 0;
    let v12 = parseInt(document.getElementById('player1_2').value) || 0;
    let v13 = parseInt(document.getElementById('player1_3').value) || 0;
    let v14 = parseInt(document.getElementById('player1_4').value) || 0;
    let v15 = parseInt(document.getElementById('player1_5').value) || 0;
    let v16 = parseInt(document.getElementById('player1_6').value) || 0;

    document.getElementById('player1_sum').value = v11 + v12 + v13 + v14 + v15 + v16;

    let v21 = parseInt(document.getElementById('player2_1').value) || 0;
    let v22 = parseInt(document.getElementById('player2_2').value) || 0;
    let v23 = parseInt(document.getElementById('player2_3').value) || 0;
    let v24 = parseInt(document.getElementById('player2_4').value) || 0;
    let v25 = parseInt(document.getElementById('player2_5').value) || 0;
    let v26 = parseInt(document.getElementById('player2_6').value) || 0;

    document.getElementById('player2_sum').value = v21 + v22 + v23 + v24 + v25 + v26;

    let v31 = parseInt(document.getElementById('player3_1').value) || 0;
    let v32 = parseInt(document.getElementById('player3_2').value) || 0;
    let v33 = parseInt(document.getElementById('player3_3').value) || 0;
    let v34 = parseInt(document.getElementById('player3_4').value) || 0;
    let v35 = parseInt(document.getElementById('player3_5').value) || 0;
    let v36 = parseInt(document.getElementById('player3_6').value) || 0;

    document.getElementById('player3_sum').value = v31 + v32 + v33 + v34 + v35 + v36;

    let v41 = parseInt(document.getElementById('player4_1').value) || 0;
    let v42 = parseInt(document.getElementById('player4_2').value) || 0;
    let v43 = parseInt(document.getElementById('player4_3').value) || 0;
    let v44 = parseInt(document.getElementById('player4_4').value) || 0;
    let v45 = parseInt(document.getElementById('player4_5').value) || 0;
    let v46 = parseInt(document.getElementById('player4_6').value) || 0;

    document.getElementById('player4_sum').value = v41 + v42 + v43 + v44 + v45 + v46;
};

document.addEventListener('DOMContentLoaded', function(event) {
    let button = document.getElementById('calc');
    button.addEventListener('click', calculateSums);
});
