//fetch api
window.onload
let div = document.querySelector('#div');

console.log('whats going on??')
fetch('https://xkcd.now.sh/?comic=latest', {
  headers: { "Content-Type": "application/json; charset=utf-8" },
  method: 'GET',
})
.then(function (response) {
    return response.json();
})
.then(function (data) {
    console.log('data? here:', data)
    // let para = document.createElement('p');
    // console.log('para', para)
    // para.innerHTML = `${data}`;
    // div.appendChild(para);
    // console.log('divvy', div)
    let image = document.createElement('img')
    image.src = `${data}`;
})
.catch(error => console.log('an error occured', error))

// fetch('https://codeyourfuture.herokuapp.com/api/greetings')
//   .then(function (response) {
//     return response.text();
//   })
//   .then(function (greeting) {
//     // Write the code to display the greeting text here
//     let greetingText = document.getElementById('greeting-text');
//     greetingText.innerText = `${greeting}`;
//   });