import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.scss']
})
export class TabledataComponent implements OnInit {

  orderForm!: FormGroup;
  items!: FormArray;
  newform!:FormGroup;
  arr1;

  
  constructor(private fb: FormBuilder) {
  
   }

   addformgroup(){
    this.fb.group({
      name: '',
      description: '',
      price: '',
      tag: '',
      brand: '',
      
    })
   }

  //  loopformgrouo(){
  //  this.newform = this.fb.group({
  //     name: '',
  //     description: '',
  //     price: '',
  //     tag: '',
  //     brand: '',
  //     arr1 : new FormArray([])
      
  //   })


  //   const studentGroup = new FormGroup({
  //     id: new FormControl(obj.id),
  //     name: new FormControl(obj.name),
  //     subjects: new FormArray([])
  //   });
  //   let arr;
  //   for(let i=0 ; i< 5;i ++){
  //   arr.push( this.fb.group({
  //     name: '',
  //     description: '',
  //     price: '',
  //     tag: '',
  //     brand: '',
      
  //   }))
  // }
  // const subjectArray = this.newform.get('arr1') as FormArray;
  // subjectArray = (arr)
  //   console.log(subjectArray)
  //   console.log(arr)
   
  //   // const subjectArray = this.newform.get('students') as FormArray;
  //   // for(let i=0;i< 5;i++){
  //   //   subjectArray.push(this.newform)
  //   // }
  //   // console.log(subjectArray)
  //  }

  ngOnInit(): void {
    // this.orderForm = this.fb.group({
    //   customerName: '',
    //   email: '',
    //   items: this.fb.array([ this.createItem() ])
    // });
    // this.loopformgrouo()
    this.arr1  = []
    let a  ={
      "name":"Benz",
      "description":"The best",
      "price":"50L",
      "tag":"Car",
      "brand":"Benz",
    }
    for(let i =0;i <500;i++){
    this.arr1.push(a)
    }
    console.log(this.arr1)
  }

  
  addItem(): void {
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
  }



  createItem(): FormGroup {
    return this.fb.group({
      name: '',
      description: '',
      price: '',
      tag: '' ,
      brand: ''
    });
  }
  

}
