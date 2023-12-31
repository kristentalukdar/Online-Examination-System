package com.oesdp.oesapi.service;

import java.util.List;

import com.oesdp.oesapi.model.User;

public interface UserService { 
	
	User getAdminUser(String RegNo);
	
	User getTeacherUser(String RegNo);
	
	User getStudentUser(String RegNo);
	
}

