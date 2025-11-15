document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventSections = document.querySelectorAll('.event-section');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter');

            // Filter sections
            eventSections.forEach(section => {
                if (filterValue === 'all' || section.getAttribute('data-category') === filterValue) {
                    section.classList.remove('hidden');
                    setTimeout(() => {
                        section.style.opacity = '1';
                    }, 50);
                } else {
                    section.style.opacity = '0';
                    setTimeout(() => {
                        section.classList.add('hidden');
                    }, 300);
                }
            });
        });
    });
});
