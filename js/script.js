let current_number = null;
const sudokus = [[[0, 0, 0, 2, 6, 0, 7, 0, 1], [6, 8, 0, 0, 7, 0, 0, 9, 0], [1, 9, 0, 0, 0, 4, 5, 0, 0],
[8, 2, 0, 1, 0, 0, 0, 4, 0], [0, 0, 4, 6, 0, 2, 9, 0, 0], [0, 5, 0, 0, 0, 3, 0, 2, 8],
[0, 0, 9, 3, 0, 0, 0, 7, 4], [0, 4, 0, 0, 5, 0, 0, 3, 6], [7, 0, 3, 0, 1, 8, 0, 0, 0]]
    ,
[[1, 0, 0, 4, 8, 9, 0, 0, 6], [7, 3, 0, 0, 0, 0, 0, 4, 0], [0, 0, 0, 0, 0, 1, 2, 9, 5],
[0, 0, 7, 1, 2, 0, 6, 0, 0], [5, 0, 0, 7, 0, 3, 0, 0, 8], [0, 0, 6, 0, 9, 5, 7, 0, 0],
[9, 1, 4, 6, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0, 0, 3, 7], [8, 0, 0, 5, 1, 2, 0, 0, 4]]
    ,
[[0, 2, 0, 6, 0, 8, 0, 0, 0], [5, 8, 0, 0, 0, 9, 7, 0, 0], [0, 0, 0, 0, 4, 0, 0, 0, 0],
[3, 7, 0, 0, 0, 0, 5, 0, 0], [6, 0, 0, 0, 0, 0, 0, 0, 4], [0, 0, 8, 0, 0, 0, 0, 1, 3],
[0, 0, 0, 0, 2, 0, 0, 0, 0], [0, 0, 9, 8, 0, 0, 0, 3, 6], [0, 0, 0, 3, 0, 6, 0, 9, 0]]
    ,
[[0, 0, 0, 6, 0, 0, 4, 0, 0], [7, 0, 0, 0, 0, 3, 6, 0, 0], [0, 0, 0, 0, 9, 1, 0, 8, 0],
[0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 5, 0, 1, 8, 0, 0, 0, 3], [0, 0, 0, 3, 0, 6, 0, 4, 5],
[0, 4, 0, 2, 0, 0, 0, 6, 0], [9, 0, 3, 0, 0, 0, 0, 0, 0], [0, 2, 0, 0, 0, 0, 1, 0, 0]]
    ,
[[2, 0, 0, 3, 0, 0, 0, 0, 0], [8, 0, 4, 0, 6, 2, 0, 0, 3], [0, 1, 3, 8, 0, 0, 2, 0, 0],
[0, 0, 0, 0, 2, 0, 3, 9, 0], [5, 0, 7, 0, 0, 0, 6, 2, 1], [0, 3, 2, 0, 0, 6, 0, 0, 0],
[0, 2, 0, 0, 0, 9, 1, 4, 0], [6, 0, 1, 2, 5, 0, 8, 0, 9], [0, 0, 0, 0, 0, 1, 0, 0, 2]]
    ,
[[0, 2, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 6, 0, 0, 0, 0, 3], [0, 7, 4, 0, 8, 0, 0, 0, 0],
[0, 0, 0, 0, 0, 3, 0, 0, 2], [0, 8, 0, 0, 4, 0, 0, 1, 0], [6, 0, 0, 5, 0, 0, 0, 0, 0],
[0, 0, 0, 0, 1, 0, 7, 8, 0], [5, 0, 0, 0, 0, 9, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 4, 0]]
    ,
[[1, 2, 3, 0, 5, 6, 0, 8, 9], [4, 5, 7, 1, 8, 9, 2, 3, 0], [6, 0, 9, 2, 3, 7, 1, 4, 5],
[8, 1, 0, 3, 0, 2, 9, 7, 0], [2, 0, 4, 8, 0, 1, 6, 5, 0], [3, 0, 6, 5, 7, 4, 8, 1, 0],
[5, 0, 0, 6, 1, 8, 0, 9, 0], [7, 6, 1, 9, 4, 0, 5, 2, 0], [0, 3, 8, 7, 0, 0, 0, 6, 1]]
    ,
[[1, 2, 3, 4, 0, 0, 0, 0, 9], [4, 5, 7, 1, 8, 9, 2, 3, 6], [6, 0, 9, 2, 3, 7, 1, 4, 5],
[0, 0, 0, 3, 0, 2, 9, 0, 0], [2, 7, 4, 8, 0, 1, 6, 5, 3], [3, 9, 6, 5, 7, 4, 0, 1, 0],
[5, 4, 0, 6, 1, 8, 0, 9, 7], [7, 6, 1, 9, 4, 0, 5, 2, 8], [9, 0, 0, 7, 2, 5, 0, 6, 1]]

];


let cur_sudoku_number = 0;
let sudoku = sudokus[cur_sudoku_number];
console.log(sudokus);
let SolSudoku = null;

function FillSolSudoku() {
    SolSudoku = [[], [], [], [], [], [], [], [], []];
    for (i = 0; i < 9; i++) {
        for (j = 0; j < 9; j++)
            SolSudoku[i].push(sudoku[i][j]);
    }
    p = SolveSudoku(0, 0, 9);
}


function isSafe(row, col, num) {

    for (let x = 0; x <= 8; x++)
        if (SolSudoku[row][x] == num)
            return false;
    for (let x = 0; x <= 8; x++)
        if (SolSudoku[x][col] == num)
            return false;


    let startRow = row - row % 3,
        startCol = col - col % 3;

    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (SolSudoku[i + startRow][j + startCol] == num)
                return false;

    return true;
}
function SolveSudoku(row, col, N) {
    if (row == N - 1 && col == N)
        return true;
    if (col == N) {
        row++;
        col = 0;
    }
    if (SolSudoku[row][col] != 0)
        return SolveSudoku(row, col + 1, N);

    for (let num = 1; num < 10; num++) {

        if (isSafe(row, col, num)) {

            SolSudoku[row][col] = num;

            if (SolveSudoku(row, col + 1, N))
                return true;
        }

        SolSudoku[row][col] = 0;
    }
    return false;
}

window.onload = function () {
    FillNumbers();
    FillTable();
    FillSolSudoku();
}
function number_tile_clicked() {
    let ele = this;
    if (current_number != null) {
        let previd = current_number;
        prevtile = document.getElementById(previd);
        prevtile.style.background = "beige";
    }

    ele.style.background = "pink";
    current_number = parseInt(this.innerHTML);

}

function FillNumbers() {
    for (let i = 1; i <= 9; i++) {
        let ele = document.getElementsByClassName('number-tile')[i - 1];
        ele.id = i;
        ele.innerHTML = i;
        ele.addEventListener('click', number_tile_clicked);
    }
}

function sudoku_tile_hovered() {
    let ele = this;
    // if(current_number != null){
    //ele.style.cursor = "pointer";
    ele.style.background = "pink";
    // }
}

function sudoku_tile_clicked() {

    let ele = this;
    console.log(ele.style.color);
    if (current_number != null && ele.style.color != 'red') {

        ele.innerHTML = current_number;
        let num = document.getElementById(current_number)
        num.style.background = 'beige';
        current_number = null;
    }
}
function sudoku_tile_unhovered() {
    let ele = this;
    const myArray = ele.id.split("-");
    i = parseInt(myArray[0]);
    j = parseInt(myArray[1]);
    if (ele.style.background == "pink") {

        if (i < 3 && j < 3) {
            console.log(1);
            ele.style.background = "#DAD7D6";
        }
        else if (i > 5 && j < 3) {
            console.log(2);
            ele.style.background = "#DAD7D6";
        }
        else if (i < 3 && j > 5) {
            console.log(3);
            ele.style.background = "#DAD7D6";
        }
        else if (i > 5 && j > 5) {
            console.log(4);
            ele.style.background = "#DAD7D6";
        }
        else if (i > 2 && i < 6 && j > 2 && j < 6) {
            console.log(5);
            ele.style.background = "#DAD7D6";
        }
        else {
            console.log(6);
            ele.style.background = "white";
        }
    }


}
function FillTable() {
    for (let i = 0; i < 9; i++) {
        let div = document.getElementById('r' + (i + 1));
        for (let j = 0; j < 9; j++) {
            let ele = div.children[j];
            ele.id = `${i}-${j}`;
            ele.addEventListener('mouseover', sudoku_tile_hovered);
            ele.addEventListener('click', sudoku_tile_clicked);
            ele.addEventListener('mouseleave', sudoku_tile_unhovered);
            if (sudoku[i][j] != 0) {
                ele.innerHTML = sudoku[i][j];
                ele.style.color = "red";
            }


            if (i == 0 || i == 3 || i == 6)
                ele.classList.add('add_border_top');
            if (j == 0 || j == 3 || j == 6)
                ele.classList.add('add_border_left');
            if (j == 8)
                ele.classList.add('add_border_right');
            if (i == 8)
                ele.classList.add('add_border_bottom');

            // Changing tile color
            if (i < 3 && j < 3)
                ele.classList.add("tile-color");
            if (i > 5 && j < 3)
                ele.classList.add("tile-color");
            if (i < 3 && j > 5)
                ele.classList.add("tile-color");
            if (i > 5 && j > 5)
                ele.classList.add("tile-color");
            if (i > 2 && i < 6 && j > 2 && j < 6)
                ele.classList.add("tile-color");

        }

    }

}

/* some styling for buttons*/
for (i = 0; i < 5; i++) {
    let arr = document.getElementsByClassName('btn')[i];


    arr.addEventListener('mouseover', function () {

        arr.style.background = '#212529';
        arr.style.color = 'white';


    })

    arr.addEventListener('mouseleave', function () {
        arr.style.background = '#212529';
        arr.style.color = 'white';

    })

    if (i == 0) {
        arr.addEventListener('click', function () {
            ValidateSudoku();
        })
    }

    if (i == 1) {
        arr.addEventListener('click', function () {
            GenerateSudoku();
        })
    }

    if (i == 2) {
        arr.addEventListener('click', function () {
            CompleteSudoku();
        })
    }
    if (i == 3) {
        arr.addEventListener('click', function () {
            ResetSudoku();
        })
    }
    if (i == 4) {
        arr.addEventListener('click', function () {
            RuleSudoku();
        })
    }
}


function ValidateSudoku() {
    for (let i = 0; i < 9; i++) {
        let div = document.getElementById('r' + (i + 1));
        for (let j = 0; j < 9; j++) {
            let ele = div.children[j];
            if (parseInt(ele.innerHTML) != SolSudoku[i][j]) {
                swal({
                    title: "The sudoku is not correct",
                    text: "Try a New Sudoku??",
                    icon: "warning",
                    buttons: ["No", "Yes"],
                    dangerMode: true,
                })
                    .then((willDelete) => {
                        if (willDelete) {
                            GenerateSudoku();
                        }

                    });

                return;
            }

        }

    }
    swal("CONGRATULATIONS,YOU HAVE SUCCESSFULLY SOLVED THE SUDOKU!!");
}

function GenerateSudoku() {
    new_sudoku_number = cur_sudoku_number;
    while (cur_sudoku_number == new_sudoku_number)
        cur_sudoku_number = Math.floor(Math.random() * 8);

    sudoku = sudokus[cur_sudoku_number];
    current_number = null;
    for (let i = 0; i < 9; i++) {
        let div = document.getElementById('r' + (i + 1));
        for (let j = 0; j < 9; j++) {
            let ele = div.children[j];
            ele.innerHTML = "";
            ele.style.color = 'black';
            if (sudoku[i][j] != 0) {
                ele.innerHTML = sudoku[i][j];
                ele.style.color = 'red';
            }


        }

    }
    FillSolSudoku();
}

function CompleteSudoku() {
    swal({
        title: "Are you sure you want to see the solution??",

        icon: "warning",
        buttons: ["No", "Yes"],
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {

                for (let i = 0; i < 9; i++) {
                    let div = document.getElementById('r' + (i + 1));
                    for (let j = 0; j < 9; j++) {
                        let ele = div.children[j];
                        ele.innerHTML = SolSudoku[i][j];
                    }

                }
            }

        });


}

function ResetSudoku() {
    swal({
        title: "Are you sure you want to clear the sudoku?",
        text: "Think twice!",
        icon: "warning",
        buttons: ["No", "Yes"],
        dangerMode: true,
    })
        .then((willDelete) => {
            if (willDelete) {
                for (let i = 0; i < 9; i++) {
                    let div = document.getElementById('r' + (i + 1));
                    for (let j = 0; j < 9; j++) {
                        let ele = div.children[j];
                        if (sudoku[i][j] == 0)
                            ele.innerHTML = "";


                    }

                }
            }

        });

}
function RuleSudoku() {
    window.open("rules.html");
}