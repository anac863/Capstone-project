<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EasyEventRegi Event Registration</title>
    <link rel="stylesheet" href="capstyles.css">
</head>
<body>
    <div class="container">
        <h1>EasyEventRegi Event Registration</h1>
        <?php
        if (isset($_POST['submit'])) {
            require_once "../includes/db.php";

            $name = $_POST['name'];
            $email = $_POST['email'];
            $phone = $_POST['phone'];

            if ($name && $email && $phone) {
                $query = "INSERT INTO registrations (name, email, phone) VALUES (?, ?, ?)";
                $stmt = $conn->prepare($query);

                if ($stmt) {
                    $stmt->bind_param("sss", $name, $email, $phone);
                    if ($stmt->execute()) {
                        echo "<p class='success'>Registration successful!</p>";
                    } else {
                        echo "<p class='error'>Email already registered!</p>";
                    }
                } else {
                    echo "<p class='error'>Database error. Please try again.</p>";
                }
            } else {
                echo "<p class='error'>Please fill out all fields.</p>";
            }
        }
        ?>
        <form method="POST" action="">
            <label for="name">Full Name:</label>
            <input type="text" id="name" name="name" required>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>

            <label for="phone">Phone:</label>
            <input type="tel" id="phone" name="phone" required>

            <button type="submit" name="submit">Register</button>
        </form>
    </div>
</body>
</html>
