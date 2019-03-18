"use strict";
$(() => {

    $('#table01, #table02, #table03, #table04, #table05, #table06, #table07, #table08, #table09').on('click', function(reserved) {
        let tableNum = (reserved.target.firstChild.data);

        $('#myform').show(500);

        //set the table in the form to selected number
        $('#table-number').text(tableNum);    
    });



  $('#table01, #table02, #table03, #table04, #table05, #table06, #table07, #table08, #table09').on('click', function() {
      $(this).addClass('reserved');
  });



  $('#table01, #table02, #table03, #table04, #table05, #table06, #table07, #table08, #table09').on('dblclick', function() {
    $(this).removeClass('reserved');
});


$('#saveButton').on('click',function() {
    alert("Success - Table Reserved!");
        $('#myform').hide(400);

});



    $('#cancel').on('click', (reserved) => {
        $('#myform').hide(400),
        $(this).removeClass('reserved');


});




});







