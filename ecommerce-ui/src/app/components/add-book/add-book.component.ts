import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {

  bookForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

    this.bookForm = this.createFormGroupWithBuilder(this.formBuilder);
  }



  createFormGroupWithBuilder(formBuilder: FormBuilder) {
    return formBuilder.group({
      title: '',
      edition: '',
      pages:'',
      author: formBuilder.group({
        firstName: '',
        lastName: '',
      }),
      publicationDate:''
    });
}

onSubmit(){
      console.log(this.bookForm.value);
      
}


}