import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation',
  template: `
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/contact">Contact</a>
    </nav>
  `,
  styles: []
})
export class NavigationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
