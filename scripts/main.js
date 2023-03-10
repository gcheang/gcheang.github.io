function toggleTheme() {
    const theme = getComputedStyle(document.body).getPropertyValue('--theme').trim();
    if (theme === 'dark') {
        document.documentElement.setAttribute('style',
        `--theme: light;
        --color: black;
        --background-color: white;
        --accent-color: #CC0000;
        `);
        document.getElementById("Header").style.backgroundColor = '#FFF2CC';
        document.getElementById("Menu").src="images/icons8-menu-96-black.png";
        document.getElementById("ThemeButton").src="images/icons8-sun-96.png";
    } else {
        document.documentElement.setAttribute('style',
        `--theme: dark;
        --color: yellow;
        --background-color: black;
        --accent-color: white;
        `);
        document.getElementById("Header").style.backgroundColor = 'var(--background-color)';
        document.getElementById("Menu").src="images/icons8-menu-96-yellow.png";
        document.getElementById("ThemeButton").src="images/icons8-do-not-disturb-ios-96.png";
    }
}

function showMenu() {
    const elements = document.querySelectorAll(".nav-item");
    elements.forEach(p => p.classList.toggle("nav-item--col"));
}

function easterEgg() {
    const elements = document.querySelectorAll(".easter-egg__toggle");
    elements.forEach(p => p.classList.toggle("font--accent2"));
}

function onStart() {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
        if (!mql.matches) { toggleTheme(); }
}
