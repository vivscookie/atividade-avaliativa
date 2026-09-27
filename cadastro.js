const form = document.getElementById("cadastroForm");
const nome = document.getElementById("nome");
const novoUsuario = document.getElementById("novoUsuario");
const novaSenha = document.getElementById("novaSenha");
const confirmarSenha = document.getElementById("confirmarSenha");
const mensagemCadastro = document.getElementById("mensagemCadastro");
 
form.addEventListener("submit", (e) => {
  e.preventDefault(); // evita o recarregamento da página
 
  if (nome.value === "" || novoUsuario.value === "" || novaSenha.value === "" || confirmarSenha.value === "") {
    mensagemCadastro.style.color = "#ff5252";
    mensagemCadastro.textContent = "Preencha todos os campos!";
  } else if (novaSenha.value !== confirmarSenha.value) {
    mensagemCadastro.style.color = "#ff5252";
    mensagemCadastro.textContent = "As senhas não coincidem.";
  } else {
    mensagemCadastro.style.color = "#03dac6";
    mensagemCadastro.textContent = "Cadastro realizado com sucesso!";
  }
});