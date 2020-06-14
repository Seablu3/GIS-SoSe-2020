
namespace Aufgabe07 {

export interface Artikel {
    img: string;
    name: string;
    description: string;
    price: number;
    category: number;
}

export let wolken: Artikel[];
loadArticles("data.json");

async function loadArticles(_url: RequestInfo): Promise<void> {
    let response: Response = await fetch(_url);
    let jsonArtikelArray: JSON = await response.json();
    wolken = await JSON.parse(JSON.stringify(jsonArtikelArray));
    WolkenBuild();
    }
    }