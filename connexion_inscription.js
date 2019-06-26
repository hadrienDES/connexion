function connexion(){
    var body = {};
    
    body.user = $(".user").val();
    body.password = $(".password").val();


    $.ajax({
        url: "",
        data: JSON.stringify(body),
        headers: {"Content-Type":"application/json"},
        type: "POST",

    }).done(function(data) {
        console.log(data);
    })
}

$(document).ready(function(){
    
});