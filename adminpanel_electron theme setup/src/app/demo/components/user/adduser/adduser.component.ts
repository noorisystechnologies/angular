import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/demo/service/database.service';
import { NgxIndexedDBService } from 'ngx-indexed-db';
import { RxDocumentBase } from 'rxdb';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.scss'],
  providers: [DatabaseService]
})

export class AdduserComponent {

  addUser!: FormGroup
  submit: boolean = false;
  DB = inject(DatabaseService)
  users
  public emittedFirst = false;
  allData: any;

  constructor(private fb: FormBuilder,
    private router: Router,
    private dataService: DatabaseService,
    private dbService: NgxIndexedDBService) {
  }

  ngOnInit() {
    this.addUser = this.fb.group({
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
    // this.gatAllData()
  }

  // For Form Validation
  private markFormGroupTouched(formGroup: FormGroup) {
    Object.values(formGroup.controls).forEach((control: any) => {
      control.markAsTouched();
      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }

  // Internal Id Generator function
  generateRandomString(length: number): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters.charAt(randomIndex);
    }
    return result;
  }

  // Add User in Local database
  async onSubmit() {

    this.markFormGroupTouched(this.addUser)
    this.submit = true
    if (this.addUser.valid) {
      const id = this.generateRandomString(16);
      const { fname, lname, email, password } = this.addUser.value;
      const data = {
        id: id,
        fname: fname,
        timestamp: new Date().toISOString(),
        lname: lname,
        email: email,
        password: password
      } as unknown as RxDocumentBase<{}, {}>

      // console.log(data);

      try {
         await this.dataService.db.then(db => db?.user.insert(data))
        // console.log(insert);
        Swal.fire({
          title: "User Added Successfully",
          icon: "success"
        });
        this.addUser.reset()
        this.router.navigate(['/dashboard/user/user_list'])
      } catch (error) {
        Swal.fire({
          title: "Something Went Wrong",
          icon: "error"
        });
        console.error(error);
        throw error
      }
    }
  }


}
