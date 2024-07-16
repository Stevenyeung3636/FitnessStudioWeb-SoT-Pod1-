document.addEventListener('DOMContentLoaded', () => {
    const classDetailsContainer = document.getElementById('classDetails');

    // Fetch and show class details
    fetch('http://localhost:8080/classes')
        .then(response => response.json())
        .then(data => {
            classDetailsContainer.innerHTML = ''; // Clear previous content
            const table = document.createElement('table');
            table.style.margin = '0 auto'; // Center the table
            table.style.borderCollapse = 'collapse';
            table.style.width = '80%';

            // Create table header
            const headerRow = document.createElement('tr');
            const headers = ['Class Name', 'Description', 'Instructor', 'Schedule'];
            headers.forEach(headerText => {
                const header = document.createElement('th');
                header.style.border = '1px solid black';
                header.style.padding = '10px';
                header.textContent = headerText;
                headerRow.appendChild(header);
            });
            table.appendChild(headerRow);

            // Populate table rows
            data.forEach(fitnessClass => {
                const row = document.createElement('tr');

                const className = document.createElement('td');
                className.style.border = '1px solid black';
                className.style.padding = '10px';
                className.textContent = fitnessClass.name;
                row.appendChild(className);

                const description = document.createElement('td');
                description.style.border = '1px solid black';
                description.style.padding = '10px';
                description.textContent = fitnessClass.description;
                row.appendChild(description);

                const instructor = document.createElement('td');
                instructor.style.border = '1px solid black';
                instructor.style.padding = '10px';
                instructor.textContent = fitnessClass.instructor;
                row.appendChild(instructor);

                const schedule = document.createElement('td');
                schedule.style.border = '1px solid black';
                schedule.style.padding = '10px';
                schedule.textContent = fitnessClass.schedule;
                row.appendChild(schedule);

                table.appendChild(row);
            });

            classDetailsContainer.appendChild(table);
            classDetailsContainer.style.display = 'block'; // Show the container
        })
        .catch(error => console.error('Error fetching data:', error));
});
