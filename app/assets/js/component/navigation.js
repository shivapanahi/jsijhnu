let isClose = true;

function onToggle() {
    const menu = document.getElementById('nav');
    if (isClose) {
        menu.classList.add('active');
        isClose = false;
    } else {
        menu.classList.remove('active');
        isClose = true;
    }
}