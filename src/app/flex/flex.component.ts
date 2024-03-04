import { Component, OnInit } from '@angular/core';
import { AlertmessagesService } from '../services/alertmessages.service';

@Component({
  selector: 'app-flex',
  templateUrl: './flex.component.html',
  styleUrls: ['./flex.component.scss']
})
export class FlexComponent implements OnInit {

  constructor(private alert:AlertmessagesService) { }

  ngOnInit(): void {
    // setInterval(() => {this.someFunction()},3000)

  }

  // async someFunction() {
  //   try {
  //     const result = await this.asyncOperation(); // Await the asynchronous operation
  
  //     // Handle the result
  //     console.log('Async operation completed:', result);
  //   } catch (error) {
  //     // Handle any errors that occurred during the async operation
  //     console.error('An error occurred:', error);
  //   }
  // }
  
  // async asyncOperation(): Promise<any> {
  //   return new Promise<any>((resolve, reject) => {
  //     // Simulating an asynchronous operation, such as an HTTP request
  //     setTimeout(() => {
  //       const randomValue = Math.random();
  //       this.alert.showInfo(randomValue)
  
  //       if (randomValue > 0.5) {
  //         resolve('Success'); // Resolve the promise with a value
  //       } else {
  //         reject('failure'); // Reject the promise with an error
  //       }
  //     }, 2000);
  //   });
  // }

}
