package com.practice.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.practice.ecommerce.model.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, Long> {

}
