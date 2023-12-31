package com.oesdp.oesapi.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Table;
import jakarta.persistence.Id;

//alt+shift+s+generate getters and setters
@Entity
@Table(name="Subject")
public class Subject {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="ID")
	private Integer Id;
	
	@Column(name="NAME")
	private String Name;
	
	@Column(name="DESCRIPTION")
	private String Description;

	public Integer getId() {
		return Id;
	}

	public void setId(Integer id) {
		Id = id;
	}

	public String getName() {
		return Name;
	}

	public void setName(String name) {
		Name = name;
	}

	public String getDescription() {
		return Description;
	}

	public void setDescription(String description) {
		Description = description;
	}

	@Override
	public String toString() {
		return "Subject [Id=" + Id + ", Name=" + Name + ", Description=" + Description + ", toString()="
				+ super.toString() + "]";
	}

	
}
