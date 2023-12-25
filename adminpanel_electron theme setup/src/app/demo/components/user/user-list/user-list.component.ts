import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RxDocumentBase } from 'rxdb';
import { DatabaseService } from 'src/app/demo/service/database.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {

  visible: boolean = false;
  editForm!: FormGroup
  users: any[] = [];
  editData
  userID

  constructor(private fb: FormBuilder,
    private databaseService: DatabaseService) {
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      fname: ["", Validators.required],
      lname: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required],
    })
    this.loadUsers()
  }

  // Get User Date 
  async loadUsers() {
    try {
      this.users = await this.databaseService.getAllUsers();
    } catch (error) {
      console.error('Error fetching users:', error);
    }
  }

  // Open Modal for edit 
  async showDialog(id: any) {
    this.userID = id
    this.visible = true;
    try {
      const user = await this.databaseService.getUserById(id);
      this.editData = user._data
      this.editForm.get('fname')?.setValue(this.editData.fname)
      this.editForm.get('lname')?.setValue(this.editData.lname)
      this.editForm.get('email')?.setValue(this.editData.email);
      this.editForm.get('password')?.setValue(this.editData.password);
    } catch (error) {
      console.error('Error fetching user:', error);
    }
  }

  // For Update user
  async update() {
    // console.log(this.editForm.value);
    const { fname, lname, email, password } = this.editForm.value;
    const data = {
      id: this.userID,
      fname: fname,
      lname: lname,
      email: email,
      password: password
    } as unknown as RxDocumentBase<{}, {}>
    // console.log(data);
    try {
      await this.databaseService.updateUserData(this.userID, data);
      Swal.fire({
        title: "User Data Updated Successgully",
        icon: "success"
      });
      this.loadUsers();
    } catch (error) {
      console.error('Error updating user data:', error);
    }

    this.visible = false
  }

  // Delete User
 async delete(id:any){
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!"
  }).then(async (result) => {
    if (result.isConfirmed) {
      try {
        await this.databaseService.deleteUserData(id);
        this.loadUsers();
      } catch (error) {
        console.error('Error deleting user data:', error);
      }  
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      });
    }
  });
    // try {
    //   await this.databaseService.deleteUserData(id);
    //   this.loadUsers();
    // } catch (error) {
    //   console.error('Error deleting user data:', error);
    // }    
  }
  // Cancel and close modal 
  cancel() {
    this.visible = false
  }
}
