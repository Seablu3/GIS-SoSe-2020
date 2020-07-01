var Aufgabe09;
(function (Aufgabe09) {
    let formData: FormData;
    let buttonHTMLcomm: HTMLButtonElement = <HTMLButtonElement>document.getElementById("htmlB");
    buttonHTMLcomm.addEventListener("click", handleHtml);

    let submitB:HTMLButtonElement =<HTMLButtonElement> document.getElementById("jsonB");
    submitB.addEventListener("click", handleJson);

    //HTML
    async function handleHtml(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://moselgisdorsch.herokuapp.com/";
        url += "/html";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.text();
        let serverResponse: HTMLElement = <HTMLElement> document.getElementById("serverResponse");
        serverResponse.innerHTML = responseText;
    }

    //JSON
    async function handleJson(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://moselgisdorsch.herokuapp.com/";
        url += "/json";
        let query: URLSearchParams = new URLSearchParams(<any> formData);
        url = url + "?" + query.toString();

        let response: Response = await fetch(url);
        let responseText: string = await response.json(); 
        console.log(responseText);
    }
})(Aufgabe09 || (Aufgabe09 = {}));