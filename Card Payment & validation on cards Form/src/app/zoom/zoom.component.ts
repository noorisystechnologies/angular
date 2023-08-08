import { Component, OnInit } from '@angular/core';
import { ZoomMtg } from '@zoomus/websdk';
import ZoomMtgEmbedded from "@zoomus/websdk/embedded";
const client = ZoomMtgEmbedded.createClient();


@Component({
  selector: 'app-zoom',
  templateUrl: './zoom.component.html',
  styleUrls: ['./zoom.component.scss']
})
export class ZoomComponent implements OnInit {



  constructor() { }

  ngOnInit(): void {
  }

  getSignature() {}



}
