package com.oesdp.oesapi.dao;

import java.util.List;

import com.oesdp.oesapi.model.Subject;

public interface SubjectDAO { 
	
	List<Subject> get();
	
	Subject get(int id);
	
	void save(Subject subject);
	
	void delete(int id);
	
	void update(Subject subject);
	

}

