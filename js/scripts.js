$(document).ready(function() {
  $("#formOne").submit(function(event) {
    const food = $("input:radio[name=food]:checked").val();
    event.preventDefault();
  });
});
