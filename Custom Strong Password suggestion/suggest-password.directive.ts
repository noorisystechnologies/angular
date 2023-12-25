// password-generator.directive.ts

import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Directive({
  selector: '[appSuggestPassword]'
})
export class SuggestPasswordDirective {

  private passwordFormGroup!: FormGroup;
  
  constructor(private el: ElementRef, private renderer: Renderer2) { }

   @Input('appSuggestPassword') set formGroup(formGroup: FormGroup) {
    this.passwordFormGroup = formGroup;
  }
  
  // on button click event the generatePassword method will return random password and set to password input field.
  @HostListener('click')
  onClick() {
    this.generatePassword();
  }

  
  private generatePassword(): void {
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@';
    const passwordLength = 12;
    let password = '';

    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
    this.passwordFormGroup.get('password')?.setValue(password);
  }

  private copyToClipboard(): void {
    const passwordText = this.el.nativeElement.innerText;
    const textarea = document.createElement('textarea');
    textarea.value = passwordText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Password copied to clipboard!');
  }
}
