import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class PatientService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getPatientList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'patients-list');
  }

  createPatient(patient: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'save-patient', patient);
  }

  deletePatient(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/delete-patient/${id}`, { responseType: 'text' });
  }

  getPatient(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/patient/${id}`);
  }

  updatePatient(id: number, value: any): Observable<Object> {
    return this.http.post(`${this.baseUrl}/update-patient/${id}`, value);
  }

}
