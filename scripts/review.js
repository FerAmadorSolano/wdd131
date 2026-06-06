// 1️⃣ Select the display element
const reviewDisplay = document.querySelector("#review-count");

// 2️⃣ Get the stored review count or start at 0
let numReviews = Number(localStorage.getItem("numReviews-ls")) || 0;

// 3️⃣ Increment the count
numReviews++;

// 4️⃣ Display the updated count
reviewDisplay.textContent = numReviews;

// 5️⃣ Store the new count
localStorage.setItem("numReviews-ls", numReviews);

// Current year
const year = new Date().getFullYear();

document.getElementById("currentyear").textContent = year;

// Last modified date
document.getElementById("lastModified").innerHTML =
    `Last Modified: ${document.lastModified}`;