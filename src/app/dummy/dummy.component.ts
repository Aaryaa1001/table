import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertmessagesService } from '../services/alertmessages.service';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-dummy',
  templateUrl: './dummy.component.html',
  styleUrls: ['./dummy.component.scss']
})
export class DummyComponent implements OnInit {
  step = 0;

  productionForm!: FormGroup;
  userForm!: FormGroup;
  // userData: any;


  prodData: any= {
    groups: [
      {
              "disc":"Applicant 1",
              "keysList":[
                {
                  "KEY_NAME":"TEST 1",
                  "KEY_VALUE":1,
                  "IS_REQUIRED":"N",
                  "IS_SHOW":"Y"
                },
                {
                  "KEY_NAME":"TEST 2",
                  "KEY_VALUE":2,
                  "IS_REQUIRED":"N",
                  "IS_SHOW":"Y"
                },
                {
                  "KEY_NAME":"TEST 3",
                  "KEY_VALUE":3,
                  "IS_REQUIRED":"N",
                  "IS_SHOW":"Y"
                },
                {
                  "KEY_NAME":"TEST 4",
                  "KEY_VALUE":4,
                  "IS_REQUIRED":"N",
                  "IS_SHOW":"Y"
                },
                {
                  "KEY_NAME":"TEST 5",
                  "KEY_VALUE":5,
                  "IS_REQUIRED":"N",
                  "IS_SHOW":"Y"
                }
              ]
            
            },
            {
              "disc":"Applicant 2",
              "keysList":[
                {
                  "KEY_NAME":"TEST 1",
                  "KEY_VALUE":6,
                  "IS_REQUIRED":"N",
                  "IS_SHOW":"Y"
                },
                {
                  "KEY_NAME":"TEST 2",
                  "KEY_VALUE":7,
                  "IS_REQUIRED":"N",
                  "IS_SHOW":"Y"
                },
                {
                  "KEY_NAME":"TEST 3",
                  "KEY_VALUE":8,
                  "IS_REQUIRED":"N",
                  "IS_SHOW":"Y"
                }
              
              ]
            
            },
            {
              "disc":"Applicant 3",
              "keysList":[
                {
                  "KEY_NAME":"TEST 1",
                  "KEY_VALUE":9,
                  "IS_REQUIRED":"N",
                  "IS_SHOW":"Y"
                },
                {
                  "KEY_NAME":"TEST 2",
                  "KEY_VALUE":10,
                  "IS_REQUIRED":"N",
                  "IS_SHOW":"Y"
                }
              
              ]
            
            },
    ]
  };

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

  savebtn(index:any){
    // console.log(this.productionForm.get('production')(this.prodData.groups[index]))

    console.log(this.productionForm.get('production'))
    console.log(this.userForm)

  }

  prevStep() {
    this.step--;
  }

  get usersArray() {
    return <FormArray>this.userForm.get('users');
  }

  get userData(){
   
    return this.userForm.get("users") as FormArray;
  }
  
  track(item: any, index: number) {
    return index;
  }

  onChange($event: MatSlideToggleChange,index:any,j:any,key:any) {
    console.log($event);
    console.log(index)
    console.log(j)
    console.log(this.productionForm)
    if($event.checked == true){
      this.prodData.groups[index].keysList[j][key] = 'Y'
      // this.userForm['controls']['users'].controls[2].controls.cars.controls[0].controls.IS_REQUIRED
      
    }
    else{
      this.prodData.groups[index].keysList[j][key]= 'N'
    }
    console.log(this.prodData.groups[index].keysList[j][key])
console.log(this.userForm)
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
    this.productionForm = this.fb.group({
      production: this.fb.array(
        this.prodData
          // for each...
          .groups
          .reduce((acc: any, group: { keysList: any[];disc:any }) => [
            ...acc,
            // ...product of each group
            ...group.keysList.map((product: {  KEY_NAME: any; KEY_VALUE: any; IS_REQUIRED: any; IS_SHOW: any; }) =>
              // create a form group
              this.fb.group({
                KEY_NAME: [product.KEY_NAME],
                KEY_VALUE: [product.KEY_VALUE],
                IS_REQUIRED: [product.IS_REQUIRED],
                IS_SHOW: [product.IS_SHOW],
              })
            )
          ], [])
      ),
      selected:[null]
    })


    this.userForm = this.fb.group({
      users: this.fb.array([]),
    });
   
    this.displayUsers();
  }


  createCarFormGroup(car: any) {
    return this.fb.group({
      KEY_NAME: [car.KEY_NAME],
      KEY_VALUE: [car.KEY_VALUE],
      IS_REQUIRED: [car.IS_REQUIRED],
      IS_SHOW: [car.IS_SHOW],
    });
  }

  loadCarsArray(cars: any[]) {
    let transformedCars = cars.map((car: any) => this.createCarFormGroup(car));
    return transformedCars;
  }


  displayUsers() {
    let transformedUsers = this.prodData.groups.map((user: any) =>
      this.createUserFormGroup(user)
    );
    this.userForm.setControl('users', this.fb.array(transformedUsers));
  }



  createUserFormGroup(user: any) {
    return this.fb.group({
      disc: [{ value: user.disc}],
    
      cars: this.fb.group(this.loadCarsArray(user.keysList)),
    });
  }
}
