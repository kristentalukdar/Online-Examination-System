package com.oesdp.oesapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.oesdp.oesapi.dao.TeacherDAO;
import com.oesdp.oesapi.model.Teacher;

@Service
public class TeacherServiceImpl implements TeacherService {

	@Autowired
	private TeacherDAO teacherDAO;

	@Transactional
	@Override
	public List<Teacher> get() {
		return teacherDAO.get();
	}

	@Transactional
	@Override
	public Teacher get(int id) {
		return teacherDAO.get(id);
	}

	@Transactional
	@Override
	public void save(Teacher teacher) {
		teacherDAO.save(teacher);
	}

	@Transactional
	@Override
	public void delete(int id) {
		teacherDAO.delete(id);
	}

	@Transactional
	@Override
	public void update(Teacher teacher) {
		teacherDAO.update(teacher);
	}
	
	

}
