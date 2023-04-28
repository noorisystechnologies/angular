import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pdf-viewer',
  templateUrl: './pdf-viewer.component.html',
  styleUrls: ['./pdf-viewer.component.scss']
})
export class PdfViewerComponent implements OnInit {

  pdf_file: any;
  pdf_result: any;

  pdf_form!: FormGroup;
  show_result = false;

  constructor(
    private fb: FormBuilder,
    private modalService: NgbModal
  ) { }

  ngOnInit(): void {
    this.pdf_form = this.fb.group({
      pdf: ['', Validators.required]
    })
  }

  // submit function
  save() {
    this.markFormGroupTouched(this.pdf_form)
    if(this.pdf_form.invalid) {
      return;
    }
    this.show_result = true;
  }

  // pdf popup function
  open_pdf(modal: any) {
    this.modalService.open(modal, { size: 'lg' })
  }

  // form reset function
  clear() {
    this.show_result = false
    this.pdf_form.reset()
  }

  // file and reader function
  get_pdf(event: any) {
		if (event.target.files.length > 0) {
			if (event.target.files[0].type == 'application/pdf') {
			} else {
				console.log('pdf file required')
				this.pdf_form.get('image')?.setValue('')
				this.pdf_result = '';
				return
			}
			const reader = new FileReader();
			reader.onload = e => this.pdf_result = reader.result;
			reader.readAsDataURL(event.target.files[0]);
			this.pdf_file = event.target.files[0];
		}
	}

  // validation function
  markFormGroupTouched(formGroup: FormGroup) {
		Object.values(formGroup.controls).forEach((control: any) => {
			control.markAsTouched();
			if (control.controls) {
				this.markFormGroupTouched(control);
			}
		});
	}

}
