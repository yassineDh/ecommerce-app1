package com.practice.ecommerce.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.practice.ecommerce.dao.BookDao;
import com.practice.ecommerce.model.Book;

@Service
public class BookService {

	@Autowired
	private BookDao bookDao;
	
	public List<Book> findAllBooks() {
		return bookDao.findAllBooks();
	}

	public Optional<Book> getBook(Long id) {
		return bookDao.getBook(id);
	}

	public Book saveBook(Book book) {
		return bookDao.saveBook(book);
	}

	public void updateBook(Book book) {
		bookDao.saveBook(book);
	}

	public void deleteBook(Long id) {
		bookDao.deleteBook(id);
	}
}
