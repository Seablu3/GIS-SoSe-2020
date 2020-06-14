namespace Aufgabe07 {


//Main Methode, erzeugt Artikel
export function WolkenBuild(): void {
    for (let i: number = 0; i < wolken.length; i++) {
    //Div erstellen, 3 Kategorien
    
    if (wolken[i].category == 1) {
        let newDiv1:HTMLDivElement = document.createElement("div");
        newDiv1.id = "div" + i;
        document.getElementById("grid1")?.appendChild(newDiv1);
        newDiv1.setAttribute("index", i.toString());
    }
    if (wolken[i].category == 2) {
        let newDiv1:HTMLDivElement = document.createElement("div");
        newDiv1.id = "div" + i;
        document.getElementById("grid2")?.appendChild(newDiv1);
        newDiv1.setAttribute("index", i.toString());
    }
    if (wolken[i].category == 3) {
        let newDiv1:HTMLDivElement = document.createElement("div");
        newDiv1.id = "div" + i;
        document.getElementById("grid3")?.appendChild(newDiv1);
        newDiv1.setAttribute("index", i.toString());
    }

    //Bild
    let imgElement:HTMLImageElement = document.createElement("img");
    imgElement.src = wolken[i].img;
    document.getElementById("div" + i)?.appendChild(imgElement);
    //Name
    let name:HTMLParagraphElement = document.createElement("h2");
    name.innerHTML = wolken[i].name;
    document.getElementById("div" + i)?.appendChild(name);
    //Beschreibung
    let description:HTMLParagraphElement = document.createElement("p");
    description.innerHTML = wolken[i].description;
    document.getElementById("div" + i)?.appendChild(description);
    //Preis
    let price:HTMLElement = document.createElement("p");
    price.innerHTML = wolken[i].price + "€"; 
    document.getElementById("div" + i)?.appendChild(price);
    //Kaufen
    let kaufen:HTMLButtonElement = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    document.getElementById("div" + i)?.appendChild(kaufen);
    kaufen.addEventListener("click", handleTrolley1);
    kaufen.setAttribute("preis", wolken[i].price.toString());
}
}

//Einkaufswagen Funktion
let summe1: number = 0;
let artikelCounter1: number = 0;
let blasenDiv1 = document.createElement("div");
function handleTrolley1(_event: Event) {
    document.getElementById("warencounter")?.appendChild(blasenDiv1);
    artikelCounter1++;
    blasenDiv1.innerHTML = artikelCounter1.toString();
    summe1 += parseInt((<HTMLButtonElement>_event.currentTarget)?.getAttribute("preis")!);
    console.log(summe1.toFixed(0));
}


//Kategorie Funktion 

document.getElementById("kat1")?.addEventListener("click", hideKategorien1);
document.getElementById("kat2")?.addEventListener("click", hideKategorien1);
document.getElementById("kat3")?.addEventListener("click", hideKategorien1);
document.getElementById("kat4")?.addEventListener("click", hideKategorien1);

function hideKategorien1(_event: Event) {
    //Nur Bestseller anzeigen
   if ((<HTMLElement>_event.currentTarget).getAttribute("id") == "kat1") {
        (document.getElementById("grid1")!).style.display = "grid";
        (document.getElementById("grid2")!).style.display = "none";
        (document.getElementById("grid3")!).style.display = "none";
        (document.getElementById("Unko")!).style.display = "none";
        (document.getElementById("Spec")!).style.display = "none";
        (document.getElementById("Best")!).style.display = "block";
            }
            //Nur Unkonventionelle anzeigen
        else if ((<HTMLElement>_event.currentTarget).getAttribute("id") == "kat2") {
            (document.getElementById("grid2")!).style.display = "grid";
            (document.getElementById("grid1")!).style.display = "none";
            (document.getElementById("grid3")!).style.display = "none";
            (document.getElementById("Best")!).style.display = "none";
            (document.getElementById("Spec")!).style.display = "none";
            (document.getElementById("Unko")!).style.display = "block";
                    }
            //Nur Specials anzeigen        
        else if ((<HTMLElement>_event.currentTarget).getAttribute("id") == "kat3") {
            (document.getElementById("grid3")!).style.display = "grid";
            (document.getElementById("grid1")!).style.display = "none";
            (document.getElementById("grid2")!).style.display = "none";
            (document.getElementById("Best")!).style.display = "none";
            (document.getElementById("Unko")!).style.display = "none";
            (document.getElementById("Spec")!).style.display = "block";
                    }
            //Alle Kategorien anzeigen        
        else if ((<HTMLElement>_event.currentTarget).getAttribute("id") == "kat4") {
            (document.getElementById("grid3")!).style.display = "grid";
            (document.getElementById("grid1")!).style.display = "grid";
            (document.getElementById("grid2")!).style.display = "grid";
            (document.getElementById("Best")!).style.display = "block";
            (document.getElementById("Unko")!).style.display = "block";
            (document.getElementById("Spec")!).style.display = "block";
                    }            
}
}

// async function goa(_url: RequestInfo): Promise<void> {
//     let response: Response = await fetch(_url);
//     console.log("Response", response);
//     }
    // loadArticles("data.json");
    // async function loadArticles(_url: RequestInfo) {
    //     let response = await fetch(_url);
    //     let jsonArray = await response.json();
    //      = await JSON.parse(JSON.stringify(jsonArray));
    //     Aufgabe07.createArticles();
    // }
// })(Aufgabe07 || (Aufgabe07 = {}));
