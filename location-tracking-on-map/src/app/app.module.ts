import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';
import { CommonModule } from '@angular/common';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		CommonModule,
		AppRoutingModule,
		AgmDirectionModule,
		AgmCoreModule.forRoot({
			apiKey: 'AIzaSyCXrZOSeNciUgckXCiKKKIDwhBBJxq31N4',
			libraries: ['places', 'drawing', 'geometry'],
		  }),
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
