// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const hearts = document.querySelectorAll(".like-glyph")

const alertBoard = document.querySelector("#modal")
const message = document.querySelector("#modal-message")

hearts.forEach(heart => activateHeart(heart))

function activateHeart(heart) {
  heart.addEventListener('click', () => {
    mimicServerCall()
    .then(response => {   
      if (heart.innerHTML === EMPTY_HEART) {
      heart.innerHTML = FULL_HEART
      heart.classList.add("activated-heart")
    } else {
      heart.innerHTML = EMPTY_HEART
      heart.classList.remove("activated-heart")
    }
  })
    .catch(error => {
      alertBoard.classList.remove("hidden")
      message.innerHTML = error
      setTimeout(removError, 5000)
    
      function removError() {
        alertBoard.classList.add("hidden")
      }
    
    })
  })
}
//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
