import { Component, OnInit } from '@angular/core';
declare var test : any
// declare var test : any

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.scss']
})
export class PaymentComponent implements OnInit {


  ngOnInit(): void {
    new test();
  }

}
