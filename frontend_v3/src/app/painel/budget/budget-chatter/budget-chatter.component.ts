import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget-chatter',
  templateUrl: './budget-chatter.component.html',
  styleUrls: ['./budget-chatter.component.css']
})
export class BudgetChatterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  closeNav() {
    console.log("disparado");
    document.getElementById("overlay-chatter").style.width = "0";
    document.getElementById("sidenav-chatter").style.width = "0";
  }
}