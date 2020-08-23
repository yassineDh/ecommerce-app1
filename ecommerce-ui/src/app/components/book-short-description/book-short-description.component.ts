import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ConsultBookComponent } from '../consult-book/consult-book.component';
import { BooksComponent } from '../books/books.component';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-short-description',
  templateUrl: './book-short-description.component.html',
  styleUrls: ['./book-short-description.component.css']
})
export class BookShortDescriptionComponent implements OnInit {

  @Input() book;

  bookCoverNotFound = "https://img.glyphs.co/img?src=aHR0cDovL3MzLmFtYXpvbmF3cy5jb20vbWVkaWFsb290L3Jlc291cmNlcy93ZWdyYXBoaWNzL2Jvb2tfY292ZXJzX3ByZXZpZXcxLmpwZw&q=90&enlarge=true&h=1036&w=1600";
  constructor(public dialog: MatDialog,private booksService: BooksService) { }

  ngOnInit(): void {
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConsultBookComponent, {
      width: '900px',
      data: { book: this.book }
    });

    dialogRef.afterClosed().subscribe(res => {
      console.log(res);
      this.booksService.getAllBooks().subscribe((items) => {
          this.booksService.books.next(items);
        console.log(items);
      });
    });
  }


}
