package com.oesdp.oesapi.dao;

import java.util.List;

import com.oesdp.oesapi.model.Student;

public interface StudentDAO { 
	
	List<Student> get();
	
	Student get(int id);
	
	void save(Student student);
	
	void delete(int id);
	
	void update(Student student);
	
	Student findStudentByRegistratioNo(String RegistrationNo);
	
	Student validateStudent(String RegistrationNo, String Password);
}

