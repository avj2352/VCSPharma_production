<?php

/*Create a JSON Response*/
function createJSON($name,$email,$message){
  header('Content-type: application/json');
	$status = array(
		'type'=>'success',
		'result'=>'Thank you for contacting us. As early as possible we will reach out to you',
    'name' => $name,
    'email' => $email,
    'message' => $message
	);
  echo json_encode($status);
}/*end:createJSON()*/

    /*STEP1: Get the XHR Request*/
    // $initName = $_POST['name'] or $_REQUEST['name'];
    // $initEmail = $_POST['email'] or $_REQUEST['email'];
    // $initMsg = $_POST['message'] or $_REQUEST['message'];
    // $initName = $_POST['name'] or $_REQUEST['name'];
    // $initEmail = $_POST['email'] or $_REQUEST['email'];
    // $initMsg = $_POST['message'] or $_REQUEST['message'];
    $name = @trim(stripslashes($_REQUEST['name']));
    $email = @trim(stripslashes($_REQUEST['email']));
    $message = @trim(stripslashes($_REQUEST['message']));

    $email_from = $email;
    // $email_to = 'eronnewpharma@gmail.com';//replace with your email
    $email_to = 'admin@vcspharmaceutical.com';//replace with your email
    $subject = "VCS Pharmaceuticals - Contact Us ". $name;

    $body = 'Dear Admin '. $name . " has sent an email. Please find the details below: \n\n" ;
    $body .= 'Name: '.$name . "\n";
    $body .= 'Email: '.$email. "\n";
    $body .= "VCS Pharmaceuticals - Contact Us\n";
    $body .= 'Message: '.$message. "\n";

    $success = @mail($email_to, $subject, $body, 'From: <'.$email_from.'>');
  //  echo $success; die();

    /*To Debug uncomment the below line else redirect the page to success.html*/
    //echo json_encode($status);
    // redirect("http://www.powerministry.info/success.html");
    createJSON($name,$email,$message);
