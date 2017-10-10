import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { ProductAddComponent } from './product/product-add/product-add.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'contact', component: ContactComponent},
  { path: 'products', children: [
      {path: '', component: ProductListComponent, pathMatch: 'full'},
      {path: ':id/edit', component: ProductEditComponent},
      {path: 'add', component: ProductAddComponent}
    ]}
];

