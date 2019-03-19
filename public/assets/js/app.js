$(function(){
$(".change-devour").on("click", function (event) {
    var id = $(this).data("id");
    var newdevoured = 1;

    var newDevouredState = {
      devoured: newdevoured
    };

    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed devoured to", newdevoured);
        location.reload();
      }
    );
  });

    $(".add-burger").on("submit", function(event) {
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#burger").val().trim(),
        devoured: 0
      };
  
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          location.reload();
        });
    
    });
});