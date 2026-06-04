// ---- set your launch date here ----
  const TARGET_DATE = new Date("2026-07-01T09:00:00");

  const pad = n => String(Math.max(0, n)).padStart(2, "0");
  const els = { d: document.getElementById("d"), h: document.getElementById("h"), m: document.getElementById("m"), s: document.getElementById("s") };

  function tick(){
    const diff = TARGET_DATE - new Date();
    const t = Math.max(0, diff);
    els.d.textContent = pad(Math.floor(t / 86400000));
    els.h.textContent = pad(Math.floor(t / 3600000) % 24);
    els.m.textContent = pad(Math.floor(t / 60000) % 60);
    els.s.textContent = pad(Math.floor(t / 1000) % 60);
  }
  tick();
  setInterval(tick, 1000);

  document.getElementById("yr").textContent = new Date().getFullYear();

  // signup (front-end only, swap to your form / API)
  const signup = document.getElementById("signup");
  const email = document.getElementById("email");
  const submit = () => {
    const ok = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim());
    if(!ok){ email.focus(); document.querySelector(".field").style.borderColor = "rgba(255,90,90,.6)"; return; }
    signup.classList.add("sent");
  };
  document.getElementById("notify").addEventListener("click", submit);
  email.addEventListener("keydown", e => { if(e.key === "Enter") submit(); });
  email.addEventListener("input", () => { document.querySelector(".field").style.borderColor = ""; });