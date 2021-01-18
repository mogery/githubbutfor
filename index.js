(async function() {
    var titleElem = document.getElementById("title");
    var definitionElem = document.getElementById("definition");

    var dictionary = await (await fetch("dictionary_filtered.json")).json();
    var entries = Object.entries(dictionary);
    var randomEntry = entries[Math.floor(Math.random() * entries.length)];
    titleElem.innerText = randomEntry[0][0].toUpperCase() + randomEntry[0].slice(1) + "Hub";
    definitionElem.innerText = randomEntry[1];
})();