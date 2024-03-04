import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.scss']
})
export class ArrayComponent implements OnInit {

  form!: FormGroup;
  productionForm!: FormGroup;
  prodData: any= {
    groups: [
      {
        id: 'group-green',
        name: 'Group Green',
        products: [
          {
            name: 'Product Car',
            begTally: 23,
            endTally: 25,
          }
        ]
      },
      {
        id: 'group-blue',
        name: 'Group Blue',
        products: [
          {
            name: 'Product Flower',
            begTally: 13,
            endTally: 32,
          },
          {
            name: 'Product Food',
            begTally: 21,
            endTally: 29,
          }
        ]
      },
    ]
  };

  // array! : any;
  constructor(private fb:FormBuilder){
    // this.togglearray()

   
    // this.formInit();
  }

  

  // formInit(){
  //   this.form = this.fb.group({
  //     skills: this.fb.array([
  //       this.fb.group({
  //         name:['JavaScript'],
  //         checked:[true]
  //       }),
  //       this.fb.group({
  //         name:['Angular'],
  //         checked:[false]
  //       }),
  //       this.fb.group({
  //         name:['React Js'],
  //         checked:[true]
  //       })
  //     ])
  //   })

  //   console.log(this.form.getRawValue());
  // }

  // formInit(){
  //   // let formGroup1: { [x: string]: any[]; };
  //   // this.array.forEach((control: { name: string | number; value: any; }) => {
  //   //   formGroup1[control.keysList.IS_REQUIRED] = [control.value || ''];
  //   // });

  //   this.form = this.fb.group({
  //     skills: this.fb.array([
  //       this.fb.group({
  //         name:['JavaScript'],
  //         checked:[true]
  //       }),
  //       this.fb.group({
  //         name:['Angular'],
  //         checked:[false]
  //       }),
  //       this.fb.group({
  //         name:['React Js'],
  //         checked:[true]
  //       })
  //     ])
  //   })

  //   console.log(this.form.getRawValue());
  // }


  // public get skills(){
  //   return this.form.get('skills') as FormArray;
  // }

  // check(index:any){
  //   console.log(this.form.get('skills') as FormArray)
  //   console.log(index,"index");
  // }


  // togglearray(){
  //   this.array = [
  //     {
  //       "disc":"Applicant 1",
  //       "keysList":[
  //         {
  //           "KEY_NAME":"TEST 1",
  //           "KEY_VALUE":10,
  //           "IS_REQUIRED":"N",
  //           "IS_SHOW":"Y"
  //         },
  //         {
  //           "KEY_NAME":"TEST 2",
  //           "KEY_VALUE":10,
  //           "IS_REQUIRED":"N",
  //           "IS_SHOW":"Y"
  //         },
  //         {
  //           "KEY_NAME":"TEST 3",
  //           "KEY_VALUE":10,
  //           "IS_REQUIRED":"N",
  //           "IS_SHOW":"Y"
  //         },
  //         {
  //           "KEY_NAME":"TEST 4",
  //           "KEY_VALUE":10,
  //           "IS_REQUIRED":"N",
  //           "IS_SHOW":"Y"
  //         },
  //         {
  //           "KEY_NAME":"TEST 5",
  //           "KEY_VALUE":10,
  //           "IS_REQUIRED":"N",
  //           "IS_SHOW":"Y"
  //         }
  //       ]
      
  //     },
  //     {
  //       "disc":"Applicant 2",
  //       "keysList":[
  //         {
  //           "KEY_NAME":"TEST 1",
  //           "KEY_VALUE":10,
  //           "IS_REQUIRED":"N",
  //           "IS_SHOW":"Y"
  //         },
  //         {
  //           "KEY_NAME":"TEST 2",
  //           "KEY_VALUE":10,
  //           "IS_REQUIRED":"N",
  //           "IS_SHOW":"Y"
  //         },
  //         {
  //           "KEY_NAME":"TEST 3",
  //           "KEY_VALUE":10,
  //           "IS_REQUIRED":"N",
  //           "IS_SHOW":"Y"
  //         }
        
  //       ]
      
  //     },
  //     {
  //       "disc":"Applicant 3",
  //       "keysList":[
  //         {
  //           "KEY_NAME":"TEST 1",
  //           "KEY_VALUE":10,
  //           "IS_REQUIRED":"N",
  //           "IS_SHOW":"Y"
  //         },
  //         {
  //           "KEY_NAME":"TEST 2",
  //           "KEY_VALUE":10,
  //           "IS_REQUIRED":"N",
  //           "IS_SHOW":"Y"
  //         }
        
  //       ]
      
  //     },

  //   ]


  
  // }

  ngOnInit(): void {

    this.productionForm = this.fb.group({
      production: this.fb.array(
        this.prodData
          // for each...
          .groups
          .reduce((acc: any, group: { products: any[]; }) => [
            ...acc,
            // ...product of each group
            ...group.products.map((product: { begTally: any; endTally: any; }) =>
              // create a form group
              this.fb.group({
                begTally: [product.begTally],
                endTally: [product.endTally],
              })
            )
          ], [])
      )
    })
  }


}
