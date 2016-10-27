import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";

@Component({
    selector: 'activate-post',
    templateUrl: 'activatepost.html'
})

export class ActivatePost{
    constructor(private router: Router){}
    ok(){
        this.router.navigate(['/']);
    }
}

@Component({
    templateUrl: 'dashboard-confirm.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardConfirmComponent implements OnInit {
    constructor(private router: Router, public dialog: MdDialog, public vcr: ViewContainerRef) { }

    ngOnInit() { }

    edit(){
        this.router.navigate(['/dashboard']);
    }
    activate(){
        const config = new MdDialogConfig();
        config.viewContainerRef = this.vcr;
        this.dialog.open(ActivatePost, config)
    }
}