<!-- Card Payment Form By Library  -->

Step 1 : Install
npm install --save ng-payment-card Library

Step 2 : After installing , import it into your Angular module file (app.component.ts)

import { NgPaymentCardModule } from 'ng-payment-card';

Step 3 : Afterwards, you can use the component within your templates file (xyz.component.html)

<section class="c-wrapper">
  <div class="c-wrapper__row">
    <ng-payment-card></ng-payment-card>
    // Setting custom validation messages
    <ng-payment-card
    [ccNumMissingTxt]='Please provide card number'
    [cardExpiredTxt]='Payment card has expired'>
    </ng-payment-card>
     / Handling event emitter
    <ng-payment-card
    (formSaved)="processPayment(cc)">
    </ng-payment-card>   
  </div>
</section>

Step 4 : CSS File 

.c-wrapper {
  align-items: center;
  display: flex;
  flex-flow: row;
  flex-wrap: nowrap;
  height: 100%;
  justify-content: center;
  margin: 0;
  padding: 0;
  width: 100%;

  &__row {
    margin-top: 10%;

    @media only screen and (max-width: 1919px) {
      width: 40%;
    }

    @media only screen and (max-width: 1279px) {
      width: 50%;
    }

    @media only screen and (max-width: 959px) {
      margin-top: 20%;
      width: 65%;
    }

    @media only screen and (max-width: 599px) {
      margin-top: 50%;
      width: 80%;
    }
  }
}

<!-- Card Payment Form By Strip  -->

Named as Strip Component 

