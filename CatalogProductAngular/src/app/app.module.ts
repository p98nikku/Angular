import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTabsModule} from '@angular/material/tabs';


import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import { CategoryComponent } from './category/category.component';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { SearchProductComponent } from './search-product/search-product.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ByIdPipe } from './by-id.pipe';
import { ByNamePipe } from './by-name.pipe';
import { ByPriceGreaterThanPipe } from './by-price-greater-than.pipe';
import { ByPriceLessThanPipe } from './by-price-less-than.pipe';
import { ByPriceEqualTOPipe } from './by-price-equal-to.pipe';
import {MatTableModule} from '@angular/material/table';
import { AddCategoryComponent } from './add-category/add-category.component';
import { SearchCategoryComponent } from './search-category/search-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { AllCategoryComponent } from './all-category/all-category.component';
import { ByCIdPipe } from './by-cid.pipe';
import { ByCNamePipe } from './by-cname.pipe';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    CategoryComponent,
    ProductComponent,
    AddProductComponent,
    SearchProductComponent,
    DeleteProductComponent,
    ListProductComponent,
    ByIdPipe,
    ByNamePipe,
    ByPriceGreaterThanPipe,
    ByPriceLessThanPipe,
    ByPriceEqualTOPipe,
    AddCategoryComponent,
    SearchCategoryComponent,
    DeleteCategoryComponent,
    AllCategoryComponent,
    ByCIdPipe,
    ByCNamePipe,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  
    FormsModule,
    ReactiveFormsModule,


    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatCardModule,
    MatRadioModule,
    MatCheckboxModule,
    MatSelectModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
