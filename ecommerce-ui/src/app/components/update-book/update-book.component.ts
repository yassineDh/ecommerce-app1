import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css'],
})
export class UpdateBookComponent implements OnInit {
  bookForm: FormGroup;
  cover64 = history.state.data.cover;
  constructor(
    private formBuilder: FormBuilder,
    private booksService: BooksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    console.log('||||||||||');

    console.log(history.state.data);

    console.log('||||||||||');

    this.bookForm = this.createFormGroupWithBuilder(this.formBuilder);
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      title: [history.state.data.title],
      edition: [history.state.data.edition],
      pages: history.state.data.pages,
      author: formBuilder.group({
        firstName: [history.state.data.author.firstName],
        lastName: [history.state.data.author.lastName],
      }),
      publicationDate: history.state.data.publicationDate,
      cover: '',
    });
  }

  onSubmit() {
    this.bookForm.controls['cover'].setValue(this.cover64);

    let bookUpdated = Object.assign(
      {},
      { id: history.state.data.id, ...this.bookForm.value }
    );

    console.log(bookUpdated);

    this.updateBook(bookUpdated);
    this.router.navigate(['books']);
  }

  imageUpload(imageInput) {
    let reader = new FileReader();
    let file = imageInput.target.files[0];

    reader.readAsDataURL(file);
    reader.onload = () => {
      console.log(reader.result);
      this.cover64 = reader.result;
    };
  }

  updateBook(bookPar) {
    this.booksService.updateBook(bookPar).subscribe((res) => {
      console.log(res);
    });
  }
}
