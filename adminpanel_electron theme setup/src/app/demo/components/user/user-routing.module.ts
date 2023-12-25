import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdduserComponent } from './adduser/adduser.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  { path : 'add_user',   component:AdduserComponent},
  { path : 'user_list',  component:UserListComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
