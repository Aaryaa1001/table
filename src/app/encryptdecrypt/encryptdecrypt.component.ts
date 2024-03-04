import { Component, OnInit } from '@angular/core';
import * as CryptoJS from 'crypto-js'; 


@Component({
  selector: 'app-encryptdecrypt',
  templateUrl: './encryptdecrypt.component.html',
  styleUrls: ['./encryptdecrypt.component.scss']
})
export class EncryptdecryptComponent implements OnInit {

  plainText!: string;  
  encryptText!: string;  
  encPassword!: string;  
  decPassword!: string;  
  conversionEncryptOutput!: string;  
  conversionDecryptOutput!: string; 

  constructor() { }
  

  ngOnInit(): void {
    
  }

    //method is used to encrypt and decrypt the text  
    convertText(conversion:string) {  
      if (conversion=="encrypt") {  
        this.conversionEncryptOutput = CryptoJS.AES.encrypt(this.plainText.trim(), this.encPassword.trim()).toString();  
      }  
      else {  
        this.conversionDecryptOutput = CryptoJS.AES.decrypt(this.encryptText.trim(), this.decPassword.trim()).toString(CryptoJS.enc.Utf8);  
       
    }  
  }  

}
