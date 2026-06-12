console.log("CampusX Loaded Successfully");



/* Smooth Button Animation */

const buttons =
    document.querySelectorAll("button");

buttons.forEach((button) => {

    button.addEventListener("mouseenter", () => {

        button.style.transform =
            "translateY(-3px)";

    });



    button.addEventListener("mouseleave", () => {

        button.style.transform =
            "translateY(0px)";

    });

});