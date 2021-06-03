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
initList()
const