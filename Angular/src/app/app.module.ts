import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PartnerlistComponent } from './partnerlist/partnerlist.component';
import {DataTablesModule} from 'angular-datatables';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    PartnerlistComponent,
    PatientListComponent,
    AddPatientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
