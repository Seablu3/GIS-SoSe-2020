var Aufgabe08;
(function (Aufgabe08) {
    let initButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("initButton");
    initButton.addEventListener("click", communicate);
    async function communicate(): Promise<void> {
        let formData: FormData = new FormData(document.forms[0]);
        let url: string = "https://moselgisdorsch.herokuapp.com";
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url = url + "?" + query.toString();
        await fetch(url);
        for (let entry of query) {
            console.log(entry);
            console.log("name: " + entry[0]);
            console.log("value: " + entry[1]);
        }
    }
})(Aufgabe08 || (Aufgabe08 = {}));

