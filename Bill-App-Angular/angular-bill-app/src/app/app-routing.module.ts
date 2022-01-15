import { UpdateBillComponent } from './update-bill/update-bill.component';
import { CreateBillComponent } from './create-bill/create-bill.component';
import { BillingListComponent } from './billing-list/billing-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{path:'yourbills',component:BillingListComponent},
{path:'createbill',component:CreateBillComponent},
{path:'updatebill/:id',component:UpdateBillComponent},
{path: '',redirectTo:'yourbills',pathMatch:'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
