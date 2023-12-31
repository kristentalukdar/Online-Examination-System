package com.oesdp.oesapi.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.oesdp.oesapi.dao.ExamDAO;
import com.oesdp.oesapi.model.Exam;

@Service
public class ExamServiceImpl implements ExamService {

	@Autowired
	private ExamDAO examDAO;
	
	@Transactional
	@Override
	public List<Exam> get() {
		return examDAO.get();
	}

	@Transactional
	@Override
	public Exam get(int id) {
		return examDAO.get(id);
	}

	@Transactional
	@Override
	public void save(Exam exam) {
		examDAO.save(exam);
		
	}

	@Transactional
	@Override
	public void delete(int id) {
		examDAO.delete(id);
		
	}

	@Transactional
	@Override
	public void update(Exam exam) {
		examDAO.update(exam);
		
	}
	

}
