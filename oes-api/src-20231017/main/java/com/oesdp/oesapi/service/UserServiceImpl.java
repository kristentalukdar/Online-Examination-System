package com.oesdp.oesapi.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.oesdp.oesapi.dao.StudentDAO;
import com.oesdp.oesapi.dao.TeacherDAO;
import com.oesdp.oesapi.model.Student;
import com.oesdp.oesapi.model.Teacher;
import com.oesdp.oesapi.model.User;

@Service
public class UserServiceImpl implements UserService {

	@Autowired
	private TeacherDAO teacherDAO;

	@Autowired
	private StudentDAO studentDAO;

	@Transactional
	@Override
	public User getAdminUser(String RegNo) {
		User s = new User();
		s.setUserName("Admin");
		s.setUserType("admin");
		return s;
	}
	
	@Transactional
	@Override
	public User getTeacherUser(String RegNo) {
		Teacher teacher = teacherDAO.findByRegistratioNo(RegNo);
		User user = new User();
		user.setUserName(teacher.getFirstName() + " " + teacher.getMiddleName() + " " + teacher.getLastName());
		user.setUserType("teacher");
		return user;
	}

	@Transactional
	@Override
	public User getStudentUser(String RegNo) {
		Student student = studentDAO.findByRegistratioNo(RegNo);
		User user = new User();
		user.setUserName(student.getFirstName() + " " + student.getMiddleName() + " " + student.getLastName());
		user.setUserType("student");
		return user;
	}
}
