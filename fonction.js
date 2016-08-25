$(document).ready(function() {
  $('input#input_text, textarea#textarea1').characterCounter();

  $('.datepicker').pickadate({
     selectMonths: true, // Creates a dropdown to control month
     selectYears: 15, // Creates a dropdown of 15 years to control year

   });

});
