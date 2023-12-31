package com.oesdp.oesapi.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oesdp.oesapi.model.Exam;
import com.oesdp.oesapi.model.Student;
import com.oesdp.oesapi.service.ExamService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class ExamController {

	@Autowired
	private ExamService examService;
	
	
	@GetMapping("/exam")
	public List<Exam> get(){
		return examService.get();	
	};

	@GetMapping("/exam/{id}")
	public Exam get(@PathVariable int id){
		return examService.get(id);	
	};
	
	@PostMapping("/exam")
	public Exam save(@RequestBody Exam exam){
		examService.save(exam);
		return exam;
	};
	
	@PutMapping("/exam")
	public Exam update(@RequestBody Exam exam){
		examService.update(exam);
		return exam;
	};
	
	@DeleteMapping("/exam/{id}")
	public Exam delete(@PathVariable int id){
		examService.delete(id);
		return null;	
	};
}
