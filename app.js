(() => {
  "use strict";

  const citationButton = document.querySelector("[data-copy-citation]");
  const citation = document.querySelector("#citation code");

  const revealItems = [...document.querySelectorAll(".section, .paper-row, .study-panel, .relation-item, .reproduce-grid")];
  revealItems.forEach((item) => item.classList.add("reveal"));
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("is-visible"));
  } else {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
    revealItems.forEach((item) => revealObserver.observe(item));
  }

  citationButton?.addEventListener("click", async () => {
    if (!citation) return;
    const original = citationButton.textContent;
    try {
      await navigator.clipboard.writeText(citation.textContent.trim());
      citationButton.textContent = "Copied";
    } catch {
      citationButton.textContent = "Copy failed";
    }
    window.setTimeout(() => {
      citationButton.textContent = original;
    }, 1500);
  });
})();
