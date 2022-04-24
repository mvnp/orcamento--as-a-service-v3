import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogMessageObject } from 'src/app/dialog-message/dialogMessageObject';

@Component({
    selector: 'app-dialog-message',
    templateUrl: './dialog-message.component.html',
    styleUrls: ['./dialog-message.component.css']
})
export class DialogMessageComponent implements OnInit {

    constructor(
        public dialogRef: MatDialogRef<DialogMessageComponent>,
        @Inject(MAT_DIALOG_DATA) public data : DialogMessageObject){
    }

    ngOnInit(): void {
        console.log("matDialog message!");
    }

    onNoClick(): void { this.dialogRef.close(false) } 
    onYesClick(): void { this.dialogRef.close(true) }
}