import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }
  Level = 4; // We Start from level 4 (Board 4 * 4)
  SeveralCorrectStepsAtEachLevel = 0;
  NumberOfIncorrectClicksAtEachLevel = 4;
  AuxiliaryVariableForWrongSteps = 0; // Auxiliary variable
  ArrayRundom: number[] = [];
  ArrayColorTiles: boolean[] = [];
  board = new Array();
  NextLevel: number = 1;

  // New board
  // START_FILL_VALUE:boolean = false;
  START_FILL_VALUE:string;
  
  START_SIZE: number = 4;
  //board = Array(this.START_SIZE).fill(null).map(() => Array(this.START_SIZE).fill(this.START_FILL_VALUE));

  ngOnInit(): void {
    this.init();
    this.RandomToArray();
  }
  
  init(){
    for(var i = 0;i<this.START_SIZE;i++){
      for(var j = 0;j<this.START_SIZE;j++){
        this.board[i][j] = "gggg";
      }
    }
    console.log("board:"+this.board);
  }
  clickButton(i , j) {
    this.AuxiliaryVariableForWrongSteps = 0;
    // Logic location after event click
    for (var count = 0; count < this.ArrayRundom.length; count++){
      if (i == this.ArrayRundom[count] && j == this.ArrayRundom[count+1]) {
        count++;
        var LocationInArrayBollean = (i * this.Level) + j;
        this.ArrayColorTiles [LocationInArrayBollean] = true; 
        console.log("LocationGOOD  ");
        break;
      }
      else {
        count++;
        console.log("LocationBAD  " );
        this.AuxiliaryVariableForWrongSteps = count + 1;
      }
    } // Finish loop
    this.StepCheck(this.AuxiliaryVariableForWrongSteps);
    console.log("Count AuxiliaryVariableForWrongSteps   " + this.AuxiliaryVariableForWrongSteps);
    console.log("ArrayColorTiles   " + this.ArrayColorTiles);// Print array boolean
  }

  StepCheck(AuxiliaryVariableForWrongSteps) {
    console.log("Number Of Incorrect Clicks At Each Level 2  " + AuxiliaryVariableForWrongSteps);
    // Check game over
    if (this.NumberOfIncorrectClicksAtEachLevel == 0) {
      // start function "ArrayColorTiles" => true
      console.log("0 Game Over   " + AuxiliaryVariableForWrongSteps);
      this.FullBoardOrBlank(true);
    } 

    // If you select TILES is incorrect
    if (AuxiliaryVariableForWrongSteps == this.ArrayRundom.length) {
      console.log("Before Sub-1    " + this.NumberOfIncorrectClicksAtEachLevel);
      this.NumberOfIncorrectClicksAtEachLevel--;
      console.log("Sub-1    " + this.NumberOfIncorrectClicksAtEachLevel);
    }
    
     // If you select TILES correctly
     else {
      console.log("Before Add1    " + this.SeveralCorrectStepsAtEachLevel);
      this.SeveralCorrectStepsAtEachLevel++;
      console.log("Add1    " + this.SeveralCorrectStepsAtEachLevel);

    if(this.SeveralCorrectStepsAtEachLevel == this.Level) {
      this.IncreaseTheBoardByTheLevel();
      }
    }
  }

 // Finish level OR FinishGame
 FullBoardOrBlank(trueOrFalse:boolean) {
    for(var i = 0;  i < this.ArrayColorTiles.length; i++) {
      this.ArrayColorTiles[i] = trueOrFalse;
    }
  }

  IncreaseTheBoardByTheLevel() {
    console.log(this.board);
    this.FullBoardOrBlank(false);
    if(this.NextLevel == this.Level) {
      this.ClearBoard();
      this.enlargeBoard(this.board, this.START_FILL_VALUE);
      this.Level++;
      this.myColorBoard();
      
     // this.FullBoardOrBlank(false);
     // this.RandomToArray();
      
      this.SeveralCorrectStepsAtEachLevel = 0;
      this.NextLevel = 1;
    }
    else {
      this.ClearBoard();
      this.myColorBoard();
      this.NextLevel++;
      this.FullBoardOrBlank(false);
      //this.RandomToArray();  
      this.SeveralCorrectStepsAtEachLevel = 0;
    }
  }

  myColorBoard(){
    this.ArrayRundom =[];
    var HelpResultPoint;
    var HelpY;
    var a;
    var HelpX;
    // this.ClearBoard();
    console.log(this.board);
    console.log("LevelLevelLevel:" + this.Level);
    for(var i = 0; i < this.Level; i++) { 
          var x = document.getElementById(HelpResultPoint = Math.floor(Math.random() * Math.floor(this.Level)) +''+  Math.floor(Math.random() * Math.floor(this.Level)));
          x.style.backgroundColor = x.style.backgroundColor = "yellow";
          HelpY = HelpResultPoint % 10;
          a = HelpResultPoint / 10;
          HelpX = (Math.floor(a));        
          this.ArrayRundom.push(HelpX);
          this.ArrayRundom.push(HelpY);
        }
        console.log(" ArrayRundom   " +  this.ArrayRundom );
  }
  
  ClearBoard() {
    for(var i = 0; i < this.board[0].length; i++)
    {
      for(var j = 0; j < this.board[1].length; j++)
      {
         var x = document.getElementById( i+''+j );
         x.style.backgroundColor = x.style.backgroundColor = "white";

      }
    }
  
  }
  
  // Doing function random to array
  RandomToArray() {
    // var x;
    //this.ArrayRundom =[];
    for (var i = 0; i < this.Level * 2; i++){ 
      // x = this.getRandomInt(this.Level);
      // this.ArrayRundom.push(x);
  
      this.ArrayColorTiles.push(false);
      this.ArrayColorTiles.push(false);
    }
    // console.log(" ArrayRundom   " +  this.ArrayRundom );
    console.log(" ColorTiles True or false  " +  this.ArrayColorTiles );
    }
  
    // enlargeBoard(board: boolean[][], startValue: boolean) {
      enlargeBoard(board: string[][], startValue: string) {
      board.push(Array(board.length).fill(startValue)); // add new array
      board.forEach(e => e.push(startValue)); // add value to all arrays
    }
  
     getRandomInt(max) {
        return Math.floor(Math.random() * Math.floor(max));   
    }


} // Finish


