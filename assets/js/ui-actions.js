(function($){
  $(function(){

    var window_width = $(window).width();


    // Detect touch screen and enable scrollbar if necessary
    function is_touch_device() {
      try {
        document.createEvent("TouchEvent");
        return true;
      } catch (e) {
        return false;
      }
    }
    if (is_touch_device()) {
      $('#nav-mobile').css({ overflow: 'auto'});
    }

    // Floating-Fixed table of contents
    $('.post-container .table-of-contents').toc({
      title: '',
      listType: 'ul',
      headers: '.post-content h2'
    });


    // Plugin initialization

    // Initialize collapse button
    $(".button-collapse").sideNav({'edge': 'left'});

    // Enable Scroll-spy on h2 in post-content
    $('.post-content h2').scrollSpy();

    // Pin toc to top.
    $('.post-container .table-of-contents').pushpin({ top: $('.table-of-contents').offset().top });


  }); // end of document ready
})(jQuery); // end of jQuery name space
