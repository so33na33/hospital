import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HospitalComponent } from './hospital/hospital.component';
import { SearchComponent } from './search/search.component';
import { ViewDoctorsComponent } from './view-doctors/view-doctors.component';

@NgModule({
  declarations: [
    AppComponent,
    HospitalComponent,
    SearchComponent,
    ViewDoctorsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
