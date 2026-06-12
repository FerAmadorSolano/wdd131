// Current year
const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

// Last modified date
document.getElementById("lastModified").innerHTML =
    `Last Modified: ${document.lastModified}`;


// FEATURED BOOKS
const featured_books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://m.media-amazon.com/images/I/51c7XhvwHiL._SY445_SX342_ML2_.jpg",
        rating: "★★★★★"
    },
    {
        title: "Divergent",
        author: "Veronica Roth",
        image: "https://m.media-amazon.com/images/I/51k4XHDQ1OL._SY445_SX342_ML2_.jpg",
        rating: "★★★★★"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        image: "https://m.media-amazon.com/images/I/51D96oO0JhL._SY445_SX342_ML2_.jpg",
        rating: "★★★★★"
    },
    {
        title: "1984",
        author: "George Orwell",
        image: "https://m.media-amazon.com/images/I/415bgzeilEL._SY445_SX342_ML2_.jpg",
        rating: "★★★★☆"
    }
];

const featuredContainer =
    document.querySelector("#featured-container");

if (featuredContainer) {

    featured_books.forEach(book => {

        featuredContainer.innerHTML += `
        <article class="book-card">
            <img
                src="${book.image}"
                alt="${book.title}"
                loading="lazy">

            <h3>${book.title}</h3>

            <p>${book.author}</p>

            <p>${book.rating}</p>
        </article>
        `;
    });
}

// RECOMMENDED BOOKS

const recommended_books = [
    {
        title: "Harry Potter",
        author: "J.K. Rowling",
        image: "https://m.media-amazon.com/images/I/519XJDItIDL._SY445_SX342_FMwebp_.jpg",
        rating: "★★★★★"
    },
    {
        title: "Sky",
        author: "Joss Stirling",
        image: "https://m.media-amazon.com/images/I/91fSiq+ARaL._SY466_.jpg",
        rating: "★★★★★"
    },
    {
        title: "Percy Jackson - The Lightning Thief",
        author: "Rick Riordan",
        image: "https://m.media-amazon.com/images/I/81ClooUaWzL._SY342_.jpg",
        rating: "★★★★★"
    },
    {
        title: "The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        image: "https://m.media-amazon.com/images/I/812pHkTwkOL._SY342_.jpg",
        rating: "★★★★★"
    }
];


const recommendedContainer =
    document.querySelector("#recommended-container");

if (recommendedContainer) {

    recommended_books.forEach(book => {

        recommendedContainer.innerHTML += `
        <article class="book-card">

            <img
                src="${book.image}"
                alt="${book.title}"
                loading="lazy">

            <h3>${book.title}</h3>

            <p>${book.author}</p>

            <p>${book.rating}</p>

        </article>
        `;
    });
}

// QUOTES
const quotes = [
    "Books are a uniquely portable magic.",
    "A room without books is like a body without a soul.",
    "Reading is dreaming with open eyes.",
    "There is no friend as loyal as a book."
];

const quote = document.querySelector("#quote");

if (quote) {
    const random =
        Math.floor(Math.random() * quotes.length);

    quote.textContent = quotes[random];
}


// MENU BUTTON 
const menuBtn = document.querySelector("#menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuBtn.textContent = "✕";
    } else {
        menuBtn.textContent = "☰";
    }
});