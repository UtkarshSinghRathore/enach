import { Component, OnInit } from '@angular/core';
import { MandateApiService } from '../services/mandate-api.service';
import { Customer } from '../model/customer';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authorise-mand',
  templateUrl: './authorise-mand.component.html',
  styleUrls: ['./authorise-mand.component.css']
})

export class AuthoriseMandComponent implements OnInit {
  public customer: Customer;
  tncAccepted: boolean=false;
  tncAccepted2: boolean=false;
  constructor(private mandateApiService: MandateApiService,
    private router: Router) {
    this.customer = new Customer();
    this.customer = this.mandateApiService.mandateCustomer;

  }

  ngOnInit() {
    this.customer = this.mandateApiService.mandateCustomer;
  }

  changeEvent2(event) {
    if (event.target.checked) {
        this.tncAccepted2= true;
    }
    else {
        this.tncAccepted2= false;
    }
}
 changeEvent(event) {
        if (event.target.checked) {
            this.tncAccepted= true;
        }
        else {
            this.tncAccepted= false;
        }
    }

  approveMandate = function () {
    this.mandateApiService.approveMandate().subscribe();
    this.router.navigateByUrl('/confirm');
    

  };
  rejectMandate = function () {
    this.mandateApiService.rejectMandate().subscribe((data: any) => {
      this.router.navigateByUrl('/reject');
    });
  };

}
