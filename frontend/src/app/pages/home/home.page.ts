import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  fabButtonIcon: String = 'pencil-outline';
  usernameInput: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  editUsername() {
    this.usernameInput = false;
    if (this.fabButtonIcon == 'pencil-outline') {
      this.fabButtonIcon = 'checkmark-outline';
    } else {
      this.fabButtonIcon = 'pencil-outline';
    }
  }

  editInfo() {
    this.usernameInput = false;
  }

}
