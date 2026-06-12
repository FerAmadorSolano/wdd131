// Current year
const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

// Last modified date
document.getElementById("lastModified").innerHTML =
    `Last Modified: ${document.lastModified}`;


// FEATURED BOOKS
const books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "https://m.media-amazon.com/images/I/91NExiA59aL._SY385_.jpg",
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
        image: "https://m.media-amazon.com/images/I/516FJmq10DL._SY445_SX342_ML2_.jpg",
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

    books.forEach(book => {

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
const recommendedContainer =
    document.querySelector("#recommended-container");

if (recommendedContainer) {

    const recommendedBooks =
        books.slice().reverse();

    recommendedBooks.forEach(book => {

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