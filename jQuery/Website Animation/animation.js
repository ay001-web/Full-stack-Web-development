
/* For Fade In
$("button").on("click",function() {
    $("h1").fadeOut();
});
*/

/* Fade Toggle
$("button").on("click",function() {
    $("h1").fadeToggle();
})
    */

/*  Slide up
$("button").on("click",function() {
    $("h1").slideUp();
});
*/


$("button").on("click",function() {
    $("h1").slideUp().slideDown().animate({opacity:0.5});
});

