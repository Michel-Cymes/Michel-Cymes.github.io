$(document).ready(function() {

  // Show-hide block's
  /*$('.showhide-form').click(function(event) {
    $(this).fadeToggle('fast', function() {
      $('.leave-review form').fadeIn();
    });
  });*/

  /*$('.faq-container').click(function(event) {
    if (!$(this).hasClass('active')) {
      $('.faq-container').removeClass('active');
      $('.faq-answer').slideUp(100);
    }
    $(this).toggleClass('active');
    $(this).find('.faq-answer').slideToggle(100);
  });*/

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  // Notice

  $(".notice .close").on('click', function(event) {
    $(this).parent().fadeOut();
  });

  // Sorting rate
  /*$('.thumbs-down').click(function(event) {
    $('.reviews-containers').html($('.review-container').sort(function (a, b) {
      return $(a).attr('data-sort') - $(b).attr('data-sort');
    }));
  });

  $('.thumbs-up').click(function(event) {
    $('.reviews-containers').html($('.review-container').sort(function (a, b) {
      return $(b).attr('data-sort') - $(a).attr('data-sort');
    }));
  });*/

  // Slice stars
  /*$('.stars').each(function(index, el) {
    var data = $(this).data("stars")
    $(this).find('span').slice(0, data).addClass('selected');
  });*/

  // Rate
  window.randomize = function() {
    $('.radial-progress').each(function() {
      var transform_styles = ['-webkit-transform', '-ms-transform', 'transform'];
      $(this).find('span').fadeTo('slow', 1);
      var score = $(this).data('score');
      $(this).find('.score').append(score);
      var deg = (((100 / 10) * score) / 100) * 180;
      var rotation = deg;
      var fill_rotation = rotation;
      var fix_rotation = rotation * 2;
      $
      for(i in transform_styles) {
        $(this).find('.circle .fill, .circle .mask.full').css(transform_styles[i], 'rotate(' + fill_rotation + 'deg)');
        $(this).find('.circle .fill.fix').css(transform_styles[i], 'rotate(' + fix_rotation + 'deg)');
      }
    });
  }
  setTimeout(window.randomize, 200);

  //Like

  $('.like').click(function(event) {

    var counter = $(this).next().text();
    var minus = '';

    $(this).parent().addClass('counted');

    if (!$(this).hasClass('clicked')) {
      counter++;
      $(this).addClass('clicked');
      $(this).next().text(counter);
    } else if ($(this).hasClass('clicked')) {
      counter--;
      $(this).removeClass('clicked');
      $(this).next().text(counter);
    } else {
      event.preventDefault();
    }
  });

  // Form ajax
  /*$("#sendform").submit(function(e) {
      e.preventDefault();
      var form_data = $(this).serialize() + location.search.replace("?","&");
      $.ajax({
      type: "POST",
      url: "sendform.php",
      data: form_data,
      success: function() {
        console.log('success');
        $('#sendform').addClass('disabled').slideToggle();
        $('#sendform button[type=submit]').attr('disabled', 'disabled').addClass('disabled');
        $('.thanks').fadeIn();
        setTimeout(function(){
            $('.thanks').fadeOut();
            location.reload();
          },5000);
        },
      error: function(){
        console.log('error');
      }
    });
  });*/
  
});