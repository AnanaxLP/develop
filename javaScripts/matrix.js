

//matrix für 2024
const matrix = [
    ["E15Ü°1", 6122.63436],
    ["E15Ü°2", 6795.9024 ],
    ["E15Ü°3", 7434.87636],
    ["E15Ü°4", 7853.95084],
    ["E15Ü°5", 7957.03868],
    ["E15Ü°6", 0.00 ],

    ["E15°1", 5017.3082 ],
    ["E15°2", 5394.34776],
    ["E15°3", 5593.59472],
    ["E15°4", 6301.26992],
    ["E15°5", 6837.14576],
    ["E15°6", 7042.2626 ],

    ["E14°1", 4542.63948],
    ["E14°2", 4885.9298 ],
    ["E14°3", 5167.63264],
    ["E14°4", 5593.59472],
    ["E14°5", 6246.27192],
    ["E14°6", 6433.66604],

    ["E13Ü°1", 0.00],
    ["E13Ü°2", 4508.06784],
    ["E13Ü°3", 4748.5376 ],
    ["E13Ü°4", 5593.59472],
    ["E13Ü°5", 6246.27192],
    ["E13Ü°6", 6433.66604],

    ["E13°1", 4188.3804],
    ["E13°2", 4508.06784],
    ["E13°3", 4748.5376],
    ["E13°4", 5215.72248],
    ["E13°5", 5861.53264],
    ["E13°6", 6037.38232],

    ["E12°1", 3774.85712],
    ["E12°2", 4040.88296],
    ["E12°3", 4604.2578],
    ["E12°4", 5098.9314],
    ["E12°5", 5737.87452],
    ["E12°6", 5910.00284],

    ["E11°1", 3652.6382],
    ["E11°2", 3898.3816],
    ["E11°3", 4178.28544],
    ["E11°4", 4604.2578],
    ["E11°5", 5222.5998],
    ["E11°6", 5379.27728],

    ["E10°1", 3523.6242],
    ["E10°2", 3764.77244],
    ["E10°3", 4040.88296],
    ["E10°4", 4322.55496],
    ["E10°5", 4858.4822],
    ["E10°6", 5004.24232],

    ["E9b°1", 3136.59248],
    ["E9b°2", 3369.08496],
    ["E9b°3", 3520.5402],
    ["E9b°4", 3939.06984],
    ["E9b°5", 4295.0868],
    ["E9b°6", 4423.95688],

    ["E9a°1", 3136.59248],
    ["E9a°2", 3369.08496],
    ["E9a°3", 3419.58032],
    ["E9a°4", 3520.5402],
    ["E9a°5", 3939.06984],
    ["E9a°6", 4055.96372],

    ["E8°1", 2946.46388],
    ["E8°2", 3173.47712],
    ["E8°3", 3299.66412],
    ["E8°4", 3419.58032],
    ["E8°5", 3552.0998],
    ["E8°6", 3634.1342],

    ["E7°1", 2769.92544],
    ["E7°2", 2994.05],
    ["E7°3", 3160.843],
    ["E7°4", 3287.05056],
    ["E7°5", 3388.031],
    ["E7°6", 3476.35676],

    ["E6°1", 2722.401],
    ["E6°2", 2945.09664],
    ["E6°3", 3067.49032],
    ["E6°4", 3192.41288],
    ["E6°5", 3274.42672],
    ["E6°6", 3362.77304],

    ["E5°1", 2613.75168],
    ["E5°2", 2834.94644],
    ["E5°3", 2957.34012],
    ["E5°4", 3073.60692],
    ["E5°5", 3167.15492],
    ["E5°6", 3230.26384],

    ["E4°1", 2491.52248],
    ["E4°2", 2718.68992],
    ["E4°3", 2871.6666],
    ["E4°4", 2957.34012],
    ["E4°5", 3043.02392],
    ["E4°6", 3098.0836],

    ["E3°1", 2457.5882],
    ["E3°2", 2681.95948],
    ["E3°3", 2743.15632],
    ["E3°4", 2841.06304],
    ["E3°5", 2920.61996],
    ["E3°6", 2987.9334],

    ["E2Ü°1", 2369.85868],
    ["E2Ü°2", 2577.92588],
    ["E2Ü°3", 2657.4828],
    ["E2Ü°4", 2755.41008],
    ["E2Ü°5", 2822.72352],
    ["E2Ü°6", 2877.77292],

    ["E2°1", 2281.03948],
    ["E2°2", 2504.48556],
    ["E2°3", 2565.69268],
    ["E2°4", 2626.87924],
    ["E2°5", 2767.62272],
    ["E2°6", 2914.51364],

    ["E1°1", 0],
    ["E1°2", 2094.48832],
    ["E1°3", 2125.06104],
    ["E1°4", 2161.7812],
    ["E1°5", 2198.51164],
    ["E1°6", 2290.30176],
    
];

let entgeltyp, H13, C13, D13, E13, F13, G13, N12_bis_10_2024, N12_ab_11_2024, N12_2025, N12_2026, N12_2027;
// FOLGEWERTE für die NEUEN MATRIXWERTE
let folgejahr_1 = 200;
let folgejahr_2 = 1.055;
// Getter

function rechnen() {
    alert("Die Berechnung wird durchgeführt. Bitte warten Sie einen Moment.");
    userInputGetter();
    OutputBrutto();
    OutputJSZ();
    OutputJahressumme();
    OutputGesamtSumme();
}


function userInputGetter() {
    entgeltyp = document.getElementById('entgeltgruppe').value;
    H13 = parseFloat(document.getElementById('wochenstunden').value) || 0;
    C13 = parseFloat(document.getElementById('2024_bis_10_2024').value) || 0;
    D13 = parseFloat(document.getElementById('2024_ab_11_2024').value) || 0;
    E13 = parseFloat(document.getElementById('2025').value) || 0;
    F13 = parseFloat(document.getElementById('2026').value) || 0;
    G13 = parseFloat(document.getElementById('2027').value) || 0;
    N12_bis_10_2024 = document.getElementById('jsz_bis_10_2024_select').value;
    N12_ab_11_2024 = document.getElementById('jsz_ab_11_2024_select').value;
    N12_2025 = document.getElementById('jsz_2025_select').value;
    N12_2026 = document.getElementById('jsz_2026_select').value;
    N12_2027 = document.getElementById('jsz_2027_select').value;
    console.log("Entgeltgruppe gewählt:", entgeltyp);
}

function getEntgeldtyp() {
    const entgeldtyp = document.getElementById('entgeltgruppe').value;  
    
    return entgeldtyp;
}

function searchEntgeld(entgeldtyp){
    for (searchcount = 0; searchcount < matrix.length; searchcount++){

        if (matrix[searchcount][0] === entgeldtyp){

            let matrixwert = matrix[searchcount][1];
            console.log(matrixwert);
            
            return matrixwert;

        }
    }

}

console.log(matrix.length)

function OutputBrutto(){
    document.getElementById("brutto_bis_10_2024").value = OutputBrutto2024_bis_10_2024().toFixed(2);
    document.getElementById("brutto_ab_11_2024").value = OutputBrutto2024_ab_11_2024().toFixed(2);
    document.getElementById("brutto_2025").value = OutputBrutto2025().toFixed(2);
    document.getElementById("brutto_2026").value = OutputBrutto2026().toFixed(2);
    document.getElementById("brutto_2027").value = OutputBrutto2027().toFixed(2);
    console.log("Bruttowerte aktualisiert.");
}
function OutputJSZ(){
    document.getElementById("jsz_2024_bis_10_2024").value = Jahressonderzahlungen10_2024().toFixed(2);
    document.getElementById("jsz_2024_ab_11_2024").value = Jahressonderzahlungen11_2024().toFixed(2);
    document.getElementById("jsz_2025").value = Jahressonderzahlungen2025().toFixed(2);
    document.getElementById("jsz_2026").value = Jahressonderzahlungen2026().toFixed(2);
    document.getElementById("jsz_2027").value = Jahressonderzahlungen2027().toFixed(2);
}

function OutputJahressumme(){
    document.getElementById("js_bis_10_2024").value = Jahressumme_bis_10_2024(OutputBrutto2024_bis_10_2024(), Jahressonderzahlungen10_2024()).toFixed(2);
    document.getElementById("js_ab_11_2024").value = Jahressumme_ab_11_2024(OutputBrutto2024_ab_11_2024(), Jahressonderzahlungen11_2024()).toFixed(2);
    document.getElementById("js_2025").value = Jahressumme2025(OutputBrutto2025(), Jahressonderzahlungen2025()).toFixed(2);
    document.getElementById("js_2026").value = Jahressumme2026(OutputBrutto2026(), Jahressonderzahlungen2026()).toFixed(2);
    document.getElementById("js_2027").value = Jahressumme2027(OutputBrutto2027(), Jahressonderzahlungen2027()).toFixed(2);
}

function OutputGesamtSumme(){
    document.getElementById("gesamtsumme").value = GesamtSumme().toFixed(2);
}



//Brutto-Berechnungen für 2024 bis 2027
function OutputBrutto2024_bis_10_2024(){
    let value = searchEntgeld(entgeltyp);
    if (value !== 0){
        value = (value * 1.24 ) + 120;
    }
    return value;
}
function OutputBrutto2024_ab_11_2024(){
    let value = searchEntgeld(entgeltyp);
    if (value !== 0){
        value = (value + folgejahr_1) * 1.24;
    }
    return value;
}
function OutputBrutto2025(){
    let value = searchEntgeld(entgeltyp);
    if (value !== 0){
        value = ((value + folgejahr_1) * folgejahr_2) * 1.24;
    }
    return value;
}
function OutputBrutto2026(){
    let value = searchEntgeld(entgeltyp);
    if (value !== 0){
        value = (((value + folgejahr_1) * folgejahr_2) * 1.24) * 1.03;
    }
    return value;
}
function OutputBrutto2027(){
    let value = searchEntgeld(entgeltyp);
    if (value !== 0){
        value = ((((value + folgejahr_1) * folgejahr_2) * 1.24) * 1.03) * 1.03;
    }
    return value;
}

function Jahressonderzahlungen10_2024() {
    let result = 0;
    let value = (searchEntgeld(entgeltyp) * 1.24) * 0.3253;
    if (N12_bis_10_2024 === "nein") {
        result = 0;
    } 
    else if (N12_bis_10_2024 === "vollständig") {
        result = value * (H13 / 40);
    } 
    else if (N12_bis_10_2024 === "anteilig") {
        result = (value / 12) * C13 * (H13 / 40);
    }

    return result;  
}


//Funktionen für JSZ Berechnungen
function Jahressonderzahlungen11_2024() {
    let result = 0;
    let value = ((searchEntgeld(entgeltyp) + folgejahr_1) * 1.24) * 0.3253;
    if (N12_ab_11_2024 === "nein") {
        result = 0;
    } 
    else if (N12_ab_11_2024 === "vollständig") {
        result = value * (H13 / 40);
    } 
    else if (N12_ab_11_2024 === "anteilig") {
        result = (value / 12) * D13 * (H13 / 40);
    }
    return result;  
}
function Jahressonderzahlungen2025() {
    let result = 0;
    let value = (((searchEntgeld(entgeltyp) + folgejahr_1) * folgejahr_2) * 1.24) * 0.3253;
    if (N12_2025 === "nein") {
        result = 0;
    } 
    else if (N12_2025 === "vollständig") {
        result = value * (H13 / 40);
    } 
    else if (N12_2025 === "anteilig") {
        result = (value / 12) * E13 * (H13 / 40);
    }
    return result;  
}
function Jahressonderzahlungen2026() {
    let result = 0;
    let value = ((((searchEntgeld(entgeltyp) + folgejahr_1) * folgejahr_2) * 1.24) * 1.03) * 0.3253;
    if (N12_2026 === "nein") {
        result = 0;
    } 
    else if (N12_2026 === "vollständig") {
        result = value * (H13 / 40);
    } 
    else if (N12_2026 === "anteilig") {
        result = (value / 12) * F13 * (H13 / 40);
    }

    return result;  
}
function Jahressonderzahlungen2027() {
    let result = 0;
    let value = (((((searchEntgeld(entgeltyp) + folgejahr_1) * folgejahr_2) * 1.24) * 1.03) * 1.03) * 0.3253;
    if (N12_2027 === "nein") {
        result = 0;
    } 
    else if (N12_2027 === "vollständig") {
        result = value * (H13 / 40);
    } 
    else if (N12_2027 === "anteilig") {
        result = (value / 12) * G13 * (H13 / 40);
    }

    return result;  
}


// Übergabeparameter H13, I13 (Brutto10_2024AGA), C13, N13 (JSZ10_24)
function Jahressumme_bis_10_2024(Brutto10_2024AGA, JSZ10_24) {
    let summe = ((H13 / 40) * Brutto10_2024AGA) * C13;
    if (H13 > 0 && C13 > 0) {
        summe += JSZ10_24;
    }
    return summe;
}
//Excel Referenz: J13 = Brutto11_2024AGA, O13 = JSZ11_24
function Jahressumme_ab_11_2024(Brutto11_2024AGA, JSZ11_24) {
    let summe = ((H13 / 40) * Brutto11_2024AGA) * D13;
    if (H13 > 0 && D13 > 0) {
        summe += JSZ11_24;
    }
    return summe;
}
//Excel Referenz: K13 = Brutto2025AGA, P13 = JSZ2025
function Jahressumme2025(Brutto2025AGA, JSZ2025) {
    let summe = ((H13 / 40) * Brutto2025AGA) * E13;
    if (H13 > 0 && E13 > 0) {
        summe += JSZ2025;
    }
    return summe;
}
//Excel Referenz: L13 = Brutto2026AGA, Q13 = JSZ2026
function Jahressumme2026(Brutto2026AGA, JSZ2026) {
    let summe = ((H13 / 40) * Brutto2026AGA) * F13;
    if (H13 > 0 && F13 > 0) {
        summe += JSZ2026;
    }
    return summe;
}
//Excel Referenz: M13 = Brutto2027AGA, R13 = JSZ2027
function Jahressumme2027(Brutto2027AGA, JSZ2027) {
    let summe = ((H13 / 40) * Brutto2027AGA) * G13;
    if (H13 > 0 && G13 > 0) {
        summe += JSZ2027;
    }
    return summe;
}

function GesamtSumme(){
    let summe = 0;
    summe += Jahressumme_bis_10_2024(OutputBrutto2024_bis_10_2024(), Jahressonderzahlungen10_2024());
    summe += Jahressumme_ab_11_2024(OutputBrutto2024_ab_11_2024(), Jahressonderzahlungen11_2024());
    summe += Jahressumme2025(OutputBrutto2025(), Jahressonderzahlungen2025());
    summe += Jahressumme2026(OutputBrutto2026(), Jahressonderzahlungen2026());
    summe += Jahressumme2027(OutputBrutto2027(), Jahressonderzahlungen2027());
    
    return summe;
}



//SHK/WHK

let mitarbeiterTyp, D26_SHK_WHK_2024, E26_SHK_WHK_2025, F26_SHK_WHK_2026, G26_SHK_WHK_2027, H26_SHK_WHK_Wochenstunden, Stundensatz


function userInputGetter_SHK_WHK() {
    mitarbeiterTyp = document.getElementById('workingType02').value;
    D26_SHK_WHK_2024 = parseFloat(document.getElementById('month2024').value) || 0;
    E26_SHK_WHK_2025 = parseFloat(document.getElementById('month2025').value) || 0;
    F26_SHK_WHK_2026 = parseFloat(document.getElementById('month2026').value) || 0;
    G26_SHK_WHK_2027 = parseFloat(document.getElementById('month2027').value) || 0;
    H26_SHK_WHK_Wochenstunden = parseFloat(document.getElementById('hoursPerWeek').value) || 0;

    if (mitarbeiterTyp === "SHK") {
        Stundensatz = 16.99; // Stundensatz für SHK
        return Stundensatz;
    }
    else if (mitarbeiterTyp === "WHK") {
        Stundensatz = 18.27; // Stundensatz für WHK
        return Stundensatz;
    } else {
        Stundensatz = 0;
    }
}


function JahressummeSHK_WHK_2024(){
    let result = ((H26_SHK_WHK_Wochenstunden * Stundensatz) * 4.333333) * D26_SHK_WHK_2024
    return result;
}
function JahressummeSHK_WHK_2025(){
    let result = ((H26_SHK_WHK_Wochenstunden * Stundensatz) * 4.333333) * E26_SHK_WHK_2025
    return result;
}
function JahressummeSHK_WHK_2026(){
    let result = ((H26_SHK_WHK_Wochenstunden * Stundensatz) * 4.333333) * F26_SHK_WHK_2026
    return result;
}
function JahressummeSHK_WHK_2027(){
    let result = ((H26_SHK_WHK_Wochenstunden * Stundensatz) * 4.333333) * G26_SHK_WHK_2027
    return result;
}

function GesamtSummeSHK_WHK(){
    let summe = 0;
    summe += JahressummeSHK_WHK_2024();
    summe += JahressummeSHK_WHK_2025();
    summe += JahressummeSHK_WHK_2026();
    summe += JahressummeSHK_WHK_2027();
    return summe;
}

function OutputSHK_WHK() {
    document.getElementById("yearSum2024").value = JahressummeSHK_WHK_2024().toFixed(2);
    document.getElementById("yearSum2025").value = JahressummeSHK_WHK_2025().toFixed(2);
    document.getElementById("yearSum2026").value = JahressummeSHK_WHK_2026().toFixed(2);
    document.getElementById("yearSum2027").value = JahressummeSHK_WHK_2027().toFixed(2);

    document.getElementById("shkEmployeeSum").value = GesamtSummeSHK_WHK().toFixed(2);
}

function rechnen_SHK_WHK() {
    alert("Die Berechnung wird durchgeführt. Bitte warten Sie einen Moment.");
    userInputGetter_SHK_WHK();
    OutputSHK_WHK()
}





