package com.oesdp.oesapi.controller;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oesdp.oesapi.model.Question;
import com.oesdp.oesapi.service.QuestionService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class QuestionController {
	
	@Autowired
	private QuestionService questionService;
	
	
	@GetMapping("/question")
	public List<Question> get(){
		return questionService.get();	
	};

	@GetMapping("/question/{id}")
	public Question get(@PathVariable int id){
		return questionService.get(id);	
	};
	
	@PostMapping("/question")
	public Question save(@RequestBody Question question){
		questionService.save(question);
		return question;
	};
	
	@PutMapping("/question")
	public Question update(@RequestBody Question question){
		questionService.update(question);
		return question;
	};
}
