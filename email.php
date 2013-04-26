<?php
    // EDIT THE 2 LINES BELOW AS REQUIRED
    $email_to = "avaldes@viamachinery.com";
    $email_subject = "Email Request From Website";

    $name = $_POST['name']; // required
    $company = $_POST['company']; // required
    //$email_from = $_POST['email']; // required
    $address = $_POST['address']; // required
    //$city = $_POST['address']; // not required
    //$province = $_POST['province']; // not required
    //$postal_code = $_POST['postal_code']; // not required
    $telephone = $_POST['phone']; // not required
    //$fax = $_POST['fax']; // not required
    $request = $_POST['request']; // required
	
	
    $email_message = "Contact inforamtion that was provided by visitor.\n\n";
	
    function clean_string($string) {
      $bad = array("content-type","bcc:","to:","cc:","href");
      return str_replace($bad,"",$string);
    }
	
    $email_message .= "Name: ".clean_string($name)."\n";
    $email_message .= "Company: ".clean_string($company)."\n";
    //$email_message .= "Email: ".clean_string($email_from)."\n";
    $email_message .= "Address: ".clean_string($address)."\n";
    //$email_message .= "Address 2: ".clean_string($address_2)."\n";
    //$email_message .= "City: ".clean_string($city)."\n";
    //$email_message .= "Province: ".clean_string($province)."\n";
    //$email_message .= "Postal Code: ".clean_string($postal_code)."\n";
    $email_message .= "Telephone: ".clean_string($telephone)."\n";
    //$email_message .= "Fax: ".clean_string($fax)."\n";
    $email_message .= "Request: ".clean_string($request)."\n";
	
    // create email headers
    $headers = 'From: customer'."\r\n".
    'X-Mailer: PHP/' . phpversion();
    if(mail($email_to, $email_subject, $email_message, $headers) == 1) {
?>
<div id="success">
    Your request has been sent successfully
</div>
<?php
} else { ?>
<div id="error">
    There is an error trying to send your request, please try again.
</div>
<?php
}
?>
