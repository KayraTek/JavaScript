function setMode() {
    const modeControl = document.querySelector(`body`);
    const setText = document.querySelector("#btn-mode");

    if (modeControl.classList.contains("light")) {
        modeControl.classList.remove("light");
        modeControl.classList.add("dark");
        setText.innerText = "Light";
    } else {
        modeControl.classList.remove("dark");
        modeControl.classList.add("light");
        setText.innerText = "Dark";
    }
}