document.getElementById("year").textContent = new Date().getFullYear();

// mobile menu toggle
const nav = document.querySelector("nav ul");
const menuBtn = document.createElement("button");

menuBtn.textContent = "☰ Menu";
document.querySelector("nav").prepend(menuBtn);
menuBtn.addEventListener("click", () => nav.classList.toggle("open"));

// smooth scrolling
document.querySelectorAll("a[href^='#']").forEach((el) => {
    el.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(this.getAttribute("href"))
            .scrollIntoView({ behavior: "smooth" });
    });
});
