package com.oesdp.oesapi.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import com.oesdp.oesapi.model.Exam;
import jakarta.persistence.EntityManager;

@Repository
public class ExamDAOImpl implements ExamDAO {

	@Autowired
	private EntityManager entityManager;
	
	@Override
	public List<Exam> get() {
		Session currentSession= entityManager.unwrap(Session.class);
		Query<Exam> query = currentSession.createQuery("from Exam", Exam.class);
		List<Exam> list=query.getResultList();
		return list;
	}

	@Override
	public Exam get(int id) {
		Session currentSession= entityManager.unwrap(Session.class);
		Exam exam = currentSession.get(Exam.class, id);
		return exam;
	}

	@Override
	public void save(Exam exam) {
		Session currentSession= entityManager.unwrap(Session.class);
		Exam e = new Exam();
		e.setNoofquestions(exam.getNoofquestions());
		e.setDescription(exam.getDescription());
		e.setSubjectid(exam.getSubjectid());
		currentSession.persist(e);	
	}

	@Override
	public void delete(int id) {
		Session currentSession= entityManager.unwrap(Session.class);
		Exam exam = currentSession.get(Exam.class, id);
		if(exam!=null) {
			currentSession.remove(exam);
		}
	}

	@Override
	public void update(Exam exam) {
		Session currentSession= entityManager.unwrap(Session.class);
		currentSession.merge(exam);
	}
	

}
