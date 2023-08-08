import { ZoomComponent } from './zoom/zoom.component';
import { PaymentComponent } from './payment/payment.component';
import { StripeComponent } from './stripe/stripe.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'stripe',
   component: StripeComponent
  },
  { path: '',
   component: PaymentComponent
  },
  {
    path: 'zoom',
   component: ZoomComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
