let o = "O";
let x = "X";
let M = [];
let say = 1;
let player1 = "";
let player2 = "";
let point1 = 0;
let point2 = 0;

onload = function() {
    Start();
    Massiv();
    Table();
}

function Start() {
    player1 = player1 == "" ? prompt("X", "player1") : player1;
    player2 = player2 == "" ? prompt("O", "player2") : player2;
    Massiv();
    Table();
    Scoreboard();


}

function Scoreboard() {
    document.getElementsByTagName("div")[0].innerHTML = `${player1} : ${point1} - ${player2} : ${point2}`;
}

function Qalib(W) {
    return W == x ? `${player1} Win!` : `${player2} Win!`;
}

function Score(W) {
    if (W == x) {
        point1++;
        return;
    } else {
        point2++;
        return;
    }
}

function Massiv() {
    for (let i = 0; i < 3; i++) {
        M[i] = [];
    }
}

function Table() {
    let tbl = "";

    for (let i = 0; i < 3; i++) {
        tbl += `<tr>`;
        for (let j = 0; j < 3; j++) {
            M[i][j] = M[i][j] == undefined ? "" : M[i][j];
            tbl += `<td onclick="Click(${i},${j})">${M[i][j]}</td>`;
        }
        tbl += `</tr>`;
    }
    document.getElementsByTagName("table")[0].innerHTML = tbl;
}

function Click(i, j) {
    if (M[i][j] == "") {
        if (say % 2 == 0) {
            M[i][j] = o;
        } else {
            M[i][j] = x;
        }
        say++;
        setTimeout(Check, 500);
        Table();
    }
}

function Check() {
    if (M[0][0] == M[1][1] && M[1][1] == M[2][2] && M[0][0] != "") {
        alert(Qalib(M[0][0]));
        Score(M[0][0]);
        Scoreboard();
        Start();
    }
    if (M[0][2] == M[1][1] && M[1][1] == M[2][0] && M[0][2] != "") {
        alert(Qalib(M[0][2]));
        Score(M[0][2]);
        Scoreboard();
        Start();
    }
    for (let i = 0; i < 3; i++) {
        if (M[i][0] == M[i][1] && M[i][1] == M[i][2] && M[i][0] != "") {
            alert(Qalib(M[i][0]));
            Score(M[i][0]);
            Scoreboard();
            Start();
        }
    }
    for (let i = 0; i < 3; i++) {
        if (M[0][i] == M[1][i] && M[1][i] == M[2][i] && M[0][i] != "") {
            alert(Qalib(M[0][i]));
            Score(M[0][i]);
            Scoreboard();
            Start();
        }
    }
}


function PlayAgain() {
    point1;
    point2;
    Start();
    return;

}