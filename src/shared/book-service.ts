import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Books} from '../model/Books';
import {Observable} from 'rxjs';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient, private router: Router) {
  }

/*
  getUserbyid(id: number) {
    return this.http.get('http://localhost:3000/users/' + id);
  }

  deleteuser(id: number) {
    return this.http.delete('http://localhost:3000/users/' + id);
  }

  updateUser(data: any, id: any): Observable<any> {
    const url: string = 'http://localhost:3000/users/' + id;
    return this.http.put(url, data);
  }




  getalluser() {

    return this
      .http.get<any>('http://localhost:3000/users/');
  }*/
  addBook(book : Books) : Observable<Books>{
    return this.httpClient.post<Books>('http://localhost:3000/books', book, this.httpOptions);
  }
  


}
