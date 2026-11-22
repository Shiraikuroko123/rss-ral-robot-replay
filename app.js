(() => {
  "use strict";

  const citationButton = document.querySelector("[data-copy-citation]");
  const citation = document.querySelector("#citation code");

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
