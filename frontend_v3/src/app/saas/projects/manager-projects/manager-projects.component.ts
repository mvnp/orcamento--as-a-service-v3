import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-manager-projects',
    templateUrl: './manager-projects.component.html',
    styleUrls: ['./manager-projects.component.css']
})
export class ManagerProjectsComponent implements OnInit {

    today = new Date();
    form: FormGroup;
    submitted: boolean = false;

    constructor(private formBuilder: FormBuilder) {
        this.form = this.formBuilder.group({
            title: ['', Validators.required],
            description: ['', Validators.required],
            property_area: ['', Validators.required],
            total_area: ['', Validators.required],
            floors: ['', Validators.required],
            amount: ['', Validators.required],
            type: ['', Validators.required],
            startedAt: ['', Validators.required],
            endedAt: ['', Validators.required],
        });
    }

    ngOnInit(): void {}

    onSubmit(event) {
        this.submitted = true;
    }

    onFileSelected(event) {}
}