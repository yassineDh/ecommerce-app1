package com.practice.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.practice.ecommerce.model.Author;


@Repository
public interface AuthorRepository extends JpaRepository<Author, Long> {

}
