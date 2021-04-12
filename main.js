
document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);

    document.querySelector(".banner").addEventListener("animationend", () => { document.body.setAttribute("class","done")});
});