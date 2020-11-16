'use strict';

function getDogBreedImage() {
    let dogsApi = `https://dog.ceo/api/breed/${getInputValue()}/images/random`;
    fetch(dogsApi)
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson.status === 'error') {
          alert('Unable to locate breed, please try another.');
        }
        else {
          displayResults(responseJson)
        }
      })
      .catch(error => alert('Please try again.'));
  }


  function displayResults(responseJson) {
    let display = `<img src="${responseJson.message}" class="results-img">`; 
    $('.results-img').html(display);
    $('.images').removeClass('hidden');
  }

  function  getInputValue() {
  let inputValue = document.getElementById("dogBreed").value;
  inputValue = inputValue.replace(" ", '-').toLowerCase();
  console.log(inputValue);
return inputValue
  }


  function submitBreed() {
    $('.dogSelector').submit( event => {
      event.preventDefault();
      getInputValue();
      getDogBreedImage();
    });
  }

function runDogApp() {
    console.log('running app');
    submitBreed();
}

  $(runDogApp());
