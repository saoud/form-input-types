$(document).ready(function(event) {
  $("#formOne").submit(function() {
    const food = $("input:radio[name=food]:checked").val();

    event.preventDefault();
  });
});
