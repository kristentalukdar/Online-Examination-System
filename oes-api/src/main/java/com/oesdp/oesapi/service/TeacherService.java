package com.oesdp.oesapi.service;

import java.util.List;

import org.hibernate.Session;

import com.oesdp.oesapi.model.Teacher;

public interface TeacherService { 
	
	List<Teacher> get();
	
	Teacher get(int id);
	
	void save(Teacher student);
	
	void delete(int id);
	
	void update(Teacher teacher);
	
	Teacher findTeacherByRegistratioNo(String RegistrationNo);
	
	Teacher validateTeacher(String RegistrationNo, String Password);
}

