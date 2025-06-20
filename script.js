// Project data
const projects = [
    {
        title: "StartApp",
        description: "A web application connecting students to startup opportunities and hackathons, featuring real-time messaging, team management, and GitHub integration.",
        image: "public/images/image.png?v=" + new Date().getTime(), 
        tags: ["Flask", "SQLite", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/ZekiCanSarak/StartApp",
        demo: "http://165.232.105.213:8080/",
        demoType: "Demo"
    },
    {
        title: "BattleShip Game",
        description: "Java-based game with CLI and GUI play. Turn-based logic, ship placement, and JUnit-tested game mechanics.",
        image: "public/images/can cover.png?v=" + new Date().getTime(), 
        tags: ["Java", "JUnit", "GUI", "CLI"],
        github: "https://github.com/ZekiCanSarak/BattleshipGame",
        demo: "public/videos/Battleship Game CLI and GUI Review.mov",
        demoType: "Video Demo"
    },
    {
        title: "Post-It",
        description: "Post-it is a simple Reddit-style forum where users can post topics, reply to posts and replies, and like both.",
        image: "public/images/image1.png?v=" + new Date().getTime(), 
        tags: ["Flask", "SQLite", "HTML", "CSS", "JavaScript"],
        github: "https://github.com/ZekiCanSarak/PostIt",
        demo: "https://postit-cd18.onrender.com",
        demoType: "Demo"
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
                        <span style="margin-left: 0.5rem;">${project.demoType}</span>
                    </a>
                    ` : ''}
                </div>
            </div>
        `;
        
        projectGrid.appendChild(projectCard);
    });
}

// Initialize when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    createProjectCards();
}); 