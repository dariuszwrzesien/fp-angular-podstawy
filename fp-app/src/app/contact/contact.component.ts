import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-contact',
  template: `
    <form #myForm="ngForm" (ngSubmit)="send(myForm)">
      <input type="text" name="name" ngModel required>
      <input type="text" name="message" ngModel>
      <button>Send</button>
    </form>
  `,
  styles: []
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  send(form: NgForm) {
    console.log(form)
    form.reset();
  }

}
