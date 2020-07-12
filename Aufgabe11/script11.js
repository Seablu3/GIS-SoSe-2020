"use strict";
var Aufgabe11;
(function (Aufgabe11) {
    let formData;
    let sendButton = document.getElementById("input");
    sendButton.addEventListener("click", handleInput);
    let getButton = document.getElementById("request");
    getButton.addEventListener("click", handleRequest);
    async function handleInput() {
        formData = new FormData(document.forms[0]);
        let url = "https://moselgisdorsch.herokuapp.com";
        url += "/input";
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        await fetch(url);
    }
    async function handleRequest() {
        let url = "https://moselgisdorsch.herokuapp.com";
        url += "/request";
        let response = await (fetch(url));
        let responseText = await response.text();
        document.getElementById("output").innerHTML = responseText;
    }
})(Aufgabe11 || (Aufgabe11 = {}));
//# sourceMappingURL=script11.js.map