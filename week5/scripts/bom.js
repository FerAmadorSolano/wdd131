// Element references
const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

// Click event
button.addEventListener('click', function () {

    if (input.value.trim() !== '') {

        const chapter = input.value.trim();

        displayList(chapter);

        chaptersArray.push(chapter);

        setChapterList();

        input.value = '';
        input.focus();
    }
});

function displayList(item) {
    let li = document.createElement("li");
    let deleteButton = document.createElement("button");

    li.textContent = item;
    deleteButton.textContent = "❌";

    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener("click", function () {
        list.removeChild(li);
        deleteChapter(item);
        input.focus();
    });
}

function setChapterList() {
    localStorage.setItem("myFavBOMList", JSON.stringify(chaptersArray));
}

function getChapterList() {
    return JSON.parse(localStorage.getItem("myFavBOMList"));
}

function deleteChapter(chapter) {
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
}

chaptersArray.forEach(chapter => {
    displayList(chapter);
})

