import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsultBookComponent } from '../consult-book/consult-book.component';

@Component({
  selector: 'app-book-short-description',
  templateUrl: './book-short-description.component.html',
  styleUrls: ['./book-short-description.component.css']
})
export class BookShortDescriptionComponent implements OnInit {

  @Input() book;
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
    console.log("the book name is :");
    console.log(this.book.title);
    console.log("**************************");
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConsultBookComponent, {
      width: '900px',
      data: { book: this.book }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
    });
  }

}
