import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EmpService } from './emp.service';


const routes: Routes=[
  {path:'Login',component:LoginComponent},
  {path:'SignUp',component:RegisterComponent}
  //{path:'SignUp',component:Emplo}
  
];
@NgModule({
  declarations: [],
  imports: [ 
    RouterModule.forRoot(routes)
    
    
  ],
  exports:[RouterModule]
 

})
export class AppRoutingModule { }
export const routingComponents=[LoginComponent,RegisterComponent]
