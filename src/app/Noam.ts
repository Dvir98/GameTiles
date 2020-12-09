

// const START_FILL_VALUE = false
//   const START_SIZE = 10
//   // null כי לא הכפת מה הערך בתוך
//   //  Array(START_SIZE).fill // יוצר מערך ריק
//   // map // עבור כל ערך במערך שמשמאל תחליף אותו בערך חדש שנמצא מימין
//   // map // יוצר מערך חדש ולא משנה את הקודם// להריץ בקונסול [1, 2, 3].map(() => 10)
//   //  => Array(START_SIZE).fill(START_FILL_VALUE)) // כל נל תהפוך אותו למערך
//   const board = Array(START_SIZE).fill(null).map(() => Array(START_SIZE).fill(START_FILL_VALUE))
//                // Array(10).fill(null).map(() => Array(10).fill(false))
//   function enlargeBoard(board: boolean[][], startValue: boolean) {
//     board.push(Array(board.length).fill(startValue)) // add new array
//     board.forEach(e => e.push(startValue)) // add value to all arrays
//   }
  
//   console.log(board)
//   enlargeBoard(board, START_FILL_VALUE)
//   console.log(board)
//   board[2][2] = true
//   // הגדל את הלוח
//   enlargeBoard(board, START_FILL_VALUE)
//   console.log(board)




const START_FILL_VALUE = false
const START_SIZE = 4
const board = Array(START_SIZE).fill(null).map(() => Array(START_SIZE).fill(START_FILL_VALUE))

function enlargeBoard(board: boolean[][], startValue: boolean) {
  board.push(Array(board.length).fill(startValue)) // add new array
  board.forEach(e => e.push(startValue)) // add value to all arrays
}

console.log(board)
enlargeBoard(board, START_FILL_VALUE)
console.log(board)
board[2][2] = true
enlargeBoard(board, START_FILL_VALUE)
console.log(board)