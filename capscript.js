document.getElementById("registrationForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;

    fetch("/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response").textContent = data.message;
        document.getElementById("registrationForm").reset();
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("response").textContent = "Something went wrong!";
    });
});
