import { Component, OnInit } from '@angular/core';
import {Tile} from '../Tile';
@Component({
  selector: 'app-switch-case',
  templateUrl: './switch-case.component.html',
  styleUrls: ['./switch-case.component.css']
})
export class SwitchCaseComponent implements OnInit {

  constructor() { }

  level = 1;
  x:string = "hello";
  y:string = this.x;
  board:Tile[][]= [[,]];
  randomGreenTiles:Tile[] = [];
  Life: number = 4;
  ColorWhite: number = 0;
  ColorYellow: number = 1;
  ColorRed: number = 2;
  WrongStep: Tile[] = [];
  Count: number = 0; // for WrongStep
  TotalCorrectSteps: number = 0;
  NextLevel: number = 1;
  disabled: boolean = false;
  Score: number = 0;
 ngOnInit() {
  this.start();

 }

 start(){
  this.board[0][0] = {
    status: 0,
    i: 0,
    j: 0
  };
  for(var i = 0; i < 4; i++){
    this.enlargeBoard();
   }
 }

 enlargeBoard() {
  this.clearGreenTiles(0);
  this.TotalCorrectSteps = 0;
  this.level++;
    this.board.push(Array(this.board.length).fill(null)) // add new array
    this.board.forEach(e => e.push(null)) // add value to all arrays
     for(var i = 0, j = this.level-1; i < this.level; i++){
      this.board[i][j] = {
        status: 0,
        i: i,
        j:j
      };
      this.board[j][i] = {
       status: 0,
       i: j,
       j:i
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
    for(var i = 0;i<this.level;i++){
      this.randomGreenTiles[i] = this.board[this.getRandomInt(this.level)][this.getRandomInt(this.level)];
      this.randomGreenTiles[i].status = 3;
    }

    await this.delay(3000);
    this.clearGreenTiles(this.ColorWhite);
   }

  getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));   
  }

  clearGreenTiles(CodeColor){
    for(var i = 0; i < this.randomGreenTiles.length; i++){
      this.randomGreenTiles[i].status = CodeColor;
    }
  }

 changeColor(status: number){
  switch(status){
    case 0:
     return 'white';
    case 1:
     return 'yellow';
    case 2:
     return 'red';
    case 3:
     return 'green';             
  }
 }

delay(ms: number) {
  return new Promise( resolve => setTimeout(resolve, ms));
}

 clickButton(i , j) {
  for(var I = 0; I < this.randomGreenTiles.length; I++) {
    //right step
    if(i == this.randomGreenTiles[I].i && j == this.randomGreenTiles[I].j) {
      console.log("LocationGOOD  ");
      this.randomGreenTiles[I].status = this.ColorYellow;
      this.TotalCorrectSteps++;
      this.CheckFinishLevel();
      this.Score += 10;
      return;
    }
  }
      // wrong step
      this.WrongStep.push(this.board[i][j]);
      this.WrongStep[this.WrongStep.length-1].status = this.ColorRed;
      console.log("WrongStep ");
      if(this.CheckIfHeHasAnotherLife()){
      this.Life--;
      }
      console.log("Game ower Life is: " + this.Life);
 } // finish function

 CheckFinishLevel() {
   console.log("check Level!!!!!!!!!!!:"+this.NextLevel+" TotalCorrectSteps:"+this.TotalCorrectSteps);
   if (this.TotalCorrectSteps == this.level && this.NextLevel == this.level) {
    this.ClearErrorFromWrongStep();
    this.enlargeBoard();
    this.TotalCorrectSteps = 0;
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

 click : boolean = false;

}// Finish
