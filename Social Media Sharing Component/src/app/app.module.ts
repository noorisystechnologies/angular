import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { APP_BASE_HREF } from '@angular/common';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    ShareButtonsModule,
    ShareIconsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    
  ],
  bootstrap: [
    AppComponent,    
  ],
  providers: [{provide: APP_BASE_HREF, useValue: ''}]
  
})
export class AppModule {
}
