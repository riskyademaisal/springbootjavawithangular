package Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import Model.Patient;
import DAO.Patient_DAO;

@Service
@Transactional
public class Patient_Service_Imp implements Patient_Service {
 
	@Autowired
	private Patient_DAO patientdao;
	
	@Override
	public boolean savePatient(Patient patient) {
		return patientdao.savePatient(patient);
	}

	@Override
	public List<Patient> getPatients() {
		return patientdao.getPatients();
	}

	@Override
	public boolean deletePatient(Patient patient) {
		return patientdao.deletePatient(patient);
	}

	@Override
	public List<Patient> getPatientByID(Patient patient) {
		return patientdao.getPatientByID(patient);
	}

	@Override
	public boolean updatePatient(Patient patient) {
		return patientdao.updatePatient(patient);
	}

}
