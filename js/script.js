// https://jsfiddle.net/xcEa9/74/
// $(document).ready(function($){
//
//     $("backgroundselect").change(function(){
//        var s = $(this);
//        var name = s.attr('name');
//         $('.'+name).removeClass().addClass(name+' '+s.find(':selected').text().toLowerCase());
//         console.log(s.find(':selected').text());
//     });
// });

//  http://jsfiddle.net/9PeAc/1/

$(document).ready(function() {

var selectedScheme = 'blueHour';

$('#color_scheme').change(function(){
    $('body').removeClass(selectedScheme).addClass($(this).val());
    selectedScheme = $(this).val();
});
});



// Testing

// $(document).ready(function() {
//     $("#co").click(function() {
//         $("body").css("background-color","blue"); //edit, body must be in quotes!
//     });
// });
