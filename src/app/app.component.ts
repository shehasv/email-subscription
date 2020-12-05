import { Component,OnInit } from '@angular/core';
import {FormBuilder,Validators} from '@angular/forms';
import { SubscriptionService } from './subscription.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  get email(){
    return this.subscribeForm.get('email')
  }

  constructor(private fb:FormBuilder,private _subscriptionService: SubscriptionService){}

  subscribeForm = this.fb.group({
    email: ['',[Validators.required,Validators.email]],
  })


  ngOnInit(): void {
  }

  subscribe(){
    if(this.subscribeForm.get('email').value === '' || null){
      alert('email is required')
    }
    else{
      console.log(this.subscribeForm.value)
      this._subscriptionService.subscribe(this.subscribeForm.value)
        .subscribe(
          response => console.log("Success",response),
          error => console.log("error",error)
        )
    }
    this.subscribeForm.reset();
  }

}
