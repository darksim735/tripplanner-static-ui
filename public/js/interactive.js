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
   $('.current-day').find("." + type + "-container");

//   var insert = $("span").text();
//   console.log(insert);

//var string = "'" + parent + "'";
   
//   var insert = $("span").find(string);
//   console.log(insert);
//   insert.append("<p>HELLO</p>");

//   console.log(string);
//   var search = $(parent);
//   console.log(search);
//   search.append("<p>HELLO</p>");

//   $(".panel-body").find(".itinerary-item").append("<p>Hello</p>");

//   $(string).append("<p>Hello this added to the div</p>");

});

// button functionality for hotels
$(".btn-danger").click(function(){
   alert("button clicked, remove element");
   // print selection
   var selection = $("select").val();
   console.log(selection);

});


