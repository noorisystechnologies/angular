# ngx-doc-viewer

**Step 1 :** Install the NPM Module

npm install ngx-doc-viewer --save


**Step 2 :** Import `NgxDocViewerModule`

import { NgxDocViewerModule } from 'ngx-doc-viewer';

@NgModule({
  imports: [
    NgxDocViewerModule
    ],
})
export class AppModule {
}


**Step 3 :** Add DocViewer in component.html

<ngx-doc-viewer [url]="pdfSrc" viewer="google"  style="width:100%;height:93vh;"
(loaded)="contentLoaded()">
<div>Loading</div>
</ngx-doc-viewer>

**Step 4 :** Add CSS in component.css 

:host {
  display: block;
}
p {
  font-family: Lato;
}
