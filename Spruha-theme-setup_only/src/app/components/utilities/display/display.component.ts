import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  scrollToElement(element:any): void {
    element.scrollIntoView({behavior: "smooth", inline: "nearest"});
  }

}
