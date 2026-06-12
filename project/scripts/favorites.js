const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

// Last modified date
document.getElementById("lastModified").innerHTML =
    `Last Modified: ${document.lastModified}`;

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

const favoritesContainer =
    document.querySelector("#favorites-container");

let favorites =
    JSON.parse(
        localStorage.getItem("favorites")
    ) || [];

displayFavorites();

function displayFavorites() {

    favoritesContainer.innerHTML = "";

    if (favorites.length === 0) {

        favoritesContainer.innerHTML = `
        <div class="empty-message">

            <h3>No Favorite Books Yet</h3>

            <p>
                You haven't added any books
                to your reading list.
            </p>

            <a href="catalog.html">
                Browse the Catalog
            </a>

        </div>
        `;

        return;
    }

    favorites.forEach(book => {

        favoritesContainer.innerHTML += `

        <article class="book-card">

            <img
                src="${book.image}"
                alt="${book.title}"
                loading="lazy">

            <h3>${book.title}</h3>

            <p>
                <strong>Author:</strong>
                ${book.author}
            </p>

            <p>
                <strong>Genre:</strong>
                ${book.genre}
            </p>

            <p>
                ⭐ ${book.rating}
            </p>

            <button
                class="remove-btn"
                data-id="${book.id}">

                Remove
            </button>

        </article>
        `;
    });

    addRemoveEvents();
}

function addRemoveEvents() {

    const removeButtons =
        document.querySelectorAll(
            ".remove-btn"
        );

    removeButtons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                const id =
                    Number(
                        button.dataset.id
                    );

                favorites =
                    favorites.filter(
                        book =>
                            book.id !== id
                    );

                localStorage.setItem(
                    "favorites",
                    JSON.stringify(
                        favorites
                    )
                );

                displayFavorites();
            }
        );
    });
}
