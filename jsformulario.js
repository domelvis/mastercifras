// script.js

// Função para processar o formulário
function processForm(event) {
    event.preventDefault(); // Impede o envio do formulário padrão
  
    // Obtenha os valores dos campos do formulário
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    // Aqui, você pode adicionar código para enviar os dados do formulário para o servidor ou realizar outras ações, como exibir uma mensagem de sucesso.
  
    // Exemplo de mensagem de sucesso
    alert("Mensagem enviada com sucesso!");
  
    // Limpa os campos do formulário após o envio
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("message").value = "";
  }
  
  // Adicione um ouvinte de evento para o formulário
  const contactForm = document.getElementById("contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", processForm);
  }
  