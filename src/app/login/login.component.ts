import { Component, OnInit } from '@angular/core';
import { HttpservicesService } from '../services/httpservices.service';
import { AlertmessagesService } from '../services/alertmessages.service';
import { NgxSpinnerService } from 'ngx-spinner';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private httpservice: HttpservicesService,
    private alertmessages: AlertmessagesService,
    private spinner: NgxSpinnerService,
    private fb: FormBuilder,private router: Router
  ) {}

  ngOnInit() {
    this.httpservice.getData().subscribe((data) => {
      console.log('heres data', data);
      console.log('JSON STRINGIFY', JSON.stringify(data));
      console.log('JSON PARSE', JSON.parse(JSON.stringify(data)));
    });

    this.loginForm = this.fb.group({
      emailid: ['', [Validators.required, Validators.email,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      password: ['', Validators.required],
    });
  }

  //show hide div variables
  userlogin = true;
  userregister = false;
  //Buttons clicks functionalities
  user_register() {
    this.userlogin = false;
    this.userregister = true;
  }
  user_login() {
    this.userlogin = true;
    this.userregister = false;
  }
  submitbutton() {
    console.log(this.loginForm)
    if(this.loginForm.status == 'INVALID'){
      this.alertmessages.showError("Please fill the details")
    }
    else if(this.loginForm.status == 'VALID') {
    this.alertmessages.showSuccess("Welcome User")
    setTimeout( ()=>{
      this.router.navigate([`/accordian`]);
    }, 1000)
    }
    // this.alertmessages.showInfo("submit button clicked")
    // this.alertmessages.showSuccess("hi")
    // this.spinner.show()
  }
}
