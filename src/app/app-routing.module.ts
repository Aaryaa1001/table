import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component';
import { EncryptdecryptComponent } from './encryptdecrypt/encryptdecrypt.component';
import { FlexComponent } from './flex/flex.component';
import { AccordianComponent } from './accordian/accordian.component';
import { ArrayComponent } from './array/array.component';
import { DummyComponent } from './dummy/dummy.component';
import { TabledataComponent } from './tabledata/tabledata.component';



const routes: Routes = [
  {path:'',redirectTo:'login',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'accordian',component:AccordianComponent},
  {path:'home',component:HomeComponent},
  {path:'encdec',component:EncryptdecryptComponent},
  {path:'flex',component:FlexComponent},
  {path:'array',component:ArrayComponent},
  {path:'dummy',component:DummyComponent},
  {path:'tablecomp',component:TabledataComponent},
  {path:'**',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
