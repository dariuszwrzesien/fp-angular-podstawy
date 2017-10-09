import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full'},
  { path: 'contact', component: ContactComponent},
  { path: 'products', children: [
      {path: '', component: ProductListComponent, pathMatch: 'full'},
      {path: ':id', component: ProductEditComponent}
    ]}
];
