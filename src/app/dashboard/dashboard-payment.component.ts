import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    templateUrl: 'dashboard-payment.component.html',
    styleUrls: ['dashboard.component.css']
})
export class DashboardPaymentComponent implements OnInit {
    constructor(private router: Router) { }

    ngOnInit() { }

    back(){
        window.history.back();
    }
    save(){
    this.router.navigate(['dashboard/confirm']);
    }
}