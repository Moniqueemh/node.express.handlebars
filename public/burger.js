// From add a burger to 'devour' side
$(".create-form").on("submit", function (event) {
    event.preventDefault();
    const newBurger = {
        name: $("#burgerName").val().trim()
    };
    console.log(newBurger);

    $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
    }).then(function () {
        console.log("Burger successfully created!");
        location.reload();
    }
    );
});

// 'devour' to already eaten side