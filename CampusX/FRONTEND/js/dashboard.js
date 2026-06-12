const notesCount =
document.getElementById("notesCount");

const eventsCount =
document.getElementById("eventsCount");

const complaintsCount =
document.getElementById("complaintsCount");

const welcomeText =
document.getElementById("welcomeText");

const aiRecommendation =
document.getElementById("aiRecommendation");

const activityContainer =
document.getElementById("activityContainer");


fetch("dashboard.php")

.then(response => response.json())

.then(data => {

    notesCount.textContent =
    data.notes;

    eventsCount.textContent =
    data.events;

    complaintsCount.textContent =
    data.complaints;


    welcomeText.textContent =
    "Welcome Back";


    if(data.notes > 5)
    {
        aiRecommendation.textContent =
        "You are highly active in notes sharing. Consider joining upcoming workshops.";
    }
    else if(data.events > 3)
    {
        aiRecommendation.textContent =
        "You frequently participate in campus events. Leadership programs are recommended.";
    }
    else
    {
        aiRecommendation.textContent =
        "Explore more modules to unlock smarter recommendations.";
    }


    activityContainer.innerHTML = "";

    data.activity.forEach(item => {

        const card =
        document.createElement("div");

        card.classList.add(
            "activity-card"
        );

        card.innerHTML = `
            <p>${item}</p>
        `;

        activityContainer.appendChild(card);

    });

});