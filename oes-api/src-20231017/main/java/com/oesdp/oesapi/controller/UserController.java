package com.oesdp.oesapi.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.oesdp.oesapi.model.User;
import com.oesdp.oesapi.service.TeacherService;
import com.oesdp.oesapi.service.UserService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1")
public class UserController {

	@Autowired
	private UserService userService;
	
	@GetMapping("/user/{UserType}/{RegNo}")
	public User get(@PathVariable String UserType, @PathVariable String RegNo){
		String uType=UserType.toLowerCase();
		System.out.println(UserType);
				
		if (uType.equals("admin")) {
			return userService.getAdminUser(RegNo);
		}else if (uType.equals("teacher")) {
			return userService.getTeacherUser(RegNo);
		}else if (uType.equals("student")) {
			return userService.getStudentUser(RegNo);
		}
		return null;
	};
	
}
