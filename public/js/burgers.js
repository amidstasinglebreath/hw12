// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  $(".change-state").on("click", function(event) {
    var id = $(this).data("id");
    var newFood = $(this).data("newfood");

    var newFoodState = {
      consumed: newFood
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newFoodState
    }).then(
      function() {
        console.log("changed burger type to", newFood);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newBurger = {
      name: $("#ca").val().trim(),
      vegan: $("[name=sleepy]:checked").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new Burger");
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

  $(".delete-burger").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE"
    }).then(
      function() {
        console.log("Burger Deleted", id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });
});
