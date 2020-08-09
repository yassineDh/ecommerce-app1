import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {

    console.log("list is starting");
    this.booksService.getAllBooks().subscribe(items => {
      this.books = items;
      console.log(items);

    })
    console.log("list is done");

  }

}
