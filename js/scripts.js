$(document).ready(function(){
  var cat_changed = 0;

  $(".cat_filter").click(function(){
    var id= $(this).attr('class').split('category-filter-').pop().split(' ').shift();
    var c = '.subcategory-' + id;

    if ( !cat_changed ) { //if user has already clicked on a category
      $(".cat_filter").removeClass("active");
      $(".card").fadeOut();
      cat_changed = 1;

    }
    if ( $(this).hasClass("active") ){
      $(this).removeClass("active");
      $(c).fadeOut();

    } else {
      $(this).addClass("active");
      $(c).fadeIn();
    }
    bricklayer.redraw()
  });

  window.onscroll = function(ev) {
    var floating = $("#floating-button");
    if ((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight) {
        floating.fadeOut();
    } else {
      floating.fadeIn();
    }
  };

});
