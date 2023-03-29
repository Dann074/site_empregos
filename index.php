<?php
// Configuração da conexão com o banco de dados
$servername = "localhost";
$username = "usuario";
$password = "senha";
$dbname = "meubanco";

// Cria a conexão com o banco de dados
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verifica se a conexão foi estabelecida com sucesso
if (!$conn) {
  die("Conexão falhou: " . mysqli_connect_error());
}

// Verifica se o formulário foi submetido
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nome = $_POST["nome"];
  $email = $_POST["email"];
  $senha = $_POST["senha"];

  // Insere os dados no banco de dados
  $sql = "INSERT INTO pessoas (nome, email, senha) VALUES ('$nome', '$email', '$senha')";
  
  if (mysqli_query($conn, $sql)) {
    echo "Pessoa cadastrada com sucesso!";
  } else {
    echo "Erro ao cadastrar pessoa: " . mysqli_error($conn);
  }
}

// Fecha a conexão com o banco de dados
mysqli_close($conn);
