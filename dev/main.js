(function() {
  $(window).on('scroll', function() {
    var windowPosition = $(window)[0].pageYOffset;
    if (windowPosition >= 50) {
        $("nav.top-bar").addClass("shrink-topbar");
    }
    if (windowPosition < 50) {
        $("nav.top-bar").removeClass("shrink-topbar");
    }
  });
  $(document).on('ready', function() {
    $(document).foundation();
    $(".top-bar-section ul li a").click(function(e) {
      var target = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(target).offset().top - $('.header-section').height()
      }, 1000);
    });
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