const tabs = [...document.querySelectorAll('[role="tab"]')];
const panels = [...document.querySelectorAll('[role="tabpanel"]')];
const cards = [...document.querySelectorAll('.project-button')];
const details = [...document.querySelectorAll('.project-content')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
function closeProjects() {
    cards.forEach(card => card.setAttribute('aria-expanded', 'false'));
    details.forEach(detail => { detail.hidden = true; });
}
function selectTab(tab) {
    closeProjects();
    tabs.forEach(item => {
        const selected = item === tab;
        item.setAttribute('aria-selected', String(selected));
        item.tabIndex = selected ? 0 : -1;
    });
    panels.forEach(panel => { panel.hidden = panel.id !== tab.dataset.id; });
}
tabs.forEach((tab, index) => {
    tab.addEventListener('click', () => selectTab(tab));
    tab.addEventListener('keydown', event => {
        let next;
        if (event.key === 'ArrowRight') next = (index + 1) % tabs.length;
        if (event.key === 'ArrowLeft') next = (index - 1 + tabs.length) % tabs.length;
        if (event.key === 'Home') next = 0;
        if (event.key === 'End') next = tabs.length - 1;
        if (next === undefined) return;
        event.preventDefault();
        selectTab(tabs[next]);
        tabs[next].focus();
    });
});
cards.forEach(card => {
    const detail = document.getElementById(card.dataset.project);
    card.addEventListener('click', () => {
        const wasOpen = !detail.hidden;
        closeProjects();
        if (wasOpen) return;
        card.setAttribute('aria-expanded', 'true');
        detail.hidden = false;
        detail.focus({ preventScroll: true });
        detail.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
    });
    const close = () => {
        closeProjects();
        card.focus({ preventScroll: true });
        card.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'center' });
    };
    detail.querySelector('.close-project').addEventListener('click', close);
    detail.addEventListener('keydown', event => { if (event.key === 'Escape') close(); });
});
