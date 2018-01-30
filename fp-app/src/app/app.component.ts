import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-product-list></app-product-list>
    <app-test></app-test>
  `,
  styles: []
})
export class AppComponent {
  title = 'app';
}
