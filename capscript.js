const form = document.getElementById("registrationForm");
const responseDiv = document.getElementById("response");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    try {
        const res = await fetch("<YOUR_DATABASE_ENDPOINT>", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, email, phone }),
        });

        const data = await res.json();
        if (res.ok) {
            responseDiv.textContent = "Registration successful!";
            form.reset();
        } else {
            responseDiv.textContent = data.message || "Something went wrong.";
        }
    } catch (error) {
        console.error(error);
        responseDiv.textContent = "An error occurred. Please try again.";
    }
});
