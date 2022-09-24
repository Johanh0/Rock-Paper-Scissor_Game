// ---------- DARK MODE ----------
// Switch BTN
const switchBtn = document.querySelector(`.switch`);
const bodyEl = document.querySelector(`body`);
let darkMode = false;

switchBtn.addEventListener(`click`, () => {
    if (darkMode === false) {
        bodyEl.classList.add(`dark`);
        switchBtn.classList.add(`active`);

        darkMode = true;
    } else {
        bodyEl.classList.remove(`dark`);
        switchBtn.classList.remove(`active`);

        darkMode = false;
    }
})
