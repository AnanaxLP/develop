function initEmployeePage() {
    fetch('/PHP/getEmployeeList.php')
        .then(res => res.text())
        .then(text => {
            try {
                const data = JSON.parse(text);
                if (data.error) {
                    console.error(data.error);
                    return;
                }

                const mitarbeiterListe = [...data.mitarbeiter, ...data.shk].filter(m => m && m.id);
                console.log("Gültige Mitarbeiter:", mitarbeiterListe);

                renderEmployeeInterface(mitarbeiterListe);
            } catch (e) {
                console.error("Ungültige JSON-Antwort:", text);
                console.error(e);
            }
        })
        .catch(err => console.error("Fehler beim Laden der Daten:", err));

    initScrollToTopButton();
}

function renderEmployeeInterface(mitarbeiterListe) {
    const listContainer = document.getElementById("employeeButtons");
    const detailContainer = document.getElementById("employeeDetails");
    const searchInput = document.getElementById("searchInput");

    const mitarbeiter = mitarbeiterListe.filter(m => m.typ === "Mitarbeiter");
    const shks = mitarbeiterListe.filter(m => m.typ === "SHK");

    function createList(title, data) {
        const section = document.createElement("div");
        section.classList.add("employee-section");

        const headline = document.createElement("h3");
        headline.textContent = title;
        section.appendChild(headline);

        data.forEach(m => {
            if (!m || !m.id) {
                console.warn("Überspringe ungültigen Eintrag:", m);
                return;
            }

            const btn = document.createElement("button");
            btn.className = "employee-button";
            if (m.typ === "SHK") btn.classList.add("shk");
            btn.textContent = m.name;

            btn.addEventListener("click", (e) => {
                const cardId = `card-${m.id}`;
                const existingCard = document.getElementById(cardId);

                if (existingCard) {
                    existingCard.remove();
                    btn.classList.remove("active");
                    return;
                }

                if (!e.shiftKey) {
                    detailContainer.innerHTML = "";
                    document.querySelectorAll(".employee-button").forEach(b => b.classList.remove("active"));
                }

                const card = createEmployeeCard(m);
                detailContainer.appendChild(card);
                btn.classList.add("active");
            });

            section.appendChild(btn);
        });

        return section;
    }

    function renderAll(filteredList) {
        listContainer.innerHTML = "";

        const mitarbeiter = filteredList.filter(m => m.typ === "Mitarbeiter");
        const shks = filteredList.filter(m => m.typ === "SHK");

        if (mitarbeiter.length > 0) {
            listContainer.appendChild(createList("Mitarbeiter", mitarbeiter));
        }
        if (shks.length > 0) {
            listContainer.appendChild(createList("SHK", shks));
        }
    }


    renderAll(mitarbeiterListe);

    if (searchInput) {
        searchInput.addEventListener("input", () => {
            const query = (searchInput.value || "").toLowerCase();

            const filtered = mitarbeiterListe.filter(m =>
                (m.name || "").toLowerCase().includes(query) ||
                (m.mitarbeiter_id || "").toString().toLowerCase().includes(query) ||
                (m.typ || "").toLowerCase().includes(query)
            );

            console.log("Suchbegriff:", query);
            console.log("Treffer:", filtered.map(f => f.name));
            renderAll(filtered);
        });
    } else {
        console.warn("searchInput nicht gefunden!");
    }

}

function createEmployeeCard(m) {
    if (!m || !m.id) {
        console.warn("Ungültiges Mitarbeiterobjekt in createEmployeeCard:", m);
        return document.createElement("div");
    }

    const card = document.createElement("div");
    card.id = `card-${m.id}`;
    card.className = "employee-card";
    if (m.typ === "SHK") card.classList.add("shk");

    const commonInfo = `
        <h3>${m.name}</h3>
        <div class="input-box-employeeInputs">
            <div class="inputfield"><label>Typ:</label><input type="text" value="${m.typ}" readonly></div>
            <div class="inputfield"><label>Personalnummer:</label><input type="text" value="${m.mitarbeiter_id}" readonly></div>
            <div class="inputfield"><label>Wochenstunden:</label><input type="text" value="${m.wochenstunden || m.hoursPerWeek || ''}" readonly></div>
    `;

    let spezifisch = "";

    if (m.typ === "Mitarbeiter") {
        const brutto = (parseFloat(m.brutto_bis_10_2024) || 0) + (parseFloat(m.brutto_ab_11_2024) || 0);
        const jsz = (parseFloat(m.jsz_2024_bis_10_2024) || 0) + (parseFloat(m.jsz_2024_ab_11_2024) || 0);

        spezifisch += `
            <div class="inputfield"><label>Entgeltgruppe:</label><input type="text" value="${m.entgeltgruppe || ''}" readonly></div>
            <div class="inputfield"><label>Brutto 2024:</label><input type="text" value="${brutto.toFixed(2)} €" readonly></div>
            <div class="inputfield"><label>JSZ 2024:</label><input type="text" value="${jsz.toFixed(2)} €" readonly></div>
            <div class="inputfield"><label>Gesamtsumme:</label><input type="text" value="${m.gesamtsumme || ''} €" readonly></div>
        `;
    } else {
        // Stundenlohn abhängig von SHK/WHK
        let stundensatz = "";
        if (m.workingType02 === "SHK") stundensatz = "16.99";
        else if (m.workingType02 === "WHK") stundensatz = "18.27";
        else stundensatz = m.salary || "";

        spezifisch += `
            <div class="inputfield"><label>SHK-Typ:</label><input type="text" value="${m.workingType02 || ''}" readonly></div>
            <div class="inputfield"><label>Stundenlohn:</label><input type="text" value="${stundensatz} €" readonly></div>
            <div class="inputfield"><label>Gesamtkosten:</label><input type="text" value="${m.shkEmployeeSum || ''} €" readonly></div>
        `;
    }

    card.innerHTML = commonInfo + spezifisch + `</div>`;
    return card;
}

function initScrollToTopButton() {
    const scrollBtn = document.getElementById("scrollTopBtn");
    if (!scrollBtn) return;

    window.addEventListener("scroll", () => {
        scrollBtn.classList.toggle("hidden", window.scrollY <= 300);
    });

    scrollBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

document.addEventListener("DOMContentLoaded", () => {
    initEmployeePage();
});
