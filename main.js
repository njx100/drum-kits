const kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container");



kits.forEach( kit => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    btnEl.style.background = `url("images/${kit}.png")`;
    btnEl.style.backgroundSize = "cover";
    containerEl.appendChild(btnEl);
    const audioEl = document.createElement("audio");
    audioEl.src = `sounds/${kit}.mp3`;
    containerEl.appendChild(audioEl);
    btnEl.addEventListener("click", () => {
        audioEl.play();
        btnEl.style.transform = "scale(.9)";
        setTimeout(() => {
            btnEl.style.transform = "scale(1)";
        }, 50);
    });
    window.addEventListener("keydown", (event) => {
    if (event.key === kit.charAt(0)) {
        audioEl.play();
        btnEl.style.transform = "scale(.9)";
        setTimeout(() => {
            btnEl.style.transform = "scale(1)";
        }, 50);
        };
    });
    
});
