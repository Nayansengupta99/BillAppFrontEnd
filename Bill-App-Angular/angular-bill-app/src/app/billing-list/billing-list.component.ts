import { BillingService } from './../billing.service';
import { Billing } from './../billing';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-billing-list',
  templateUrl: './billing-list.component.html',
  styleUrls: ['./billing-list.component.css']
})
export class BillingListComponent implements OnInit {

  bills: Billing[]=[];

  constructor(private billService:BillingService) { }

  ngOnInit(): void {
    this.getAllBills();

  }
  private getAllBills(){
    this.billService.getAllBills().subscribe(data=>{
      this.bills=data;
      console.log(data)
    })
  }



}
