alert("hello");

// button functionality for hotels
$(".btn-primary").click(function(){
   alert("button clicked");
   // print selection
   var selection = $(this).parent().find('select').val();
   console.log(selection);
   //$('.current-day').find('.restaurant-list').append('<div></div>')
   // add content to lower section of itinerary
   var parent = $(this).parent().find('h4').text();
   console.log(parent);

   var type = $(this).attr('data-type');
   // search entire page for current-day and look inside for the type
   // info from the button select clicked
   console.log(type);
   var panel = $('.current-day').find("." + type + "-container");
   console.log(panel);
   panel.append("<ul><p>"+ selection +"</p>" + "<button class=\"btn btn-danger btn-xs btn-circle pull-right\">x</button></ul>");
});

// button functionality for schedule
$(".panel-default").delegate(".btn-danger","click", function(){
   alert("button clicked, remove element");
   // print selection
   var selection = $("select").val();
   console.log(selection);
   $(this).parent().remove();
});


$(".day-btn").click(function(){


// set all buttons to "not selected" color
$(".day-btn").removeClass("current-day");
//$(".day-btn").css("background", "#736357").css("color", "#a8c9dd");
// set selected button to selected colors


//    $(this).attr('data-type');

// add button when plus button is clicked
// need to select the current day only

$(this).addClass("current-day");

// old way, not ideal, change class instead
//$(this).css("background", "#a8c9dd").css("color", "#736357");

$(".panel-heading").append("<button class=\"btn btn-circle day-btn\">NUMBER</button>");

});



/*
// button functionality for current days
$(".current-day").delegate(".day-btn","click", function(){
   alert("button clicked, remove element");
   // print selection
   $(this).parent().remove();
});
*/


// delete selected day
$("#day-title").click(function(){
    alert("this will delete something eventually");
// store value of first child in global variable
    $(this).first().val();
// delete appropriate day and schedule
});



