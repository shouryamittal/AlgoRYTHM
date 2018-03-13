import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {
  userEmail:string="";
  password:string="";
  confirmpassword:string="";
  constructor() { }

  ngOnInit() {
  }
  register()
  {
   console.log("email is: "+this.userEmail);
  }
}
