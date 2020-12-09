import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-guide',
  templateUrl: './guide.component.html',
  styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {

  constructor() { }

  Names: string [] = ['Dvir' , 'Avi' , 'Gal' , 'Dan'];
  Name: string = 'Shmuel,Elazar,Albert,Asi'
  ArrayNumbers: number [] = [1,2,3,4,5,6,7];


  ngOnInit(): void {
    this.TrySortArrayString();
    this.FunctionLoop();
    this.ConnectBetweenTwoArrays();
    this.FunctionSqrt();
  }

  FunctionLoop() {
    for (let item in this.Names) {
      console.log(" checkLoop " + this.Names[item]);
    }
  }

  TrySortArrayString () {
    let AfterSort = (this.Names.sort());
    console.log("AfterSort:   "+AfterSort);
    
    let AfterJoin = (this.Names.join("/")); // Any sign or character
    console.log(" after join " + AfterJoin); 
    console.log(this.Name); 
  }

  ConnectBetweenTwoArrays() {
    let AfterConnectTwoArray: string[] = this.Names.concat(this.Name);
    console.log("AfterConnectTwoArray   " +AfterConnectTwoArray);
  }

  FunctionSqrt() {
    let roots: number[] = this.ArrayNumbers.map(Math.sqrt);
    console.log("sqrt   " + roots);
  }




//

  public Board:string[][] = [["00","01","02","03"],["10","11","12","13"],["20","21","22","23"],["30","31","32","33"]];
  myColorBoard(){
    // for(var i = 0; i < 4; i++) {
    //       var x = document.getElementById(Math.floor(Math.random() * Math.floor(4))+''+ Math.floor(Math.random() * Math.floor(4)));
    //       x.style.backgroundColor = x.style.backgroundColor = "yellow";    
    //     }
  }

  Test: string = 'B';
  
  // getColor(AnyNumber) {
  //   console.log("Case A ");
  //   switch(AnyNumber){
  //     case "A":
  //       console.log("Case A ");
  //       return 'blue';
  //       case "B":
  //         return 'red';
  //         case "C":
  //           return 'red';
  //   }
  // }

} // Finish
