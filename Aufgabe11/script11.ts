namespace Aufgabe11 {
    let formData: FormData;
    let sendButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("input"));
    sendButton.addEventListener("click", handleInput);
    let getButton: HTMLButtonElement = (<HTMLButtonElement>document.getElementById("request"));
    getButton.addEventListener("click", handleRequest);

    async function handleInput(): Promise<void> {
        formData = new FormData(document.forms[0]);
        let url: string = "https://moselgisdorsch.herokuapp.com";
        url += "/input";
        
        let query: URLSearchParams = new URLSearchParams(<any>formData);
        url += "?" + query.toString();

        await fetch(url);
    }
    async function handleRequest(): Promise<void> {
        let url: string = "https://moselgisdorsch.herokuapp.com";
        url += "/request";
        let response: Response = await(fetch(url));
        let responseText: string = await response.text();
        (<HTMLDivElement>document.getElementById("output")).innerHTML = responseText;
    }
}