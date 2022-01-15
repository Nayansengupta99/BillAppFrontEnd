import { Router } from '@angular/router';
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
  t:any;
  totalPrice:any;
  message:any

  constructor(private billService:BillingService, private router:Router) { }

  ngOnInit(): void {
    this.getAllBills();
    this.getAllBillsById();
  }
  private getAllBills(){
    this.billService.getAllBills().subscribe(data=>{
      this.bills=data;
    
    })
  }

  private getAllBillsById(){
    this.billService.getAllBillsById(6).subscribe(data=>{
      // this.bills=data;
      this.t=data;
      this.totalPrice=this.t.totalPrice
      this.bills=this.t.bills
    
    })
  }
 
  updateBill(id:number) {
    this.router.navigate(['updatebill',id]);
  }
  goToAllItems() {
    this.router.navigate(['/yourbills'])
  }
  deleteBill(id:number){
    this.billService.deleteBill(id).subscribe(data=>{
      this.getAllBillsById();
      this.message=data
      
    },error=>console.error(error))
    
  }



}
