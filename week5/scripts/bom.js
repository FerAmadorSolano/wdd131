// Element references
const input = document.querySelector('#favchap');
const button = document.querySelector('#addChapter');
const list = document.querySelector('#list');

// Click event
button.addEventListener('click', function () {

    // Check if input is blank
    if (input.value.trim() !== '') {

        // Create list item
        const li = document.createElement('li');

        // Create delete button
        const deleteButton = document.createElement('button');

        // Add text to li
        li.textContent = input.value;

        // Add X to delete button
        deleteButton.textContent = '❌';

        // Append delete button to li
        li.append(deleteButton);

        // Append li to list
        list.append(li);

        // Delete event
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // Clear input
        input.value = '';

        // Focus input
        input.focus();
    }
    else {
        input.focus();
    }

});