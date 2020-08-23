import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { BooksService } from 'src/app/services/books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit {
  bookForm: FormGroup;
  cover64;
  constructor(
    private formBuilder: FormBuilder,
    private booksService: BooksService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.bookForm = this.createFormGroupWithBuilder(this.formBuilder);
  }

  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      title: ['', Validators.required],
      edition: ['', Validators.required],
      pages: '',
      author: formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
      }),
      publicationDate: '',
      cover: '',
    });
  }

  onSubmit() {
    this.bookForm.controls['cover'].setValue(this.cover64);

    console.log(this.bookForm.value);

    console.dir(this.bookForm.value);

    this.saveBook(this.bookForm.value);
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

  saveBook(bookPar) {
    this.booksService.saveBook(bookPar).subscribe((res) => {
      console.log(res);
    });
  }
  
  back(){
    this.router.navigate(['books']);
  }
}
