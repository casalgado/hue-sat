
var ready = function() {


  $('#fade-08').hide()

    
        $('#fade-07').delay(1000).fadeOut(1500);
        $('#fade-06').delay(2000).fadeOut(1500);
        $('#fade-05').delay(3000).fadeOut(1500);
        $('#fade-04').delay(4000).fadeOut(1500);
        $('#fade-03').delay(5000).fadeOut(1500);
        $('#fade-02').delay(6000).fadeOut(1500);
        $('#fade-08').delay(7000).fadeIn(1000);


};







$(document).ready(ready);
$(document).on('page:load', ready);