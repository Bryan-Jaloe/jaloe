document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const table = document.querySelector("table");
    const tbody = table.querySelector("tbody");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const telepon = document.getElementById("telepon").value;

        const newRow = document.createElement("tr");
        newRow.innerHTML = `
            <td>${nama}</td>
            <td>${email}</td>
            <td>${telepon}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        tbody.appendChild(newRow);

        form.reset();
    });

    tbody.addEventListener("click", function(event) {
        const target = event.target;

        if (target.classList.contains("edit-btn")) {
            const row = target.closest("tr");
            const cells = row.children;
            const nama = cells[0].textContent;
            const email = cells[1].textContent;
            const telepon = cells[2].textContent;

            document.getElementById("nama").value = nama;
            document.getElementById("email").value = email;
            document.getElementById("telepon").value = telepon;

            row.remove();
        } else if (target.classList.contains("delete-btn")) {
            target.closest("tr").remove();
        }
    });
});
