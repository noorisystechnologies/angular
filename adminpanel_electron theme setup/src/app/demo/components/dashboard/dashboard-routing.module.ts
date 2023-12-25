import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: DashboardComponent },
        { path:'user_profile',   component:ProfileComponent}
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
