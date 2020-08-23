import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-consult-book',
  templateUrl: './consult-book.component.html',
  styleUrls: ['./consult-book.component.css'],
})
export class ConsultBookComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ConsultBookComponent>,
    @Inject(MAT_DIALOG_DATA) public data,
    private router: Router,
    private booksService: BooksService
  ) {}

  ngOnInit(): void {
    console.log('===============');
    console.log(this.data.book);
    console.log('===============');
  }

  updateBook() {
    this.dialogRef.close();
    this.router.navigate(['books/update'], { state: { data: this.data.book } });
  }

  deleteBook() {
    this.booksService.deleteBook(this.data.book.id).subscribe((res) => {
      console.log(res);
    });
   this.dialogRef.close();
  }
}
