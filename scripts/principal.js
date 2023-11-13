function loadTemplate(caminhoDeArquivo) {
  const main = document.querySelector("#main");
  fetch(caminhoDeArquivo)
    .then(resp => resp.text())
    .then(data => {
      main.innerHTML = data;

      const nomeArquivo = caminhoDeArquivo.split(
        "/",
        caminhoDeArquivo.length - 1
      )[1];

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
