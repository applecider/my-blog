$('.carousel.go-on-hover')
  .carousel({ interval: 3000 })
  .carousel('pause')
  .hover(function() {
    $(this).carousel('next').carousel('cycle');
  }, function() {
    $(this).carousel('pause');
  })
