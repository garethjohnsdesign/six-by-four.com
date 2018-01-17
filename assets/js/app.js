$(document).foundation();

// 1. Loading
// --------------------

$(function() {
if (sessionStorage.getItem('set') === 'set') {
  $('.loader').hide();
} else {
  $('.loader').show();
  setTimeout(function(){
        $('.loader').addClass('loaded');
    }, 1500);  
  sessionStorage.setItem('set', 'set');
}
});

// 2. Animate on Scroll
// --------------------

$(function() {
  AOS.init({ 
   offset: 64,
   easing: 'ease-in-out-quart', 
   duration: 600
   });   
});

$(function() {
window.addEventListener('load', AOS.refresh);
});

// 3. Light Gallery
// --------------------

$('.lightgallery').lightGallery({
  selector: ".grid-item",
  download: false,
  mode: 'lg-fade'
}); 

// 3. Mailing List
// --------------------

$('#myForm').submit(function(e){
    e.preventDefault();
    $.ajax({
        url:'https://hooks.zapier.com/hooks/catch/2879607/8lume3/',
        type:'post',
        data:$('#myForm').serialize(),
        success:function(){
          // Redirect to another success page
          window.location = "http://google.com";
        }
    });
});