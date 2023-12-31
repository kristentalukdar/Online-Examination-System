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
import com.oesdp.oesapi.model.Teacher;
import com.oesdp.oesapi.service.TeacherService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class TeacherController {
	
	@Autowired
	private TeacherService teacherService;
	
	
	@GetMapping("/teacher")
	public List<Teacher> get(){
		return teacherService.get();	
	};

	@GetMapping("/teacher/{id}")
	public Teacher get(@PathVariable int id){
		return teacherService.get(id);	
	};
	
	@PostMapping("/teacher")
	public Teacher save(@RequestBody Teacher teacher){
		teacherService.save(teacher);
		return teacher;
	};
	
	@PutMapping("/teacher")
	public Teacher update(@RequestBody Teacher teacher){
		teacherService.update(teacher);
		return teacher;
	};
	
	@DeleteMapping("/teacher/{id}")
	public Teacher delete(@PathVariable int id){
		teacherService.delete(id);
		return null;	
	};
	
	@GetMapping("/validateTeacher/{RegistrationNo}/{Password}")
	public Teacher get(@PathVariable String RegistrationNo, @PathVariable String Password){
		return teacherService.validateTeacher(RegistrationNo, Password);
	};

	@GetMapping("/findTeacherByRegistratioNo/{RegistrationNo}")
	public Teacher get(@PathVariable String RegistrationNo){
		return teacherService.findTeacherByRegistratioNo(RegistrationNo);	
	};


}
