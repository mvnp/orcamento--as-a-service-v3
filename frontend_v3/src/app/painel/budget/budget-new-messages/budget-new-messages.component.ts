import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-budget-new-messages',
  templateUrl: './budget-new-messages.component.html',
  styleUrls: ['./budget-new-messages.component.css']
})
export class BudgetNewMessagesComponent implements OnInit {

  @Input() objBudget: any;
  instructions: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }
  
  showInstructions() {
    this.instructions = false;
  }

  openNav() {
    document.getElementById("overlay-chatter").style.width = "100%";
    document.getElementById("sidenav-chatter").style.width = "700px";
    document.getElementById("sidenav-chatter").style.maxWidth = "60%";
  }
}
