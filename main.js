var val = 0;
var blocker = false;

function checkScrollDirection(event) {
    event.preventDefault();
    event.stopPropagation();
    if (blocker) {
        if (checkScrollDirectionIsUp(event)) {
            console.log('UP');
            val = Math.max(0, val - 1);
        } else {
            console.log('Down');
            val += 1;
        }
        window.scrollTo(0, f(val));
    } else {
        window.scrollTo(0, 0);
    }
}

function checkScrollDirectionIsUp(event) {
    if (event.wheelDelta) {
        return event.wheelDelta > 0;
    }
    return event.deltaY < 0;
}

function f(t) {
    step = document.body.scrollHeight / document.querySelectorAll("img").length; //px per image
    x = t % 20 //how many clicks to roll image
    fx = (0.5 * x * x) / (0.5 * 20 * 20) * step;

    return fx + Math.floor(t / 20) * step; //image height
}

document.addEventListener("DOMContentLoaded", () => {
    window.scrollTo(0, 0);
    var scrollableElement = document.body; //document.getElementById('scrollableElement');

    document.querySelector(".banner").addEventListener("animationend", () => { blocker = true; });
    scrollableElement.addEventListener('wheel', checkScrollDirection);
    scrollableElement.addEventListener('scroll', (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (!blocker) {
            window.scrollTo(0, 0);
        }
    });

});