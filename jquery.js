$("#the-button").click(function(e) {
  $(this).text("You clicked me");
});
$("textarea").keydown(function(event) {
  console.log("Key Down:", event.keyCode);
});
$("#search").val();
$("#search").val("CatDog");
