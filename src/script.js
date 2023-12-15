document.addEventListener("DOMContentLoaded", function() {
    var footer = document.getElementById("myFooter");

    window.onscroll = function() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            footer.style.display = "block";
        } else {
            footer.style.display = "none";
        }
    };
});
