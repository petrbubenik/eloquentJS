// Chessboard

// Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

// Passing this string to console.log should show something like this:

//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # # 
//  # # # #
// # # # #

// When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

function chessboard(size){
    let board = "";
    for(let x = 1; x <= size; x++){
        for(let y = 1; y<=size; y++){
            if((x + y) % 2 === 0){
                board += " ";
            } else{
                board += "#";
            }
        }
        board += "\n";
    }
    console.log(board)
}

chessboard(8)