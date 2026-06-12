const complaintsContainer =
document.getElementById("complaintsContainer");

function loadComplaints()
{
    fetch("get_complaints.php")
    .then(response => response.json())
    .then(complaints => {

        complaintsContainer.innerHTML = "";

        complaints.forEach(complaint => {

            complaintsContainer.innerHTML += `

            <div class="complaint-card">

                <h3>${complaint.title}</h3>

                <p>
                    Department:
                    ${complaint.department}
                </p>

                <p>
                    Status:
                    ${complaint.status}
                </p>

            </div>

            `;

        });

    });

}

loadComplaints();

document
.getElementById("addComplaintBtn")
.addEventListener("click", () => {

    const title =
    document.getElementById("complaintTitle").value;

    const department =
    document.getElementById("complaintDepartment").value;

    const status =
    document.getElementById("complaintStatus").value;

    fetch("add_complaint.php", {

        method: "POST",

        headers: {
            "Content-Type":
            "application/x-www-form-urlencoded"
        },

        body:
        "title=" + encodeURIComponent(title)
        + "&department=" + encodeURIComponent(department)
        + "&status=" + encodeURIComponent(status)

    })

    .then(response => response.text())

    .then(data => {

        alert(data);

        loadComplaints();

    });

});