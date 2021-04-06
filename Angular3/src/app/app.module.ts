import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { TshirtdatabindingComponent } from './tshirtdatabinding/tshirtdatabinding.component';
import { HelloComponent } from './hello/hello.component';
import { ProductComponent } from './product/product.component';
import { PurchaseComponent } from './purchase/purchase.component';
import { PurchaseOrderComponent } from './purchaseOrder/purchase-order.component';
import {MatExpansionModule} from '@angular/material/expansion'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { ChangecolorDirective } from './changecolor.directive';
import { SharedataComponent } from './sharedata/sharedata.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import { AppRouting } from '../app-routing';
import { ErrorhandlerComponent } from './errorhandler/errorhandler.component';
import { MyerrorhandlerService } from './myerrorhandler.service';
import { LogService } from './log.service';
import { AttributedirectiveComponent } from './attributedirective/attributedirective.component';
import { LoginformComponent } from './loginform/loginform.component';

@NgModule({
  declarations: [
    AppComponent,
    TshirtdatabindingComponent,
    HelloComponent,
    ProductComponent,
    PurchaseComponent,
    PurchaseOrderComponent,
    Child1Component,
    Child2Component,
    ChangecolorDirective,
    SharedataComponent,
    HomeComponent,
    ErrorhandlerComponent,
    AttributedirectiveComponent,
    LoginformComponent
  ],
  imports: [
    AppRouting,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,MatExpansionModule,ReactiveFormsModule
  ],
  providers: [LogService ,{provide: ErrorHandler,useClass:MyerrorhandlerService}],
  bootstrap: [AppComponent]
})
export class AppModule {
  
 }
