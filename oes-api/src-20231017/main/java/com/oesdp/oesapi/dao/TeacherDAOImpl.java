package com.oesdp.oesapi.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.oesdp.oesapi.model.Student;
import com.oesdp.oesapi.model.Teacher;

import jakarta.persistence.EntityManager;

@Repository
public class TeacherDAOImpl implements TeacherDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Teacher> get() {
		Session currentSession= entityManager.unwrap(Session.class);
		Query<Teacher> query = currentSession.createQuery("from Teacher", Teacher.class);
		List<Teacher> list=query.getResultList();
		return list;		
	}

	@Override
	public Teacher get(int id) {		
	Session currentSession= entityManager.unwrap(Session.class);
	Teacher teacher = currentSession.get(Teacher.class, id);
	return teacher;
	}

	@Override
	public void save(Teacher teacher) {
		Session currentSession= entityManager.unwrap(Session.class);
		Teacher t=new Teacher();
		t.setRegistrationno(teacher.getRegistrationno());
		t.setTitle(teacher.getTitle());
		t.setFirstName(teacher.getFirstName());
		t.setMiddleName(teacher.getMiddleName());
		t.setLastName(teacher.getLastName());
		t.setGender(teacher.getGender());
		t.setContactNo(teacher.getContactNo());
		t.setEmailId(teacher.getEmailId());
		t.setStreet1(teacher.getStreet1());
		t.setStreet2(teacher.getStreet2());
		t.setCity(teacher.getCity());
		t.setState(teacher.getState());
		t.setPincode(teacher.getPincode());
		currentSession.persist(t);
		
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		Session currentSession= entityManager.unwrap(Session.class);
		Teacher teacher = currentSession.get(Teacher.class, id);
		if(teacher!=null) {
			currentSession.remove(teacher);
		}
		
	}

	@Override
	public void update(Teacher teacher) {
		Session currentSession= entityManager.unwrap(Session.class);
		currentSession.merge(teacher);
		
	}
	
	@Override
	public Teacher findByRegistratioNo(String RegistrationNo){
		Session currentSession= entityManager.unwrap(Session.class);
		Teacher teacher = currentSession.byNaturalId(Teacher.class)
		                   .using("registrationno",RegistrationNo)
		                   .load();
		return teacher;
		                   
	}
	

}
