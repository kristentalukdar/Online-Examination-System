package com.oesdp.oesapi.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.oesdp.oesapi.dao.SubjectDAO;
import com.oesdp.oesapi.model.Subject;

@Service
public class SubjectServiceImpl implements SubjectService {

	@Autowired
	private SubjectDAO subjectDAO;
	
	@Transactional
	@Override
	public List<Subject> get() {
		return subjectDAO.get();
	}

	@Transactional
	@Override
	public Subject get(int id) {
		return subjectDAO.get(id);
	}

	@Transactional
	@Override
	public void save(Subject subject) {
		subjectDAO.save(subject);
		
	}

	@Transactional
	@Override
	public void delete(int id) {
		subjectDAO.delete(id);
		
	}

	@Transactional
	@Override
	public void update(Subject subject) {
		subjectDAO.update(subject);
		
	}
	

}
