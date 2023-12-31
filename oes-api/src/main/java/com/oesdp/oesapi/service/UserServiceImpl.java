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
		System.out.println("getTeacherUser");
		Teacher teacher = teacherDAO.findTeacherByRegistratioNo(RegNo);
		if (teacher == null) {
			System.out.println("TEACHER IS NULL");
			return null;
		}
		User user = new User();
		user.setUserName(teacher.getFirstName() + " " + teacher.getMiddleName() + " " + teacher.getLastName());
		user.setUserType("teacher");
		return user;
	}

	@Transactional
	@Override
	public User getStudentUser(String RegNo) {
		Student student = studentDAO.findStudentByRegistratioNo(RegNo);
		if (student == null) {
			return null;
		}
		User user = new User();
		user.setUserName(student.getFirstName() + " " + student.getMiddleName() + " " + student.getLastName());
		user.setUserType("student");
		return user;
	}
	
	
	@Transactional
	@Override
	public User validateAdminUser(String RegNo, String Password) {
		User s = new User();
		s.setUserName("Admin");
		s.setUserType("admin");
		return s;
	}
	
	@Transactional
	@Override
	public User validateTeacherUser(String RegNo, String Password) {
		Teacher teacher = teacherDAO.validateTeacher(RegNo, Password);
		if (teacher == null) {
			System.out.println("TEACHER IS NULL");
			return null;
		}
		User user = new User();
		user.setUserName(teacher.getFirstName() + " " + teacher.getMiddleName() + " " + teacher.getLastName());
		user.setUserType("teacher");
		return user;
	}
	
	@Transactional
	@Override
	public User validateStudentUser(String RegNo, String Password) {
		Student student = studentDAO.validateStudent(RegNo, Password);
		if (student == null) {
			return null;
		}
		User user = new User();
		user.setUserName(student.getFirstName() + " " + student.getMiddleName() + " " + student.getLastName());
		user.setUserType("student");
		return user;
	}

}
