import { Component, OnInit } from '@angular/core';
import { ZXingScannerComponent } from '@zxing/ngx-scanner/public_api';

@Component({
  selector: 'app-stripe',
  templateUrl: './stripe.component.html',
  styleUrls: ['./stripe.component.scss']
})
export class StripeComponent implements OnInit {

  constructor() { }
  handler:any = null;
  ngOnInit() {

    this.loadStripe();
  }

  pay(amount: any) {

    const handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51LI8HESFKwKqGYkWVhEOjNVSPNArvGkvYPv7prFC7vOiT2abgmziYIeRlizOJkcLUpL2RzqQ2lX3pTI5VT1K3OLz00Lq8cvKdO',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token.card)
        alert('Token Created!!');
      }
    });

    handler.open({
      name: 'Demo Site',
      description: '2 widgets',
      amount: amount * 100
    });

  }

  loadStripe() {

    if(!window.document.getElementById('stripe-script')) {
      const script = window.document.createElement("script");
      script.id = "stripe-script";
      script.type = "text/javascript";
      script.src = "https://checkout.stripe.com/checkout.js";
      window.document.body.appendChild(script);
      script.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LI8HESFKwKqGYkWVhEOjNVSPNArvGkvYPv7prFC7vOiT2abgmziYIeRlizOJkcLUpL2RzqQ2lX3pTI5VT1K3OLz00Lq8cvKdO',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token.card)
            alert('Payment Success!!');
          }
        });
      }

      window.document.body.appendChild(script);
    }
  }

}
