const eventsContainer =
document.getElementById("eventsContainer");

function loadEvents()
{
    fetch("get_events.php")
    .then(response => response.json())
    .then(events => {

        eventsContainer.innerHTML = "";

        events.forEach(event => {

            eventsContainer.innerHTML += `

            <div class="event-card">

                <h3>${event.title}</h3>

                <p>Date: ${event.date}</p>

                <p>Organizer: ${event.organizer}</p>

                <p>${event.category}</p>

            </div>

            `;

        });

    });

}

loadEvents();

document
.getElementById("addEventBtn")
.addEventListener("click", () => {

    const title =
    document.getElementById("eventTitle").value;

    const date =
    document.getElementById("eventDate").value;

    const organizer =
    document.getElementById("eventOrganizer").value;

    const category =
    document.getElementById("eventCategory").value;

    fetch("add_event.php", {

        method: "POST",

        headers: {
            "Content-Type":
            "application/x-www-form-urlencoded"
        },

        body:
        "title=" + encodeURIComponent(title)
        + "&date=" + encodeURIComponent(date)
        + "&organizer=" + encodeURIComponent(organizer)
        + "&category=" + encodeURIComponent(category)

    })

    .then(response => response.text())

    .then(data => {

        alert(data);

        loadEvents();

    });

});