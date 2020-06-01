"use strict";
//Bestseller wolken
let cirrus = { img: "pics/cirrus.jpg", name: "Cirruswolke", description: "Nice Wolke", price: 11.50 + "€" };
let cumulonimbus = { img: "pics/cumulonimbus.jpg", name: "Cumulonimbuswolke", description: "Wenn du Gewitter magst, genau deine Wolke", price: 1100.00 + "€" };
let stratus = { img: "pics/stratus.jpg", name: "Stratuswolke", description: "Ein 'Furtwangen Depression' Classic", price: 2.00 + "€" };
let nimbostratus = { img: "pics/nimbostratus.jpg", name: "Nimbostratuswolke€", description: "Erzeugen lange anhaltenden Regen: Deutsche Landwirte küssen deine Augen.", price: 200.00 + "€" };
let altostratus = { img: "pics/altostratus.jpg", name: "Altostratuswolke", description: "Absoluter Schmodder", price: 10.00 + "€" };
let cirrostratus = { img: "pics/cirrostratus.jpg", name: "Cirrostratuswolke", description: "Fusion aus Cirrus und Stratus: Erzeugt (mit Glück) schöne Kreise", price: 50.00 + "€" };
//Array Bestseller
let bestsellerW = [cirrus, cumulonimbus, stratus, nimbostratus, altostratus, cirrostratus];
//Unkonventionelle Wolken
let kraftwerkabdampf = { img: "pics/AKW.jpg", name: "Kraftwerkabdampf", description: "pfui", price: 777777777777.77 + "€" };
let lilawolken = { img: "pics/lilawolken.jpg", name: "Lila Wolken", description: "30 Grad, du kühlst dein Kompf am", price: 0.01 + "€" };
let aschewolke = { img: "pics/vulkanausbruch.jpg", name: "Aschewolke", description: "Abriss", price: 1.50 + "€" };
//Array Unkonventionelle
let unkonventionelleW = [kraftwerkabdampf, lilawolken, aschewolke];
//Special Wolken
let wolke7 = { img: "pics/wolke7.jpg", name: "Wolke7", description: "Die wahre Liebe", price: 696969.69 + "€" };
let andereWolke = { img: "pics/daweeeeeeeed.jpg", name: "Diese andere Wolke", description: "gas gas", price: 4.20 + "€" };
let icloud = { img: "pics/icloud.jpg", name: "iCloud Speicher", description: "scameriono", price: 1111.10 + "€" };
//Array Specials
let specialsW = [wolke7, andereWolke, icloud];
//Bestseller for schleife 
for (let index = 0; index < bestsellerW.length; index++) {
    //Div erstellen 
    let newDiv = document.createElement("div");
    newDiv.id = "div1" + index;
    document.getElementById("grid1")?.appendChild(newDiv);
    //Bild hinzuziehen
    let imgElement = document.createElement("img");
    imgElement.src = bestsellerW[index].img;
    document.getElementById("div1" + index)?.appendChild(imgElement);
    //Name hinzuziehen
    let name = document.createElement("h2");
    name.innerHTML = bestsellerW[index].name;
    document.getElementById("div1" + index)?.appendChild(name);
    //Beschreibung bobobobob
    let description = document.createElement("p");
    description.innerHTML = bestsellerW[index].description;
    document.getElementById("div1" + index)?.appendChild(description);
    //Preis
    let price = document.createElement("p");
    price.innerHTML = bestsellerW[index].price;
    document.getElementById("div1" + index)?.appendChild(price);
    // let price: HTMLElement = document.createElement("p");
    // let produktPreisStrong: HTMLElement = document.createElement("strong");
    // artikelcontainer.appendChild(produktPreis);
    //Kaufen
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    document.getElementById("div1" + index)?.appendChild(kaufen);
}
//Unkonventionelle for schleife 
for (let index = 0; index < unkonventionelleW.length; index++) {
    //Div erstellen
    let newDiv = document.createElement("div");
    newDiv.id = "div2" + index;
    document.getElementById("grid2")?.appendChild(newDiv);
    //Bild hinzuziehen
    let imgElement = document.createElement("img");
    imgElement.src = unkonventionelleW[index].img;
    document.getElementById("div2" + index)?.appendChild(imgElement);
    //Name hinzuziehen
    let name = document.createElement("h2");
    name.innerHTML = unkonventionelleW[index].name;
    document.getElementById("div2" + index)?.appendChild(name);
    //Beschreibung
    let description = document.createElement("p");
    description.innerHTML = unkonventionelleW[index].description;
    document.getElementById("div2" + index)?.appendChild(description);
    //Preis
    let price = document.createElement("p");
    description.innerHTML = unkonventionelleW[index].description;
    document.getElementById("div2" + index)?.appendChild(price);
    //Kaufen
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    document.getElementById("div2" + index)?.appendChild(kaufen);
}
//Specials for schleife 
for (let index = 0; index < specialsW.length; index++) {
    //Div erstellen
    let newDiv = document.createElement("div");
    newDiv.id = "div3" + index;
    document.getElementById("grid3")?.appendChild(newDiv);
    //Bild hinzuziehen
    let imgElement = document.createElement("img");
    imgElement.src = specialsW[index].img;
    document.getElementById("div3" + index)?.appendChild(imgElement);
    //Name hinzuziehen
    let name = document.createElement("h2");
    name.innerHTML = specialsW[index].name;
    document.getElementById("div3" + index)?.appendChild(name);
    //Beschreibung
    let description = document.createElement("p");
    description.innerHTML = specialsW[index].description;
    document.getElementById("div3" + index)?.appendChild(description);
    //Preis
    let price = document.createElement("p");
    price.innerHTML = specialsW[index].price;
    document.getElementById("div3" + index)?.appendChild(price);
    //Kaufen
    let kaufen = document.createElement("button");
    kaufen.innerHTML = "Kaufen";
    document.getElementById("div3" + index)?.appendChild(kaufen);
}
//# sourceMappingURL=script.js.map