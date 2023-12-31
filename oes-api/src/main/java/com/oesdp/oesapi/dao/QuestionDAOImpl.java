package com.oesdp.oesapi.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.oesdp.oesapi.model.Exam;
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
	public List<Question> getBySubject(int subjectID) {
		Session currentSession= entityManager.unwrap(Session.class);
		Query<Question> query = currentSession.createQuery("from Question where subject_id=1", Question.class);
		query.setParameter("SubjectID", Integer.toString(subjectID));
		List<Question> list= query.getResultList();
		return list;
	}
	
//	@Query(value="Select * from Question q where q.subject_id=?1", nativeQuery=true)
//	public List<Question> getQuestionBySubject(int subjectID);
	
	
	@Override
	public Question get(int id) {
		Session currentSession= entityManager.unwrap(Session.class);
		Question question = currentSession.get(Question.class, id);
		return question;
	}

	@Override
	public void save(Question question) {
		Session currentSession= entityManager.unwrap(Session.class);
		Question q = new Question();
		q.setQuestion(question.getQuestion());
		q.setChoice1(question.getChoice1());
		q.setChoice2(question.getChoice2());
		q.setChoice3(question.getChoice3());
		q.setChoice4(question.getChoice4());
		q.setChoice1correct(question.isChoice1correct());
		q.setChoice2correct(question.isChoice2correct());
		q.setChoice3correct(question.isChoice3correct());
		q.setChoice4correct(question.isChoice4correct());
		q.setSubject(question.getSubject());
		currentSession.persist(q);	
	}

	@Override
	public void delete(int id) {
		Session currentSession= entityManager.unwrap(Session.class);
		Question q = currentSession.get(Question.class, id);
		if(q!=null) {
			currentSession.remove(q);
		}	
	}

	@Override
	public void update(Question question) {
		Session currentSession= entityManager.unwrap(Session.class);
		currentSession.merge(question);
	}
}
