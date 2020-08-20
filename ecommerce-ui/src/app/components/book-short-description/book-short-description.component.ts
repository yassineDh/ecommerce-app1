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

  bookCoverNotFound = "https://img.glyphs.co/img?src=aHR0cDovL3MzLmFtYXpvbmF3cy5jb20vbWVkaWFsb290L3Jlc291cmNlcy93ZWdyYXBoaWNzL2Jvb2tfY292ZXJzX3ByZXZpZXcxLmpwZw&q=90&enlarge=true&h=1036&w=1600";
  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
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
