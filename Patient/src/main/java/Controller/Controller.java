package Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import Model.Patient;
import Service.Patient_Service;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping(value="/api")
public class Controller {
	
	@Autowired
	private Patient_Service patientservice;
	
	@PostMapping("save-patient")
	public boolean savePatient(@RequestBody Patient patient) {
		 return patientservice.savePatient(patient);
		
	}
	
	@GetMapping("patients-list")
	public List<Patient> allpatients() {
		 return patientservice.getPatients();
	}
	
	
	@DeleteMapping("delete-patient/{pid}")
	public boolean deletePatient(@PathVariable("pid") int pid,Patient patient) {
		patient.setPid(pid);
		return patientservice.deletePatient(patient);
	}

	@GetMapping("patient/{pid}")
	public List<Patient> allpatientByID(@PathVariable("pid") int pid,Patient patient) {
		 patient.setPid(pid);
		 return patientservice.getPatientByID(patient);
		
	}
	
	@PostMapping("update-patient/{pid}")
	public boolean updatePatient(@RequestBody Patient patient,@PathVariable("pid") int pid) {
		patient.setPid(pid);
		return patientservice.updatePatient(patient);
	}
}
