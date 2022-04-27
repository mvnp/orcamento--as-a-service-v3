import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTabGroup } from '@angular/material/tabs';

@Component({
    selector: 'app-contracts',
    templateUrl: './contracts.component.html',
    styleUrls: ['./contracts.component.css']
})
export class ContractsComponent implements OnInit {

    public selectedIndex;

    constructor(tabGroup: MatTabGroup) {
        const tabCount = tabGroup._tabs.length;
        this.selectedIndex = 0;    
    }

    ngOnInit(): void {
    }
}
