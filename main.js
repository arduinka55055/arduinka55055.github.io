document.body.style.overflowX="hidden";
document.body.style.overflowY="hidden";

document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);

    document.querySelector(".banner").addEventListener("animationend", () => { document.body.style.overflowY=""});
});