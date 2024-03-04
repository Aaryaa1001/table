import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LoginComponent } from './login/login.component';
import  {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { EncryptdecryptComponent } from './encryptdecrypt/encryptdecrypt.component';
import * as CryptoJS from 'crypto-js'; 
import { FormsModule, ReactiveFormsModule,FormBuilder,FormGroup } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AccordianComponent } from './accordian/accordian.component';
import { ArrayComponent } from './array/array.component';
import { DummyComponent } from './dummy/dummy.component';
import { TabledataComponent } from './tabledata/tabledata.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagenotfoundComponent,
    LoginComponent,
    EncryptdecryptComponent,
    AccordianComponent,
    ArrayComponent,
    DummyComponent,
    TabledataComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxSpinnerModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
