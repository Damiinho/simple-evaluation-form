const notes = document.querySelectorAll(".window-note-component__button");
const nextButton = document.querySelector(".window-next-button");
const myWindow = document.querySelector("div.window");
let activeNote = null;

setTimeout(() => {
  myWindow.classList.remove("hidden");
}, 3000);

notes.forEach((note) => {
  note.addEventListener("click", () => {
    if (note.classList.contains("selected")) {
      note.classList.remove("selected");
      nextButton.classList.remove("active");
      activeNote = null;
    } else {
      notes.forEach((note) => note.classList.remove("selected"));
      note.classList.add("selected");
      nextButton.classList.add("active");
      activeNote = note.innerHTML;
    }
  });
});

nextButton.addEventListener("click", () => {
  if (nextButton.classList.contains("active") && !activeNote) {
    alert("Error");
    nextButton.classList.remove("active");
  }
  if (nextButton.classList.contains("active") && activeNote) {
    alert(`Dziękujemy, że oceniłeś produkt na ${activeNote}`);
    nextButton.classList.remove("active");
    notes.forEach((note) => note.classList.remove("selected"));
    activeNote = null;
  } else null;
});
