package com.oesdp.oesapi.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.oesdp.oesapi.model.Subject;

import jakarta.persistence.EntityManager;

@Repository
public class SubjectDAOImpl implements SubjectDAO {

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Subject> get() {
		Session currentSession= entityManager.unwrap(Session.class);
		Query<Subject> query = currentSession.createQuery("from Subject", Subject.class);
		List<Subject> list=query.getResultList();
		return list;
	}

	@Override
	public Subject get(int id) {
		Session currentSession= entityManager.unwrap(Session.class);
		Subject subject = currentSession.get(Subject.class, id);
		return subject;
	}

	@Override
	public void save(Subject subject) {
		Session currentSession= entityManager.unwrap(Session.class);
		Subject s = new Subject();
		s.setName(subject.getName());
		s.setDescription(subject.getDescription());
		currentSession.persist(s);	
	}

	@Override
	public void delete(int id) {
		Session currentSession= entityManager.unwrap(Session.class);
		Subject subject = currentSession.get(Subject.class, id);
		if(subject!=null) {
			currentSession.remove(subject);
		}
	}

	@Override
	public void update(Subject subject) {
		Session currentSession= entityManager.unwrap(Session.class);
		currentSession.merge(subject);
	}
	

}
