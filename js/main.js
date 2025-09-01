// Animasi fade-in pas scroll
document.addEventListener("DOMContentLoaded", () => {
  const elements = document.querySelectorAll("section, img");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("opacity-100", "translate-y-0");
      }
    });
  }, { threshold: 0.1 });

  elements.forEach(el => {
    el.classList.add("opacity-0", "translate-y-6", "transition", "duration-700");
    observer.observe(el);
  });
});

// Fake kirim pesan
function fakeSendMessage(e) {
  e.preventDefault();
  alert("Pesan terkirim (dummy).");
  return false;
}
