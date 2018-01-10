

$('.butt').on('click', function () {

    $.ajax({
        method: "GET",
        url: 'file',
        dataType: "json",
        success: function (data) {

            console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);

        }
    });
});

// var info = {"input": $('.input').val()}

$('.post-button').on('click', function () {

    var data = $('.input').val();
    $.ajax({
        method: "POST",
        url: 'file',
        data: { "input": $('.input').val() },
        dataType: "json",
        success: function (data) {
            console.log(data);
        },
        error: function (jqXHR, textStatus, errorThrown) {
            console.log(textStatus);
        }
    });
});

//or $.post( "test", { name: "Hadas", task: "queen" } );

