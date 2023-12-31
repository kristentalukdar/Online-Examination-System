package com.oesdp.oesapi.service;

import java.util.List;

import org.hibernate.Session;

import com.oesdp.oesapi.model.Student;

public interface StudentService { 
	
	List<Student> get();
	
	Student get(int id);
	
	void save(Student student);
	
	void delete(int id);
	
	void update(Student student);
	
	Student findStudentByRegistratioNo(String RegistrationNo);
	
	Student validateStudent(String RegistrationNo, String Password);
}

