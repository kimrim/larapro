$(window).load(function(){
// Add a clear div to allow adding background color to main-menu
$(".main-menu").append("<div class='clear'></div>");

// Make the first class selected
$(".main-menu > li:first").addClass("selected");

// Switch the selected class
$(".main-menu > li").click(function() {
    $(".selected").removeClass("selected");
    $(this).addClass("selected");
});

// Disable menu links
$(".main-menu > li > a").click(function(e) {
    e.preventDefault();
});
});