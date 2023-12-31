package com.oesdp.oesapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.oesdp.oesapi.dao.QuestionDAO;
import com.oesdp.oesapi.model.Question;

@Service
public class QuestionServiceImpl implements QuestionService {

	@Autowired
	private QuestionDAO questionDAO;

	@Transactional
	@Override
	public List<Question> get() {
		return questionDAO.get();
	}

	@Transactional
	@Override
	public Question get(int id) {
		return questionDAO.get(id);
	}

	@Transactional
	@Override
	public void save(Question question) {
		questionDAO.save(question);	
	}

	@Transactional
	@Override
	public void delete(int id) {
		questionDAO.delete(id);	
	}

	@Transactional
	@Override
	public void update(Question question) {
		questionDAO.update(question);	
	}
}
