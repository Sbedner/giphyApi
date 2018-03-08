

var candy = ["chocolate", "lollipop", "candy cane", "taffy", "mint", "pez", "jelly bean", "cookie", "jello", "rock candy"];


function pageLoad() {
    for (i = 0; i < candy.length; i++) {
        $(".panel-title").append("<button class='candybtn' id='" + candy[i] + "'>" + candy[i] + "</button>");
    }
};

function clearAll() {
    $(".col-sm-12").html("");
}

function outputname() {
    clearAll();
    var x;
    var giff;
    x = document.getElementById("form1");
    console.log($('#form1').val());
    giff = x.elements["name"].value;
    var queryURLgiff = "http://api.giphy.com/v1/gifs/search?q=" + giff + "&api_key=wFeg5vGJBJjif6Ghu6dMkmPwlzcC1rKL&limit=5&rating=g";
    console.log(giff);
    $('.panel-title').append("<button class='candybtn' id='" + giff + "'>" + giff + "</button>");
    $.ajax({
        url: queryURLgiff,
        method: "GET"
    }).then(function (response) {
        var data = response.data;
        for (var i = 0; i < data.length; i++) {

            console.log(data[i].images.downsized.url);         
            $('#images').append("<div>rating :" + data[i].rating + "<img src=" + data[i].images.downsized_still.url + "></div><br/>");


        }

    })

}



$(document).on('click', "button.candybtn", function () {


    clearAll();
    var id = $(this).attr("id");
    var giff = id
    var queryURLgiff = "http://api.giphy.com/v1/gifs/search?q=" + giff + "&api_key=wFeg5vGJBJjif6Ghu6dMkmPwlzcC1rKL&limit=10&rating=g";
    console.log(giff);

    $.ajax({
        url: queryURLgiff,
        method: "GET"
    }).then(function (response) {
        var data = response.data;
        var giffArray = "";
        for (var i = 0; i < data.length; i++) {

            console.log(data[i].images.downsized_still.url);
        
            
            
            
            
            // document.write(data[i].images.downsized.url);
            // $('#motionGiff').hide();
            $('.col-sm-12').append("<div id=" + giff + ">rating :" + data[i].rating + "<div><img src=" + data[i].images.downsized_still.url + "></div></div>");
            // 'data-still=' + data[i].images.downsized_still.url+'data-animate=' +data[i].images.downsized.url+'></div>');
            // $('#giphtest').hide();
            // $('#giphtest').append('<div>rating :' + data[i].rating + '<img src=' + data[i].images.downsized_still.url + '></div>');
            // console.log(data[i].images.downsized_still.url);
            // $('#giphtest').fadeIn(200);
            // <img src="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-still="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200_s.gif" data-animate="https://media1.giphy.com/media/3o85xkQpyMlnBkpB9C/200.gif" data-state="still" class="gif">



        }
    })


});

$("#submit").on("click", function (event) {
    console.log($('#form1').val())
    clearAll();
    var x;
    var giff;
    x = document.getElementById("form1");
    giff = x.elements["name"].value;
    var queryURLgiff = "http://api.giphy.com/v1/gifs/search?q=" + giff + "&api_key=wFeg5vGJBJjif6Ghu6dMkmPwlzcC1rKL&limit=5&rating=g";
    console.log(giff);
    candy.push(giff);
    outputname();
   
});


$('form').submit(function (e) {
    e.preventDefault();
});

pageLoad();