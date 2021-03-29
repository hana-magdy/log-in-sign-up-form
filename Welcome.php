<head>
<link rel="stylesheet" href="SignUpStyle.css">
</head>

<?php 
session_start();
require_once('Footer.php');

echo"<div>
<h1 class='PHPText'> Welcome, {$_SESSION['username']} !</h1>
</div>";

$result = mysqli_query($conn,"SELECT * FROM department");

echo "<div>
<table>
<tr>
<th>Number</th>
<th>Department Name</th>
<th>Departmet Description</th>
</tr>";

while($row = mysqli_fetch_array($result))
{
echo "<tr>";
echo "<td>" . $row['Id'] . "</td>";
echo "<td>" . $row['DName'] . "</td>";
echo "<td>" . $row['Description'] . "</td>";
echo "</tr>";
}

echo "</table></div>";

echo"<div>
<h2 class='PHPText'> Want to go back to the <a href='Submit.html'>main page</a> ?</h2>
</div>";

    
$conn->close();

 ?>


