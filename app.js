const sounds = [1, 2, 3, 4, 5];
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;
  btn.addEventListener("click", () => {
    soundstop();
    document.getElementById(sound).play();
  });
  document.getElementById("buttons").appendChild(btn);
});
function soundstop() {
  sounds.forEach((sounds) => {
    const song = document.getElementById(sounds);
    song.pause();
    song.currentTime = 0;
  });
}
