//Write a function that makes an API call to `https://dog.ceo/api/breeds/image/random`.
const div = document.getElementById('imageSection');
const list = document.getElementById('list')
const listItem = document.createElement('li')
listItem.style.listStyleType = 'none';
const image = document.createElement('img');

function makeAPICall () {
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
        return response.json()})
    .then(function (data) {
    //console.log(data);
    image.src = `${data.message}`;
    listItem.appendChild(image);
    list.appendChild(listItem);
    
}).catch(console.log('some error occured in the fetch'))
}
div.appendChild(list);

// makeAPICall();

//It should trigger after clicking a button in your webpage.

const button = document.getElementById('button1');
console.log('button?', button)
button.style.backgroundColor = 'salmon';
button.addEventListener('click', makeAPICall);

const clearButton = document.getElementById('button2');
clearButton.style.backgroundColor = 'gray';
clearButton.addEventListener('click', () => {
   div.removeChild(list)
   const para = document.createElement('p');
   para.innerText = `That's enough doggies for today :)`
   div.appendChild(para);
})

//Every time the button is clicked it should append a new dog image to the DOM.

