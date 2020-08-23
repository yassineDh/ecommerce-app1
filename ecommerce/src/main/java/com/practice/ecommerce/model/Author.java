package com.practice.ecommerce.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@ApiModel(description="All details about the book.")
public class Author {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private Long id;

	@ApiModelProperty(notes="Author's firstname")
	@Column(name = "first_name")
	private String firstName;

	@ApiModelProperty(notes="Author's lastname")
	@Column(name = "last_name")
	private String lastName;

	@JsonIgnoreProperties("author")
	@OneToMany(mappedBy = "author",targetEntity = Book.class)
	private List<Book> books;
}
