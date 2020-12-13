import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { AppRoutingModule } from './app-routing.module';
import { EmpruntComponent } from './emprunt/emprunt.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    EmpruntComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
