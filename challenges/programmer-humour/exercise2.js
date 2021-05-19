//fetch api
 window.onload
let div = document.querySelector('#div');
// let p = document.querySelector('#para');
// console.log('para', p)
// console.log('whats going on??')
fetch('https://xkcd.now.sh/?comic=latest')
.then(function (response) {
    return response.json();
})
.then(function (data) {
    //console.log('data? here:', data)
    let image = document.createElement('img') 
    //console.log('works up till here?')
    //image.src = "https://imgs.xkcd.com/comics/mullers_ratchet.png";
    image.src = `${data.img}`;
    div.appendChild(image);
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