document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');
form.addEventListener("submit", handleFormSubmit);

})




const handleFormSubmit = function(event){
  event.preventDefault();
  const readingListItem = document.querySelector('#reading-list');
  const newListItem = createNewListItem(event);
  event.target.reset();
  
};

const createNewListItem = function(form){
  debugger;
  const readingListItem = document.createElement('li');
  const title = form.target.title.value;
  const author = form.target.author.value;
  const category = form.target.category.value;
  readingListItem.textContent = `${title} ${author} ${category}`;
  const list = document.querySelector('ul');
  list.appendChild(readingListItem);
};



