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

import com.oesdp.oesapi.model.Subject;
import com.oesdp.oesapi.service.SubjectService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class SubjectController {
	
	@Autowired
	private SubjectService subjectService;
	
	
	@GetMapping("/subject")
	public List<Subject> get(){
		return subjectService.get();	
	};

	@GetMapping("/subject/{id}")
	public Subject get(@PathVariable int id){
		return subjectService.get(id);	
	};
	
	@PostMapping("/subject")
	public Subject save(@RequestBody Subject subject){
		subjectService.save(subject);
		return subject;
	};
	
	@PutMapping("/subject")
	public Subject update(@RequestBody Subject subject){
		subjectService.update(subject);
		return subject;
	};
	
	@DeleteMapping("/subject/{id}")
	public Subject delete(@PathVariable int id){
		subjectService.delete(id);
		return null;	
	};

}
