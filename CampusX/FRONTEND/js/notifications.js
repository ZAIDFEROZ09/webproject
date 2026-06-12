const notificationsContainer =
    document.getElementById("notificationsContainer");

const totalNotifications =
    document.getElementById("totalNotifications");



const notes =
    JSON.parse(localStorage.getItem("campusNotes")) || [];

const events =
    JSON.parse(localStorage.getItem("campusEvents")) || [];

const complaints =
    JSON.parse(localStorage.getItem("campusComplaints")) || [];



let notifications = [];



notes.forEach((note) => {

    notifications.push(
        `New note uploaded: ${note.title}`
    );

});



events.forEach((event) => {

    notifications.push(
        `New event added: ${event.title}`
    );

});



complaints.forEach((complaint) => {

    notifications.push(
        `Complaint submitted: ${complaint.title}`
    );

});



notifications.reverse();



totalNotifications.textContent =
    notifications.length;



notifications.forEach((text) => {

    const card =
        document.createElement("div");

    card.classList.add("notification-card");

    card.innerHTML = `

        <p>${text}</p>

    `;

    notificationsContainer.appendChild(card);

});