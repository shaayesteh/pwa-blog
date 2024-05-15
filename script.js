document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("darkModeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.classList.toggle("dark-mode");
    });
  });
});
