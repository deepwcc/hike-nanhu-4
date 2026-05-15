(function () {
  "use strict";

  const container = document.getElementById("gear-checklist");
  const progressText = document.getElementById("gear-progress-text");
  const progressFill = document.getElementById("gear-progress-fill");
  const resetBtn = document.getElementById("gear-reset");

  if (!container) return;

  const basePath =
    document.querySelector('meta[name="base-path"]')?.content || "./";

  fetch(basePath + "data/gear.json")
    .then((r) => {
      if (!r.ok) throw new Error("Failed to load gear.json");
      return r.json();
    })
    .then(init)
    .catch(() => {
      container.innerHTML =
        '<p>無法載入裝備清單。請確認 data/gear.json 存在，或以本地伺服器預覽。</p>';
    });

  function loadState(key) {
    try {
      return JSON.parse(localStorage.getItem(key) || "{}");
    } catch {
      return {};
    }
  }

  function saveState(key, state) {
    localStorage.setItem(key, JSON.stringify(state));
  }

  function updateProgress(key, state, total) {
    const checked = Object.values(state).filter(Boolean).length;
    const pct = total ? Math.round((checked / total) * 100) : 0;
    if (progressText) {
      progressText.textContent = `已完成 ${checked} / ${total} 項（${pct}%）`;
    }
    if (progressFill) {
      progressFill.style.width = pct + "%";
    }
  }

  function init(data) {
    const storageKey = data.storageKey || "nanhu-gear-v1";
    let state = loadState(storageKey);
    let total = 0;

    data.sections.forEach((section) => {
      const sectionEl = document.createElement("section");
      sectionEl.className = "gear-section";
      sectionEl.innerHTML = "<h3></h3><ul class=\"checklist\"></ul>";
      sectionEl.querySelector("h3").textContent = section.title;

      const list = sectionEl.querySelector(".checklist");

      section.items.forEach((item) => {
        total += 1;
        const id = section.id + ":" + item.id;
        const li = document.createElement("li");
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "checkbox";
        input.id = id;
        input.checked = !!state[id];
        input.addEventListener("change", () => {
          state[id] = input.checked;
          saveState(storageKey, state);
          updateProgress(storageKey, state, total);
        });

        const span = document.createElement("span");
        span.textContent = item.text;

        label.appendChild(input);
        label.appendChild(span);
        li.appendChild(label);
        list.appendChild(li);
      });

      container.appendChild(sectionEl);
    });

    updateProgress(storageKey, state, total);

    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        if (!confirm("確定要清除所有勾選紀錄？")) return;
        state = {};
        saveState(storageKey, state);
        container.querySelectorAll('input[type="checkbox"]').forEach((cb) => {
          cb.checked = false;
        });
        updateProgress(storageKey, state, total);
      });
    }
  }
})();
