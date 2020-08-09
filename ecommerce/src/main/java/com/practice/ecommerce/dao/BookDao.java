package com.practice.ecommerce.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.practice.ecommerce.model.Book;

@Component
public class BookDao {

	@Autowired
	private BookRepository bookRepository;

	public List<Book> findAllBooks() {
		return bookRepository.findAll();
	}

	public Optional<Book> getBook(Long id) {
		return bookRepository.findById(id);
	}

	public Book saveBook(Book book) {
		return bookRepository.save(book);
	}

	public Book updateBook(Book book) {
		return bookRepository.save(book);
	}

	public void deleteBook(Long id) {
		 bookRepository.deleteById(id);
	}
}
