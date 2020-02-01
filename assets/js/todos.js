// check off the li when clicked
// $("li").click(function() {
//     $(this).css("color", "gray"); // this refers to the specific li clicked  // its basically key value pair
//     $(this).css("text-decoration", "line-through"); // to strike off the clicked element
// });

//the above function can be merged by key-value pair as below
$("ul").on("click", "li", function() {   // we add the listener to the entire ul

    // //if li is gray 
    // if($(this).css("color") === "rgb(128, 128, 128)"){
    //     //turn black
    //     $(this).css({
    //         color: "black",
    //         textDecoration: "none"  //here the text-decoration is replaced by its camelCased version
    //     });
    // }
    // else {
    //     // this is to check off the list element
    //     $(this).css({
    //         color: "gray",
    //         textDecoration: "line-through"  //here the text-decoration is replaced by its camelCased version
    //     });
    // }
   $(this).toggleClass("completed");  // this is one liner for the above     
    
});

//click on X to delete the todo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){       //500 ms is the time for fadeOut
        $(this).remove();                           // this will remove the parent() li
    });                                             // this will remove only not show but it is there
    event.stopPropagation();
});

//this is to add the new todo list
$("input[type='text']").on("keypress", function(event){
    if(event.which === 13) {
        //grabbing the new todo text
        var newTodo = $(this).val();
        $(this).val("");
        //create the new to do list by using the append()
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> "+ newTodo +"</li>");
    }
});

//this is to toggle the input button
$(".fa-plus").click(function() {
    $("input[type='text']").fadeToggle();
})