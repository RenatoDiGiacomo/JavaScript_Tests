function initList() {
    const menueach = function() {
        const menuItems = [
            "Counter",
            "Hex",
            "NavBar",
            "Progress-Bar",
            "Scrolling Bar Top",
            "Typing Writer",
        ];
        let print = "";

        menuItems.forEach(item => {
            const text = item.replace(/\s/g, '-').toLowerCase()
            print += `<li><a href="${text}/index.html">${item}</a></li>`;
        })
        return print;
    };

    const menu = document.getElementById("menu");
    menu.innerHTML = menueach()

}
initList();

const startmenu = document.querySelector('.startmenu');

function menuselect() {
    console.log('funciona')
    const menu = document.getElementById('menu')
    if (menu.classList.contains('active')) {
        menu.classList.remove('active')
    } else {
        menu.classList.add('active')
    }
}

startmenu.addEventListener('click', menuselect)