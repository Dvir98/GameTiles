import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service'

@Component({
  selector: 'app-login-screen',
  templateUrl: './login-screen.component.html',
  styleUrls: ['./login-screen.component.css']
})
export class LoginScreenComponent implements OnInit {

  Life:number;
  constructor(private data: MessageService) { }

  ngOnInit(): void {
    this.data.currentMessage.subscribe(NumberLife => this.Life = NumberLife)
  }

}
