package com.oesdp.oesapi.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.oesdp.oesapi.model.Student;
import com.oesdp.oesapi.model.Subject;

import jakarta.persistence.EntityManager;

@Repository
public class StudentDAOImpl implements StudentDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Student> get() {
		Session currentSession= entityManager.unwrap(Session.class);
		Query<Student> query = currentSession.createQuery("from Student", Student.class);
		List<Student> list=query.getResultList();
		return list;		
	}

	@Override
	public Student get(int id) {		
	Session currentSession= entityManager.unwrap(Session.class);
	Student student = currentSession.get(Student.class, id);
	return student;
	}

	@Override
	public void save(Student student) {
		Session currentSession= entityManager.unwrap(Session.class);
		Student s=new Student();
		s.setRegistrationno(student.getRegistrationno());
		s.setTitle(student.getTitle());
		s.setFirstName(student.getFirstName());
		s.setMiddleName(student.getMiddleName());
		s.setLastName(student.getLastName());
		s.setGender(student.getGender());
		s.setContactNo(student.getContactNo());
		s.setEmailId(student.getEmailId());
		s.setStreet1(student.getStreet1());
		s.setStreet2(student.getStreet2());
		s.setCity(student.getCity());
		s.setState(student.getState());
		s.setPincode(student.getPincode());
		s.setPassword(student.getPassword());
		currentSession.persist(s);
		
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		Session currentSession= entityManager.unwrap(Session.class);
		Student student = currentSession.get(Student.class, id);
		if(student!=null) {
			currentSession.remove(student);
		}
		
	}

	@Override
	public void update(Student student) {
		Session currentSession= entityManager.unwrap(Session.class);
		currentSession.merge(student);
		
	}
	
	@Override
	public Student findStudentByRegistratioNo(String RegistrationNo){
		Session currentSession= entityManager.unwrap(Session.class);
		Student student = currentSession.byNaturalId(Student.class)
		                   .using("registrationno",RegistrationNo)
		                   .load();
		return student;
		                   
	}
	
	@Override
	public Student validateStudent(String RegistrationNo, String Password) {
		Session currentSession= entityManager.unwrap(Session.class);
		Student student = currentSession.byNaturalId(Student.class)
		                   .using("registrationno",RegistrationNo)
		                   .using("password",Password)
		                   .load();
		return student;
	}

}
