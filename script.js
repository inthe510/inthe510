document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-shop-link]").forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");
    if (!href || href === "#") {
      event.preventDefault();
      alert("TikTok Shop link coming next.");
    }
  });
});

// Give the hero lights a slightly less mechanical rhythm on each page load.
document.querySelectorAll(".light").forEach((light, index) => {
  const offset = ((index * 0.43) % 4.4).toFixed(2);
  const duration = (4.2 + ((index * 0.37) % 2.7)).toFixed(2);
  light.style.animationDelay = `-${offset}s`;
  light.style.animationDuration = `${duration}s`;
});
