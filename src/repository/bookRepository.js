import axios from '../custom-axios/axios'

const BookService = {
    fetchBooks: () => {
        return axios.get("/books", {
            params: {
                size: 5,
                batch: 2
            }
        });
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, category, authors, availableCopies) => {
        return axios.post("/books/add", {
           "name": name,
           "category": category,
           "authors": authors,
           "availableCopies": availableCopies
        });
    },
    editBook: (id, name, category ,authors, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name": name,
            "category": category,
            "authors": authors,
            "availableCopies": availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    },
    markAsTaken: (id) => {
        return axios.put(`/books/markAsTaken/${id}`)
    }
}

export default BookService;