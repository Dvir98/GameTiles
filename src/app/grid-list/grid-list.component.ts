import { Component, OnInit } from '@angular/core';
import {Tile, ForCss} from '../Tile';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-grid-list',
  templateUrl: './grid-list.component.html',
  styleUrls: ['./grid-list.component.css']
})
export class GridListComponent implements OnInit {
 
  constructor(private data: MessageService) { } 
  
  level = 1;
  x:string = "hello";
  y:string = this.x;
  board:Tile[][]= [[,]];
  randomGreenTiles:Tile[] = [];
  Life: number = 5;
  ColorWhite: number = 0;
  ColorYellow: number = 1;
  ColorRed: number = 2;
  WrongStep: Tile[] = [];
  Count: number = 0; // for WrongStep
  TotalCorrectSteps: number = 0;
  NextLevel: number = 1;
  disabled: boolean = false;
  firstClick: boolean = false;
  Score: number = 0;
  ClickButtonBeforeYouNeed: number = 0;
  AfterThreeSeconds: boolean = false;

  col: number = 3;
  height: number = 700 / 3;
  ArrayLife:boolean [] = [true,true,true,true,true];

  ngOnInit(): void {  
    this.start();
    this.data.currentMessage.subscribe(IchoseTheNameNumberLife => this.Life = IchoseTheNameNumberLife);
  }

  newMessage() {
    this.data.changeMessage(this.Life);
    this.data.changeValueInArray(this.ArrayLife);
    this.data.changeScore(this.Score);
    this.data.SendLevel(this.level);
  }

  start(){
    this.board[0][0] = {
      status: 0,
      i: 0,
      j: 0,
      cols: 1, 
      rows: 1
    };
    for(var i = 0; i < 2; i++){
      this.enlargeBoard();
     }
   }
  
   enlargeBoard() {
    this.clearGreenTiles(0);
    this.TotalCorrectSteps = 0;
    this.level++;
    // this.functionSize();
      this.board.push(Array(this.board.length).fill(null)) // add new array
      this.board.forEach(e => e.push(null)) // add value to all arrays
       for(var i = 0, j = this.level-1; i < this.level; i++){
        this.board[i][j] = {
          status: 0,
          i: i,
          j:j,
          cols: 1, 
          rows: 1
        };
        this.board[j][i] = {
         status: 0,
         i: j,
         j:i,
         cols: 1, 
         rows: 1
      };
      }
     this.randomGreen();
   }
   
    printArray(){
      for(var i = 0; i < this.level; i++) {
        for(var j = 0; j < this.level; j++) {
          console.log(this.board[i][j].i+","+this.board[i][j].j);
        }   
      }
    }
  
    async randomGreen(){
      this.clearGreenTiles(this.ColorWhite);
      this.AfterThreeSeconds = false;
      var randomI;
      var randomJ;
       for(var i = 0;i<this.level;i++){
         randomI = this.getRandomInt(this.level);
         randomJ = this.getRandomInt(this.level);
         if(this.CheckForDuplicates(randomI,randomJ)){
          this.randomGreenTiles[i] = this.board[randomI][randomJ];
          this.randomGreenTiles[i].status = 3;
         } else {
           --i;
         }
        // this.randomGreenTiles[i] = this.board[this.getRandomInt(this.level)][this.getRandomInt(this.level)];
        // this.randomGreenTiles[i].status = 3;
        // this.CheckForDuplicates(this.randomGreenTiles);
      }  

        await this.delay(3000);
        this.AfterThreeSeconds = true;
        // Before 3 secons
        // if(this.firstClick == false){
           this.clearGreenTiles(this.ColorWhite);
        // }
      }

     CheckForDuplicates(I,J) {
       for(var i = 0;i< this.randomGreenTiles.length;i++){
         if(this.randomGreenTiles[i] == this.board[I][J]){
           return false;
         }
       }
       return true;
     }
  
    getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));   
    }
  
    clearGreenTiles(CodeColor){
      this.ClickButtonBeforeYouNeed = 0;
      for(var i = 0; i < this.randomGreenTiles.length; i++){
        this.randomGreenTiles[i].status = CodeColor;
      }
    }
  
   changeColor(status: number){
    switch(status){
      case 0:
       return 'rgb(224, 224, 224)';// white
      case 1:
       return 'rgb(146, 169, 233)'; //yellow
      case 2:
       return 'red';
      case 3:
       return 'rgb(146, 169, 233)';             
    }
   }
  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms));
  }

  print() {
    for (let i = 0; i < this.randomGreenTiles.length; i++) {
      console.log("array length  " +this.randomGreenTiles.length);
      console.log("array randomGreenTiles  " +this.randomGreenTiles[i].i +" , " +this.randomGreenTiles[i].j);
    }
  }

   clickButton(i , j) {
    //  if(this.ClickButtonBeforeYouNeed == 0) {
    //   this.firstClick = true;
    //   this.clearGreenTiles(this.ColorWhite);
    //  }

    if (this.AfterThreeSeconds == true){
      // console.log("this.AfterThreeSeconds:    " + this.AfterThreeSeconds);
      this.ClickButtonBeforeYouNeed++;
      for(var I = 0; I < this.randomGreenTiles.length; I++) {
        //right step
        this.ClickButtonBeforeYouNeed++;
        if(i == this.randomGreenTiles[I].i && j == this.randomGreenTiles[I].j && this.randomGreenTiles[I].status == this.ColorWhite) { 
          console.log("LocationGOOD  ");
          this.randomGreenTiles[I].status = this.ColorYellow;
          this.TotalCorrectSteps++;
          this.CheckFinishLevel();
          this.print();
          this.Score += 10;
          this.newMessage();
          return;
        }
      }
          // wrong step
          this.Life--;
          this.WrongStep.push(this.board[i][j]);
          this.WrongStep[this.WrongStep.length-1].status = this.ColorRed;
          console.log("WrongStep ");
          if(this.CheckIfHeHasAnotherLife()){
            this.ArrayLife[this.Life-1] = false;
            console.log("WrongStep array " + this.ArrayLife);        
            this.newMessage()
          }
          console.log("Game ower Life is: " + this.Life);
    }
    
   
   } // finish function
  
   CheckFinishLevel() {
     console.log("check Level!!!!!!!!!!!:"+this.NextLevel+" TotalCorrectSteps:"+this.TotalCorrectSteps);
     if (this.TotalCorrectSteps == this.level && this.NextLevel == this.level) {
      this.ClearErrorFromWrongStep();
      this.enlargeBoard();
      console.log("this.col   " + this.col);
      this.col += 1;
      this.height = 700 / this.level; 
      console.log("this.col   " + this.col);
      this.TotalCorrectSteps = 0;
      this.NextLevel = 0;
      this.firstClick = false;
    }  
  
    else if(this.TotalCorrectSteps == this.level) {
      this.NextLevel++;
      this.TotalCorrectSteps = 0;
      this.ClearErrorFromWrongStep();
      console.log("Insert  randomGreen:  " + this.TotalCorrectSteps  + "this.level  :" + this.level);
      this.randomGreen();
  
      for(var i = 0;i<this.randomGreenTiles.length;i++){
        console.log(this.randomGreenTiles[i].i+" "+this.randomGreenTiles[i].j);
      } 
      this.firstClick = false;
     }
     
     console.log("NextLevel!!!!!!!!!!:"+this.NextLevel);
   }
  
   ClearErrorFromWrongStep() {
    for(var i = 0;i<this.WrongStep.length;i++){
      this.WrongStep[i].status = 0;
    }
   }
  
   CheckIfHeHasAnotherLife() {
     if (this.Life == 0) {
      this.clearGreenTiles(this.ColorYellow)
      this.disabled = true;
      return false;
     }
    return true;
   }

}// finish