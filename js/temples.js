const requestURL = "json/temples.json";
const sections = document.getElementById("temples");
let templeNumber = 1;

fetch(requestURL)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    const temples = jsonObject["temples"];

    temples.forEach(displaytemples);
  });

function displaytemples(temples) {
  let status = temples.status;
  let randInt = getRndInteger(0, 30);

  if (templeNumber < 4 && (status === "closed" || status === "open")) {
    if (randInt % 2 === 0) {
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

      section.setAttribute("id", `temple-${templeNumber}`);

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

      section.appendChild(h3);
      section.appendChild(portrait);
      section.appendChild(currentStatus);
      section.appendChild(address);
      section.appendChild(contact);
      // section.appendChild(website);
      section.appendChild(announced);
      section.appendChild(ground_breaking);
      section.appendChild(dedication);

      sections.appendChild(section);

      templeNumber += 1;
    }
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
