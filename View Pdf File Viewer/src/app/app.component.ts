import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  pdfSrc = 'http://www.pdf995.com/samples/pdf.pdf';

  contentLoaded() {
    console.log('File loaded');
  }
}
