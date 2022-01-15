import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BillingListComponent } from './billing-list/billing-list.component';
import { CreateBillComponent } from './create-bill/create-bill.component';
import {FormsModule} from '@angular/forms';
import { UpdateBillComponent } from './update-bill/update-bill.component';

@NgModule({
  declarations: [
    AppComponent,
    BillingListComponent,
    CreateBillComponent,
    UpdateBillComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
