$(".colour-value span").click(function () {
    var productCard = $(this).closest(".container-card");
    $(".colour-value span", productCard).removeClass("active");
    $(this).addClass("active");
    $(".image img", productCard).attr("src", $(this).attr("data-img"));
  });

  $(".size-value span").click(function () {
    var productCard = $(this).closest(".container-card");
    $(".size-value span", productCard).removeClass("active");
    $(this).addClass("active");
  });