// Project data
const projects = [
    {
        title: "StartApp",
        description: "A web application connecting students to startup opportunities and hackathons, featuring real-time messaging, team management, and GitHub integration.",
        image: "public/images/Screenshot 2025-06-19 at 5.42.42 pm.png", 
        tags: ["Flask", "SQLite", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/ZekiCanSarak/StartApp",
        demo: "http://165.232.105.213:8080/" 
    },
    {
        title: "BattleShip Game",
        description: "Java-based game with CLI and GUI play. Turn-based logic, ship placement, and JUnit-tested game mechanics.",
        tags: ["Java", "JUnit", "GUI", "CLI"],
        github: "https://github.com/ZekiCanSarak/BattleshipGame",
        demo: "https://project2.demo"
    }
];

// Function to create project cards
function createProjectCards() {
    const projectGrid = document.querySelector('.project-grid');
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        const imageHtml = project.image ? 
            `<img src="${project.image}" alt="${project.title}">` :
            `<span style="font-size: 1.5rem; color: #4b5563;">Project Preview</span>`;
        
        projectCard.innerHTML = `
            <div class="project-image">
                ${imageHtml}
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div style="display: flex; gap: 1rem;">
                    <a href="${project.github}" target="_blank" class="btn btn-secondary">
                        <i class="fab fa-github"></i>
                        <span style="margin-left: 0.5rem;">Source</span>
                    </a>
                    ${project.demo !== "#" ? `
                    <a href="${project.demo}" target="_blank" class="btn btn-secondary">
                        <i class="fas fa-external-link-alt"></i>
                        <span style="margin-left: 0.5rem;">Demo</span>
                    </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}

// Handle contact form submission
function handleContactForm() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        
        // Here you would typically send the data to a server
        // For now, we'll just log it to the console
        console.log('Form submitted:', data);
        
        // Show success message
        alert('Thank you for your message! I will get back to you soon.');
        form.reset();
    });
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
    handleContactForm();
}); 