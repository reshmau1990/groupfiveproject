import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fee-payemt',
  templateUrl: './fee-payemt.component.html',
  styleUrls: ['./fee-payemt.component.css']
})
export class FeePayemtComponent implements OnInit {

  constructor() { }
  handler:any = null;
  ngOnInit(): void {
    this.loadStripe();
  }
  pay(amount:any) {    
 
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
      locale: 'auto',
      token: function (token: any) {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token)
        alert('Payment Successful!!');
      }
    });
 
    handler.open({
      name: 'Stripe Payment',
      description: '',
      amount: amount * 1000
    });
 
  }
 
  loadStripe() {
    if(!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement("script");
      s.id = "stripe-script";
      s.type = "text/javascript";
      s.src = "https://checkout.stripe.com/checkout.js";
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_aeUUjYYcx4XNfKVW60pmHTtI',
          locale: 'auto',
          token: function (token: any) {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token)
            alert('Payment Success!!');
          }
        });
      }
      window.document.body.appendChild(s);
    }
  }
}   
      

