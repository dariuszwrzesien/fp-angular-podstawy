import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-test',
  template: `
    <p>
    test works!
    </p>
  `,
  styles: []
})
export class TestComponent implements OnInit {

  counter: number = 0
  user$ = new Subject<string>();
  constructor() {
    this.user$.next('My name'+this.counter)
    setInterval(() => {
      this.counter++;
      this.user$.next('My name'+this.counter)
    }, 2000)
  }

  ngOnInit() {
    setTimeout(() => {
      this.user$.subscribe(u => console.log(u))
    }, 5000);
  }

}
