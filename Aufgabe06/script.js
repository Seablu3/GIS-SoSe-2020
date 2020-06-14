"use strict";
//Bestseller wolken
let cirrus1 = { img: "pics/cirrus.jpg", name: "Cirruswolke", description: "Nice Wolke", price: 11.50, category: 1 };
let cumulonimbus1 = { img: "pics/cumulonimbus.jpg", name: "Cumulonimbuswolke", description: "Wenn du Gewitter magst, genau deine Wolke", price: 1100.00, category: 1 };
let stratus1 = { img: "pics/stratus.jpg", name: "Stratuswolke", description: "Ein 'Furtwangen Depression' Classic", price: 2.00, category: 1 };
let nimbostratus1 = { img: "pics/nimbostratus.jpg", name: "Nimbostratuswolke€", description: "Erzeugen lange anhaltenden Regen: Deutsche Landwirte küssen deine Augen.", price: 200.00, category: 1 };
let altostratus1 = { img: "pics/altostratus.jpg", name: "Altostratuswolke", description: "Absoluter Schmodder", price: 10.00, category: 1 };
let cirrostratus1 = { img: "pics/cirrostratus.jpg", name: "Cirrostratuswolke", description: "Fusion aus Cirrus und Stratus: Erzeugt (mit Glück) schöne Kreise", price: 50.00, category: 1 };
//Unkonventionelle Wolken
let kraftwerkabdampf1 = { img: "pics/AKW.jpg", name: "Kraftwerkabdampf", description: "pfui", price: 777777777777.77, category: 2 };
let lilawolken1 = { img: "pics/lilawolken.jpg", name: "Lila Wolken", description: "30 Grad, du kühlst dein Kompf am Fensterglas", price: 0.01, category: 2 };
let aschewolke1 = { img: "pics/vulkanausbruch.jpg", name: "Aschewolke", description: "Abriss", price: 1.50, category: 2 };
//Special Wolken
let wolke71 = { img: "pics/wolke7.jpg", name: "Wolke7", description: "Die wahre Liebe", price: 696969.69, category: 3 };
let andereWolke1 = { img: "pics/daweeeeeeeed.jpg", name: "Diese andere Wolke", description: "gas gas", price: 4.20, category: 3 };
let icloud1 = { img: "pics/icloud.jpg", name: "iCloud Speicher", description: "scameriono", price: 1111.10, category: 3 };
//Array alle Artikel
let alleW = [cirrus1, cumulonimbus1, stratus1, nimbostratus1, altostratus1, cirrostratus1, kraftwerkabdampf1, lilawolken1, aschewolke1, wolke71, andereWolke1, icloud1];
//Main Methode, erzeugt Artikel
for (let i = 0; i < alleW.length; i++) {
    //Div erstellen, 3 Kategorien
    if (alleW[i].category == 1) {
        let newDiv = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("grid1")?.appendChild(newDiv);
    }
    if (alleW[i].category == 2) {
        let newDiv = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("grid2")?.appendChild(newDiv);
    }
    if (alleW[i].category == 3) {
        let newDiv = document.createElement("div");
        newDiv.id = "div" + i;
        document.getElementById("grid3")?.appendChild(newDiv);
    }
    //Bild
    let imgElement = document.createElement("img");
    imgElement.src = alleW[i].img;
    document.getElementById("div" + i)?.appendChild(imgElement);
    //Name
    let name = document.createElement("h2");
    name.innerHTML = alleW[i].name;
    document.getElementById("div" + i)?.appendChild(name);
    //Beschreibung
    let description = document.createElement("p");
    description.innerHTML = alleW[i].description;
    document.getElementById("div" + i)?.appendChild(description);
    //Preis
    let price = document.createElement("p");
    price.innerHTML = alleW[i].price + "€";
    document.getElementById("div" + i)?.appendChild(price);
    //Kaufen
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    document.getElementById("div" + i)?.appendChild(kaufen);
    kaufen.addEventListener("click", handleTrolley);
    kaufen.setAttribute("preis", alleW[i].price.toString());
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
//Kategorie Funktion 
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