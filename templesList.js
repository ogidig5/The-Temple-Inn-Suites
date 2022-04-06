const requestURL = 'https://ogidig5.github.io/wdd230/chamber/lesson09/business.json';

const cards = document.getElementById('dirCards');
const list = document.getElementById('dirList');

fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {

        const business = jsonObject['business'];

        business.forEach(displayBusinessCards);
        business.forEach(displayBusinessList);
    });

function displayBusinessCards(business) {
    let card = document.createElement('section');
    let portrait = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let email = document.createElement('p');
    let website = document.createElement('a');

    portrait.setAttribute('src', business.image);
    portrait.setAttribute('alt', `portrait for ${business.name}`);
    portrait.setAttribute('loading', 'lazy');

    address.textContent = business.address;
    phone.textContent = business.phone;
    email.textContent = business.email;
    website.textContent = business.website;
    website.setAttribute('href', '#');

    card.appendChild(portrait);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    card.appendChild(email);

    cards.appendChild(card);
}

function displayBusinessList(business) {
    let listItem = document.createElement('section');
    let name = document.createElement('p');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('a');

    name.textContent = business.name;
    address.textContent = business.address;
    phone.textContent = business.phone;
    website.textContent = business.website;
    website.setAttribute('href', '#');

    listItem.appendChild(name);
    listItem.appendChild(address);
    listItem.appendChild(phone);
    listItem.appendChild(website);

    list.appendChild(listItem);
}
