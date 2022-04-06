const requestURL =
  "https://ogidig5.github.io/The-Temple-Inn-Suites/json/temples.json";

const sections = document.getElementById("dirCards");

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject["temples"];

    temples.forEach(displayTemplesCards);
  });

function displayTemplesCards(temples) {
  let section = document.createElement("section");
  let h3 = document.createElement("h3");
  let portrait = document.createElement("img");
  let currentStatus = document.createElement("p");
  let address = document.createElement("p");
  let contact = document.createElement("p");
  // let website = document.createElement("p");
  let announced = document.createElement("p");
  let ground_breaking = document.createElement("p");
  let dedication = document.createElement("p");
  let services = document.createElement("p");
  let session = document.createElement("p");
  let ordinance = document.createElement("p");
  let closure = document.createElement("p");

  h3.textContent = temples.name;

  portrait.setAttribute("src", temples.image);
  portrait.setAttribute("alt", `Image for ${temples.name}`);
  portrait.setAttribute("loading", "lazy");

  currentStatus.textContent = `Temple Status: ${status}`;
  contact.innerHTML = `Phone: ${temples.phone}`;
  // website.innerHTML = `Website: ${temples.website}`;
  announced.innerHTML = `Announced: ${temples.announced}`;
  ground_breaking.innerHTML = `Ground-breaking: ${temples.ground}`;
  dedication.innerHTML = `Dedicated: ${temples.dedicated}`;
  address.setAttribute("class", "temple-address");
  address.innerHTML = `Address: ${temples.address}`;
  services.innerHTML = `Services: ${temples.services}`;
  session.innerHTML = `Session: ${temples.session}`;
  ordinance.innerHTML = `Ordinances: ${temples.ordinance}`;
  closure.innerHTML = `Temple Closure: ${temples.closure}`;

  section.appendChild(h3);
  section.appendChild(portrait);
  section.appendChild(currentStatus);
  section.appendChild(address);
  section.appendChild(contact);
  // section.appendChild(website);
  section.appendChild(announced);
  section.appendChild(ground_breaking);
  section.appendChild(dedication);
  section.appendChild(services);
  section.appendChild(session);
  section.appendChild(ordinance);
  section.appendChild(closure);

  sections.appendChild(section);
}
