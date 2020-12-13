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
    this.books.push(new Books(1,"ffffffff","fffffffffff",120));

  }
  

}
