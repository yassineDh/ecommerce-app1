package com.practice.ecommerce.model;

import java.util.Date;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToOne;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;

@Data
@NoArgsConstructor
@Entity
@ApiModel(description = "All details about the book.")
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ApiModelProperty(notes = "Book's title")
	@NonNull
	private String title;

	@Column(columnDefinition = "TEXT")
	private String cover;

	@ApiModelProperty(notes = "Book pages number")
	private int pages;

	@ApiModelProperty(notes = "Book's edition house")
	@NonNull
	private String edition;

	@ApiModelProperty(notes = "Book's date of publication")
	@Column(name = "publication_date")
	private Date publicationDate;

	@ApiModelProperty(notes = "Book's author")
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "author_id", nullable = false)
	@NonNull
	private Author author;

	@Override
	public String toString() {
		String str = " \n" + "Title : " + title + ",Pages : " + pages + ",Edition : " + edition
				+ ",Date of publication : " + publicationDate + ",Author : " + author.getFirstName() + " "
				+ author.getLastName();
		return str;
	}
}
