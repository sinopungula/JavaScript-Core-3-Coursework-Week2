//pull all items from DOM 

let button = document.querySelector('#button1');
//console.log(button)


//add event listener
button.addEventListener('click', getFetchAPI);


// create a fetch to the API

function getFetchAPI() {
    let list = document.getElementById('list');
    const listItem = document.createElement('li');
    const img = document.createElement('img')
    
    fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.text())
    .then(data => {
        console.log(data)
        img.src = `${data}`;
        listItem.appendChild(img);
        list.appendChild(listItem);

    })
    .catch(console.error());

}
