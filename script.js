document.addEventListener("DOMContentLoaded", function () {
    var scalingElement = document.getElementById("scalingElement");

    window.addEventListener("scroll", function () {
        // Adjust the scroll position at which you want the scaling to occur
        var scrollPosition = window.scrollY;

        // Adjust the scroll threshold and scale factor as needed
        if (scrollPosition > 200) {
            scalingElement.classList.add("scaled");
        } else {
            scalingElement.classList.remove("scaled");
        }
    });
});
