import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductListItemComponent } from './products/product-list-item.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { VatPipe } from './vat.pipe';
import {ProductService} from './product.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { NavigationComponent } from './navigation/navigation.component';
import {ProductAddComponent} from './products/product-add.component';
import {ProductEditComponent} from './products/product-edit.component';

const routes: Routes = [
  { path:'', component: HomeComponent, pathMatch: 'full'},
  { path:'contact', component: ContactComponent},
  { path:'products', children: [
      {path: '', component: ProductListComponent, pathMatch: 'full'},
      {path: 'add', component: ProductAddComponent},
      {path: ':id/edit', component: ProductEditComponent},
    ]}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    ProductListItemComponent,
    VatPipe,
    ContactComponent,
    NavigationComponent,
    ProductAddComponent, ProductEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
