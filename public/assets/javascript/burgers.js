$(function() {
        $(".devour-button").on("click", function(event) {
          var id = $(this).data("id");
          var newDevour = $(this).data("newdevour");
          console.log("newDevour is: " + newDevour);
          var newDevourState = {
            devoured: newDevour
          };

      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devoured to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    
  
    $(".btn-primary").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      let newBurger = {
        burger_name: $("#newB").val().trim(),
      
      };
      console.log(newBurger);
      // Send the POST request.
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
});
});
