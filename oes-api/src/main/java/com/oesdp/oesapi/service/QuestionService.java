package com.oesdp.oesapi.service;

import java.util.List;

import com.oesdp.oesapi.model.Question;

public interface QuestionService { 
	
	List<Question> get();
	List<Question> getBySubject(int subjectID);
	
	Question get(int id);
	
	void save(Question question);
	
	void delete(int id);
	
	void update(Question question);
	

}

