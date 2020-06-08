"use strict";
let cirrus1 = { img: "pics/cirrus.jpg", name: "Cirruswolke", description: "Nice Wolke", price: 11.50 };
let cumulonimbus1 = { img: "pics/cumulonimbus.jpg", name: "Cumulonimbuswolke", description: "Wenn du Gewitter magst, genau deine Wolke", price: 1100.00 };
let stratus1 = { img: "pics/stratus.jpg", name: "Stratuswolke", description: "Ein 'Furtwangen Depression' Classic", price: 2.00 };
let nimbostratus1 = { img: "pics/nimbostratus.jpg", name: "Nimbostratuswolke€", description: "Erzeugen lange anhaltenden Regen: Deutsche Landwirte küssen deine Augen.", price: 200.00 };
let altostratus1 = { img: "pics/altostratus.jpg", name: "Altostratuswolke", description: "Absoluter Schmodder", price: 10.00 };
let cirrostratus1 = { img: "pics/cirrostratus.jpg", name: "Cirrostratuswolke", description: "Fusion aus Cirrus und Stratus: Erzeugt (mit Glück) schöne Kreise", price: 50.00 };
//Array Bestseller
let bestsellerW1 = [cirrus1, cumulonimbus1, stratus1, nimbostratus1, altostratus1, cirrostratus1];
//Unkonventionelle Wolken
let kraftwerkabdampf1 = { img: "pics/AKW.jpg", name: "Kraftwerkabdampf", description: "pfui", price: 777777777777.77 };
let lilawolken1 = { img: "pics/lilawolken.jpg", name: "Lila Wolken", description: "30 Grad, du kühlst dein Kompf am Fensterglas", price: 0.01 };
let aschewolke1 = { img: "pics/vulkanausbruch.jpg", name: "Aschewolke", description: "Abriss", price: 1.50 };
//Array Unkonventionelle
let unkonventionelleW1 = [kraftwerkabdampf1, lilawolken1, aschewolke1];
//Special Wolken
let wolke71 = { img: "pics/wolke7.jpg", name: "Wolke7", description: "Die wahre Liebe", price: 696969.69 };
let andereWolke1 = { img: "pics/daweeeeeeeed.jpg", name: "Diese andere Wolke", description: "gas gas", price: 4.20 };
let icloud1 = { img: "pics/icloud.jpg", name: "iCloud Speicher", description: "scameriono", price: 1111.10 };
//Array Specials
let specialsW1 = [wolke71, andereWolke1, icloud1];
//Bestseller for schleife 
for (let index = 0; index < bestsellerW1.length; index++) {
    //Div erstellen 
    let newDiv = document.createElement("div");
    newDiv.id = "div1" + index;
    document.getElementById("grid1")?.appendChild(newDiv);
    //Bild hinzuziehen
    let imgElement = document.createElement("img");
    imgElement.src = bestsellerW1[index].img;
    document.getElementById("div1" + index)?.appendChild(imgElement);
    //Name hinzuziehen
    let name = document.createElement("h2");
    name.innerHTML = bestsellerW1[index].name;
    document.getElementById("div1" + index)?.appendChild(name);
    //Beschreibung bobobobob
    let description = document.createElement("p");
    description.innerHTML = bestsellerW1[index].description;
    document.getElementById("div1" + index)?.appendChild(description);
    //Preis
    let price = document.createElement("p");
    price.innerHTML = bestsellerW1[index].price + "€";
    document.getElementById("div1" + index)?.appendChild(price);
    //Kaufen
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    document.getElementById("div1" + index)?.appendChild(kaufen);
    kaufen.addEventListener("click", handleTrolley);
    kaufen.setAttribute("preis", bestsellerW1[index].price.toString());
}
//Unkonventionelle for schleife 
for (let index = 0; index < unkonventionelleW1.length; index++) {
    //Div erstellen
    let newDiv = document.createElement("div");
    newDiv.id = "div2" + index;
    document.getElementById("grid2")?.appendChild(newDiv);
    //Bild hinzuziehen
    let imgElement = document.createElement("img");
    imgElement.src = unkonventionelleW1[index].img;
    document.getElementById("div2" + index)?.appendChild(imgElement);
    //Name hinzuziehen
    let name = document.createElement("h2");
    name.innerHTML = unkonventionelleW1[index].name;
    document.getElementById("div2" + index)?.appendChild(name);
    //Beschreibung
    let description = document.createElement("p");
    description.innerHTML = unkonventionelleW1[index].description;
    document.getElementById("div2" + index)?.appendChild(description);
    //Preis
    let price = document.createElement("p");
    price.innerHTML = unkonventionelleW1[index].price + " €";
    document.getElementById("div2" + index)?.appendChild(price);
    //Kaufen
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    document.getElementById("div2" + index)?.appendChild(kaufen);
    kaufen.addEventListener("click", handleTrolley);
    kaufen.setAttribute("preis", unkonventionelleW1[index].price.toString());
}
//Specials for schleife 
for (let index = 0; index < specialsW1.length; index++) {
    //Div erstellen
    let newDiv = document.createElement("div");
    newDiv.id = "div3" + index;
    document.getElementById("grid3")?.appendChild(newDiv);
    //Bild hinzuziehen
    let imgElement = document.createElement("img");
    imgElement.src = specialsW1[index].img;
    document.getElementById("div3" + index)?.appendChild(imgElement);
    //Name hinzuziehen
    let name = document.createElement("h2");
    name.innerHTML = specialsW1[index].name;
    document.getElementById("div3" + index)?.appendChild(name);
    //Beschreibung
    let description = document.createElement("p");
    description.innerHTML = specialsW1[index].description;
    document.getElementById("div3" + index)?.appendChild(description);
    //Preis
    let price = document.createElement("p");
    price.innerHTML = specialsW1[index].price + "€";
    document.getElementById("div3" + index)?.appendChild(price);
    //Kaufen
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    kaufen.addEventListener("click", handleTrolley);
    document.getElementById("div3" + index)?.appendChild(kaufen);
    kaufen.setAttribute("preis", specialsW1[index].price.toString());
}
//Einkaufswagen Funktion
let summe = 0;
let artikelCounter = 0;
let blasenDiv = document.createElement("div");
function handleTrolley(_event) {
    document.getElementById("warencounter")?.appendChild(blasenDiv);
    artikelCounter++;
    blasenDiv.innerHTML = artikelCounter.toString();
    summe += parseInt(_event.currentTarget?.getAttribute("preis"));
    console.log(summe.toFixed(0));
}
//Kategorie Funktion (werde für die nächste Aufgabe meine Artikel sowie diese Funktion als for-schleife umschreiben)
document.getElementById("kat1")?.addEventListener("click", hideKategorien);
document.getElementById("kat2")?.addEventListener("click", hideKategorien);
document.getElementById("kat3")?.addEventListener("click", hideKategorien);
document.getElementById("kat4")?.addEventListener("click", hideKategorien);
function hideKategorien(_event) {
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
//# sourceMappingURL=script.js.map