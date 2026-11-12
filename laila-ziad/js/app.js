(function () {
  const C = CONFIG, $ = (s) => document.querySelector(s);
  document.documentElement.lang = C.lang;
  document.documentElement.dir = C.dir;
  document.title = C.pageTitle;
  const st = document.documentElement.style;
  st.setProperty("--bg1", C.colors.bg1); st.setProperty("--bg2", C.colors.bg2);
  st.setProperty("--ink", C.colors.ink); st.setProperty("--accent", C.colors.accent);

  const d = new Date(C.date), p2 = (n) => String(n).padStart(2, "0");
  const month = d.toLocaleString(C.lang, { month: "long" }).toUpperCase();
  const dateTxt = `${p2(d.getDate())} . ${p2(d.getMonth() + 1)} . ${d.getFullYear()}`;
  const img = (src, cls) => src ? `<img class="${cls}" src="${src}" alt="" onerror="this.remove()">` : "";
  const days = [-2, -1, 0, 1, 2].map((o) => {
    const x = new Date(d); x.setDate(d.getDate() + o);
    return o === 0 ? `<b class="heart">${x.getDate()}</b>` : `<b>${x.getDate()}</b>`;
  }).join("");
  const mono = `${C.couple.first[0]}<i>&amp;</i>${C.couple.second[0]}`;

  $("#app").innerHTML = `
  <section class="hero reveal">
    <div class="lace"><div class="paper">
      <div class="mono">${mono}</div>
      <p class="caps">${C.hero.top}</p>
      ${img(C.images.hero, "arch")}
      <h1 class="names">${C.couple.first} <i>&amp;</i> ${C.couple.second}</h1>
      <p class="caps small">${C.hero.bottom}</p>
      <p class="date">${dateTxt}</p>
    </div></div>
    <a class="scroll" href="#invite" aria-label="scroll">⌄</a>
  </section>

  <section id="invite" class="reveal">
    <h2 class="names mid">${C.invite.title}</h2>
    <p class="body">${C.invite.text}</p>
    <p class="caps">${month}</p>
    <div class="days">${days}</div>
    ${C.showTime ? `<p class="caps small">${C.timeText}</p>` : ""}
    <div class="count" id="count"></div>
  </section>

  <section class="reveal">
    <h2 class="caps head">${C.location.label}</h2>
    ${C.location.name ? `<p class="names mid">${C.location.name}</p>` : ""}
    ${C.location.text ? `<p class="body">${C.location.text}</p>` : ""}
    <a class="btn" target="_blank" rel="noopener" href="${C.location.mapsUrl}">📍 ${C.location.mapsButton}</a>
  </section>

  ${C.images.gallery.length ? `<section class="reveal">
    <h2 class="caps head">${C.galleryLabel}</h2>
    <div class="gallery">${C.images.gallery.map((g) => img(g, "g")).join("")}</div>
  </section>` : ""}

  <section class="reveal">
    <h2 class="caps head">${C.rsvp.label}</h2>
    <form id="rsvp" class="form">
      <h3 class="names mid">${C.rsvp.title}</h3>
      <label>${C.rsvp.nameLabel}<input name="name" required></label>
      <label>${C.rsvp.attendLabel}</label>
      <div class="choice">
        <label><input type="radio" name="attend" value="yes" checked><span>${C.rsvp.yes}</span></label>
        <label><input type="radio" name="attend" value="no"><span>${C.rsvp.no}</span></label>
      </div>
      <label>${C.rsvp.noteLabel}<textarea name="note" rows="3"></textarea></label>
      <button class="btn dark" type="submit">${C.rsvp.button}</button>
      <p id="thanks" class="names mid" hidden>${C.rsvp.thanks}</p>
    </form>
  </section>

  <section class="reveal last">
    <p class="body">${C.closing.text}</p>
    <p class="names mid">${C.closing.signature}</p>
  </section>`;

  const L = C.countdownLabels;
  (function tick() {
    const t = Math.max(0, d - Date.now()), n = (v) => p2(Math.floor(v));
    $("#count").innerHTML = [[t / 864e5, L.d], [t / 36e5 % 24, L.h], [t / 6e4 % 60, L.m], [t / 1e3 % 60, L.s]]
      .map(([v, l]) => `<div><b>${n(v)}</b><small>${l}</small></div>`).join("");
    setTimeout(tick, 1000);
  })();

  $("#rsvp").addEventListener("submit", (e) => {
    e.preventDefault();
    const f = new FormData(e.target), R = C.rsvp;
    const done = () => { $("#thanks").hidden = false; e.target.reset(); };
    const G = R.googleForm || {};
    if (R.mode === "googleform" && G.url && G.nameEntry) {
      const b = new FormData();
      b.append(G.nameEntry, f.get("name"));
      if (G.attendEntry) b.append(G.attendEntry, f.get("attend") === "yes" ? R.yes : R.no);
      if (G.noteEntry) b.append(G.noteEntry, f.get("note") || "");
      fetch(G.url, { method: "POST", body: b, mode: "no-cors" }).finally(done);
    } else {
      const msg = `${f.get("name")} — ${f.get("attend") === "yes" ? R.yes : R.no}\n${f.get("note") || ""}`;
      window.open(`https://wa.me/${R.whatsappNumber}?text=${encodeURIComponent(msg)}`, "_blank");
      done();
    }
  });

  const io = new IntersectionObserver((es) => es.forEach((x) => x.isIntersecting && x.target.classList.add("in")), { threshold: .12 });
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
})();
