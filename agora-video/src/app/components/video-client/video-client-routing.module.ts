import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideoClientComponent } from './video-client.component';

const routes: Routes = [
  {
    path: '',
    component: VideoClientComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VideoClientRoutingModule { }
