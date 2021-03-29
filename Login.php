<head>
   <link rel="stylesheet" href="SignUpStyle.css">
</head>
<?php
require('Footer.php');
session_start();
if (isset($_POST['LoginEmail'])) {
  $username = $_POST['LoginEmail'];    
  $username = mysqli_real_escape_string($conn, $username);
  $password = $_POST['LoginPassword'];
  $password = mysqli_real_escape_string($conn, $password);
  $encrypted =md5($password);

 

  $query    = "SELECT * FROM `user` WHERE Email='$username'
                     AND password='$encrypted'";

 $result = mysqli_query($conn, $query) or die(mysql_error());
 $rows = mysqli_num_rows($result);
 
 while( $row = mysqli_fetch_array($result)){
  $value = $row['Name'];
 }

if ($rows > 0) {
 
  $_SESSION['username'] = $value;
  header("Location: Welcome.php");

} 
else {
  echo "<div class='form'>
  <h3 class='PHPText'>This account isn't found.</h3><br/>
  <p class='PHPText'>Check your Email and password again or if you are new user please sign up first.<a href='Submit.html'>Log in / Sign up</a></p>
  </div>";
}
}
$conn->close();
?>