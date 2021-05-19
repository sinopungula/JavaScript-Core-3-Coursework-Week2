//pull all items from DOM 

let button = document.querySelector('#button1');
let button2 = document.querySelector('#button2');
console.log(button)
console.log(button2)
//add event listener
function changeColour() {
    console.log('???')
    const list = document.getElementById('list');
    const listItem = document.createElement('li');
    const img = document.createElement('img')
    console.log("list",list)
    
    fetch('https://dog.ceo/api/breeds/image/random') //returns a 404???????????????
    .then(function (response){
        return response.json();
    }) 
    .then(function (data){
        console.log(data)
        // img.src = `${data}`;
        // listItem.appendChild(img);
        // list.appendChild(listItem);
});
changeColour();

button.addEventListener('click', () => {
    console.log('she works')
//     const list = document.getElementById('list');
//     const listItem = document.createElement('li');
//     const img = document.createElement('img')
//     console.log("list",list)
    
//     fetch('https://dog.ceo/api/breeds/image/random') //returns a 404???????????????
//     .then(function (response){
//         return response.json();
//     }) 
//     .then(function (data){
//         console.log(data)
//         // img.src = `${data}`;
//         // listItem.appendChild(img);
//         // list.appendChild(listItem);
});
// create a fetch to the API
//console.log("button", button)


// function getFetchAPI() {
//     

//     })
//     .catch(console.error());
