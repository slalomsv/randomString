$(document).ready(function(){
    $("#button").click(function(e){
        $.ajax({
            url: "https://o531b8j1l6.execute-api.us-west-2.amazonaws.com/prod/randomstring",
            type: "GET",
            data: {
                "length": $("#length").val()
            },
            dataType: "text",
            success: function(res) {
                $("#response").html(res);
            }
        });
    });
});