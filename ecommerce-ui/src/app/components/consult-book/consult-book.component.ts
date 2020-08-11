import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-consult-book',
  templateUrl: './consult-book.component.html',
  styleUrls: ['./consult-book.component.css']
})
export class ConsultBookComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<ConsultBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

  ngOnInit(): void {

    console.log("===============");
    console.log(this.data.book);
    console.log("===============");

  }

}
