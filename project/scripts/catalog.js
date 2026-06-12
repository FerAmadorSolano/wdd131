// Current year
const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

// Last modified date
document.getElementById("lastModified").innerHTML =
    `Last Modified: ${document.lastModified}`;


const books = [

    {
        id: 1,
        title: "The Hobbit",
        author: "J.R.R. Tolkien",
        genre: "Fantasy",
        rating: 4.9,
        year: 1937,
        image: "https://m.media-amazon.com/images/I/51c7XhvwHiL._SY445_SX342_ML2_.jpg"
    },

    {
        id: 2,
        title: "Divergent",
        author: "Veronica Roth",
        genre: "Science Fiction",
        rating: 4.8,
        year: 2011,
        image: "https://m.media-amazon.com/images/I/51k4XHDQ1OL._SY445_SX342_ML2_.jpg"
    },

    {
        id: 3,
        title: "1984",
        author: "George Orwell",
        genre: "Science Fiction",
        rating: 4.7,
        year: 1949,
        image: "https://m.media-amazon.com/images/I/415bgzeilEL._SY445_SX342_ML2_.jpg"
    },

    {
        id: 4,
        title: "Pride and Prejudice",
        author: "Jane Austen",
        genre: "Romance",
        rating: 4.5,
        year: 1813,
        image: "https://m.media-amazon.com/images/I/51D96oO0JhL._SY445_SX342_ML2_.jpg"
    },

    {
        id: 5,
        title: "Sherlock Holmes",
        author: "Arthur Conan Doyle",
        genre: "Mystery",
        rating: 4.6,
        year: 1892,
        image: "https://m.media-amazon.com/images/I/51HCPtVYrlL._SY445_SX342_ML2_.jpg"
    },

    {
        id: 6,
        title: "Harry Potter",
        author: "J.K. Rowling",
        genre: "Fantasy",
        rating: 4.9,
        year: 1997,
        image: "https://m.media-amazon.com/images/I/519XJDItIDL._SY445_SX342_FMwebp_.jpg"
    },

    {
        id: 7,
        title: "Sky",
        author: "Joss Stirling",
        genre: "Fantasy",
        rating: 4.7,
        year: 2010,
        image: "https://m.media-amazon.com/images/I/91fSiq+ARaL._SY466_.jpg"
    },

    {
        id: 8,
        title: "Percy Jackson - The Lightning Thief",
        author: "Rick Riordan",
        genre: "Fantasy",
        rating: 4.3,
        year: 2005,
        image: "https://m.media-amazon.com/images/I/81ClooUaWzL._SY342_.jpg"
    },

    {
        id: 9,
        title: "The Lion, the Witch and the Wardrobe",
        author: "C.S. Lewis",
        genre: "Fantasy",
        rating: 4.8,
        year: 1950,
        image: "https://m.media-amazon.com/images/I/812pHkTwkOL._SY342_.jpg"
    },

    {
        id: 10,
        title: "Hush, Hush",
        author: "Becca Fitzpatrick",
        genre: "Romance",
        rating: 4.5,
        year: 2009,
        image: "https://m.media-amazon.com/images/I/814OfoFevSL._SY342_.jpg"
    },

];

const container =
    document.querySelector("#catalog-container");

const search =
    document.querySelector("#search");

const genreFilter =
    document.querySelector("#genre-filter");

const sort =
    document.querySelector("#sort");

function displayBooks(bookList) {

    container.innerHTML = "";

    bookList.forEach(book => {

        container.innerHTML += `

        <article class="book-card">

            <img
                src="${book.image}"
                alt="${book.title}"
                loading="lazy">

            <h3>${book.title}</h3>

            <p><strong>Author:</strong> ${book.author}</p>

            <p><strong>Genre:</strong> ${book.genre}</p>

            <p>⭐ ${book.rating}</p>

            <button
                data-id="${book.id}">
                Add to Favorites
            </button>

        </article>
        `;
    });

    addFavoriteEvents();
}

displayBooks(books);

function filterBooks() {

    let filtered =
        [...books];

    const searchValue =
        search.value.toLowerCase();

    const genreValue =
        genreFilter.value;

    filtered =
        filtered.filter(book =>
            book.title
                .toLowerCase()
                .includes(searchValue)
        );

    if (genreValue !== "all") {

        filtered =
            filtered.filter(book =>
                book.genre === genreValue
            );
    }

    if (sort.value === "az") {

        filtered.sort((a, b) =>
            a.title.localeCompare(b.title)
        );
    }

    if (sort.value === "rating") {

        filtered.sort((a, b) =>
            b.rating - a.rating
        );
    }

    if (sort.value === "newest") {

        filtered.sort((a, b) =>
            b.year - a.year
        );
    }

    displayBooks(filtered);
}

search.addEventListener(
    "input",
    filterBooks
);

genreFilter.addEventListener(
    "change",
    filterBooks
);

sort.addEventListener(
    "change",
    filterBooks
);

function addFavoriteEvents() {

    const buttons =
        document.querySelectorAll(
            ".book-card button"
        );

    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    Number(
                        button.dataset.id
                    );

                const selectedBook =
                    books.find(
                        book =>
                            book.id === id
                    );

                let favorites =
                    JSON.parse(
                        localStorage.getItem(
                            "favorites"
                        )
                    ) || [];

                const exists =
                    favorites.some(
                        book =>
                            book.id === id
                    );

                if (!exists) {

                    favorites.push(
                        selectedBook
                    );

                    localStorage.setItem(
                        "favorites",
                        JSON.stringify(
                            favorites
                        )
                    );

                    alert(
                        `${selectedBook.title} added to favorites!`
                    );
                }
            }
        );
    });
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