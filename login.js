// Objeto que irá armazenar os dados das pessoas cadastradas
let pessoas = [
    {
      nome: "Maria",
      email: "maria@gmail.com",
      idade: 25,
      senha: "123456"
    },
    {
      nome: "João",
      email: "joao@gmail.com",
      idade: 30,
      senha: "654321"
    }
  ];

  // Função para verificar se o email e a senha são válidos
  function fazerLogin(event) {
    event.preventDefault();
    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    let pessoa = pessoas.find(p => p.email === email && p.senha === senha);

    if (pessoa) {
      alert(`Bem-vindo(a) ${pessoa.nome}!`);
      console.log(pessoa);
    } else {
      alert("Email ou senha inválidos!");
    }
  }

  // Adiciona o listener ao botão de login
  let loginBtn = document.getElementById("loginBtn");
  loginBtn.addEventListener("click", fazerLogin);