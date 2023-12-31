package com.oesdp.oesapi.dao;

import java.util.List;

import com.oesdp.oesapi.model.Exam;

public interface ExamDAO {
	List<Exam> get();
	
	Exam get(int id);
	
	void save(Exam exam);
	
	void delete(int id);
	
	void update(Exam exam);
	
}
