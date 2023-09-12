const toggleBox = document.querySelector(".toggle-box");
const dropList = document.querySelector(".navbar-nav");
const dropListExt = document.getElementById("ext");

toggleBox.addEventListener("click", () => {
    toggleBox.classList.toggle("active");
    dropList.classList.toggle("trigger");
    dropListExt.classList.toggle("trigger");
});