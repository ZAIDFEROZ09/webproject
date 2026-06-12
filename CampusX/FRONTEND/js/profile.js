const saveProfileBtn =
    document.getElementById("saveProfileBtn");

const displayName =
    document.getElementById("displayName");

const displayDepartment =
    document.getElementById("displayDepartment");



let profileData = JSON.parse(
    localStorage.getItem("campusProfile")
) || {

    name: "Muhammad Zaid",
    department: "Computer Science Student"

};



function renderProfile() {

    displayName.textContent =
        profileData.name;

    displayDepartment.textContent =
        profileData.department;

}



saveProfileBtn.addEventListener("click", () => {

    const name =
        document.getElementById("nameInput").value;

    const department =
        document.getElementById("departmentInput").value;



    if(name === "" || department === "") {

        alert("Please fill all fields");

        return;

    }



    profileData = {

        name,
        department

    };



    localStorage.setItem(
        "campusProfile",
        JSON.stringify(profileData)
    );



    renderProfile();



    document.getElementById("nameInput").value = "";

    document.getElementById("departmentInput").value = "";

});



renderProfile();