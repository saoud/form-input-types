$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const favoriteFood = $("input:radio[name=food]:checked").val();
    console.log("Script Running!")
    $(".food").append(favoriteFood);

    $("#output").show();

    event.preventDefault();
  });
});
