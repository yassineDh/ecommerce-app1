import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BooksService {
  constructor(private http: HttpClient) {}

  urlApi = 'http://localhost:8080/store/books';

  public getAllBooks(): Observable<Object> {
    return this.http.get(this.urlApi);
  }

  public saveBook(book): Observable<Object> {
    return this.http.post(this.urlApi, book);
  }

  public updateBook(book): Observable<Object> {
    return this.http.put(this.urlApi, book);
  }

  public deleteBook(bookId): Observable<Object> {
    return this.http.delete((this.urlApi+"/"+bookId))
  }

  public books:Subject<any> = new Subject<any>();


}
