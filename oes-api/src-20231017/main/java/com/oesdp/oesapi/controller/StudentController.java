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

import com.oesdp.oesapi.model.Student;
import com.oesdp.oesapi.model.Subject;
import com.oesdp.oesapi.service.StudentService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	
	@GetMapping("/student")
	public List<Student> get(){
		return studentService.get();	
	};

	@GetMapping("/student/{id}")
	public Student get(@PathVariable int id){
		return studentService.get(id);	
	};
	
	@PostMapping("/student")
	public Student save(@RequestBody Student student){
		System.out.println(student);
		studentService.save(student);
		return student;
	};
	
	@PutMapping("/student")
	public Student update(@RequestBody Student student){
		studentService.update(student);
		return student;
	};
	
	@DeleteMapping("/student/{id}")
	public Student delete(@PathVariable int id){
		studentService.delete(id);
		return null;	
	};
}
