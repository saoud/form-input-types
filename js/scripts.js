$(document).ready(function() {
  console.log("this is running!")
  $("#formOne").click(function(event) {
    event.preventDefault();
    console.log("this is still running!")
    // const favoriteFood = $("input:radio[name=food]:checked").val();
    // $(".food").append("i like pizza");

    $("#output").text("hey is this working?");

  });
});
