import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { AdduserComponent } from './adduser/adduser.component';
import { UserListComponent } from './user-list/user-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TooltipModule } from 'primeng/tooltip';
import { DialogModule } from 'primeng/dialog';
import { TableModule } from 'primeng/table';

@NgModule({
  declarations: [
    AdduserComponent,
    UserListComponent
  ],
  imports: [
    CommonModule,TooltipModule,DialogModule,TableModule,
    UserRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class UserModule { }
