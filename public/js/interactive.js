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

/*
$(".panel-heading").click(".day-btn", function(){

//    $(this).attr('data-type');

    $(this).append("<button class=\"btn btn-circle day-btn\"></button>);

});

*/

/*
// button functionality for current days
$(".current-day").delegate(".day-btn","click", function(){
   alert("button clicked, remove element");
   // print selection
   $(this).parent().remove();
});
*/

