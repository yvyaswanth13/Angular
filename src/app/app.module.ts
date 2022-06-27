import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule,routingComponents} from './app-routing.module';

import { AppComponent } from './app.component';
import { EmpService } from './emp.service';
import { EmpdetailsComponent } from './empdetails/empdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    EmpdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [ EmpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
