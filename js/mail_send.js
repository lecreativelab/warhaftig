/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */
// A $( document ).ready() block.
$(document).ready(function() {
  $('#contact-form').submit(function(e){
    var l = $( '#ladda-mea' ).ladda();
     e.preventDefault();

       // Start loading
        $('#ladda-mea').css('padding-right', '56px');
        $('.ladda-label').text('Sending...');
        l.ladda( 'start' );
        
        $.ajax({
        url: 'send_form_email.php',
        type: 'post',
        data: $('#contact-form').serialize(),
        success: function(data) {
            setTimeout(function (){

             console.log(data);
             //alert('Thank you for contacting us. We will be in touch with you very soon.');
             
             window.location = "thank-you.html?sent=true";
         }, 5000); 
            
//            
                 }
        });
//        $('#ladda-mea').css('padding-right', '20px');
//        l.ladda( 'stop' );
        
 });
 
 $("input,select,textarea").not("[type=submit]").jqBootstrapValidation({
     
//     submitSuccess: function ($form, event) {
//         event.preventDefault();
//     }
 });

});

