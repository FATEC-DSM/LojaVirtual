// Seleciona todos os botões de filtro e cartões filtráveis
var filterButtons = $(".filter-buttons button");
var filterableCards = $(".filterable-cards .card");

// Define a função filterCards
function filterCards() {
  $(".active").removeClass("active");
  $(this).addClass("active");

  // Itera sobre cada cartão filtrável
  filterableCards.each(function() {
    // Adiciona a classe "hide" para esconder o cartão inicialmente
    $(this).addClass("hide");
    // Verifica se o cartão corresponde ao filtro selecionado ou se "all" está selecionado
    if (
      $(this).data("name") === $(event.target).data("name") ||
      $(event.target).data("name") === "all"
    ) {
      $(this).removeClass("hide");
    }
  });
}

// Adiciona um ouvinte de evento de clique a cada botão de filtro
filterButtons.click(filterCards);