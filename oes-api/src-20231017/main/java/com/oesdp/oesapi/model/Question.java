package com.oesdp.oesapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

//alt+shift+s+generate getters and setters
@Entity
@Table(name="Question")
public class Question {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer Id;
	
	@Column(name="subjectid")
	private String subjectID;	
	
	@Column(name="question")
	private String question;
	
	@Column(name="mark")
	private String mark;

	@Column(name="choice1")
	private String choice1;
	
	@Column(name="choice2")
	private String choice2;
	
	@Column(name="choice3")
	private String choice3;
	
	@Column(name="choice4")
	private String choice4;
	
	@Column(name="choice1correct")
	private boolean choice1correct;
	
	@Column(name="choice2correct")
	private boolean choice2correct;
	
	@Column(name="choice3correct")
	private boolean choice3correct;
	
	@Column(name="choice4correct")
	private boolean choice4correct;

	public Integer getId() {
		return Id;
	}

	public void setId(Integer id) {
		Id = id;
	}

	public String getSubjectID() {
		return subjectID;
	}

	public void setSubjectID(String subjectID) {
		this.subjectID = subjectID;
	}

	public String getQuestion() {
		return question;
	}

	public void setQuestion(String question) {
		this.question = question;
	}

	public String getMark() {
		return mark;
	}

	public void setMark(String mark) {
		this.mark = mark;
	}

	public String getChoice1() {
		return choice1;
	}

	public void setChoice1(String choice1) {
		this.choice1 = choice1;
	}

	public String getChoice2() {
		return choice2;
	}

	public void setChoice2(String choice2) {
		this.choice2 = choice2;
	}

	public String getChoice3() {
		return choice3;
	}

	public void setChoice3(String choice3) {
		this.choice3 = choice3;
	}

	public String getChoice4() {
		return choice4;
	}

	public void setChoice4(String choice4) {
		this.choice4 = choice4;
	}

	public boolean isChoice1correct() {
		return choice1correct;
	}

	public void setChoice1correct(boolean choice1correct) {
		this.choice1correct = choice1correct;
	}

	public boolean isChoice2correct() {
		return choice2correct;
	}

	public void setChoice2correct(boolean choice2correct) {
		this.choice2correct = choice2correct;
	}

	public boolean isChoice3correct() {
		return choice3correct;
	}

	public void setChoice3correct(boolean choice3correct) {
		this.choice3correct = choice3correct;
	}

	public boolean isChoice4correct() {
		return choice4correct;
	}

	public void setChoice4correct(boolean choice4correct) {
		this.choice4correct = choice4correct;
	}




}





