import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { MatTabGroup } from '@angular/material/tabs';

import { ProjectsService } from '../projects/projects.service';

@Component({
    selector: 'app-estimate',
    templateUrl: './estimate.component.html',
    styleUrls: ['./estimate.component.css']
})
export class EstimateComponent implements OnInit {

    public idOrcamento = 118;
    public selectedIndex;

    constructor(
        private tabGroup: MatTabGroup, 
        private _loader: NgxSpinnerService,
        private _projectsService: ProjectsService
    ) {
        const tabCount = tabGroup._tabs.length;
        this.selectedIndex = 0;
    }

    ngOnInit(): void {
        this.getProjectsOfThisUser();
    }

    getProjectsOfThisUser() {
        this._loader.show();
        this._projectsService.getProjectsOfThisUser(this.idOrcamento).subscribe({
            next: (projects: any) => {
                if(this.selectedIndex == 0) {
                    this.verifyOneProjectAndRedirect(projects);
                }
            }, error: (error) => {
                console.log(error);
                this._loader.hide();
            }, complete: () => {
                console.log("complete");
                this._loader.hide();
            },
        });
    }

    verifyOneProjectAndRedirect(project) {
        if(project.data == undefined) { 
            this._loader.hide();
            return false;
        } else if(project.data.length > 1) {
            this._loader.hide();
            return false;
        }

        this.idOrcamento = 118;
        this.selectedIndex = 1;
    }

    userHasOneProject(event) {
        // verify event
        console.log(event);
        if(this.selectedIndex == 1) {
            this.getProjectsOfThisUser();
        }
    }
}