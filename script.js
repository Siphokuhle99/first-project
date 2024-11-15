$(document).ready(function(){
  $('#icon').click(function(){
      $('ul').toggleClass('show');
  });

  // Hide the menu when a link is clicked
  $('.nav-links a').click(function(){
      $('ul').removeClass('show');
  });
});
