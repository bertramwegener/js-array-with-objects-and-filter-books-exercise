"use strict";
// Task: Create an array of JavaScript objects where each book belongs to a specific category,
// and implement a filtering functionality that allows the user to sort books by category.

// Before you start:
// 1. Go to the "image" folder and identify the relevant books you want to include in the array.
// 2. Use websites like saxo.dk or amazon.co.uk to find detailed information about each book.
// 3. Each book must have a **category** (e.g., "fiction", "non-fiction", "science", etc.).
// 4. Implement a **filtering function** that allows the user to select a category and only see the books belonging to that category.
// TIP: Use the method from the previous task where we sorted movies and apply `.filter()` to your array.

// Example: Array of books categorized by genre
// Fiction
// {title: "The Great Gatsby", author: "F. Scott Fitzgerald", category: "fiction", publishedYear: 1925, pages: 218, images:"/img/the-great-gatsby.webp" }

const books = [

    {title:"1984", author:"George Orwell", category:"fiction", publishedYear:"2021", pages:"304", images:"/img/1984.webp"},
    {title:"A Brief History Of Time", author:"Stephen Hawking", category:"science", publishedYear:"2011", pages:"272", images:"/img/a-brief-history-of-time.webp"},
    {title:"A Game of Thrones", author:"George R. R. Martin", category:"fantasy", publishedYear:"2011", pages:"816", images:"/img/a-game-of-thrones.webp"},
    {title:"A People's History of the United States", author:"Howard Zinn", category:"history", publishedYear:"2015", pages:"729", images:"/img/a-peoples-history-of-the-united-states.webp"},
    {title:"Becoming", author:"Michelle Obama", category:"non-fiction", publishedYear:"2018", pages:"426", images:"/img/becoming.webp"},
    {title:"Cosmos: The Story of Cosmic Evolution, Science and Civilisation", author:"Carl Sagan", category:"science", publishedYear:"1980", pages:"416", images:"/img/cosmos.webp"},
    {title:"Dracula", author:"Bram Stoker", category:"horror", publishedYear:"1897", pages:"488", images:"/img/dracula.webp"},
    {title:"Educated", author:"Tara Westover", category:"non-fiction", publishedYear:"2018", pages:"352", images:"/img/educated.webp"},
    {title:"The Essentials of Classic Italian Cooking", author:"Marcella Hazan", category:"cookbook", publishedYear:"1976", pages:"737", images:"/img/essentials-of-classic-italian-cooking.webp"},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""},
    {title:"", author:"", category:"", publishedYear:"", pages:"", images:""}
    
];


const booksContainer = document.getElementById("books-container");

const selectedCategory = document.getElementById("category-select");



function displayBooks(bookListe) {
    booksContainer.innerHTML = "";     // Tømmer container for at undgå duplikereing.
    
    // Gennemløber hver film fra Array'et (movies) som indeholder Javascript objekter, der skal vises.
    bookListe.forEach((book) => {
        // opretter et HTML-element (article) ved hjælp af Javascrpt
        const bookElement = document.createElement("article");

        // Opbygger en HTML-struktur for hver film, der indeholder title, genre, årstal m.m
        bookElement.innerHTML = `
        <h3> Title: ${book.title} </h3>
        <p> Author: ${book.author} </p>
        <p> category: ${book.category} </p>
        <p> Publishedyear: ${book.publishedYear} </p>
        <p> Pages: ${book.pages} </p>
        <figure>
            <a href="${book.url}" target="_blank">
            <img src="${book.images}" alt="${book.title}">
            </a>
        </figure>`;
        booksContainer.appendChild(bookElement);
    });
}

// Indlæser alle film når hjemmesiden loades fra vores Array med Javascript objekter.
displayBooks(books);



selectedCategory.addEventListener("change", () => {
    const selectedValue = selectedCategory.value; // Henter den valgte kategori/genre

    let filteredBooks;

    if(selectedValue === "all") {
        filteredBooks = books;
    }

    else {
        filteredBooks = books.filter(book => book.category === selectedValue);
    }

    displayBooks(filteredBooks);
});