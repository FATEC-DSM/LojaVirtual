function loadTemplate(caminhoDeArquivo) {
  const main = document.querySelector("#main");

  fetch(caminhoDeArquivo)
    .then(resp => resp.text())
    .then(data => {
      // Use DOMParser para criar um novo documento HTML a partir do texto recebido
      const parser = new DOMParser();
      const novoDocumento = parser.parseFromString(data, "text/html");

      // Substitua o conteúdo da #main pelo novo conteúdo
      main.innerHTML = novoDocumento.body.innerHTML;

      // Execute scripts no novo conteúdo
      const scripts = main.querySelectorAll("script");
      scripts.forEach(script => {
        const novoScript = document.createElement("script");
        novoScript.textContent = script.textContent;
        document.head.appendChild(novoScript).parentNode.removeChild(novoScript);
      });

      const nomeArquivo = caminhoDeArquivo.split("/", caminhoDeArquivo.length - 1)[1];
      definirTituloPagina(nomeArquivo);
    });
}


function definirTituloPagina(nomeArquivo) {
  switch (nomeArquivo) {
    case "camisas.html":
      document.title = "Loja de roupas - Camisas";
      break;

    case "form.html":
      document.title = "Loja de roupas - Cadastro de usuário";
      break;

    case "estoque.html":
      document.title = "Loja de Roupas - Estoque";
      break;

    case "acessorios.html":
      document.title = "Loja de Roupas - Acessórios";
      break;

    default:
      break;
  }
}
