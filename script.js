// ==================== DATA CONFIGURATION ====================
// Add new experiences here easily
const experienceData = [
    {
        role: "Full-Stack Software Engineering Intern",
        date: "Mar 2026 — Present",
        company: "SwasthiQ",
        location: "Remote",
        skills: ["React", "FastAPI", "SQLite", "Pydantic", "AWS", "API Design"]
    }
];

// Add new projects here easily
const projectsData = [
    {
        title: "Zomathon: Smart Add-on Recommender",
        date: "May 2026",
        description: "An XGBoost-powered recommendation engine predicting top food add-ons based on order context, enriched with AI-generated contextual copy.",
        tech: ["React", "FastAPI", "XGBoost", "NumPy"],
        icon: "fa-utensils",
        github: "https://github.com/Sudhanshumahar7/smart-add-on-recommender",
        demo: "#"
    },
    {
        title: "GraphMind: Knowledge Graph Platform",
        date: "March 2026",
        description: "A full-stack platform for extracting, deduplicating, and visualizing dynamic knowledge graphs from unstructured text using LLM pipelines.",
        tech: ["React", "FastAPI", "Gemini API", "NetworkX"],
        icon: "fa-project-diagram",
        github: "https://github.com/Sudhanshumahar7/GraphMind-Knowledge-Graph-Platform",
        demo: "https://graph-mind-knowledge-graph-platform.vercel.app/"
    },
    {
        title: "DeloConnect",
        date: "March 2025 — April 2025",
        description: "Gold-winning General Championship project featuring responsive dashboards, AI-driven workflows, and real-time conversational systems with behavioral analytics.",
        tech: ["Next.js", "FastAPI", "MongoDB", "Tailwind CSS", "shadcn/ui"],
        icon: "fa-trophy",
        github: "https://github.com/RP-Open-Soft-2025/admin-frontend",
        demo: "#"
    },
    {
        title: "Pharmacy CRM & Inventory System",
        date: "March 2026",
        description: "Full-stack inventory management solution with atomic transactions, RESTful APIs, and real-time dashboard analytics for healthcare operations.",
        tech: ["React", "FastAPI", "SQLite", "Pydantic"],
        icon: "fa-hospital",
        github: "https://github.com/Sudhanshumahar7/EMR-Feature",
        demo: "https://emr-feature-iota.vercel.app/"
    },
    {
        title: "Finance Dashboard API",
        date: "2026",
        description: "Modular FastAPI REST backend with JWT/OAuth2 authentication, RBAC enforcement, and efficient SQLAlchemy aggregations for financial analytics.",
        tech: ["FastAPI", "SQLAlchemy", "JWT", "SQLite"],
        icon: "fa-chart-line",
        github: "https://github.com/Sudhanshumahar7/finance-dashboard",
        demo: "https://finance-dashboard-4uc1.onrender.com/docs"
    },
    {
        title: "Image Segmentation & Boundary Detector",
        date: "November 2025",
        description: "Custom image processing pipeline implementing Mean Shift segmentation, stack-based DFS for connected components, and automated edge detection using NumPy.",
        tech: ["Python", "NumPy", "Image Processing", "DFS Algorithm"],
        icon: "fa-image",
        github: "#",
        demo: "#"
    }
];

// Add new skills here easily
const skillsData = [
    {
        category: "Languages",
        icon: "fa-code",
        skills: ["C", "C++", "Python", "JavaScript", "HTML", "CSS"]
    },
    {
        category: "Frontend",
        icon: "fa-desktop",
        skills: ["React", "Next.js", "Tailwind CSS", "shadcn/ui", "Bootstrap"]
    },
    {
        category: "Backend",
        icon: "fa-server",
        skills: ["FastAPI", "Flask", "Node.js", "REST API Design"]
    },
    {
        category: "Databases",
        icon: "fa-database",
        skills: ["MongoDB", "SQLite", "SQLAlchemy"]
    },
    {
        category: "Tools & DevOps",
        icon: "fa-tools",
        skills: ["Git", "VS Code", "Figma", "Blender"]
    },
    {
        category: "Data & ML",
        icon: "fa-brain",
        skills: ["NumPy", "Pandas", "Matplotlib", "Supervised ML", "Gemini API"]
    }
];

// Add new achievements here easily
const achievementsData = [
    {
        icon: "fa-medal",
        title: "JEE Advanced 2023",
        description: "Secured AIR 3959, ranking in the top 2% among 1.9 lakh candidates nationwide"
    },
    {
        icon: "fa-award",
        title: "JEE Mains 2023",
        description: "Ranked in the top 0.6% among 1.7 million candidates across the country"
    },
    {
        icon: "fa-star",
        title: "INSPIRE Scholarship",
        description: "National award by the Government of India to the top 1% science students"
    },
    {
        icon: "fa-trophy",
        title: "Open IIT GameDev 2024",
        description: "Achieved 1st place by leading an innovative winning project"
    },
    {
        icon: "fa-medal",
        title: "General Championship Gold",
        description: "Gold Medal in OpenSoft, contributing to a team-driven technical victory at IIT Kharagpur"
    },
    {
        icon: "fa-calculator",
        title: "UCMAS State Abacus",
        description: "3rd Runner-Up in state-level competition, showcasing rapid mental arithmetic"
    }
];

// ==================== RENDER FUNCTIONS ====================
function renderExperience() {
    const list = document.getElementById('experience-list');
    list.innerHTML = experienceData.map(exp => `
        <div class="exp-card animate-on-scroll">
            <div class="exp-header">
                <div class="exp-role">${exp.role}</div>
                <span class="edu-year">${exp.date}</span>
            </div>
            <div class="exp-meta">
                <span><i class="fas fa-building"></i> ${exp.company}</span>
                <span><i class="fas fa-map-marker-alt"></i> ${exp.location}</span>
            </div>
            <div class="exp-tags">
                ${exp.skills.map(skill => `<span class="exp-tag">${skill}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderProjects() {
    const grid = document.getElementById('projects-grid');
    grid.innerHTML = projectsData.map(project => `
        <div class="project-card animate-on-scroll">
            <div class="project-header">
                <div class="project-icon">
                    <i class="fas ${project.icon}"></i>
                </div>
                <div class="project-links">
                    <a href="${project.github}" class="project-link" title="GitHub">
                        <i class="fab fa-github"></i>
                    </a>
                    <a href="${project.demo}" class="project-link" title="Live Demo">
                        <i class="fas fa-external-link-alt"></i>
                    </a>
                </div>
            </div>
            <div class="project-content">
                <h3 class="project-title">${project.title}</h3>
                <div class="project-date">${project.date}</div>
                <p class="project-description">${project.description}</p>
                <div class="project-tech">
                    ${project.tech.map(t => `<span class="tech-tag">${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

function renderSkills() {
    const grid = document.getElementById('skills-grid');
    grid.innerHTML = skillsData.map(skill => `
        <div class="skill-category animate-on-scroll">
            <div class="skill-header">
                <div class="skill-icon">
                    <i class="fas ${skill.icon}"></i>
                </div>
                <div class="skill-title">${skill.category}</div>
            </div>
            <div class="skill-tags">
                ${skill.skills.map(s => `<span class="skill-tag">${s}</span>`).join('')}
            </div>
        </div>
    `).join('');
}

function renderAchievements() {
    const grid = document.getElementById('achievements-grid');
    grid.innerHTML = achievementsData.map(ach => `
        <div class="achievement-card animate-on-scroll">
            <div class="achievement-icon">
                <i class="fas ${ach.icon}"></i>
            </div>
            <h3 class="achievement-title">${ach.title}</h3>
            <p class="achievement-desc">${ach.description}</p>
        </div>
    `).join('');
}

// ==================== SCROLL ANIMATIONS ====================
function setupScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// ==================== NAVBAR SCROLL ====================
function setupNavbar() {
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
}

// ==================== MOBILE MENU ====================
function toggleMobileMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    if (navLinks.style.display === 'flex') {
        navLinks.style.position = 'absolute';
        navLinks.style.top = '100%';
        navLinks.style.left = '0';
        navLinks.style.right = '0';
        navLinks.style.flexDirection = 'column';
        navLinks.style.background = 'var(--bg-primary)';
        navLinks.style.padding = '1rem 2rem';
        navLinks.style.borderBottom = '1px solid var(--border)';
        navLinks.style.backdropFilter = 'blur(20px)';
    }
}

// ==================== INIT ====================
document.addEventListener('DOMContentLoaded', () => {
    renderExperience();
    renderProjects();
    renderSkills();
    renderAchievements();
    setupScrollAnimations();
    setupNavbar();
});
