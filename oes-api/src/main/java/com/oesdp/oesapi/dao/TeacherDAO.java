package com.oesdp.oesapi.dao;

import java.util.List;

import com.oesdp.oesapi.model.Student;
import com.oesdp.oesapi.model.Teacher;

public interface TeacherDAO { 
	
	List<Teacher> get();
	
	Teacher get(int id);
	
	void save(Teacher student);
	
	void delete(int id);
	
	void update(Teacher teacher);
	
	Teacher findTeacherByRegistratioNo(String RegistrationNo);
	
	Teacher validateTeacher(String RegistrationNo, String Password);
}

