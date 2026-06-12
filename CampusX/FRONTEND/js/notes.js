const notesContainer =
document.getElementById("notesContainer");

function loadNotes()
{
    fetch("get_notes.php")
    .then(response => response.json())
    .then(notes => {

        notesContainer.innerHTML = "";

        notes.forEach(note => {

            notesContainer.innerHTML += `

            <div class="note-card">

                <div class="note-top">

                    <i class="fa-solid fa-file-pdf"></i>

                    <span>${note.category}</span>

                </div>

                <h3>${note.title}</h3>

                <p>
                    Uploaded by ${note.uploader}
                </p>

                <div class="card-buttons">

                    <button
                    class="delete-btn"
                    onclick="deleteNote(${note.id})">

                        Delete Note

                    </button>

                </div>

            </div>

            `;

        });

    });

}

loadNotes();

document
.getElementById("uploadBtn")
.addEventListener("click", () => {

    const title =
    document.getElementById("noteTitle").value;

    const uploader =
    document.getElementById("noteUploader").value;

    const category =
    document.getElementById("noteCategory").value;

    fetch("add_note.php", {

        method: "POST",

        headers: {
            "Content-Type":
            "application/x-www-form-urlencoded"
        },

        body:
        "title=" + encodeURIComponent(title)
        + "&uploader=" + encodeURIComponent(uploader)
        + "&category=" + encodeURIComponent(category)

    })

    .then(response => response.text())

    .then(data => {

        alert(data);

        loadNotes();

        document.getElementById("noteTitle").value = "";
        document.getElementById("noteUploader").value = "";

    });

});

function deleteNote(id)
{
    fetch("delete_note.php", {

        method: "POST",

        headers: {
            "Content-Type":
            "application/x-www-form-urlencoded"
        },

        body: "id=" + id

    })

    .then(response => response.text())

    .then(data => {

        loadNotes();

    });

}