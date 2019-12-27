import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  loggedIn: boolean;
  loggedValue: any;
  hide: boolean;
  signinForm: FormGroup;
  constructor(private router: Router,private formBuilder: FormBuilder, private service: Service1Service) { }

  ngOnInit() {
    this.hide = true;
    this.signinForm = this.formBuilder.group({
      email: ['', [
        Validators.required,
        Validators.pattern(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/)
      ]],
    password: ['', [
      Validators.required,
      Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/)
    ]],
    });
  }
  onSubmit(signInForm: FormGroup){
    this.loggedValue = this.service.login(signInForm.value.email, signInForm.value.password);
    console.log(this.loggedValue);
    // this.loggedValue = true;
    if ( this.loggedValue === 'admin') {
      this.router.navigate(['/main']);
    } else {
      alert('Please login again');
      this.router.navigate(['/home']);
    }
  }
}
