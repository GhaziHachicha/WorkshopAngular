import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { Books } from 'src/model/books';
import { BooksComponent } from '../books/books.component';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  //@Output() bookOut = new EventEmitter<Books>();
  constructor() { }
  book : Books;
  ngOnInit(): void {
  }
  add(){}
}
