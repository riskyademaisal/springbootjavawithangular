package Service;

import java.util.List;

import Model.Patient;

public interface Patient_Service {

	
	public boolean savePatient(Patient patient);
	public List<Patient> getPatients();
	public boolean deletePatient(Patient patient);
	public List<Patient> getPatientByID(Patient patient);
	public boolean updatePatient(Patient patient);
}
