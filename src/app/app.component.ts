import { Component, OnInit } from '@angular/core';
import {MessageService} from './message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'PlayMemoryTiles';
  Array:boolean [] = [];
  Life:number;
  Score:number;
  Level:number;
  constructor(private data: MessageService) { }

  refresh() {
    location.reload();
    this.ngOnInit();
  }

  // Pass information between COMPONENT // Through Injectble
  ngOnInit(): void {
    this.data.currentMessage.subscribe(message => this.Life = message);

    this.data.currentArray.subscribe(Arrays => this.Array = Arrays);

    this.data.score.subscribe(Arrays => this.Score = Arrays);

    this.data.level.subscribe(level => this.Level = level);
  }
}
