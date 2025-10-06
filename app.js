const sections = document.querySelectorAll('.section');
const buttons = document.querySelectorAll('#button');
const AllSections = document.querySelectorAll('.section');
const contentContainers = document.querySelectorAll('.content');
const button_scroll = document.querySelectorAll('.button-style');
const section_scroll = document.querySelectorAll('.pages section');

document.querySelectorAll('.project-button').forEach(button => {
    button.addEventListener('click', () => {
        const isActive = button.classList.contains('active');

        document.querySelectorAll('.project-button').forEach(btn => {
            btn.classList.remove('active');
        });

        if (!isActive) {
            button.classList.add('active');
        }

        const projectId = button.getAttribute('data-project');
        document.querySelectorAll('.project-content').forEach(content => {
            content.classList.remove('active');
        });

        if (!isActive) {
            const projectContent = document.getElementById(projectId);
            projectContent.classList.add('active');

            const projectDetails = projectContent.querySelector('.project-details');
            if (projectDetails) {
                projectDetails.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

function PageTransitions() {
    buttons.forEach((button) => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const isActive = this.classList.contains('active-btn');
            const targetSectionId = this.getAttribute('data-id');
            
            buttons.forEach((btn) => {
                btn.classList.remove('active-btn');
            });

            section_scroll.forEach(section => {
                section.style.display = 'none';
            });

            if (!isActive) {
                this.classList.add('active-btn');
            }

            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.style.display = isActive ? 'none' : 'block';

                if (!isActive) {
                    targetSection.scrollIntoView({ behavior: 'smooth' });
                }
            }

            const eduInsideSection = document.querySelector('.edu-inside');
            if (eduInsideSection) {
                eduInsideSection.style.display = isActive ? 'none' : 'block';
            }

            const systemsInsideSection = document.querySelector('.systems-inside');
            if (systemsInsideSection) {
                systemsInsideSection.style.display = isActive ? 'none' : 'block';
            }

            const workInsideSection = document.querySelector('.work-inside');
            if (workInsideSection) {
                workInsideSection.style.display = isActive ? 'none' : 'block';
            }
        });
    });
}

PageTransitions();

document.querySelectorAll('#button').forEach(button => {
    button.addEventListener('click', () => {
        const isActive = button.classList.contains('active');

        document.querySelectorAll('#button').forEach(btn => {
            btn.classList.remove('active');
        });

        if (!isActive) {
            button.classList.add('active');
        }

        const targetId = button.getAttribute('data-id');
        document.querySelectorAll('.section').forEach(section => {
            section.classList.remove('active');
        });

        if (!isActive) {
            const targetSection = document.getElementById(targetId);
            targetSection.classList.add('active');

            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            }
        }

        if (targetId === 'education') {
            const eduInsideSection = document.querySelector('.edu-inside');
            if (eduInsideSection) {
                eduInsideSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (targetId === 'work') {
            const workInsideSection = document.querySelector('.work-inside');
            if (workInsideSection) {
                workInsideSection.scrollIntoView({ behavior: 'smooth' });
            }
        } else if (targetId === 'systems') {
            const systemsInside = document.querySelector('.systems-inside');
            if (systemsInside) {
                systemsInside.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});