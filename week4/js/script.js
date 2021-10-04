const headers = {
    'Accept': 'application/json',
    'Authorization': 'Bearer cR8RczB_XO_M2i6SAyjC'
};
let parser = new DOMParser();
let lotrCharacterSelect = document.getElementById("lotrCharacterSelect");
let searchTextBox = document.getElementById("search");
let quotesCheckBox = document.getElementById("quotes");
let quoteTableBody = document.getElementById('tableTBody');
let characterName = document.getElementById("characterName");
let characterRace = document.getElementById("characterRace");
let characterGender = document.getElementById("characterGender");
let characterHeight = document.getElementById("characterHeight");
let characterBirth = document.getElementById("characterBirth");
let characterDeath = document.getElementById("characterDeath");
let characterDetails = document.getElementById("characterDetails");
let errorSpan = document.getElementById("noResultError");
let noMatchSpan = document.getElementById("noQuotesError");
let resetBtn = document.getElementById("resetBtn");

document.addEventListener('DOMContentLoaded', function () {
    getAllCharacterData()
        .then(data => buildSelect(data))
        .then(function () {
            var _id = lotrCharacterSelect.value;
            getSingleCharacterData(_id)
                .then(data => buildCharacterTable(data))
        });
});

resetBtn.addEventListener('click', function(){
    location.reload();
});

searchTextBox.addEventListener('keyup', function () {
    filterTable();
});

lotrCharacterSelect.addEventListener('change', function () {
    var _id = lotrCharacterSelect.value;
    getSingleCharacterData(_id)
        .then(data => buildCharacterTable(data));

    var checkBox = document.getElementById("quotes");
    if (checkBox.checked) {

        getQuoteData(_id)
            .then(data => buildQuoteTable(data));

    } else {

    }

});

quotesCheckBox.addEventListener("change", function(){
    if(!quotesCheckBox.checked){
        clearTable();
    } else {
        clearTable();
        getQuoteData(lotrCharacterSelect.value)
        .then(data => buildQuoteTable(data));
    }
});

function getBookData() {

    return fetch('https://the-one-api.dev/v2/book', { headers: headers })
        .then(response => response.json())
        .then(data => (data))
        .catch((error) => {
            console.error('Error: ', error);
        });
};

function getChapterData() {
    return fetch('https://the-one-api.dev/v2/book/' + lotrCharacterSelect.value + '/chapter', { headers: headers })
        .then(response => response.json())
        .then(data => (data))
        .catch((error) => {
            console.error('Error: ', error);
        });
};

function getAllCharacterData() {
    return fetch('https://the-one-api.dev/v2/character', { headers: headers })
        .then(response => response.json())
        .then(data => (data))
        .catch((error) => {
            console.error('Error: ', error);
        });
};

function getSingleCharacterData(_id) {
    return fetch('https://the-one-api.dev/v2/character/' + _id, { headers: headers })
        .then(response => response.json())
        .then(data => (data))
        .catch((error) => {
            console.error('Error: ', error);
        });
};

function getQuoteData(characterId) {
    return fetch('https://the-one-api.dev/v2/character/' + characterId + '/quote', { headers: headers })
        .then(response => response.json())
        .then(data => (data))
        .catch((error) => {
            console.error('Error: ', error);
        });
}

function buildSelect(data) {
    data.docs.forEach(element => {
        var opt = document.createElement('option');
        opt.value = element._id;
        opt.innerHTML = element.name;
        lotrCharacterSelect.appendChild(opt);
    });
};

function buildTable(data) {
    clearTable();
    var i = 1;
    data.docs.forEach(element => {
        var row = table.insertRow(quoteTableBody.rows.length - 1);
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        cell1.innerHTML = i;
        cell2.innerHTML = element.chapterName;
        quoteTableBody.appendChild(row);
        i++;
    });
};

function buildQuoteTable(data) {
    clearTable();
    var i = 1;
    if(data.docs == null || data.docs.length ==0){
        errorSpan.style.visibility = "visible";
    } else {
        errorSpan.style.visibility = "hidden";
        data.docs.forEach(element => {
            var row = quoteTableBody.insertRow(quoteTableBody.rows.length - 1);
            var cell1 = row.insertCell(0);
            var cell2 = row.insertCell(1);
            cell1.innerHTML = i;
            cell2.innerHTML = element.dialog;
            quoteTableBody.appendChild(row);
            i++;
        });
    }

}


function buildCharacterTable(data) {
    characterName.innerHTML = data.docs[0].name;
    characterRace.innerHTML = data.docs[0].race;
    characterGender.innerHTML = data.docs[0].gender;
    characterHeight.innerHTML = data.docs[0].height;
    characterBirth.innerHTML = data.docs[0].birth;
    characterDeath.innerHTML = data.docs[0].death;
    characterDetails.setAttribute('href', data.docs[0].wikiUrl);
}


function clearTable() {
    quoteTableBody.innerHTML = '';
};

function filterTable() {
    var filter, tr, td, i, txtValue;
    filter = searchTextBox.value.toUpperCase();
    tr = quoteTableBody.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }
    }
}

function resetForm(){
    location.reload();
}
