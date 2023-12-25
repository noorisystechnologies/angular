import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';
import { DatabaseService } from 'src/app/demo/service/database.service';

import Swal from 'sweetalert2';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styles: [`
        :host ::ng-deep .pi-eye,
        :host ::ng-deep .pi-eye-slash {
            transform:scale(1.6);
            margin-right: 1rem;
            color: var(--primary-color) !important;
        };

    `]
})
export class LoginComponent {

    valCheck: string[] = ['remember'];
    loginForm!:FormGroup
    password!: string;
    // loginData = {}

    constructor(public layoutService: LayoutService, private router:Router,
    private fb:FormBuilder , private databaseService:DatabaseService) { }

    ngOnInit(){
        this.loginForm = this.fb.group({
            email:["",Validators.required],
            password:["",Validators.required],
        })
    }

    async  login(){
        const email = this.loginForm.get('email')?.value ;
        const password = this.loginForm.get('password')?.value ;
        try {
            const userData = await this.databaseService.login(email, password);
            // Successfully logged in, navigate to the home page or do other actions
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Login Successfully",
                showConfirmButton: false,
                timer: 1500
              });
            this.router.navigate(['/dashboard']);// Adjust the route as needed
          } catch (error) {
            console.error('Login failed:', error);
            Swal.fire({
                title: "Invalid credentials",
                // text: "That thing is still around?",
                icon: "error"
              });
            // Handle login failure (show error message, etc.)
          }
    }

}
