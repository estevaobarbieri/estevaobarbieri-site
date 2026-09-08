document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-analytics-event]").forEach((link) => {
  link.addEventListener("click", () => {
    if (typeof window.gtag !== "function") return;

    window.gtag("event", link.dataset.analyticsEvent, {
      link_location: link.dataset.analyticsLocation,
      link_text: link.textContent.trim().replace(/\s+/g, " ")
    });
  });
});
