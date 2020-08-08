package com.practice.ecommerce.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.practice.ecommerce.model.Book;
import com.practice.ecommerce.service.BookService;

import io.swagger.annotations.ApiOperation;

@RestController
@RequestMapping("/store")
public class BookController {

	@Autowired
	private BookService bookservice;

	@GetMapping("/books")
	@ApiOperation(value = "Get list of all books")
	public ResponseEntity<Book> findAllBooks() {

		List<Book> books = bookservice.findAllBooks();
		if (books.size() == 0)
			return new ResponseEntity<Book>(HttpStatus.NOT_FOUND);
		return new ResponseEntity(books, HttpStatus.OK);
	}

	@GetMapping("/books/{id}")
	@ApiOperation(value = "Find book by id")
	public ResponseEntity<Book> findBookById(@PathVariable Long id) {

		Optional<Book> book = bookservice.getBook(id);

		if (book.isPresent()) {
			Book bookVal = book.get();
			return new ResponseEntity(bookVal, HttpStatus.OK);
		}

		return new ResponseEntity<Book>(HttpStatus.NOT_FOUND);
	}

	@PostMapping("/books")
	@ApiOperation(value = "Add book")
	public ResponseEntity<Book> addBook(@RequestBody Book book){
		Optional<Book> bookSaved = Optional.of(bookservice.saveBook(book));
		
		if(bookSaved.isPresent()) {
			return new ResponseEntity<Book>(HttpStatus.CREATED);
		}
		
		return new ResponseEntity<Book>(HttpStatus.BAD_REQUEST);
	}
	
	@DeleteMapping("/books/{id}")
	@ApiOperation(value = "Delete book by id")
	public ResponseEntity<Book> deleteBookById(@PathVariable Long id){
		bookservice.deleteBook(id);
		
		return new ResponseEntity<Book>(HttpStatus.NO_CONTENT);
	}
	
//	@GetMapping("/test1")
//	public String test1() {
//		return "Hello World";
//	}

}
