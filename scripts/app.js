import { portfolioData } from '../data/content.js';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    renderContent();
    setupAnimations();
});

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const storageKey = 'theme-preference';
    
    const getColorPreference = () => {
        if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const setPreference = () => {
        localStorage.setItem(storageKey, theme);
        reflectPreference();
    };

    const reflectPreference = () => {
        document.documentElement.setAttribute('data-theme', theme);
        themeToggle?.setAttribute('aria-label', theme);
    };

    let theme = getColorPreference();
    reflectPreference();

    themeToggle.addEventListener('click', () => {
        theme = theme === 'light' ? 'dark' : 'light';
        setPreference();
    });
}

function renderContent() {
    // Hero
    const heroContent = document.getElementById('hero-content');
    heroContent.innerHTML = `
        <h1>${portfolioData.identity.name}</h1>
        <p class="tagline">${portfolioData.identity.title}</p>
        <p style="color: var(--text-muted)">${portfolioData.identity.institution}</p>
        <div class="specialties">
            ${portfolioData.identity.specialties.map(s => `<span class="badge">${s}</span>`).join('')}
        </div>
        <div style="margin-top: 2rem; display: flex; gap: 1rem; flex-wrap: wrap;">
            <a href="mailto:${portfolioData.identity.contacts.email}" class="tag">Email</a>
            <a href="${portfolioData.identity.contacts.linkedin}" class="tag" target="_blank">LinkedIn</a>
            <a href="${portfolioData.identity.contacts.superprof}" class="tag" target="_blank">Superprof</a>
        </div>
    `;

    // About
    document.getElementById('about-text').innerHTML = `<p style="font-size: 1.1rem; max-width: 800px;">${portfolioData.about.text}</p>`;

    // Projects
    const projectsGrid = document.getElementById('projects-grid');
    projectsGrid.innerHTML = portfolioData.projects.map(p => `
        <div class="card" onclick="openProject(${p.id})">
            <div style="height: 200px; background: #222; overflow: hidden;">
                <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.8;" onerror="this.src='https://placehold.co/600x400/222/fff?text=${p.category}'">
            </div>
            <div class="card-content">
                <div class="card-tags">
                   ${p.tags.slice(0, 3).map(t => `<span class="tag">${t}</span>`).join('')}
                </div>
                <h3 class="card-title">${p.title}</h3>
                <p style="font-size: 0.9rem; color: var(--text-muted);">${p.description}</p>
            </div>
        </div>
    `).join('');

    // Experience
    const experienceTimeline = document.getElementById('experience-timeline');
    experienceTimeline.innerHTML = portfolioData.experience.map(e => `
        <div class="timeline-item">
            <div class="timeline-date">${e.period}</div>
            <h3>${e.role}</h3>
            <p style="color: var(--accent-color); font-weight: 500;">${e.organization}</p>
            <p style="margin-top: 0.5rem; color: var(--text-muted);">${e.description}</p>
        </div>
    `).join('');

    // Education
    const educationTimeline = document.getElementById('education-timeline');
    educationTimeline.innerHTML = portfolioData.education.map(e => `
        <div class="timeline-item">
            <div class="timeline-date">${e.period}</div>
            <h3>${e.degree}</h3>
            <p style="color: var(--accent-color); font-weight: 500;">${e.institution}</p>
            <p style="margin-top: 0.5rem; color: var(--text-muted);">${e.details}</p>
        </div>
    `).join('');

    // Certificates
    const certificatesGrid = document.getElementById('certificates-grid');
    certificatesGrid.innerHTML = portfolioData.certificates.map(c => `
        <div class="card">
            <div style="height: 150px; background: #eee; display:flex; align-items:center; justify-content:center;">
                <img src="${c.image}" alt="${c.title}" style="max-width: 100%; max-height: 100%;" onerror="this.src='https://placehold.co/300x200/eee/999?text=Certification'">
            </div>
            <div class="card-content">
                <h4 class="card-title">${c.title}</h4>
                <p style="font-size: 0.8rem; color: var(--text-muted);">${c.issuer} • ${c.date}</p>
            </div>
        </div>
    `).join('');
}

function setupAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

// Global functions for modal
window.openProject = (id) => {
    const p = portfolioData.projects.find(proj => proj.id === id);
    if (!p) return;

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <span class="tag" style="margin-bottom: 1rem; display: block;">${p.category}</span>
        <h1 style="font-size: 2.5rem; margin-bottom: 1rem;">${p.title}</h1>
        <div class="card-tags" style="margin-bottom: 2rem;">
            ${p.tags.map(t => `<span class="badge">${t}</span>`).join('')}
        </div>
        <div style="margin-bottom: 2rem; border-radius: 12px; overflow: hidden;">
            <img src="${p.image}" style="width: 100%; max-height: 500px; object-fit: cover;" onerror="this.src='https://placehold.co/1200x600/222/fff?text=${p.title}'">
        </div>
        <div class="project-details-content">
            ${formatMarkdown(p.details)}
        </div>
        <div style="margin-top: 3rem; display: flex; gap: 1rem;">
             ${p.links.github ? `<a href="${p.links.github}" class="btn">Code Source</a>` : ''}
             ${p.links.report ? `<a href="${p.links.report}" class="btn" style="background: var(--text-color)">Rapport Technique</a>` : ''}
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

document.getElementById('close-modal').onclick = () => {
    document.getElementById('project-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
};

// Simple pseudo-markdown formatter
function formatMarkdown(text) {
    if (!text) return '';
    return text
        .replace(/### (.*)/g, '<h3 style="margin: 2rem 0 1rem">$1</h3>')
        .replace(/\n- (.*)/g, '<li style="margin-left: 1.5rem">$1</li>')
        .replace(/```(\w+)\n([\s\S]*?)```/g, '<pre style="background: #222; color: #fff; padding: 1.5rem; border-radius: 8px; overflow-x: auto; margin: 1.5rem 0; font-family: monospace;"><code>$2</code></pre>')
        .replace(/\n\n/g, '<br><br>');
}
