function toggleTheme() {
    const theme = getComputedStyle(document.body).getPropertyValue('--theme');
    if (theme === ' dark') {
        document.documentElement.style.setProperty('--theme', ' light');
        document.documentElement.style.setProperty('--color', 'black');
        document.documentElement.style.setProperty('--background-color', 'yellow');
        document.documentElement.style.setProperty('--accent-color', '#CC0000'); /* light mode accent */
        document.getElementById("Menu").src="images/icons8-menu-96-black.png";
        document.getElementById("ThemeButton").src="images/icons8-sun-96.png";
    } else {
        document.documentElement.style.setProperty('--theme', ' dark');
        document.documentElement.style.setProperty('--color', 'yellow');
        document.documentElement.style.setProperty('--background-color', 'black');
        document.documentElement.style.setProperty('--accent-color', 'white');
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
