import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VideoClientRoutingModule } from './video-client-routing.module';
import { VideoClientComponent } from './video-client.component';


@NgModule({
  declarations: [VideoClientComponent],
  imports: [
    CommonModule,
    VideoClientRoutingModule
  ]
})
export class VideoClientModule { }
