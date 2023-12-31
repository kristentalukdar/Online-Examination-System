package com.oesdp.oesapi.service;

import java.util.List;

import com.oesdp.oesapi.model.Student;

public interface StudentService { 
	
	List<Student> get();
	
	Student get(int id);
	
	void save(Student student);
	
	void delete(int id);
	
	void update(Student student);
	

}

