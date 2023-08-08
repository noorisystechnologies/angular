import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StripeComponent } from './stripe/stripe.component';
import { PaymentComponent } from './payment/payment.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { ZoomComponent } from './zoom/zoom.component';
import { NgPaymentCardModule } from 'ng-payment-card';

@NgModule({
  declarations: [
    AppComponent,
    StripeComponent,
    PaymentComponent,
    ZoomComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule ,
    ZXingScannerModule,
    NgPaymentCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
