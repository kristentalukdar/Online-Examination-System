package com.oesdp.oesapi.service;

import java.util.List;

import com.oesdp.oesapi.model.Exam;

public interface ExamService {
	List<Exam> get();
	
	Exam get(int id);
	
	void save(Exam exam);
	
	void delete(int id);
	
	void update(Exam exam);

}
