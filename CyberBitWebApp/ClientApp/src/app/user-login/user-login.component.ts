import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  userName: string = 'Dany';
  @Output() notifyLogin: EventEmitter<string> = new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

  login(): void {
    this.notifyLogin.emit(this.userName);
  }

}
