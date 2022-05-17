import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-landing-page',
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

    idOfProject: number;

    constructor(private router: Router) 
    {
        this.idOfProject = parseInt(localStorage.getItem('idOfProject'));

        if(!this.idOfProject) this.router.navigate(['saas/projects/all']);
        this.getDetailsOfProjectByID(this.idOfProject);
        localStorage.removeItem('idOfProject');
    }

    ngOnInit(): void {}

    getDetailsOfProjectByID(id) {}
    participateInProject() {}
}
