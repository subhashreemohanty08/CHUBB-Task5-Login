import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  cardData =[
    {
      card:"Primary Card",
      class:"primary",
      color:"bg-primary"
     
    },
    {
      card:"Warning Card",
      class:"warning",
      color:"bg-warning"
     
    },
    {
      card:"Success Card",
      class:"success",
      color:"bg-success"
     
    },
    {
      card:"Danger Card",
      class:"danger",
      color:"bg-danger"
     
    },
  ] 


  constructor() { }

  ngOnInit(): void {
  }

}
