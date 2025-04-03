// Project data - Replace with your actual projects
const projects = [
    {
        name: 'Carbon footprint App',
        description: 'A mobile application designed to calculate digital carbon footprint of users so as to aim for environmental conservation.',
        techStack: ['Flutter', 'Dart', 'Firebase'],
        githubLink: 'https://github.com/bobecheda/leafPrint.git',
        image: 'https://placehold.co/600x400'
    },
    {
        name: 'Portfolio Website',
        description: 'A personal portfolio website built with modern web technologies to showcase my projects and skills.',
        techStack: ['HTML', 'CSS', 'JavaScript'],
        githubLink: '',
        image: 'https://placehold.co/600x400'
    },

    {  
        name: 'My Github Repository',
        description: 'View my github repo on github to check out my work and for collaborations on a project.',
        techStack: ['HTML' , 'CSS' ,'Typescript'],
        githubLink: 'https://github.com/bobecheda/bobecheda.git',
        image:  'https://img.icons8.com/?size=100&id=12599&format=png&color=000000'
    },
    
    {
        name: 'GTK4 Calculator Pro',
        description: 'GTK4 Calculator Pro is a sleek and modern calculator application built using GTK4 and C, following the MVC architecture. It provides essential arithmetic operations, including addition, subtraction, multiplication, division, exponentiation, and modulo operations, all wrapped in an intuitive and stylish GUI.',
        techStack: ['GTK4' , 'C' , 'CSS' , 'gitlab'],
        githubLink: 'https://gitlab.com/bobe-tech/calculator-gui-2.git',
        image: 'https://img.icons8.com/?size=100&id=12599&format=png&color=000000'

    }


     
];

// Function to create project cards
function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
        <div class="project-content">
            <h3 class="project-title">${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.githubLink}" class="project-link" target="_blank">
                    <i class="fab fa-github"></i> View on GitHub
                </a>
            </div>
        </div>
    `;

    return card;
}

// Function to load projects
function loadProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        projectsGrid.appendChild(createProjectCard(project));
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    loadProjects();

    // Add scroll reveal animations
    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = 1;
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        },
        {
            threshold: 0.1
        }
    );

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });
});