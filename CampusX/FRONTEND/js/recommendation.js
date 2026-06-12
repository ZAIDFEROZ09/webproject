function getRecommendation() {

    const notes =
        JSON.parse(localStorage.getItem("campusNotes")) || [];

    const events =
        JSON.parse(localStorage.getItem("campusEvents")) || [];



    if(notes.length >= 5) {

        return "Recommended: Join academic workshops and advanced study groups.";

    }

    else if(events.length >= 3) {

        return "Recommended: Participate in leadership and networking events.";

    }

    else {

        return "Explore more CampusX modules for personalized recommendations.";

    }

}



console.log(getRecommendation());