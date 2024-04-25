<?php
$nome = addslashes($_POST['nome']);
$email = addslashes($_POST['telefone']);
$telefone = addslashes($_POST['telefone']);

$para = "gamercraft884@gmail.com";
$assunto = "fale conosco - PowerWL";
$corpo = "nome: " .$nome."\n" . "email: " .$email."\n" . "telefone: " .$telefone."\n";

$cabeca = "From: jf.lima.r14@gmail.com" . "\n". "reply-to:". $email . "\n" . "X=Mailer:PHP/" .phpversion();

if(mail($para,$assunto,$corpo,$cabeca)){
    echo("e-mail enviado com sucesso!");

} else{
    echo("houve um erro ao enviar o email!");
}
// so funciona se o site estiver hospedado
?>