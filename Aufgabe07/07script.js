"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    loadArticles("data.json");
    async function loadArticles(_url) {
        let response = await fetch(_url);
        let jsonArtikelArray = await response.json();
        Aufgabe07.wolken = await JSON.parse(JSON.stringify(jsonArtikelArray));
        Aufgabe07.WolkenBuild();
    }
})(Aufgabe07 || (Aufgabe07 = {}));
//# sourceMappingURL=07script.js.map