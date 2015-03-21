alert("hello");


var totaldays = $(".day-buttons > .day-btn").length;
//alert("total buttons " + totaldays);

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
// delegate on parent element for existing and future events
$(".panel-default").delegate(".btn-danger","click", function(){
   alert("button clicked, remove element");
   // print selection
   var selection = $("select").val();
   console.log(selection);
   $(this).parent().remove();
});

// delegate on parent element for existing and future events
$(".panel-heading").delegate(".day-btn","click", function(){

// set all buttons to "not selected" color
$(".day-btn").removeClass("current-day");

//    $(this).attr('data-type');

// add button when plus button is clicked
// need to select the current day only

// set selected button to selected colors
$(this).addClass("current-day");


});

// plus button to add day

$(".day-btn-add").click(function(){

    totaldays = ($(".day-buttons > .day-btn").length);
    alert("total buttons " + totaldays);

    $(".day-buttons :last-child").before("<button class=\"btn btn-circle day-btn\">"+totaldays+"</button>");
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



