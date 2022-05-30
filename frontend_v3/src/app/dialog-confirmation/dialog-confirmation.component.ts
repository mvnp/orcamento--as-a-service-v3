import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

import { DialogObject } from './../saas/dialogObject';

@Component({
    selector: 'app-dialog-confirmation',
    templateUrl: './dialog-confirmation.component.html',
    styleUrls: ['./dialog-confirmation.component.css']
})
export class DialogConfirmationComponent implements OnInit {

    constructor(
        private dialog: MatDialog,
        public dialogRef: MatDialogRef<DialogConfirmationComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogObject
    ) {}

    ngOnInit(): void {}

    onYesClick(): void { return this.dialogRef.close(true) }
    onNoClick(): void { return this.dialogRef.close(false) }
    closeModal(): void { return this.dialogRef.close(false) }
}
