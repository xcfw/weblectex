import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContactComponent } from './contact/contact.component';
import { ContactsComponent } from './contacts/contacts.component';
import { InMemoryWebApiModule } from “angular-in-memory-web-api”;  
import { BackendService } from “./backend.service”;

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
	AppRoutingModule,
	InMemoryWebApiModule,
	BackendService
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
