document.addEventListener('DOMContentLoaded', function () {
  const todoList = document.querySelector('.today-list');

  // Event delegation on the <ul> element
  todoList.addEventListener('click', function (event) {
    const target = event.target;

    // Toggle the class "done" on the <li> when an <li> is clicked
    if (target.tagName === 'LI') {
      target.classList.toggle('done');
    }

    // If a delete link is clicked, delete the li element / remove from the DOM
    if (target.classList.contains('delete')) {
      const listItem = target.closest('li');
      if (listItem) {
        listItem.remove();
      }
    }
  });

  // Event listener for the "Add" link
  const addLink = document.querySelector('.add-item');
  addLink.addEventListener('click', addListItem);
});

// Function to add a new list item
const addListItem = function (event) {
  event.preventDefault();
  const input = this.parentNode.querySelector('input');
  const text = input.value;

  if (text.trim() !== '') {
    const newItem = document.createElement('li');
    newItem.innerHTML = `<span>${text}</span><a class="delete">Delete</a>`;
    document.querySelector('.today-list').appendChild(newItem);

    // Add event listener to the new <li> for toggling class "done"
    newItem.addEventListener('click', function () {
      this.classList.toggle('done');
    });

    // Clear the input field
    input.value = '';
  }
};

