'use strict';

function getDogBreedImage() {
    let dogsApi = `https://dog.ceo/api/breed/${getInputValue()}/images/random`;
    fetch(dogsApi)
      .then(response => response.json())
      .then(responseJson => displayResults(responseJson))
      .catch(error => alert('Unable to locate breed, please try another.'));
  }

function dogBreedList() {
    fetch('https://dog.ceo/api/breeds/list/all')
        .then(resposne => response.json())
        .then(data => createListItems(data.message))
        .catch(error => alert('Something went wrong. Try again later.'));
}


  function displayResults(responseJson) {
    console.log(responseJson);
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
    $('#submit').click( event => {
        console.log('submiting');
      event.preventDefault();
      getInputValue();
      getDogBreedImage();
      displayResults();
    });
  }

function runDogApp() {
    console.log('running app');
    submitBreed();
}

  $(runDogApp());
