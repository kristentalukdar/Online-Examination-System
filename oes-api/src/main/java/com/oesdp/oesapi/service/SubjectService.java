package com.oesdp.oesapi.service;

import java.util.List;

import com.oesdp.oesapi.model.Subject;

public interface SubjectService {
	List<Subject> get();
	
	Subject get(int id);
	
	void save(Subject subject);
	
	void delete(int id);
	
	void update(Subject subject);

}
