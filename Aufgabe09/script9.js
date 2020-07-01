"use strict";
var Aufgabe09;
(function (Aufgabe09) {
    let formData;
    let buttonHTMLcomm = document.getElementById("htmlB");
    buttonHTMLcomm.addEventListener("click", handleHtml);
    let submitB = document.getElementById("jsonB");
    submitB.addEventListener("click", handleJson);
    //HTML
    async function handleHtml() {
        formData = new FormData(document.forms[0]);
        let url = "https://moselgisdorsch.herokuapp.com/";
        url += "html";
        let query = new URLSearchParams(formData);
        url += "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.text();
        let serverResponse = document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }
    //JSON
    async function handleJson() {
        formData = new FormData(document.forms[0]);
        let url = "https://moselgisdorsch.herokuapp.com/";
        url += "json";
        let query = new URLSearchParams(formData);
        url = url + "?" + query.toString();
        let response = await fetch(url);
        let responseText = await response.json();
        console.log(responseText);
    }
})(Aufgabe09 || (Aufgabe09 = {}));
//# sourceMappingURL=script9.js.map