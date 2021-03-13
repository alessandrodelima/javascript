//Variable 
const tweetList = document.getElementById('tweet-list');

//Event Listeners 
eventListeners();
function eventListeners() {
  // Form Submission 
  document.querySelector('#form').addEventListener('submit', newTweet);

  //Remove tweet from the list
  tweetList.addEventListener('click', removeTweet);
}

//Functions 
function newTweet(e) {
  e.preventDefault();
  //console.log('Form Submitted');

  // Read the textarea value
  const tweet = document.getElementById('tweet').value;
  //console.log(tweet);

  // Create the remove button 
  const removeBtn = document.createElement('a');
  removeBtn.classList = 'remove-tweet';
  removeBtn.textContent = 'Excluir';

  // Create an <li> element
  const li = document.createElement('li');
  li.textContent = tweet;
  tweetList.appendChild(li);

  // Add the remove button to each tweet
  li.appendChild(removeBtn);

  //add to the list
  tweetList.appendChild(li);
}

//Removes the Tweets from the DOM 
function removeTweet(e) {
  if(e.target.classList.contains('remove-tweet')) {
      //console.log('Yes');
      e.target.parentElement.remove();
  } else {
    console.log('No');
  }
}