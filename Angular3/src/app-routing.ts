import { Route } from "@angular/compiler/src/core";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AttributedirectiveComponent } from "./app/attributedirective/attributedirective.component";
import { ErrorhandlerComponent } from "./app/errorhandler/errorhandler.component";
import { HomeComponent } from "./app/home/home.component";
import { ProductComponent } from "./app/product/product.component";
import { PurchaseComponent } from "./app/purchase/purchase.component";
import { SharedataComponent } from "./app/sharedata/sharedata.component";
import { TshirtdatabindingComponent } from "./app/tshirtdatabinding/tshirtdatabinding.component";

const  routes:Routes=[
    {
        path:'home',
        component:HomeComponent,
    },
    {
        path:'Tshirt',
        component:TshirtdatabindingComponent,
    },
    {
        path:'Products',
        component:ProductComponent
    },
    {
        path:'Purchase',
        component:PurchaseComponent,
    },
    {
        path:'Sharedata',
        component:SharedataComponent,
    },
    {
        path:'HandelError',
        component:ErrorhandlerComponent,
    },
    {
        path:'Attributedirective',
        component:AttributedirectiveComponent,
    },

    {
        path:'',
        redirectTo:'home',
        pathMatch:'full'
    }
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRouting{

}
