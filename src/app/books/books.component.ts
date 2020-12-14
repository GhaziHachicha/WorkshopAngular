import { Component, OnInit } from '@angular/core';
import {Books} from '../../model/books'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  title = "workShop";
  books : Books[] = [];
  constructor() { }

  ngOnInit(): void {
    this.books.push(new Books(1,"Carcasses","	Bruno Leclerc du Sablon",458,false));
    this.books.push(new Books(2,"Elle et lui","George Sand",630,true));
    this.books.push(new Books(3,"L'Ane","Victor Hugo",164,false));
    this.books.push(new Books(4,"Le mauvais passant","Albert Dreux",312,false));
    this.books.push(new Books(5,"Le paradis perdu","	John Milton",801,false));

  }
  emprunter(id){
    console.log(id);
    this.books[id].emprunte=true;
  }
  
  public get value() : Books[] {
    return this.books;
  }
  
  public getBook(books:Books[]){
    books=this.books;
  }
  public setBook(books:Books[]){
    this.books=books;
  }

}
