// Make sure we wait to attach our handlers until the DOM is fully loaded.
//columns in db are: id, burger_name, devoured
$(function () {
  $(".devour").on("click", function (event) {
    const id = $(this).data("id");
    let newDevouredState = {
      devoured: true,
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //jquery to create on click delete
  $(".create-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    const newBurger = {
      burger_name: $("#new-burger").val().trim(),
      devoured: false,
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger,
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });

  //jquery to create on click delete
  $(".delete-burger").on("click", function (event) {
    const id = $(this).data("id");
    // Send the DELETE request.
    $.ajax("/api/burgers/" + id, {
      type: "DELETE",
    }).then(function () {
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
