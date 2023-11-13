function changeImg(this) {
  console.log(this)
  let productCard = $(this).closest(".container-card");

  $(".colour-value span", productCard).removeClass("active");
  $(this).addClass("active");
  $(".image img", productCard).attr("src", $(this).attr("data-img"));
}
