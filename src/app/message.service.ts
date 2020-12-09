import { Injectable } from '@angular/core';
// import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
 
  
  constructor() { }

  private numberSource = new BehaviorSubject<number> (5);
  currentMessage = this.numberSource.asObservable();
  changeMessage(message: number) {
    this.numberSource.next(message)
  }

  
  arrayLife: BehaviorSubject<Array<any>> = new BehaviorSubject([true,true,true,true,true]);
  currentArray = this.arrayLife.asObservable(); 
  changeValueInArray(TrueOrFalse: boolean []) {
    this.arrayLife.next(TrueOrFalse)
  }


  ScoreDefault = new BehaviorSubject<number> (0);
  score = this.ScoreDefault.asObservable(); 
  changeScore(newScore:number) {
    this.ScoreDefault.next(newScore)
  }

  Level = new BehaviorSubject<number> (3);
  level = this.Level.asObservable(); 
  SendLevel(level: number) {
    this.Level.next(level)
  }
  
}

