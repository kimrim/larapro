$(function() { 
  $("table[id*='example'] tbody, table[id*='tab'] tbody").on( 'click', 'tr', function () {
            if ( $(this).hasClass('selected') ) {
              $(this).removeClass('selected');
            }
            else {
              $('tr.selected').removeClass('selected');
              $(this).addClass('selected');
            }
   } ); 

   
})();
