import { Billing } from './billing';
import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BillingService {
  
  private baseUrl="http://localhost:8081/bill/"
  constructor(private http: HttpClient) { }

  getAllBills():Observable<Billing[]>{
    return this.http.get<Billing[]>(`${this.baseUrl}`);
  }

  createBill(bill: Billing):Observable<Object>{
    return this.http.post(`${(this.baseUrl)+"save"}`,bill);
  }

}
