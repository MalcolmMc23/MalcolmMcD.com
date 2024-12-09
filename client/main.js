document.addEventListener('DOMContentLoaded', () => {
    // Sample data for projects and experiences
    const projects = [
        { name: 'Project One', description: 'A brief description of Project One.' },
        { name: 'Project Two', description: 'A brief description of Project Two.' },
        // Add more projects as needed
    ];

    const experiences = [
        { role: 'Software Engineer', company: 'Company A', description: 'Worked on developing scalable web applications.' },
        { role: 'Frontend Developer', company: 'Company B', description: 'Focused on creating responsive user interfaces.' },
        // Add more experiences as needed
    ];

    // Populate Projects List
    const projectList = document.getElementById('project-list');
    projects.forEach(project => {
        const li = document.createElement('li');

        const projectTitle = document.createElement('h3');
        projectTitle.textContent = project.name;

        const projectDesc = document.createElement('p');
        projectDesc.textContent = project.description;

        li.appendChild(projectTitle);
        li.appendChild(projectDesc);
        projectList.appendChild(li);
    });

    // Populate Experience List
    const experienceList = document.getElementById('experience-list');
    experiences.forEach(experience => {
        const li = document.createElement('li');

        const experienceTitle = document.createElement('h3');
        experienceTitle.textContent = `${experience.role} at ${experience.company}`;

        const experienceDesc = document.createElement('p');
        experienceDesc.textContent = experience.description;

        li.appendChild(experienceTitle);
        li.appendChild(experienceDesc);
        experienceList.appendChild(li);
    });

    // Fade-In Sections
    const sections = document.querySelectorAll('.section');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });

    // Contact Form Submission removed
});