import { portfolioData } from '../data/content.js';

let currentLang = 'fr';

document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initLanguage();
    renderContent();
    setupFilters();
    setupAnimations();
    setupBackToTop();
});

function setupBackToTop() {
    const backToTop = document.getElementById('back-to-top');
    if (!backToTop) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            backToTop.classList.add('visible');
        } else {
            backToTop.classList.remove('visible');
        }
    });

    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

function initTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const storageKey = 'theme-preference';
    
    const getColorPreference = () => {
        if (localStorage.getItem(storageKey)) return localStorage.getItem(storageKey);
        return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    };

    const reflectPreference = () => {
        document.documentElement.setAttribute('data-theme', theme);
        const icon = theme === 'light' 
            ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>'
            : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>';
        if (themeToggle) {
            themeToggle.innerHTML = icon;
            themeToggle.setAttribute('aria-label', theme);
        }
    };

    let theme = getColorPreference();
    reflectPreference();

    themeToggle?.addEventListener('click', () => {
        theme = theme === 'light' ? 'dark' : 'light';
        localStorage.setItem(storageKey, theme);
        reflectPreference();
    });
}

function initLanguage() {
    const langToggle = document.getElementById('lang-toggle');
    const storageKey = 'language-preference';
    
    currentLang = localStorage.getItem(storageKey) || 'fr';
    updateLangUI();

    langToggle?.addEventListener('click', () => {
        currentLang = currentLang === 'fr' ? 'en' : 'fr';
        localStorage.setItem(storageKey, currentLang);
        updateLangUI();
        renderContent();
        setupFilters();
    });
}

function updateLangUI() {
    const langToggle = document.getElementById('lang-toggle');
    if (langToggle) {
        langToggle.textContent = currentLang === 'fr' ? 'EN' : 'FR';
    }
    document.documentElement.lang = currentLang;

    // Update Nav
    const data = portfolioData[currentLang].nav;
    document.getElementById('nav-about').textContent = data.about;
    document.getElementById('nav-cv').textContent = data.cv;
    document.getElementById('nav-certificates').textContent = data.certificates;
    document.getElementById('nav-projects').textContent = data.projects;
    document.getElementById('nav-experience').textContent = data.experience;
}

function renderContent() {
    const data = portfolioData[currentLang];

    // Titles
    document.querySelectorAll('.section-title').forEach(el => {
        if (el.parentElement.id === 'about') el.textContent = data.about.title;
        if (el.parentElement.id === 'projects') el.textContent = data.projects.title;
        if (el.parentElement.id === 'experience') el.textContent = data.experience.title;
        if (el.parentElement.id === 'cv') el.textContent = data.education.title;
        if (el.parentElement.id === 'certificates') el.textContent = data.certificates.title;
    });

    // Hero
    const heroContent = document.getElementById('hero-content');
    if (heroContent) {
        heroContent.innerHTML = `
            <div class="fade-in visible">
                <h1>${data.identity.name}</h1>
                <p class="tagline">${data.identity.title}</p>
                <p style="color: var(--text-muted); font-size: 1.1rem;">${data.identity.institution}</p>
                <div class="specialties">
                    ${data.identity.specialties.map(s => `<span class="badge">${s}</span>`).join('')}
                </div>
                <div style="margin-top: 2.5rem; display: flex; gap: 1.25rem; flex-wrap: wrap;">
                    <a href="mailto:${data.identity.contacts.email}" class="btn">${data.actions.contact}</a>
                    <a href="https://${data.identity.contacts.linkedin}" class="btn" style="background: var(--text-color); color: var(--bg-color)" target="_blank">${data.actions.linkedin}</a>
                </div>
            </div>
        `;
    }

    // Hero Image
    const heroImage = document.querySelector('#hero-image img');
    if (heroImage) {
        heroImage.src = data.identity.image;
        heroImage.style.objectPosition = 'top';
    }

    // About
    const aboutText = document.getElementById('about-text');
    if (aboutText) {
        aboutText.innerHTML = `<p style="font-size: 1.2rem; max-width: 850px; color: var(--text-muted)">${data.about.text}</p>`;
    }

    // Initial Projects Render
    filterProjects('all');

    // Experience
    const experienceTimeline = document.getElementById('experience-timeline');
    if (experienceTimeline) {
        experienceTimeline.innerHTML = data.experience.items.map(e => `
            <div class="timeline-item fade-in visible">
                <div class="timeline-date">${e.period}</div>
                <h3>${e.role}</h3>
                <p style="color: var(--accent-color); font-weight: 600; font-size: 1.1rem;">${e.organization}</p>
                <p style="margin-top: 0.75rem; color: var(--text-muted);">${e.description}</p>
            </div>
        `).join('');
    }

    // Education
    const educationTimeline = document.getElementById('education-timeline');
    if (educationTimeline) {
        educationTimeline.innerHTML = data.education.items.map(e => `
            <div class="timeline-item fade-in visible">
                <div class="timeline-date">${e.period}</div>
                <h3>${e.degree}</h3>
                <p style="color: var(--accent-color); font-weight: 600; font-size: 1.1rem;">${e.institution}</p>
                <p style="margin-top: 0.75rem; color: var(--text-muted);">${e.details}</p>
            </div>
        `).join('');
        
        // Update CV download button
        const cvBtn = document.querySelector('#cv .btn');
        if (cvBtn) cvBtn.textContent = data.education.downloadCV;
    }

    // Certificates
    const certificatesGrid = document.getElementById('certificates-grid');
    if (certificatesGrid) {
        certificatesGrid.innerHTML = data.certificates.items.map(c => `
            <${c.link ? `a href="${c.link}" target="_blank"` : 'div'} class="card fade-in visible" style="text-decoration: none; color: inherit;">
                <div style="height: 220px; background: #f9fafb; overflow: hidden; position: relative;">
                    <img src="${c.image}" alt="${c.title}" style="width: 100%; height: 100%; object-fit: cover; transition: var(--transition);" onerror="this.src='https://placehold.co/400x300/eef2ff/6366f1?text=${c.title}'">
                </div>
                <div class="card-content">
                    <h4 class="card-title">${c.title}</h4>
                    <p style="font-size: 0.9rem; color: var(--text-muted); font-weight: 500;">${c.issuer} • ${c.date}</p>
                </div>
            </${c.link ? 'a' : 'div'}>
        `).join('');
    }
}

function setupFilters() {
    const data = portfolioData[currentLang];
    const filterBar = document.getElementById('category-filters');
    if (!filterBar) return;

    const categories = ['all', ...new Set(data.projects.items.map(p => p.category.toLowerCase()))];
    
    filterBar.innerHTML = categories.map(cat => `
        <button class="filter-btn ${cat === 'all' ? 'active' : ''}" data-category="${cat}">
            ${cat === 'all' ? data.projects.filterAll : cat.charAt(0).toUpperCase() + cat.slice(1)}
        </button>
    `).join('');

    filterBar.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            filterBar.querySelector('.active').classList.remove('active');
            btn.classList.add('active');
            filterProjects(btn.dataset.category);
        });
    });
}

function filterProjects(category) {
    const data = portfolioData[currentLang];
    const projectsGrid = document.getElementById('projects-grid');
    if (!projectsGrid) return;

    const filtered = category === 'all' 
        ? data.projects.items 
        : data.projects.items.filter(p => p.category.toLowerCase() === category);

    projectsGrid.innerHTML = filtered.map(p => `
        <div class="card fade-in visible" onclick="openProject(${p.id})">
            <div style="height: 220px; background: #000; overflow: hidden; position: relative;">
                <img src="${p.image}" alt="${p.title}" style="width: 100%; height: 100%; object-fit: cover; opacity: 0.7; transition: var(--transition);" onerror="this.src='https://placehold.co/600x400/111/fff?text=${p.title}'">
                <div style="position: absolute; bottom: 1rem; left: 1rem;">
                    <span class="badge" style="background: rgba(255,255,255,0.1); backdrop-filter: blur(4px); color: white; border: none;">${p.category}</span>
                </div>
            </div>
            <div class="card-content">
                <h3 class="card-title">${p.title}</h3>
                <p style="font-size: 0.95rem; color: var(--text-muted); margin-bottom: 1.5rem;">${p.description}</p>
                <div class="card-tags" style="display: flex; gap: 0.5rem; flex-wrap: wrap;">
                   ${p.tags.slice(0, 3).map(t => `<span class="tag">#${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function setupAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
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
    const data = portfolioData[currentLang];
    const p = data.projects.items.find(proj => proj.id === id);
    if (!p) return;

    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');

    modalBody.innerHTML = `
        <div class="fade-in visible">
            <span class="tag" style="margin-bottom: 1rem; display: block;">${p.category}</span>
            <h1 style="font-size: clamp(2rem, 5vw, 3rem); margin-bottom: 1.5rem;">${p.title}</h1>
            <div class="card-tags" style="margin-bottom: 2.5rem; display: flex; gap: 0.75rem; flex-wrap: wrap;">
                ${p.tags.map(t => `<span class="badge">${t}</span>`).join('')}
            </div>
            <div style="margin-bottom: 2.5rem; border-radius: 24px; overflow: hidden; background: #000; box-shadow: 0 20px 40px rgba(0,0,0,0.2);">
                <img src="${p.image}" style="width: 100%; max-height: 600px; object-fit: cover;" onerror="this.src='https://placehold.co/1200x800/111/eee?text=${p.title}'">
            </div>
            <div class="project-details-content" style="font-size: 1.1rem; line-height: 1.8;">
                ${formatMarkdown(p.details)}
            </div>
            <div style="margin-top: 4rem; display: flex; gap: 1.5rem; flex-wrap: wrap;">
                 ${p.links.github ? `<a href="${p.links.github}" class="btn" target="_blank">${data.actions.github}</a>` : ''}
                 ${p.links.report ? `<a href="${p.links.report}" class="btn" style="background: var(--text-color); color: var(--bg-color)" target="_blank">${data.actions.report}</a>` : ''}
            </div>
        </div>
    `;

    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    document.getElementById('project-modal').style.display = 'none';
    document.body.style.overflow = 'auto';
};

document.getElementById('close-modal').onclick = closeModal;

document.getElementById('modal-scroll-area').addEventListener('click', (e) => {
    if (e.target.id === 'modal-scroll-area') closeModal();
});

// Simple pseudo-markdown formatter
function formatMarkdown(text) {
    if (!text) return '';
    return text
        .replace(/### (.*)/g, '<h3 style="margin: 3rem 0 1.5rem; font-size: 1.8rem;">$1</h3>')
        .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
        .replace(/\n- (.*)/g, '<li style="margin-left: 1.5rem; margin-bottom: 0.5rem">$1</li>')
        .replace(/```(\w+)\n([\s\S]*?)```/g, '<pre style="background: #111; color: #a5f3fc; padding: 2rem; border-radius: 16px; overflow-x: auto; margin: 2rem 0; font-family: \'Fira Code\', monospace; font-size: 0.95rem; border: 1px solid #334155;"><code>$2</code></pre>')
        .replace(/\n\n/g, '<br><br>');
}

// Lightbox logic
document.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' && (e.target.closest('.project-details-content') || e.target.closest('.card') || e.target.closest('.hero-image'))) {
        openLightbox(e.target.src);
    }
});

function openLightbox(src) {
    const lightbox = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-img');
    if (lightbox && img) {
        img.src = src;
        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

document.querySelector('.close-lightbox')?.addEventListener('click', () => {
    closeLightbox();
});

document.getElementById('lightbox')?.addEventListener('click', (e) => {
    if (e.target.id === 'lightbox') closeLightbox();
});

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}
