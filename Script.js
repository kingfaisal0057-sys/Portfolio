const filterButtons = document.querySelectorAll(".filter-btn");
const projectCards = document.querySelectorAll(".project-card");

filterButtons.forEach(button => {

    button.addEventListener("click", () => {

        const filter = button.getAttribute("data-filter");

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        projectCards.forEach(card => {

            const category = card.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }

        });

    });

});
// ================= CONTACT FORM =================

const contactForm = document.querySelector(".contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const subject = document.getElementById("subject").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {

            alert("Please fill in all fields.");

            return;
        }

        alert("Thank you! Your message has been received.");

        contactForm.reset();

    });

}