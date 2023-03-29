// Função para cadastrar uma nova pessoa
function cadastrarPessoa(event) {
    event.preventDefault();
    let nome = document.getElementById("nome").value;
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;
  
    let novaPessoa = {
      nome: nome,
      email: email,
      senha: senha
    };
  
    // Envia os dados do formulário para o PHP
    fetch('index.php', {
      method: 'POST',
      body: JSON.stringify(novaPessoa),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.text())
    .then(data => {
      alert(data);
      console.log(novaPessoa);
    })
    .catch(error => console.error(error));
  }
  
  // Adiciona o listener ao botão de cadastro
  let cadastroPessoaBtn = document.getElementById("cadastroPessoaBtn");
  cadastroPessoaBtn.addEventListener("click", cadastrarPessoa);
  