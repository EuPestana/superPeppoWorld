const peppo = document.querySelector(".super-peppo");
const pipe = document.querySelector(".pipe-game");

const jump = () => {
    peppo.classList.add("peppo-jump");

    setTimeout(() => {
            peppo.classList.remove("peppo-jump");
        }, 500);
};

const loopGame = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const peppoPosition = +window
        .getComputedStyle(peppo)
        .bottom.replace("px", "");

    if (pipePosition <= 120 && pipePosition > 0 && peppoPosition < 80) {
        pipe.style.animation = "none";
        pipe.style.left = `${pipePosition}px`

        peppo.style.animation = "none";
        peppo.style.bottom = `${peppoPosition}px`;

        peppo.src = "./images/SadFrog.gif";
        peppo.style.width = "120px";
        peppo.style.marginLeft = "0px";

        clearInterval(loopGame)

    }
}, 10);

document.addEventListener("keydown", jump);