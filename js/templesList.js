const requestURL = '';

const cards = document.getElementById('dirCards');
const list = document.getElementById('dirList');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const temples = jsonObject['temples'];

        temples.forEach(displayTemplesCards);
        temples.forEach(displayTemplesList);
    });

function displayTemplesCards(temples) {
    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');

    portrait.setAttribute('src', temples.image);
    portrait.setAttribute('alt', `portrait for ${temples.name}`);
    portrait.setAttribute('loading', 'lazy');

    address.textContent = temples.address;
    phone.textContent = temples.phone;
    website.textContent = temples.website;
    website.setAttribute('href', '#');

    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);

    cards.appendChild(card);
}

function displayTemplesList(temples) {
    let listItem = document.createElement('section');
    let name = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');

    name.textContent = temples.name;
    address.textContent = temples.address;
    phone.textContent = temples.phone;
    website.textContent = temples.website;
    website.setAttribute('href', '#');

    listItem.appendChild(name);
    listItem.appendChild(address);
    listItem.appendChild(phone);
    listItem.appendChild(website);

    list.appendChild(listItem);
}
