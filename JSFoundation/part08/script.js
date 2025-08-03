// Example 1

document.getElementById('changeTextButton')
.addEventListener('click', (event) => {
    document.getElementById('myParagraph')
    .innerText = "You have clicked it, Now fuck you!"
});

// Example 2

document.getElementById('highlightFirstCity')
.addEventListener('click', (e) => {
    let hold = document.getElementById('citiesList').children[0]
    hold.classList.add('highlight');
});

// Example 3

document.getElementById('changeOrder')
.addEventListener('click', (e) => {
    let hold = document.getElementById('coffeeType');
    hold.innerText = 'Espresso';
});

// Example 4

document.getElementById('addNewItem')
.addEventListener('click', (e) => {
    let hold = document.getElementById('shoppingList');
    console.log(hold)
    let newElement = document.createElement('li');
    newElement.innerText = 'Tea';

    hold.append(newElement);
});

// Example 5

document
  .getElementById("removeLastTask")
  .addEventListener("click", function () {
    let taskList = document.getElementById("taskList");
    taskList.lastElementChild.remove();
  });

// Example 6

document
  .getElementById("clickMeButton")
  .addEventListener("dblclick", function () {
    alert("chaicode");
  });

// Example 7

document.getElementById('teaList').addEventListener('click', function(e){
  if(e.target && e.target.matches('.teaItem')){
    alert("You selected: " + event.target.textContent);
  }
});

// Example 8

document.getElementById('feedbackForm')
.addEventListener('submit', function(e){
  e.preventDefault();
  let hold = document.getElementById('feedbackInput').value;
  document.getElementById('feedbackDisplay')
  .textContent = `Your Feedback : ${hold}`;
});

// Example 9

document.addEventListener('DOMContentLoaded',function(e){
  document.getElementById('domStatus')
  .textContent = 'Dom fully Loaded.';
});

// Example 10

document.getElementById('toggleHighlight')
.addEventListener('click',function(e){
  document.getElementById('descriptionText')
  .classList.toggle('highlight');
})




