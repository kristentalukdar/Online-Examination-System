package com.oesdp.oesapi.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.oesdp.oesapi.model.Question;

import jakarta.persistence.EntityManager;

@Repository
public class QuestionDAOImpl implements QuestionDAO {

	@Autowired
	private EntityManager entityManager;

	@Override
	public List<Question> get() {
		Session currentSession= entityManager.unwrap(Session.class);
		Query<Question> query = currentSession.createQuery("from Question", Question.class);
		List<Question> list=query.getResultList();
		return list;
	}

	@Override
	public Question get(int id) {
		Session currentSession= entityManager.unwrap(Session.class);
		Question question = currentSession.get(Question.class, id);
		return question;
	}

	@Override
	public void save(Question question) {
		Session currentSession= entityManager.unwrap(Session.class);
		currentSession.persist(question);	
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub	
	}

	@Override
	public void update(Question question) {
		Session currentSession= entityManager.unwrap(Session.class);
		currentSession.merge(question);
	}
}
