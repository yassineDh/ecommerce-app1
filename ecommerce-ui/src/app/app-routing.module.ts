import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksComponent } from './components/books/books.component';
import { AddBookComponent } from './components/add-book/add-book.component';
import { ConsultBookComponent } from './components/consult-book/consult-book.component';

const routes: Routes = [
  { path: '', redirectTo: 'books', pathMatch: 'full' },
  { path: 'books', component: BooksComponent },
  { path: 'books/add', component: AddBookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
