package com.practice.ecommerce.dao;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;

import com.practice.ecommerce.model.Book;

public class BookDao {

	@Autowired
	private BookRepository bookRepository;

	public List<Book> findAllBooks() {
		return bookRepository.findAll();
	}

	public Optional getBook(Long id) {
		return bookRepository.findById(id);
	}

	public void saveBook(Book book) {
		bookRepository.save(book);
	}

	public void updateBook(Book book) {
		bookRepository.save(book);
	}

	public void deleteBook(Long id) {
		 bookRepository.deleteById(id);
	}
}
