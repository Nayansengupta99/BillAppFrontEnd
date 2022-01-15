import { BillingService } from './../billing.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Billing } from '../billing';

@Component({
  selector: 'app-update-bill',
  templateUrl: './update-bill.component.html',
  styleUrls: ['./update-bill.component.css']
})
export class UpdateBillComponent implements OnInit {


id:number;
bill:Billing=new Billing()
  constructor(private billService:BillingService,private router:ActivatedRoute,private router1:Router) { }

  ngOnInit(): void {

    this.id=this.router.snapshot.params['id'];
    this.billService.getBillById(this.id).subscribe(data=>{
      this.bill=data;
    },error =>console.error(error))
  }
  goToAllItems() {
    this.router1.navigate(['/yourbills'])
  }

  updateBill(id:number,bill:Billing){
    this.billService.updateBill(id,bill).subscribe(data=>{
      this.goToAllItems();
    })}

    onSubmit(){
      this.id=this.router.snapshot.params['id'];
      this.updateBill(this.id,this.bill);
    }
  




}
