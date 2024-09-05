import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonService } from './person.service';
import { PersonModule } from './person.module'; 

@NgModule({
  declarations: [
    AppComponent,
    PersonFormComponent
  ],
  imports: [
    BrowserModule,
    PersonModule,
    FormsModule,
    HttpClient
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
