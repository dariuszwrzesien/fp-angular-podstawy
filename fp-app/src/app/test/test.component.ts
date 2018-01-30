import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Subject} from 'rxjs/Subject';
import 'rxjs/add/observable/fromEvent';

@Component({
  selector: 'app-test',
  template: `
    <input type="text" #testInput>
    <button #myButton>Test</button>
  `,
  styles: []
})
export class TestComponent implements OnInit, AfterViewInit {

@ViewChild('testInput') input: ElementRef;
@ViewChild('myButton') button: ElementRef;

  counter: number = 0;
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

  ngAfterViewInit() {
    Observable.fromEvent(this.input.nativeElement, 'keyup')
      .subscribe(e => console.log(e.target.value));

    Observable.fromEvent(this.button.nativeElement, 'click')
      .subscribe(() => console.log('click!'));
  }

}
