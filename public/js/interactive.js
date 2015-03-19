alert("hello");

// button functionality for hotels
$(".btn-primary").click(function(){
   alert("button clicked");
   // print selection
   var selection = $(this).parent().find('select').val();
   console.log(selection);

//   var parent = $(this).parent();
//   console.log(parent);
   
//   var h4 = $(this).prev().prev();
//   console.log(h4);
  
//   var h4val = $(this).prev().prev().val();
//   console.log(h4val); 

});

// button functionality for hotels
$(".btn-danger").click(function(){
   alert("button clicked, remove element");
   // print selection
   var selection = $("select").val();
   console.log(selection);
});


