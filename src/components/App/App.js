import './App.css';
import React, {Component} from "react";
import Books from '../Books/BookList/books';
import Categories from '../Categories/categories';
import Header from '../Header/header';
import BookService from "../../repository/bookRepository";
import {BrowserRouter as Router, Navigate, Route, Routes} from 'react-router-dom';
import BookAdd from "../Books/BookAdd/bookAdd";
import BookEdit from "../Books/BookEdit/bookEdit";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {
            books: [],
            authors: [],
            categories: [],
            selectedBook: {}
        }
    }

    render() {
        return (
            <Router>
                <main>
                    <Header/>
                    <div className="container">
                        <Routes>
                            <Route path={"/categories"} element={ <Categories categories={this.state.categories}  />}/>
                            <Route path={"/books/add"} element={<BookAdd categories={this.state.categories} authors={this.state.authors} onBookAdd={this.addBook}/>}/>
                            <Route path={"/books/edit/:id"} element={<BookEdit onEditBook={this.editBook} book={this.state.selectedBook} categories={this.state.categories} authors={this.state.authors}/>}/>
                            <Route path={"/books"} element={ <Books books={this.state.books}  onDelete={this.deleteBook}  onEdit={this.getBook} onMarkAsTaken={this.markAsTaken}/>}/>
                            <Route path="/" element={<Navigate to="/books" replace />}/>
                        </Routes>
                    </div>
                </main>
            </Router>
        );
    }

    loadBooks = () => {
        BookService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }

    loadAuthors = () => {
        BookService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    deleteBook = (id) => {
        BookService.deleteBook(id)
            .then( () => {
               this.loadBooks();
            });
    }

    addBook = (name, category, authors, availableCopies) => {
        BookService.addBook(name, category, authors, availableCopies)
            .then(() => {
               this.loadBooks();
            });
    }

    getBook = (id) => {
        BookService.getBook(id)
            .then((data) => {
                this.setState({
                    selectedBook: data.data
                })
            })
    }

    editBook = (id, name, category, authors, availableCopies) => {
        BookService.editBook(id, name, category, authors, availableCopies)
            .then( () => {
               this.loadBooks();
            });
    }

    loadCategories = () => {
        BookService.fetchCategories()
            .then((data) => {
                this.setState({
                    categories: data.data
                })
            });
    }
    markAsTaken = (id) => {
        BookService.markAsTaken(id)
            .then( () => {
                this.loadBooks();
            });
    }

    componentDidMount() {
        this.loadBooks();
        this.loadAuthors();
        this.loadCategories();
    }

}

export default App;
