import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ng-navbar',
  templateUrl: './navbar.component.html',
  styles: []
})
export class NavbarComponent implements OnInit {
  title = "Angular Book";
  constructor() { }

  ngOnInit() {
  }

}
