<?php

    if(isset($_POST['Enviar'])){

        $nombres=$_POST['nombre'];
        $correo=$_POST['correo'];
        $telefono=$_POST['telefono'];
        $servicio=$_POST['servicio'];
        $mensaje=$_POST['mensaje'];
        
        $header = "From: ".$correo."\r\n";
        $header .= "X-Mailer: PHP/".phpversion()."\r\n";
        $header .= "Mime-Version: 1.0 \r\n";
        $header .= "Content-Type: text/plain";
    
        $message = "From the jdpropacksolutions.com website: \r\n";
        $message .= "A new customer wants to know information: \r\n";
        $message .= "Customer: ".$nombres." \r\n";
        $message .= "Email: ".$correo." \r\n";
        $message .= "Phone: ".$telefono." \r\n";
        $message .= "Service: ".$mensaje." \r\n";
        $message .= "Message: ".$contacto." \r\n\n\n";


        $para='jdpropacksolutions@gmail.com';
        $asunto="Web Page | Contact for Services";
    
        ini_set('SMTP', "server.com");
        ini_set('smtp_port', "25");
        ini_set('sendmail_from', "jdpropacksolutions@gmail.com");
        if(mail($para,$asunto,$message)){
            echo "<script>
            swal.fire('Message sent succesfully!', 
          'Your message has been sent, we will contact you shortly.', 
          'success');
            </script>";die();
        }else{
            echo "<script>
            alert('Mensaje');
            </script>";die();
        }
        
        }
    //header("Location:index.html");
?>