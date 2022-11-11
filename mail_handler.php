
<?php
if(isset($_POST["submit"])) {
	$name = $_POST["contactName"];
  $email = $_POST["contactEmail"];
	$msg = $_POST["contactMessage"];

	$to="rajathar6@gmail.com";
  $subject=" New Form Submission";
  $message="Name: ".$contactName."\n"."Wrote the follaowing: "."\n\n".$msg;
  $headers="contactFrom: ".$email;

	if(mail($to, $subject, $message, $headers)) {
	    echo "<h1>Your contact information is received successfully.</h1>";
	}
  else{
    echo " Somthing went wrong";
  }
}
?>