import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertmessagesService } from '../services/alertmessages.service';



@Component({
  selector: 'app-accordian',
  templateUrl: './accordian.component.html',
  styleUrls: ['./accordian.component.scss']
})
export class AccordianComponent implements OnInit {

  step = 0;

  data = [
    { id: 1, title: 'Chief Delivery Officer', name:'Govindrajan Kadambi' , company :'Sterling Software private limited' },
    { id: 2, title: 'Associate Vice President', name:'Velmurugan KA' , company :'Sterling Software private limited' },
    { id: 3, title: 'Senior Project Manager' , name:'Pazhani S' , company :'Sterling Software private limited' },
    { id: 4, title: 'Team Lead' , name:'Murugesan N' , company :'Sterling Software private limited' },
    { id: 5, title: 'Software Engineer' , name:'A.Annamalai Raja' , company :'Sterling Software private limited' }
  ];
  form = this.fb.group({
    selected: [null]
  });
  selectedvalue: any;


  constructor(private fb: FormBuilder,private router: Router,private alertmessages: AlertmessagesService) { }

  setStep(selected: any) {
    this.form.patchValue({ selected });

    // console.log("selected value is" , selected)
    this.selectedvalue = selected || "";
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  noop(event: MouseEvent) {
    console.log('noop', event);
    event.preventDefault();
    event.stopPropagation();
  }

  submitbtn(){
    if(!!this.selectedvalue){
      console.log("selected value is",this.selectedvalue)
    }
    else{
      console.log("please select a accordian")
      this.alertmessages.showError("please select a accordian")
    }
  }

  logbtn(){
    console.log("logged out")
    this.alertmessages.showSuccess("Logged Out")
    setTimeout( ()=>{
      this.router.navigate([`/login`]);
    }, 1000)
  }

  ngOnInit(): void {
  }

}
