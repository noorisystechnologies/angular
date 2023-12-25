import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  files: { fileName: string, dataUrl: string }[] = [];

  onFileUpload(event:any): void {
    this.files = event;
    
  }

  onRemoveImage(index: any) {
    if (index >= 0 && index < this.files.length) {
      this.files.splice(index, 1);
    }
  }
}
