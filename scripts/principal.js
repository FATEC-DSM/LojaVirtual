let parser = new DOMParser();

function loadTemplate(caminhoDeArquivo) {
  const main = document.querySelector("#main");
  fetch(caminhoDeArquivo)
    .then(resp => resp.text())
    .then(data => {
      // let doc = parser.parseFromString(data, "text/html");
      // console.log(doc.childNodes[0].lastChild);

      main.innerHTML = data;

      const nomeArquivo = caminhoDeArquivo.split(
        "/",
        caminhoDeArquivo.length - 1
      )[1];

      definirTituloPagina(nomeArquivo);

    });
}
