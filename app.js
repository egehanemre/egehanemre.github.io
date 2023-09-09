const sections = document.querySelectorAll('.section');
const buttons = document.querySelectorAll('#button');
const AllSections = document.querySelectorAll('.section');
const contentContainers = document.querySelectorAll('.content');
const button_scroll = document.querySelectorAll('.button-style');
const section_scroll = document.querySelectorAll('.pages section');

// Add click event listeners to each button


function PageTransitions() {
    buttons.forEach((button) => {
        button.addEventListener('click', function (event) {
            // Prevent the default behavior of anchor links
            event.preventDefault();

            const isActive = this.classList.contains('active-btn');
            const targetSectionId = this.getAttribute('data-id');
            
            // Remove the 'active-btn' class from all buttons
            buttons.forEach((btn) => {
                btn.classList.remove('active-btn');
            });

            // Hide all sections
            section_scroll.forEach(section => {
                section.style.display = 'none';
            });

            // Toggle the 'active-btn' class based on the current state
            if (!isActive) {
                this.classList.add('active-btn');
            }

            // Toggle the display of the corresponding section
            const targetSection = document.getElementById(targetSectionId);
            if (targetSection) {
                targetSection.style.display = isActive ? 'none' : 'block';
            }

            // Toggle the display of the edu-inside section
            const eduInsideSection = document.querySelector('.edu-inside');
            if (eduInsideSection) {
                eduInsideSection.style.display = isActive ? 'none' : 'block';
            }

            const skillsInsideSection = document.querySelector('.skills-inside');
            if (skillsInsideSection) {
                skillsInsideSection.style.display = isActive ? 'none' : 'block';
            }

            const workInsideSection = document.querySelector('.work-inside');
            if (workInsideSection) {
                workInsideSection.style.display = isActive ? 'none' : 'block';
            }

        });
    });
}


PageTransitions();