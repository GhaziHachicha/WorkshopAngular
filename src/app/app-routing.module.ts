import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { BooksComponent } from './books/books.component';

const routes: Routes =[
  {path: 'Liste', component:BooksComponent},
  {path: 'Add-Book', component:AddBookComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
