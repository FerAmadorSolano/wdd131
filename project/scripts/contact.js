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

const form =
    document.querySelector("#contact-form");

const confirmation =
    document.querySelector("#confirmation");

form.addEventListener("submit", event => {

    event.preventDefault();

    const name =
        document.querySelector("#name").value;

    confirmation.innerHTML = `
        Thank you, ${name}!
        Your message has been received.
    `;

    form.reset();
});

