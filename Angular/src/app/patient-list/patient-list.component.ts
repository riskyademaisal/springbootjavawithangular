import { Component, OnInit } from '@angular/core';
import { PatientService } from '../patient.service';
import { Patient } from '../patient';
import { Observable,Subject } from "rxjs";

import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

 constructor(private patientService:PatientService) { }

  patientsArray: any[] = [];
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any>= new Subject();


  patients: Observable<Patient[]>;
  patient : Patient=new Patient();
  deleteMessage=false;
  patientlist:any;
  isupdated = false;


  ngOnInit() {
    this.isupdated=false;
    this.dtOptions = {
      pageLength: 6,
      stateSave:true,
      lengthMenu:[[6, 16, 20, -1], [6, 16, 20, "All"]],
      processing: true
    };
    this.patientService.getPatientList().subscribe(data =>{
    this.patients =data;
    this.dtTrigger.next();
    })
  }

  deletePatient(id: number) {
    this.patientService.deletePatient(id)
      .subscribe(
        data => {
          console.log(data);
          this.deleteMessage=true;
          this.patientService.getPatientList().subscribe(data =>{
            this.patients =data
            })
        },
        error => console.log(error));
  }


  updatePatient(id: number){
    this.patientService.getPatient(id)
      .subscribe(
        data => {
          this.patientlist=data
        },
        error => console.log(error));
  }

  patientupdateform=new FormGroup({
    pid:new FormControl(),
    first_name:new FormControl(),
    last_name:new FormControl(),
    address:new FormControl()
  });

  updatePat(updpat){
    this.patient=new Patient();
   this.patient.pid=this.PatientId.value;
   this.patient.first_name=this.PatientFirstName.value;
   this.patient.last_name=this.PatientLastName.value;
   this.patient.address=this.PatientAddress.value;
   console.log(this.PatientAddress.value);


   this.patientService.updatePatient(this.patient.pid,this.patient).subscribe(
    data => {
      this.isupdated=true;
      this.patientService.getPatientList().subscribe(data =>{
        this.patients =data
        })
    },
    error => console.log(error));
  }

  get PatientFirstName(){
    return this.patientupdateform.get('first_name');
  }

  get PatientLastName(){
    return this.patientupdateform.get('last_name');
  }

  get PatientAddress(){
    return this.patientupdateform.get('address');
  }

  get PatientId(){
    return this.patientupdateform.get('pid');
  }

  changeisUpdate(){
    this.isupdated=false;
  }
}
