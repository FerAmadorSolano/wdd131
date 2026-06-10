// Current year
const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

// Last modified date
document.getElementById("lastModified").innerHTML =
    `Last Modified: ${document.lastModified}`;

const books = [
    {
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        image: "images/hobbit.webp",
        rating: "★★★★★"
    },
    {
        title: "Dune",
        author: "Frank Herbert",
        image: "images/dune.webp",
        rating: "★★★★★"
    },
    {
        title: "Pride and Prejudice",
        author: "Jane Austen",
        image: "images/pride.webp",
        rating: "★★★★☆"
    },
    {
        title: "1984",
        author: "George Orwell",
        image: "images/1984.webp",
        rating: "★★★★★"
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