$(document).ready(function () {

    $("#submit-btn").click(function (event) {
        console.log("start");
        //stop submit the form, we will post it manually.
        event.preventDefault();
        fire_ajax_submit();
    });

});

function fire_ajax_submit() {

    var search = {}
    search["username"] = $("#username").val();
    $('#getResultDiv .list-group').append("Name: Sharmania <br>");
    $('#getResultDiv .list-group').append("Subscription: 3-month <br>");
    $('#getResultDiv .list-group').append("Other Info: Dance class <br>");

//    $("#submit-btn").prop("disabled", true);

    $.ajax({
        type: "GET",
        contentType: "application/json",
        url: "user/1",
//        data: JSON.parse(search),
        dataType: 'json',
        cache: false,
        timeout: 600000,
        success: function (data) {

//            var stu = "Name: " + data.username + "account: " + data.accountNonExpired + "<br>"
            $('#getResultDiv .list-group').append(data);

            console.log("SUCCESS : ", data);
        },
        error: function (e) {
            var json = "<h4>Ajax Response</h4>&lt;pre&gt;"
                + e.responseText + "&lt;/pre&gt;";
            $('#feedback').html(json);
            console.log("ERROR : ", e);
        }
    });

}

