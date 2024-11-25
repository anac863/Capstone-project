const form = document.getElementById("registrationForm");
const responseDiv = document.getElementById("response");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    try {
        const res = await fetch("https://drhjvpjofusizdimkkbq.supabase.co", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRyaGp2cGpvZnVzaXpkaW1ra2JxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI1MDc0NzYsImV4cCI6MjA0ODA4MzQ3Nn0.7mcKNAnTeBzXnduJstKdmvi2rxD-KQYOW50ZorGkQQU",
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
