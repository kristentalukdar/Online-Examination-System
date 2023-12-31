package com.oesdp.oesapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.oesdp.oesapi.dao.StudentDAO;
import com.oesdp.oesapi.model.Student;

@Service
public class StudentServiceImpl implements StudentService {

	@Autowired
	private StudentDAO studentDAO;

	@Transactional
	@Override
	public List<Student> get() {
		return studentDAO.get();
	}

	@Transactional
	@Override
	public Student get(int id) {
		return studentDAO.get(id);
	}

	@Transactional
	@Override
	public void save(Student student) {
		studentDAO.save(student);
	}

	@Transactional
	@Override
	public void delete(int id) {
		studentDAO.delete(id);
	}

	@Transactional
	@Override
	public void update(Student student) {
		studentDAO.update(student);
	}
	
	@Transactional
	@Override
	public Student findStudentByRegistratioNo(String RegistrationNo) {
		return studentDAO.findStudentByRegistratioNo(RegistrationNo);
	}
	
	@Transactional
	@Override
	public Student validateStudent(String RegistrationNo, String Password) {
		return studentDAO.validateStudent(RegistrationNo, Password);
	}

}
