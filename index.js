/* Definir uma validação para os campos não permitindo enviar com os valores em branco;
Após clicar no botão enviar, os valores dos campos devem ser passados para um objeto do JS, é este deve ser exibido no console do browser;
Após clicar no botão enviar, ocultar o formulário e exibir a mensagem: Obrigado por seu cadastro!
Utilizar somente o arquivo index.js para adicionar todo o código JS; */


$('#foto').hide();

function enviarForm() {
  const h2 = document.getElementById('titulo');
  const form = document.getElementById('form');
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const celular = document.getElementById('celular').value;

  // Verifica se algum campo está vazio
  if (nome === '' || sobrenome === '' || email === '' || celular === '') {
    alert('Por favor, preencha todos os campos.');
    return;
  }

  // Objeto com os dados do formulário
  const dadosFormulario = {
    nome: nome,
    email: email,
    celular: celular
  };

  // Exibe os dados no console
  console.log('Dados do formulário:', dadosFormulario);

  // Oculta o formulário e o texto
  form.style.display = 'none';
  h2.style.display = 'none';
  
}


// garantir que a pagina vai ser carregada completamente para iniciar o script
document.addEventListener('DOMContentLoaded', function () {
  const enviarBtn = document.getElementById('enviarBtn');
  enviarBtn.addEventListener('click', enviarForm);
});

//foto de boas vindas https://jquery.com/
$("form").on("submit", function(event) {
  event.preventDefault();
  $("form").hide();
  $("h2").hide();
  $("#foto").show();
} );