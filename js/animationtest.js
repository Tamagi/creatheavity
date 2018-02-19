$(window).scroll(function() {
  var scrollTop = $(window).scrollTop();
  var section1 = $('#section-1').offset().top;
  var wrapper1 = $('#first-wrapper').offset().top;
  var section2 = $('#section-2').offset().top;
  var section3 = $('#section-3').offset().top;
  var section4 = $('#section-4').offset().top;
  var section5 = $('#section-5').offset().top;
  var section6 = $('#section-6').offset().top;
  var section7 = $('#section-7').offset().top;
  var section8 = $('#section-8').offset().top;
  var section9 = $('#section-9').offset().top;
  var bottom = $('#section-1').height();
  console.log(scrollTop);
  console.log(bottom);
  console.log(section1);
  console.log(section2);
  if (scrollTop <= section2-200) {
    $('.side-wrapper-text p num').text('0');
  }
  // wrapper 1 animation
  if (scrollTop >= wrapper1*0.5) {
    setTimeout(function() {
      $('.first-wrapper .text').css("opacity","1");
      $('.first-wrapper .text').addClass('animated 	fadeInDown');
      $('.first-wrapper .title').css("opacity","1");
      $('.first-wrapper .title').addClass('animated 	fadeInDown');
      $('.first-wrapper .book-container').css("left", "0");
      $('.first-wrapper .book-container').delay(2000).css("opacity", "1");
    }, 100);
  }
  // section 2 animation
  if (scrollTop >= section2-200) {
    
      $('.side-wrapper-text p num').text('1');
    }
  if (scrollTop <= section2-200 && scrollTop >= section2 - 250) {
    // $('.side-wrapper-text p num').removeClass('animated 	fadeInDown');
    // setTimeout(function() {
    //   $('.side-wrapper-text p num').addClass('animated 	fadeInDown')
    // }, 100);
    $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
    $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "100% 50% 0px");
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(100%,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "0");
    }, 100);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    }, 600);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "matrix(1,0,0,1,0,0)");
      $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "0% 50% 0px");
    }, 1000);
  }
  if (scrollTop >= section2 * 0.5) {
    setTimeout(function() {
      $('.section-2-wrapper').css("margin-left", "100%");
      $('.section-2-wrapper').delay(5000).fadeOut();
    }, 500);
    setTimeout(function() {
      $('.section-2 .col-sm-12:nth-child(2)').css("opacity", "1");
    }, 400);
  }
  // section 3 animation
  if (scrollTop <= section3 && scrollTop >= section3 - 50) {
    // $('.side-wrapper-text p num').removeClass('animated 	fadeInDown');
    // setTimeout(function() {
    //   $('.side-wrapper-text p num').addClass('animated 	fadeInDown')
    // }, 100);
    
    $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
    $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "100% 50% 0px");
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(100%,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "0");
    }, 100);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    }, 600);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "matrix(1,0,0,1,0,0)");
      $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "0% 50% 0px");
    }, 1000);
  }
  if (scrollTop >= section3) {
    $('.side-wrapper-text p num').text('2');
    
  }
  if ($('body, html').width() <= 992) {
    if (scrollTop >= section3 *0.7) {
      setTimeout(function() {
        $('.section-3 .icon:nth-child(1)').css("height", "50px");
      }, 300);
      setTimeout(function() {
        $('.section-3 .icon:nth-child(2)').css("height", "50px");
      }, 500);
      setTimeout(function() {
        $('.section-3 .icon:nth-child(3)').css("height", "50px");
      }, 700);
      setTimeout(function() {
        $('.section-3 .icon:nth-child(4)').css("height", "50px");
      }, 900);
      $('.section-3 .text').css("opacity","1");
      $('.section-3 .text').addClass('animated fadeInLeft');
      $('.section-3 .title').css("opacity","1");
      $('.section-3 .title').addClass('animated fadeInLeft');
      $('.section-3 .book-container').css("left", "0");
      $('.section-3 .book-container').delay(2000).css("opacity", "1");
    }
  }
  if ($('body, html').width() <= 576) {
    if (scrollTop >= section3 *0.7) {
    setTimeout(function() {
      $('.section-3 .icon:nth-child(1)').css("height", "40px");
    }, 300);
    setTimeout(function() {
      $('.section-3 .icon:nth-child(2)').css("height", "40px");
    }, 500);
    setTimeout(function() {
      $('.section-3 .icon:nth-child(3)').css("height", "40px");
    }, 700);
    setTimeout(function() {
      $('.section-3 .icon:nth-child(4)').css("height", "40px");
    }, 900);
    $('.section-3 .text').css("opacity","1");
    $('.section-3 .text').addClass('animated fadeInLeft');
    $('.section-3 .title').css("opacity","1");
    $('.section-3 .title').addClass('animated fadeInLeft');
    $('.section-3 .book-container').css("left", "0");
    $('.section-3 .book-container').delay(2000).css("opacity", "1");
  }
  }
  if (scrollTop >= section3 - 80) {
setTimeout(function() {
  $('.section-3 .icon:nth-child(1)').css("height", "50px");
}, 300);
setTimeout(function() {
  $('.section-3 .icon:nth-child(2)').css("height", "50px");
}, 500);
setTimeout(function() {
  $('.section-3 .icon:nth-child(3)').css("height", "50px");
}, 700);
setTimeout(function() {
  $('.section-3 .icon:nth-child(4)').css("height", "50px");
}, 900);
      $('.section-3 .text').css("opacity","1");
      $('.section-3 .text').addClass('animated 	fadeInLeft');
      $('.section-3 .title').css("opacity","1");
      $('.section-3 .title').addClass('animated 	fadeInLeft');
      $('.section-3 .book-container').css("left", "0");
      $('.section-3 .book-container').delay(2000).css("opacity", "1");
  }
  // section 4 animation
  if (scrollTop >= section4) {
    $('.side-wrapper-text p num').text('3');
    $('.section-4 .text').css("opacity","1");
    $('.section-4 .text').addClass('animated 	fadeInLeft');
    $('.section-4 .title').css("opacity","1");
    $('.section-4 .title').addClass('animated 	fadeInLeft');
      $('.section-4 .container-fluid .row-left div:nth-child(2)').css("opacity", "1");
      $('.section-4 .container-fluid .row-left div:nth-child(2)').css("transform", "translate3d(0,0,0)");
      $('.section-4 .book-container').css("left", "0");
      $('.section-4 .book-container').delay(2000).css("opacity", "1");
  }
  if (scrollTop <= section4 && scrollTop >= section4 - 50) {
    // $('.side-wrapper-text p num').removeClass('animated 	fadeInDown');
    // setTimeout(function() {
    //   $('.side-wrapper-text p num').addClass('animated 	fadeInDown')
    // }, 100);
    $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
    $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "100% 50% 0px");
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(100%,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "0");
    }, 100);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    }, 600);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "matrix(1,0,0,1,0,0)");
      $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "0% 50% 0px");
    }, 1000);
  }
  //section 5 animation
  if (scrollTop <= section5 && scrollTop >= section5 - 50) {
    // $('.side-wrapper-text p num').removeClass('animated 	fadeInDown');
    // setTimeout(function() {
    //   $('.side-wrapper-text p num').addClass('animated 	fadeInDown')
    // }, 100);
    $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
    $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "100% 50% 0px");
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(100%,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "0");
    }, 100);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    }, 600);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "matrix(1,0,0,1,0,0)");
      $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "0% 50% 0px");
    }, 1000);
  }
  if (scrollTop >= section5 - 80) {
    $('.side-wrapper-text p num').text('4');
    $('.section-5 .text').css("opacity","1");
    $('.section-5 .text').addClass('animated 	fadeInLeft');
    $('.section-5 .title').css("opacity","1");
    $('.section-5 .title').addClass('animated 	fadeInLeft');
    $('.section-5 .book-container').css("left", "0");
    $('.section-5 .book-container').delay(2000).css("opacity", "1");
    setTimeout(function() {
      $('.section-5 .icon:nth-child(1)').css("height", "50px");
    }, 300);
    setTimeout(function() {
      $('.section-5 .icon:nth-child(2)').css("height", "50px");
    }, 500);
    setTimeout(function() {
      $('.section-5 .icon:nth-child(3)').css("height", "50px");
    }, 700);
    setTimeout(function() {
      $('.section-5 .icon:nth-child(4)').css("height", "50px");
    }, 900);
  }
  //section 6 animation
  if (scrollTop >= section6) {
    $('.side-wrapper-text p num').text('5');
    $('.section-6 .text').css("opacity","1");
    $('.section-6 .text').addClass('animated 	fadeInLeft');
    $('.section-6 .title').css("opacity","1");
    $('.section-6 .title').addClass('animated 	fadeInLeft');
    $('.section-6 .book-container').css("left", "0");
    $('.section-6 .book-container').delay(2000).css("opacity", "1");
  }
  if (scrollTop <= section6 && scrollTop >= section6 - 50) {
    // $('.side-wrapper-text p num').removeClass('animated 	fadeInDown');
    // setTimeout(function() {
    //   $('.side-wrapper-text p num').addClass('animated 	fadeInDown')
    // }, 100);
    $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
    $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "100% 50% 0px");
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(100%,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "0");
    }, 100);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    }, 600);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "matrix(1,0,0,1,0,0)");
      $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "0% 50% 0px");
    }, 1000);
  }
  //section 7 animation
  if (scrollTop <= section7 && scrollTop >= section7 - 50) {
    // $('.side-wrapper-text p num').removeClass('animated 	fadeInDown');
    // setTimeout(function() {
    //   $('.side-wrapper-text p num').addClass('animated 	fadeInDown')
    // }, 100);
    $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
    $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "100% 50% 0px");
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(100%,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "0");
    }, 100);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    }, 600);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "matrix(1,0,0,1,0,0)");
      $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "0% 50% 0px");
    }, 1000);
  }
  if (scrollTop >= section7 - 80) {
    $('.side-wrapper-text p num').text('6');
    $('.section-7 .text').css("opacity","1");
    $('.section-7 .text').addClass('animated 	fadeInRight');
    $('.section-7 .title').css("opacity","1");
    $('.section-7 .title').addClass('animated 	fadeInRight');
    $('.section-7 .book-container').css("left", "0");
    $('.section-7 .book-container').delay(2000).css("opacity", "1");
    setTimeout(function() {
      $('.section-7 .icon:nth-child(1)').css("height", "50px");
    }, 300);
    setTimeout(function() {
      $('.section-7 .icon:nth-child(2)').css("height", "50px");
    }, 500);
    setTimeout(function() {
      $('.section-7 .icon:nth-child(3)').css("height", "50px");
    }, 700);
    setTimeout(function() {
      $('.section-7 .icon:nth-child(4)').css("height", "50px");
    }, 900);
  }
  //section 8 animation
  if (scrollTop <= section8 && scrollTop >= section8 - 50) {
    // $('.side-wrapper-text p num').removeClass('animated 	fadeInDown');
    // setTimeout(function() {
    //   $('.side-wrapper-text p num').addClass('animated 	fadeInDown')
    // }, 100);
    $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
    $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "100% 50% 0px");
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(100%,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "0");
    }, 100);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    }, 600);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "matrix(1,0,0,1,0,0)");
      $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "0% 50% 0px");
    }, 1000);
  }
  if (scrollTop >= section8) {
    $('.side-wrapper-text p num').text('7');
    
    $('.section-8 .text').css("opacity","1");
    $('.section-8 .text').addClass('animated 	fadeInLeft');
    $('.section-8 .title').css("opacity","1");
    $('.section-8 .title').addClass('animated 	fadeInLeft');
    $('.section-8 .book-container').css("left", "0");
    $('.section-8 .book-container').delay(2000).css("opacity", "1");
  }
  //section 9 animation
  if (scrollTop <= section9 && scrollTop >= section9 - 50) {
    // $('.side-wrapper-text p num').removeClass('animated 	fadeInDown');
    // setTimeout(function() {
    //   $('.side-wrapper-text p num').addClass('animated 	fadeInDown')
    // }, 100);
    $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
    $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "100% 50% 0px");
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(100%,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "0");
    }, 100);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "translate3d(0,0,0) scale(1,1)");
      $('.side-wrapper-text .side-wrapper-line-container').css("opacity", "1");
    }, 600);
    setTimeout(function() {
      $('.side-wrapper-text .side-wrapper-line-container').css("transform", "matrix(1,0,0,1,0,0)");
      $('.side-wrapper-text .side-wrapper-line-container').css("transform-origin", "0% 50% 0px");
    }, 1000);
  }
  console.log(section9);
  console.log(section9*0.95);
  if(scrollTop >= section9 *0.95){
    $('.section-9 .text').css("opacity","1");
    $('.section-9 .text').addClass('animated 	swing');
    $('.section-9 .title').css("opacity","1");
    $('.section-9 .title').addClass('animated 	swing');
    setTimeout(function(){
      $('.section-9-contact').css("opacity","1");
      $('.section-9-contact').addClass('animated zoomIn');
    },1000);
  }
  if (scrollTop >= section9) {
    $('.side-wrapper-text p num').text('8');
  }
});

// Code here
$(document).ready(function() {
  if ($('body, html').width() >= 992) {
  $('#closer').css("transform", "rotate(-25deg)");
  $('#bgbg').css("opacity", "1");
  $("#bgbg").bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function() {
    setTimeout(function() {
      $('.section-1 .title').css("left", "0");
      $('.section-1 .title').delay(2000).css("opacity", "1");
    }, 1000);
    setTimeout(function() {
      $('.section-1 .text').css("left", "0");
      $('.section-1 .text').delay(2000).css("opacity", "1");
    }, 1500);
    setTimeout(function() {
      $('.section-1 .book-container').css("left", "0");
      $('.section-1 .book-container').delay(2000).css("opacity", "1");
    }, 2000);
    setTimeout(function() {
      $('.try').css("opacity", "1");
      $('.try').css("transform", "translate3d(0,0,0)");
    }, 1500);
  });
}
else{
  setTimeout(function() {
    $('.section-1 .title').css("left", "0");
    $('.section-1 .title').delay(2000).css("opacity", "1");
  }, 1000);
  setTimeout(function() {
    $('.section-1 .text').css("left", "0");
    $('.section-1 .text').delay(2000).css("opacity", "1");
  }, 1500);
  setTimeout(function() {
    $('.section-1 .book-container').css("left", "0");
    $('.section-1 .book-container').delay(2000).css("opacity", "1");
  }, 2000);
  setTimeout(function() {
    $('.try').css("opacity", "1");
    $('.try').css("transform", "translate3d(0,0,0)");
  }, 1500);
}
});
$(document).ready(function() {
  $('#radio-button').click(function() {
    $('.section-2 .col-sm-12:nth-child(2)').css("transition", "all 1s ease-in-out");
    $('.section-2 .col-sm-12:nth-child(2)').css("margin-top", "100%");
    $('.wave').fadeOut('500');
    $('.radio').delay('2000').fadeOut('500');
    $('.zigzag').fadeOut('500');
    $('.dotline-circle').fadeOut('500');
    $('.lg-circle').fadeOut('500');
    $('.md-circle').fadeOut('500');
    $('.xs-circle').fadeOut('500');
    $('.sm-circle').fadeOut('500');
    $('.md-thunder').fadeOut('500');
    $('.sm-thunder').fadeOut('500');
    setTimeout(function() {
      $('.section-2 .text').css("margin-top", "-20vh");
      $('.section-2 .text').delay(1000).css("opacity", "0");
    }, 300);
    setTimeout(function() {
      $('.section-2 .title').css("margin-top", "-20vh");
      $('.section-2 .title').delay(1000).css("opacity", "0");
      $('.section-2 .col-sm-12:nth-child(1)').fadeOut();
    }, 400);
    if ($('body, html').width() >= 768) {
      setTimeout(function() {
        $('.stunt').css("bottom", "-150px");
      }, 450);
      setTimeout(function() {
        $('.stunt').css("bottom", "-190px");
      }, 900);
    }
    else{
      setTimeout(function() {
        $('.stunt').css("bottom", "-110px");
      }, 450);
      setTimeout(function() {
        $('.stunt').css("bottom", "-160px");
      }, 900);
    }
    setTimeout(function() {
      $('.carding').fadeIn('500');
    }, 1200);
    setTimeout(function() {
      $('.carding .col-sm-3').css("transform", "scale(1)");

      $('.carding .col-sm-10 img:nth-child(1)').fadeIn();
    }, 1300);
    setTimeout(function() {

      $('.carding .col-sm-10').css("transform", "scale(1)");
      $('.carding .col-sm-10').css("opacity", "1");
    }, 1500);
  });
  $('.hear').click(function() {
    $('.carding .col-sm-10 img:nth-child(1)').delay(500).fadeIn(1000);
    $('.carding .col-sm-10 img:nth-child(2)').fadeOut();
    $('.carding .col-sm-10 img:nth-child(3)').fadeOut();
  });
  $('.head').click(function() {
    $('.carding .col-sm-10 img:nth-child(2)').delay(500).fadeIn(1000);
    $('.carding .col-sm-10 img:nth-child(1)').fadeOut();
    $('.carding .col-sm-10 img:nth-child(3)').fadeOut();
  });
  $('.heart').click(function() {
    $('.carding .col-sm-10 img:nth-child(3)').delay(500).fadeIn(1000);
    $('.carding .col-sm-10 img:nth-child(2)').fadeOut();
    $('.carding .col-sm-10 img:nth-child(1)').fadeOut();
  });
});