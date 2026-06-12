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

const quotes = [

    "Books are a uniquely portable magic.",
    "Reading is dreaming with open eyes.",
    "A room without books is like a body without a soul.",
    "There is no friend as loyal as a book.",
    "Today a reader, tomorrow a leader."

];

const quote = document.querySelector("#quote");

if (quote) {

    const random =
        Math.floor(Math.random() * quotes.length);

    quote.textContent =
        quotes[random];
}
