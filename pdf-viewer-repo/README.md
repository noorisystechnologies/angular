# PdfViewerRepo

This PDf Viewer project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.2.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Overview

Install `ng2-pdf-viewer` libaray
`npm install ng2-pdf-viewer`

Add `PdfViewerModule` to your module's `imports`

And then use it in your component
`import { Component } from '@angular/core';

@Component({
  selector: 'example-app',
  template: `
  <pdf-viewer [src]="pdfSrc"
              [render-text]="true"
              [original-size]="false"
              style="width: 400px; height: 500px"
  ></pdf-viewer>
  `
})
export class AppComponent {
  pdfSrc = "https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf";
}`

## Open PDF in Popup

To open pdf file in popup first install `ng-bootstrap`
`npm i @ng-bootstrap/ng-bootstrap`

Add `NgbModule` to your module's `imports`

And then use it in your component
`open_pdf(modal: any) {
    this.modalService.open(modal, { size: 'lg' })
  }`

 And in html
 ` <pdf-viewer [src]="pdf_result" [render-text]="true" [original-size]="false"
        class="pdf-style" (click)="open_pdf(pdfModal)" [zoom]="0.9">
    </pdf-viewer>
    <ng-template #pdfModal let-modal>
    <div class="modal-header">
        <h6 class="modal-title" translate>Pdf Viewer</h6>
        <button type="button" class="close" aria-label="Close" (click)="modal.dismiss('Cross click')">
            <span aria-hidden="true">&times;</span>
        </button>
    </div>
    <div class="modal-body">
        <pdf-viewer [src]="pdf_result" [render-text]="true" [original-size]="false" [zoom]="0.9"
        style="width: 100%; min-height: 500px"></pdf-viewer>
    </div>
</ng-template>`



