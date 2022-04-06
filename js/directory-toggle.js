const gridBtn = document.getElementById('grid-btn');
const listBtn = document.getElementById('list-btn');


function displayList() {
    document.getElementById('dirList').classList.remove('hidden');
    document.getElementById('dirCards').classList.add('hidden');
    listBtn.classList.add('current');
    gridBtn.classList.remove('current');
}

function displayCards() {
    document.getElementById('dirList').classList.add('hidden');
    document.getElementById('dirCards').classList.remove('hidden');
    listBtn.classList.remove('current');
    gridBtn.classList.add('current');
}

gridBtn.onclick = displayCards;
listBtn.onclick = displayList;