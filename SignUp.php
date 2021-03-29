<head>
   <link rel="stylesheet" href="SignUpStyle.css">
</head>

<?php
require_once('Footer.php');

if (isset($_POST['NewEmail'])) {
  $username = $_POST['Name'];    
  $username = mysqli_real_escape_string($conn, $username);
  $password = $_POST['Password'];
  $password = mysqli_real_escape_string($conn, $password);
  $Email = $_POST['NewEmail'];
  $Email = mysqli_real_escape_string($conn, $Email);
  $encrypted =md5($password);

  $sql = "INSERT INTO user (Email, Name, Password)
VALUES ('$Email', '$username', '$encrypted')";

if ($conn->query($sql) === TRUE) {
  echo "<div class='form'>
  <h3 class='PHPText'>You are registered successfully.</h3><br/>
  <p class='PHPText'>Click here to <a href='Submit.html'>Login</a></p>
  </div>";
} 
else {
  echo "<div class='form'>
  <h3 class='PHPText'>There is already an account with this Email.</h3><br/>
  <p  class='PHPText'>Sign up with another email or log in with is email from <a href='Submit.html'>here</a></p>
  </div>";

}

}
$conn->close();
?>