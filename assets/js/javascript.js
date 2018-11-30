$(function(){
  alert("antes de la carga");


$(".featured").attr("src", "assets/img/4.jpg")

$(".thumb").on("click", function(){
  source = $(this).attr("src");
  $(".featured").attr("src", source);
})
});
