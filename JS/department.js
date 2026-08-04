// ===============================
// Department Page JavaScript
// Government Polytechnic Vaishali
// ===============================

// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // Explore Button
    // ===============================

    const exploreBtn = document.getElementById("exploreBtn");
    const cseSection = document.getElementById("cseSection");

    if (exploreBtn && cseSection) {

        exploreBtn.addEventListener("click", function () {

            cseSection.style.display = "block";

            cseSection.scrollIntoView({
                behavior: "smooth"
            });

        });

    }

    // ===============================
    // Semester Buttons
    // ===============================

    const semesterButtons = document.querySelectorAll(".semester-btn");

    semesterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const target = document.getElementById(
                button.getAttribute("data-target")
            );

            if (!target) return;

            // Close other semesters

            document.querySelectorAll(".semester-content").forEach(function (section) {

                if (section !== target) {

                    section.style.display = "none";

                }

            });

            // Reset other arrows

            semesterButtons.forEach(function (btn) {

                if (btn !== button) {

                    btn.innerHTML = btn.innerHTML.replace("▼", "▶");

                }

            });

            // Toggle selected semester

            if (target.style.display === "block") {

                target.style.display = "none";

                button.innerHTML = button.innerHTML.replace("▼", "▶");

            } else {

                target.style.display = "block";

                button.innerHTML = button.innerHTML.replace("▶", "▼");

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

});