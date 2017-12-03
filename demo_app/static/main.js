
//Menu

$(function() {
  $(".submenu-title").click(function() {
    $(".menu__submenu").toggleClass("active");
  });
  $(".submenu-title--sub").click(function() {
    $(".menu__submenu--sub").toggleClass("active");
  });
  $(document).on("click", function(e) {
    if ($(e.target).is(".submenu-title") === false && $(e.target).is(".submenu-title--sub") === false) {
      $(".menu__submenu").removeClass("active");
      $(".menu__submenu--sub").removeClass("active");
    }
  });
});



// Slider

$(function() {
    $('.jcarousel').jcarousel({
        // Core configuration goes here
        wrap: 'circular'
    });

    $('.jcarousel-prev').jcarouselControl({
        target: '-=1'
    });

    $('.jcarousel-next').jcarouselControl({
        target: '+=1'
    });

    $('.jcarousel-pagination').jcarouselPagination({
        item: function(page) {
            return '<a href="#' + page + '">' + '•' + '</a>';
        }
    });


});

$('.jcarousel-pagination')
    .on('jcarouselpagination:active', 'a', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'a', function() {
        $(this).removeClass('active');
    });

    $('.jcarousel').on('jcarousel:visiblein', 'li', function(event, carousel) {
      var caption = $(this).find("img").prop("alt");
      $('.jcarousel-caption').text(caption);
    });

// $.ajax({
//     url: '{% url 'test_submit' %}',
//     data: {
//       'username': username
//     },
//     dataType: 'json',
//     success: function (data) {
//       if (data.is_taken) {
//         alert("A user with this username already exists.");
//       }
//     }
//   });
