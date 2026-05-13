/* ============================================================
   BiblioSmart · app.js
   ============================================================ */

// ── SIDEBAR TOGGLE (móvil) ──────────────────────────────────
const sidebar   = document.getElementById('sidebar');
const hamburger = document.getElementById('hamburger');
const overlay   = document.getElementById('overlay');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
});
overlay.addEventListener('click', () => {
  sidebar.classList.remove('open');
  overlay.classList.remove('open');
});

// ── ACTIVE NAV + PROGRESS BAR al hacer scroll ───────────────
const modules     = document.querySelectorAll('.module');
const navItems    = document.querySelectorAll('.nav-item');
const progressBar = document.getElementById('progressBar');
const progressTxt = document.getElementById('progressText');

const moduleIds = ['modulo1','modulo2','modulo3','modulo4','modulo5'];

function updateNav() {
  let currentIdx = 0;

  modules.forEach((mod, i) => {
    const rect = mod.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.4) {
      currentIdx = i;
    }
  });

  navItems.forEach((item, i) => {
    item.classList.toggle('active', i === currentIdx);
  });

  const pct = Math.round(((currentIdx + 1) / moduleIds.length) * 100);
  progressBar.style.width = pct + '%';
  progressTxt.textContent = 'Módulo ' + (currentIdx + 1) + ' de ' + moduleIds.length;
}

window.addEventListener('scroll', updateNav, { passive: true });
updateNav();

// ── NAV CLICK — cerrar sidebar en móvil ─────────────────────
navItems.forEach(item => {
  item.addEventListener('click', () => {
    sidebar.classList.remove('open');
    overlay.classList.remove('open');
  });
});

// ── COPY BUTTON ─────────────────────────────────────────────
function copyCode(btn) {
  const pre  = btn.closest('.code-block').querySelector('pre');
  const text = pre.innerText || pre.textContent;

  navigator.clipboard.writeText(text).then(() => {
    const original = btn.textContent;
    btn.textContent = '✓ Copiado';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = original;
      btn.classList.remove('copied');
    }, 2000);
  }).catch(() => {
    // Fallback para navegadores sin clipboard API
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = '✓ Copiado';
    btn.classList.add('copied');
    setTimeout(() => {
      btn.textContent = 'Copiar';
      btn.classList.remove('copied');
    }, 2000);
  });
}

// ── COPY FULL SCRIPT ────────────────────────────────────────
function copyFullScript() {
  const el   = document.getElementById('fullScript');
  const text = el.innerText || el.textContent;
  const btn  = document.querySelector('.copy-btn-big');

  navigator.clipboard.writeText(text).then(() => {
    btn.textContent = '✓ Script copiado';
    setTimeout(() => { btn.textContent = 'Copiar todo el script'; }, 2500);
  }).catch(() => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    btn.textContent = '✓ Script copiado';
    setTimeout(() => { btn.textContent = 'Copiar todo el script'; }, 2500);
  });
}


