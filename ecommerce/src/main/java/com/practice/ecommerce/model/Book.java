package com.practice.ecommerce.model;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
@Entity

public class Book {
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;
	
	@NonNull
	private String title;
	
	@Lob
	private byte[] cover;
	private int pages;
	
	@NonNull
	private String edition;

	@Column(name = "publication_date")
	private Date publicationDate;
	
	@ManyToOne
	@JoinColumn(name = "author_id", nullable = false)
	@NonNull
	private Author author;

}
