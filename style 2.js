document.addEventListener("DOMContentLoaded", function() {
    const contactTable = document.getElementById("contact-table");
    const contactForm = document.getElementById("contact-form");

    // Fungsi untuk menambahkan kontak ke tabel
    function addContactToTable(id, nama, email, telepon) {
        const newRow = document.createElement("tr");
        newRow.dataset.id = id;
        newRow.innerHTML = `
            <td>${nama}</td>
            <td>${email}</td>
            <td>${telepon}</td>
            <td>
                <button class="edit-btn">Edit</button>
                <button class="delete-btn">Delete</button>
            </td>
        `;
        contactTable.appendChild(newRow);
    }

    // Mengelola pengiriman formulir
    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nama = document.getElementById("nama").value;
        const email = document.getElementById("email").value;
        const telepon = document.getElementById("telepon").value;

        // Pembuatan ID sementara (anda bisa menggunakan library UUID untuk ID yang unik)
        const id = Date.now().toString();

        addContactToTable(id, nama, email, telepon);

        // Reset formulir
        contactForm.reset();
    });

    // Mengelola tombol Edit dan Delete
    contactTable.addEventListener("click", function(event) {
        const target = event.target;

        if (target.classList.contains("edit-btn")) {
            const row = target.closest("tr");
            const cells = row.children;
            const id = row.dataset.id;
            const nama = cells[0].textContent;
            const email = cells[1].textContent;
            const telepon = cells[2].textContent;

            // Isi formulir dengan data yang akan diedit
            document.getElementById("nama").value = nama;
            document.getElementById("email").value = email;
            document.getElementById("telepon").value = telepon;

            // Hapus baris yang akan diedit dari tabel
            row.remove();
        } else if (target.classList.contains("delete-btn")) {
            const row = target.closest("tr");
            const id = row.dataset.id;

            // Hapus baris dari tabel
            row.remove();
        }
    });
});
