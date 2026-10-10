function changeContent() {
    const title = document.getElementById("title");
    const message = document.getElementById("message");
    const status = document.querySelector(".status");

    title.textContent = "The DOM Has Changed!";
    message.textContent = "The changes have been applied.";
    status.textContent = "Status: Updated";

    title.style.color = "blue";
    message.style.fontWeight = "bold";

   title.classList.add("active");
}