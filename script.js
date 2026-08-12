// MENU MOBILE

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});


// TEMA ESCURO

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeBtn.textContent = "☀️";
    } else {
        themeBtn.textContent = "🌙";
    }

});


// FILTRO DE JOGOS

const filter = document.getElementById("gameFilter");
const games = document.querySelectorAll(".game-card");

filter.addEventListener("change", () => {

    const value = filter.value;

    games.forEach(game => {

        if (
            value === "todos" ||
            game.dataset.type === value
        ) {

            game.style.display = "block";

        } else {

            game.style.display = "none";

        }

    });

});


// GRUPOS

const groupButtons = document.querySelectorAll(".group-tabs button");
const groupTable = document.getElementById("groupTable");


const groups = {

    C: [
        ["🇧🇷 Brasil", "3", "2", "1", "0", "7"],
        ["🇲🇦 Marrocos", "3", "2", "1", "0", "7"],
        ["🏴 Escócia", "3", "1", "0", "2", "3"],
        ["🇭🇹 Haiti", "3", "0", "0", "3", "0"]
    ],

    A: [
        ["🇲🇽 México", "3", "2", "1", "0", "7"],
        ["🇿🇦 África do Sul", "3", "1", "1", "1", "4"],
        ["🇰🇷 Coreia do Sul", "3", "1", "0", "2", "3"],
        ["🇨🇿 Tchéquia", "3", "0", "0", "3", "0"]
    ],

    B: [
        ["🇨🇭 Suíça", "3", "2", "1", "0", "7"],
        ["🇨🇦 Canadá", "3", "1", "1", "1", "4"],
        ["🇧🇦 Bósnia", "3", "1", "0", "2", "3"],
        ["🇶🇦 Catar", "3", "0", "0", "3", "0"]
    ],

    D: [
        ["🇺🇸 Estados Unidos", "3", "2", "0", "1", "6"],
        ["🇵🇾 Paraguai", "3", "1", "1", "1", "4"],
        ["🇦🇺 Austrália", "3", "1", "1", "1", "4"],
        ["🇹🇷 Turquia", "3", "1", "0", "2", "3"]
    ]

};


function renderGroup(group) {

    groupTable.innerHTML = "";

    groups[group].forEach((team, index) => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${team[0]}</td>
            <td>${team[1]}</td>
            <td>${team[2]}</td>
            <td>${team[3]}</td>
            <td>${team[4]}</td>
            <td><strong>${team[5]}</strong></td>
        `;

        groupTable.appendChild(row);

    });

}


groupButtons.forEach(button => {

    button.addEventListener("click", () => {

        groupButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        renderGroup(button.dataset.group);

    });

});


// ANIMAÇÃO AO APARECER

const observer = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: .1
    }
);


document
    .querySelectorAll(
        ".game-card, .country-card, .number-card"
    )
    .forEach(element => {

        element.style.opacity = "0";
        element.style.transform = "translateY(30px)";
        element.style.transition = "opacity .6s ease, transform .6s ease";

        observer.observe(element);

    });
