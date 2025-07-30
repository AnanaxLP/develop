
function fetchSalaryStepTable () {
    fetch('entgeldstufen.json')
    .then(response => response.json())
    .then(data => {
        const datalist = document.getElementById('Optionen');
        datalist.innerHTML = '';
        data.gruppen.forEach(gruppe => {
            data.stufen.forEach(stufe => {
                const option = document.createElement('option');
                option.value = gruppe.replace(/\s/g, "") + "°" + stufe;
                //option.value = gruppe + "°" + stufe;
                datalist.appendChild(option);

            });
        });
    })
        .catch(error => console.log("Fehler beim Laden der Entgeltstufe", error));

}

function selectedEmployeeType (){
    document.getElementById("workingType").addEventListener("change", function(){
        const selectedValue =  this.value;

        if(selectedValue === "SHK/WHK"){
           loadPage("HTML/shkMainPage.html");
        }else if(selectedValue === "Mitarbeiter"){
            loadPage("HTML/mainPage.html");
        }
    });
}

function submitEmployeeInputsToDb () {
    const data = new FormData();

    data.append("name", document.getElementById("name")?.value || "");
    data.append("mitarbeiter_id", document.getElementById("mitarbeiter_id")?.value || "");
    data.append("entgeltgruppe", document.getElementById("entgeltgruppe")?.value || "");

    data.append("2024_bis_10_2024", document.getElementById("2024_bis_10_2024")?.value || "");
    data.append("2024_ab_11_2024", document.getElementById("2024_ab_11_2024")?.value || "");
    data.append("2025", document.getElementById("2025")?.value || "");
    data.append("2026", document.getElementById("2026")?.value || "");
    data.append("2027", document.getElementById("2027")?.value || "");
    data.append("wochenstunden", document.getElementById("wochenstunden")?.value || "");

    data.append("brutto_bis_10_2024", document.getElementById("brutto_bis_10_2024")?.value || "");
    data.append("brutto_ab_11_2024", document.getElementById("brutto_ab_11_2024")?.value || "");
    data.append("brutto_2025", document.getElementById("brutto_2025")?.value || "");
    data.append("brutto_2026", document.getElementById("brutto_2026")?.value || "");
    data.append("brutto_2027", document.getElementById("brutto_2027")?.value || "");

    data.append("jsz_2024_bis_10_2024", document.getElementById("jsz_2024_bis_10_2024")?.value || "");
    data.append("jsz_2024_ab_11_2024", document.getElementById("jsz_2024_ab_11_2024")?.value || "");
    data.append("jsz_2025", document.getElementById("jsz_2025")?.value || "");
    data.append("jsz_2026", document.getElementById("jsz_2026")?.value || "");
    data.append("jsz_2027", document.getElementById("jsz_2027")?.value || "");

    data.append("js_bis_10_2024", document.getElementById("js_bis_10_2024")?.value || "");
    data.append("js_ab_11_2024", document.getElementById("js_ab_11_2024")?.value || "");
    data.append("js_2025", document.getElementById("js_2025")?.value || "");
    data.append("js_2026", document.getElementById("js_2026")?.value || "");
    data.append("js_2027", document.getElementById("js_2027")?.value || "");

    data.append("gesamtsumme", document.getElementById("gesamtsumme")?.value || "");

    // Anfrage senden
    fetch("PHP/insertMitarbeiter.php", {
        method: "POST",
        body: data
    })
        .then(res => res.text())
        .then(msg => {
            const cleanMsg = msg.trim();
            if (cleanMsg === "OK") {
                alert("✅ Mitarbeiter erfolgreich gespeichert!");
            } else {
                alert(cleanMsg);
            }
        })
        .catch(err => alert( err));
}


function submitShkInputsToDb (){
    const data = new FormData();

    data.append("name", document.getElementById("name")?.value || "");
    data.append("mitarbeiter_id", document.getElementById("mitarbeiter_id")?.value || "");
    data.append("workingType02", document.getElementById("workingType02")?.value || "");

    data.append("salary", document.getElementById("salary")?.value || "");
    data.append("month2024", document.getElementById("month2024")?.value || "");
    data.append("month2025", document.getElementById("month2025")?.value || "");
    data.append("month2026", document.getElementById("month2026")?.value || "");
    data.append("month2027", document.getElementById("month2027")?.value || "");
    data.append("hoursPerWeek", document.getElementById("hoursPerWeek")?.value || "");


    data.append("yearSum2024", document.getElementById("yearSum2024")?.value || "");
    data.append("yearSum2025", document.getElementById("yearSum2025")?.value || "");
    data.append("yearSum2026", document.getElementById("yearSum2026")?.value || "");
    data.append("yearSum2027", document.getElementById("yearSum2027")?.value || "");
    data.append("shkEmployeeSum", document.getElementById("shkEmployeeSum")?.value || "");



    // Anfrage senden
    fetch("PHP/insertShkAndWhk.php", {
        method: "POST",
        body: data
    })

        .then(res => res.text())
        .then(msg => alert("Antwort vom Server: " + msg))
        .catch(err => alert("Fehler beim Senden: " + err)
        );
}


function clearEmployeeForm() {
    //Eingabefelder
    [
        "name", "mitarbeiter_id", "entgeltgruppe", "2024_bis_10_2024", "2024_ab_11_2024", "2025", "2026", "2027", "wochenstunden",
        "brutto_bis_10_2024", "brutto_ab_11_2024", "brutto_2025", "brutto_2026", "brutto_2027",
        "jsz_2024_bis_10_2024", "jsz_2024_ab_11_2024", "jsz_2025", "jsz_2026", "jsz_2027",
        "js_bis_10_2024", "js_ab_11_2024", "js_2025", "js_2026", "js_2027",
        "gesamtsumme", "workingType02", "salary", "month2024", "month2025", "month2026", "month2027", "hoursPerWeek", "yearSum2024", "yearSum2025", "yearSum2026", "yearSum2027", "shkEmployeeSum"
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
    });
    // Auswahlfelder
    [
        "jsz_bis_10_2024_select", "jsz_ab_11_2024_select", "jsz_2025_select", "jsz_2026_select", "jsz_2027_select"
    ].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.value = "";
    });
}


document.addEventListener("input", function(e) {
    if (e.target.id === "workingType02") {
        const val = e.target.value;
        const options = document.getElementById("type02").options;
        let salary = "";
        for (let i = 0; i < options.length; i++) {
            if (options[i].value === val) {
                salary = options[i].dataset.salary || "";
                break;
            }
        }
        document.getElementById("salary").value = salary;
    }
});