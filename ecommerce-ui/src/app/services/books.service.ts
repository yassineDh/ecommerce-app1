import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  urlApi = "http://localhost:8080/store/books";

  public getAllBooks(): Observable<Object> {
    return this.http.get(this.urlApi);
  }

}
