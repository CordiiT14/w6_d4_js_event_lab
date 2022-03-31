document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

const form = document.querySelector('#new-item-form');
form.addEventListener("submit", handleFormSubmit);

})



const readinglist = [];

const handleFormSubmit = function(event){
  event.preventDefault();
  const readingListItem = document.querySelector('ul');
  readingListItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
  const newListItem = document.createElement('li');
  newListItem.textContent = `${event.target.title.value} ${event.target.author.value} ${event.target.category.value}`;
  const list = document.querySelector('ul');
  list.appendChild(newListItem);
};

console.log(readinglist);




