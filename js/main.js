(function () {
  "use strict";

  // 出發日：修改此日期以更新首頁倒數（台北時間 06:00）
  const DEPARTURE_ISO = "2026-06-01T06:00:00+08:00";

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const open = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!open));
      nav.classList.toggle("is-open", !open);
    });

    nav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  const countdownEl = document.getElementById("countdown");
  if (!countdownEl) return;

  const target = new Date(DEPARTURE_ISO).getTime();

  function pad(n) {
    return String(Math.max(0, n)).padStart(2, "0");
  }

  function unitHtml(n, label) {
    return (
      '<div class="countdown-unit">' +
      '<span class="num">' +
      pad(n) +
      "</span>" +
      '<span class="label">' +
      label +
      "</span>" +
      "</div>"
    );
  }

  function renderCountdown() {
    const diff = target - Date.now();

    if (diff <= 0) {
      countdownEl.innerHTML =
        '<p style="margin:0;opacity:0.9">已出發或請更新 js/main.js 中的 DEPARTURE_ISO。</p>';
      return;
    }

    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff % 86400000) / 3600000);
    const mins = Math.floor((diff % 3600000) / 60000);
    const secs = Math.floor((diff % 60000) / 1000);

    countdownEl.innerHTML =
      unitHtml(days, "天") +
      unitHtml(hours, "時") +
      unitHtml(mins, "分") +
      unitHtml(secs, "秒");
  }

  renderCountdown();
  setInterval(renderCountdown, 1000);
})();
