import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { PartnerlistComponent } from './partnerlist/partnerlist.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { AddPatientComponent } from './add-patient/add-patient.component';

const routes: Routes = [
  { path: '', redirectTo: 'view-patient', pathMatch: 'full' },
  { path: 'view-patient', component: PatientListComponent },
  { path: 'add-patient', component: AddPatientComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
