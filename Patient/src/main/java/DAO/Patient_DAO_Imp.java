package DAO;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;


import Model.Patient;

@Repository
public class Patient_DAO_Imp  implements Patient_DAO{

	@Autowired
	private SessionFactory sessionFactory;
	
	@Override
	public boolean savePatient(Patient patient) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().save(patient);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Patient> getPatients() {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Patient> query=currentSession.createQuery("from Patient", Patient.class);
		List<Patient> list=query.getResultList();
		return list;
	}

	@Override
	public boolean deletePatient(Patient patient) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().delete(patient);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}

	@Override
	public List<Patient> getPatientByID(Patient patient) {
		Session currentSession = sessionFactory.getCurrentSession();
		Query<Patient> query=currentSession.createQuery("from Patient where pid=:pid", Patient.class);
		query.setParameter("pid", patient.getPid());
		List<Patient> list=query.getResultList();
		return list;
	}

	@Override
	public boolean updatePatient(Patient patient) {
		boolean status=false;
		try {
			sessionFactory.getCurrentSession().update(patient);
			status=true;
		} catch (Exception e) {
			e.printStackTrace();
		}
		return status;
	}
	
	

}
