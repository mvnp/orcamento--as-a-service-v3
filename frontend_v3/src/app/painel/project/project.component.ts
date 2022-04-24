import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  selectedIndex: number = 0;

  constructor() {
    this.initTabsOfProject();
  }

  ngOnInit(): void {
  }

  initTabsOfProject() {
    this.selectedIndex = 1;
  }
}
