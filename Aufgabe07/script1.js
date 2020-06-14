"use strict";
var Aufgabe07;
(function (Aufgabe07) {
    //Main Methode, erzeugt Artikel
    function WolkenBuild() {
        for (let i = 0; i < Aufgabe07.wolken.length; i++) {
            //Div erstellen, 3 Kategorien
            if (Aufgabe07.wolken[i].category == 1) {
                let newDiv1 = document.createElement("div");
                newDiv1.id = "div" + i;
                document.getElementById("grid1")?.appendChild(newDiv1);
                newDiv1.setAttribute("index", i.toString());
            }
            if (Aufgabe07.wolken[i].category == 2) {
                let newDiv1 = document.createElement("div");
                newDiv1.id = "div" + i;
                document.getElementById("grid2")?.appendChild(newDiv1);
                newDiv1.setAttribute("index", i.toString());
            }
            if (Aufgabe07.wolken[i].category == 3) {
                let newDiv1 = document.createElement("div");
                newDiv1.id = "div" + i;
                document.getElementById("grid3")?.appendChild(newDiv1);
                newDiv1.setAttribute("index", i.toString());
            }
            //Bild
            let imgElement = document.createElement("img");
            imgElement.src = Aufgabe07.wolken[i].img;
            document.getElementById("div" + i)?.appendChild(imgElement);
            //Name
            let name = document.createElement("h2");
            name.innerHTML = Aufgabe07.wolken[i].name;
            document.getElementById("div" + i)?.appendChild(name);
            //Beschreibung
            let description = document.createElement("p");
            description.innerHTML = Aufgabe07.wolken[i].description;
            document.getElementById("div" + i)?.appendChild(description);
            //Preis
            let price = document.createElement("p");
            price.innerHTML = Aufgabe07.wolken[i].price + "€";
            document.getElementById("div" + i)?.appendChild(price);
            //Kaufen
            let kaufen = document.createElement("button");
            kaufen.innerHTML = "Kaufen";
            document.getElementById("div" + i)?.appendChild(kaufen);
            kaufen.addEventListener("click", handleTrolley1);
            kaufen.setAttribute("preis", Aufgabe07.wolken[i].price.toString());
        }
    }
    Aufgabe07.WolkenBuild = WolkenBuild;
    //Einkaufswagen Funktion
    let summe1 = 0;
    let artikelCounter1 = 0;
    let blasenDiv1 = document.createElement("div");
    function handleTrolley1(_event) {
        document.getElementById("warencounter")?.appendChild(blasenDiv1);
        artikelCounter1++;
        blasenDiv1.innerHTML = artikelCounter1.toString();
        summe1 += parseInt(_event.currentTarget?.getAttribute("preis"));
        console.log(summe1.toFixed(0));
    }
    //Kategorie Funktion 
    document.getElementById("kat1")?.addEventListener("click", hideKategorien1);
    document.getElementById("kat2")?.addEventListener("click", hideKategorien1);
    document.getElementById("kat3")?.addEventListener("click", hideKategorien1);
    document.getElementById("kat4")?.addEventListener("click", hideKategorien1);
    function hideKategorien1(_event) {
        //Nur Bestseller anzeigen
        if (_event.currentTarget.getAttribute("id") == "kat1") {
            (document.getElementById("grid1")).style.display = "grid";
            (document.getElementById("grid2")).style.display = "none";
            (document.getElementById("grid3")).style.display = "none";
            (document.getElementById("Unko")).style.display = "none";
            (document.getElementById("Spec")).style.display = "none";
            (document.getElementById("Best")).style.display = "block";
        }
        //Nur Unkonventionelle anzeigen
        else if (_event.currentTarget.getAttribute("id") == "kat2") {
            (document.getElementById("grid2")).style.display = "grid";
            (document.getElementById("grid1")).style.display = "none";
            (document.getElementById("grid3")).style.display = "none";
            (document.getElementById("Best")).style.display = "none";
            (document.getElementById("Spec")).style.display = "none";
            (document.getElementById("Unko")).style.display = "block";
        }
        //Nur Specials anzeigen        
        else if (_event.currentTarget.getAttribute("id") == "kat3") {
            (document.getElementById("grid3")).style.display = "grid";
            (document.getElementById("grid1")).style.display = "none";
            (document.getElementById("grid2")).style.display = "none";
            (document.getElementById("Best")).style.display = "none";
            (document.getElementById("Unko")).style.display = "none";
            (document.getElementById("Spec")).style.display = "block";
        }
        //Alle Kategorien anzeigen        
        else if (_event.currentTarget.getAttribute("id") == "kat4") {
            (document.getElementById("grid3")).style.display = "grid";
            (document.getElementById("grid1")).style.display = "grid";
            (document.getElementById("grid2")).style.display = "grid";
            (document.getElementById("Best")).style.display = "block";
            (document.getElementById("Unko")).style.display = "block";
            (document.getElementById("Spec")).style.display = "block";
        }
    }
})(Aufgabe07 || (Aufgabe07 = {}));
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
//# sourceMappingURL=script1.js.map