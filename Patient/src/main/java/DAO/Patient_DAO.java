package DAO;

import java.util.List;

import Model.Patient;

public interface Patient_DAO {

	public boolean savePatient(Patient patient);
	public List<Patient> getPatients();
	public boolean deletePatient(Patient patient);
	public List<Patient> getPatientByID(Patient patient);
	public boolean updatePatient(Patient patient);
}
