package com.oesdp.oesapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="Exam")
public class Exam {

	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="id")
	private Integer Id;
	
	@Column(name="subjectid")
	private String subjectid;	
	
	@Column(name="description")
	private String description;
	
	@Column(name="noofquestions")
	private Integer noofquestions;

	public Integer getId() {
		return Id;
	}

	public void setId(Integer id) {
		Id = id;
	}

	public String getSubjectid() {
		return subjectid;
	}

	public void setSubjectid(String subjectid) {
		this.subjectid = subjectid;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Integer getNoofquestions() {
		return noofquestions;
	}

	public void setNoofquestions(Integer noofquestions) {
		this.noofquestions = noofquestions;
	}

	
	
	
}
