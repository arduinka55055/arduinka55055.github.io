document.querySelector("body").style.overflowX="hidden";
document.querySelector("body").style.overflowY="hidden";

document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);

    document.querySelector(".banner").addEventListener("animationend", () => { document.querySelector("body").style.overflowY=""});
});