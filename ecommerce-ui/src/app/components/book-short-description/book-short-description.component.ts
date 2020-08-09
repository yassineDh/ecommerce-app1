import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-book-short-description',
  templateUrl: './book-short-description.component.html',
  styleUrls: ['./book-short-description.component.css']
})
export class BookShortDescriptionComponent implements OnInit {

  @Input() book : Object;
  constructor() { }

  ngOnInit(): void {
  }

}
