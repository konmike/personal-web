import { projects } from './projects.js';

const drawer = document.getElementById('drawer');
const drawerTitle = document.getElementById('drawer-title');
const drawerMeta = document.getElementById('drawer-meta');
const drawerDesc = document.getElementById('drawer-desc');
const drawerTags = document.getElementById('drawer-tags');
const drawerDemo = document.getElementById('drawer-demo');
const drawerRepo = document.getElementById('drawer-repo');
const drawerClose = document.getElementById('drawer-close');
const drawerEyebrow = document.getElementById('drawer-eyebrow');
const drawerPrev = document.getElementById('drawer-prev');
const drawerPrevLabel = document.getElementById('drawer-prev-label');
const drawerNext = document.getElementById('drawer-next');
const drawerNextLabel = document.getElementById('drawer-next-label');
const drawerOverlay = document.getElementById('drawer-overlay');

const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const menuClose = document.getElementById('menu-close');

let currentIndex = -1;

function renderProjectList() {
  const list = document.getElementById('project-list');
  if (!list) {
    return;
  }
  list.innerHTML = projects.map((p) => `
    <li class="project-list__item" role="listitem">
      <button class="project-list__left" data-project="${p.slug}" aria-haspopup="dialog">
        <span class="project-list__name">${p.title}</span>
        <span class="project-list__desc">${p.description}</span>
      </button>
      <div class="project-list__meta" aria-hidden="true">
        <span class="project-list__year">${p.year}</span>
        <span class="project-list__tech">${p.tech.slice(0, 2).join(' / ')}</span>
      </div>
    </li>
  `).join('');
}

function setActiveItem(slug) {
  document.querySelectorAll('.project-list__item').forEach((item) => {
    const btn = item.querySelector('[data-project]');
    item.classList.toggle('is-active', btn?.dataset.project === slug);
  });
}

function openProject(index) {
  if (!drawer) {
    return;
  }
  const p = projects[index];
  currentIndex = index;
  setActiveItem(p.slug);

  drawerEyebrow.textContent = `0${index + 1} / DETAIL`;
  drawerTitle.textContent = p.title;
  drawerMeta.textContent = `${p.year} · ${p.kind}`;
  drawerDesc.textContent = p.description;
  if (p.descriptionLink) {
    const link = document.createElement('a');
    link.href = p.descriptionLink.url;
    link.textContent = p.descriptionLink.label;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    drawerDesc.append(' ', link);
  }

  drawerTags.innerHTML = p.tech.map((t) => `<span class="tag">${t}</span>`).join('');

  if (p.demo) {
    drawerDemo.href = p.demo;
    drawerDemo.classList.remove('hidden');
  } else {
    drawerDemo.classList.add('hidden');
  }

  if (p.repo) {
    drawerRepo.href = p.repo;
    drawerRepo.classList.remove('hidden');
  } else {
    drawerRepo.classList.add('hidden');
  }

  const prev = projects[index - 1];
  const next = projects[index + 1];

  if (prev) {
    drawerPrev.classList.remove('hidden');
    drawerPrevLabel.textContent = prev.title;
    drawerPrev.dataset.index = index - 1;
  } else {
    drawerPrev.classList.add('hidden');
  }

  if (next) {
    drawerNext.classList.remove('hidden');
    drawerNextLabel.textContent = next.title;
    drawerNext.dataset.index = index + 1;
  } else {
    drawerNext.classList.add('hidden');
  }

  drawer.classList.add('is-open');
  drawerOverlay?.classList.add('is-visible');
  document.body.classList.add('drawer-open');
  history.pushState({ project: p.slug }, '', `#${p.slug}`);
  drawerClose?.focus();
}

function closeDrawer() {
  if (!drawer) {
    return;
  }
  drawer.classList.remove('is-open');
  drawerOverlay?.classList.remove('is-visible');
  document.body.classList.remove('drawer-open');
  setActiveItem(null);
  currentIndex = -1;
  history.pushState(null, '', location.pathname);
}

renderProjectList();

document.getElementById('project-list')?.addEventListener('click', (e) => {
  const btn = e.target.closest('[data-project]');
  if (!btn) {
    return;
  }
  const idx = projects.findIndex((p) => p.slug === btn.dataset.project);
  if (idx !== -1) {
    openProject(idx);
  }
});

drawerClose?.addEventListener('click', closeDrawer);
drawerOverlay?.addEventListener('click', closeDrawer);

drawerPrev?.addEventListener('click', () => {
  const idx = parseInt(drawerPrev.dataset.index, 10);
  if (!isNaN(idx)) {
    openProject(idx);
  }
});

drawerNext?.addEventListener('click', () => {
  const idx = parseInt(drawerNext.dataset.index, 10);
  if (!isNaN(idx)) {
    openProject(idx);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && drawer?.classList.contains('is-open')) {
    closeDrawer();
  }
});

// Open from hash on load
if (location.hash) {
  const slug = location.hash.slice(1);
  const idx = projects.findIndex((p) => p.slug === slug);
  if (idx !== -1) {
    openProject(idx);
  }
}

// Mobile menu
menuToggle?.addEventListener('click', () => {
  mobileMenu?.classList.toggle('is-open');
  menuToggle.setAttribute('aria-expanded', mobileMenu?.classList.contains('is-open') ? 'true' : 'false');
});

menuClose?.addEventListener('click', () => {
  mobileMenu?.classList.remove('is-open');
  menuToggle?.setAttribute('aria-expanded', 'false');
});
