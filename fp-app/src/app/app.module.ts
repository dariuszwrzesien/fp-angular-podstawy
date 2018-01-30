import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductListItemComponent } from './products/product-list-item.component';
import {FormsModule} from '@angular/forms';
import { VatPipe } from './vat.pipe';
import {ProductService} from './product.service';
import { TestComponent } from './test/test.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';
import { ProductAddComponent } from './products/product-add.component';
import { ProductEditComponent } from './products/product-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent, pathMatch: 'full'},
  {path: 'contact', component: ContactComponent},
  {path: 'products', component: ProductListComponent},
  {path: 'products/add', component: ProductAddComponent},
  {path: 'products/:id/edit', component: ProductEditComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    ProductListComponent,
    ProductListItemComponent,
    VatPipe,
    TestComponent,
    NavigationComponent,
    ProductAddComponent,
    ProductEditComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
