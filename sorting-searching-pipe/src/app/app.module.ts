import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { SortPipe } from './shared/sort.pipe';
import { FormsModule } from '@angular/forms';
import { SearchPipe } from './shared/search.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    SortPipe,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
