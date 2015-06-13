(function() {
  $(document).foundation();
  $(document).on('ready', function() {
    $('.parallax-hero').each(function(){
      var $bgobj = $(this); // assigning the object
  
      $(window).scroll(function() {
        // divide by how fast you want parallax effect
        // smaller number is more parallax-y
          var yPos = ($(window).scrollTop() / 15); 
          
          // Put together our final background position
          var coords = '50%' + yPos + 'px';
          // Move the background
          $bgobj.css({ backgroundPosition: coords });
      }); 
    });
  })

}());