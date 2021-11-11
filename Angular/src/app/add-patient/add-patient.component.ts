import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import {FormControl,FormGroup,Validators} from '@angular/forms';
import { Patient } from '../patient';
@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  constructor(private patientService:PatientService) { }

  patient : Patient=new Patient();
  submitted = false;

  ngOnInit() {
    this.submitted=false;
  }

  patientsaveform=new FormGroup({
    //first_name:new FormControl('' , [Validators.required , Validators.minLength(5) ] ),
    //last_name:new FormControl('',[Validators.required,Validators.email]),
    first_name:new FormControl(),
    last_name:new FormControl(),
    address:new FormControl()
  });

  savePatient(savePatient){
    this.patient=new Patient();
    this.patient.first_name=this.PatientFirstName.value;
    this.patient.last_name=this.PatientLastName.value;
    this.patient.address=this.PatientAddress.value;
    this.submitted = true;
    this.save();
  }



  save() {
    this.patientService.createPatient(this.patient)
      .subscribe(data => console.log(data), error => console.log(error));
    this.patient = new Patient();
  }

  get PatientFirstName(){
    return this.patientsaveform.get('first_name');
  }

  get PatientLastName(){
    return this.patientsaveform.get('last_name');
  }

  get PatientAddress(){
    return this.patientsaveform.get('address');
  }

  addPatientForm(){
    this.submitted=false;
    this.patientsaveform.reset();
  }
}
