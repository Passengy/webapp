import { Component, OnInit } from '@angular/core';
import {MdSidenav, MdDialog, MdDialogConfig} from "@angular/material";
import { Router, ActivatedRoute } from '@angular/router';

export class Ameneties {
  name: string;
}

const AMENETIES: Ameneties[] = [
    {name: 'Essentials Towels, bed sheets, soap, and toilet paper'}, 
    {name: 'Wifi'}, 
    {name: 'Shampoo'}, 
    {name: 'Closetdrawers'}, 
    {name: 'TV'}, 
    {name: 'Heat'}, 
    {name: 'Air conditioning '}, 
    {name: 'Breakfast, coffee, tea'}, 
    {name: 'Desk/workspace'}, 
    {name: 'Fireplace'}, 
    {name: 'Iron'}, 
    {name: 'Hair dryer'}, 
    {name: 'Pets in the house'}
];

const SAFETIES: Ameneties[] = [
    {name: 'Smoke detector'}, 
    {name: 'Carbon monoxide detector'}, 
    {name: 'First aid kit'}, 
    {name: 'Safety card'}, 
    {name: 'Fire extinguisher'}, 
    {name: 'Lock on bedroom door'}, 
]

const KINDOFPLACE: Ameneties[] = [
  {name: 'Entire home'},
  {name: 'Private room'},
  {name: 'Shared room'}
]

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }

  amneties = AMENETIES;
  safeties = SAFETIES;
  kindofplace = KINDOFPLACE;
  
  countries = ['England', 'Wales', 'Scotland', 'Northern Irland'];
  cities = ['London', 'Liverpool', 'Manchester'];
  town = ['']
  typeofplace = ['Apartment', 'House', 'Villa', 'Townhouse', 'Dorm', 'Guesthouse', 'Entire Floor', 'Condominium', 'Cabin', 'Loft', 'Other'];

  next(){
    this.router.navigate(['dashboard/payment']);
  }

} 