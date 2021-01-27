$(document).ready(function() {
  console.log("this is running!")
  $("#formOne").submit(function(event) {
    console.log("this is still running!")
    const favoriteFood = $("input:radio[name=food]:checked").val();
    $(".food").append("i like pizza");

    $("#output").show();

    event.preventDefault();
  });
});
