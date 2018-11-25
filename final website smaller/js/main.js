

//index page------

//if a homeimg graphic is hovered
  //fade out homeimg photo slolwy
//else if clicked make homeimg graphic slideUP
//else
  //show all images

//if a headertext img is hovered over
  //animate with opacity of .50 and move 50 px tp the right
//else
  //show full opacituy

//if a headerimg img is hovered over
  //animate with getting 50px larger slowly
//else
  //keep original size


//on all pages-------

// if distanceScrolled is greater than or equal to 50
	// Add a class stickynav to the nav to update styles
// else
	// Remove the class from the nav

  // if distanceScrolled is greater than or equal to 500
  	// Add a class stickyfooter to the footer to update styles
  // else
  	// Remove the class from the nav


//work and college pages-----


//set up a counter var that goes from 0-however many images I end up with
  //event listener on the next button
  //if counter is less than # add one to var
    //console log the counter
  //event listener on previous button
  //if counter is greater than 0 subtract 1
  //else set counter to #

  //if imgaes are hovered over, clicked on in less than 450 px
    //add class that adds descriptive <p> tag over the image
  //else
    //hide class


//or use a respopnsive carosel
// $('#designgallery').slick({
//   dots: true,
//   infinite: true,
//   speed: 300,
//   slidesToShow: 4,
//   slidesToScroll: 4,
//   responsive: [
//     {
//       breakpoint: 1024,
//       settings: {
//         slidesToShow: 3,
//         slidesToScroll: 3,
//         infinite: true,
//         dots: true
//       }
//     },
//     {
//       breakpoint: 600,
//       settings: {
//         slidesToShow: 2,
//         slidesToScroll: 2
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         slidesToShow: 1,
//         slidesToScroll: 1
//       }
//     }
//   ]
//   });

$('document').ready(function(){
  $('.slick-wrapper').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  //index page------
  $('nav a').on('mouseenter', function(){
    $(this).css('color', 'grey');
  });

  $('nav a').on('mouseleave', function(){
      $(this).css('color', '#d3d3d3');
  });

  $('.homeimg').on('mouseenter', function(){
    $(this).css('opacity', '.7');
    $(this).css('transform', 'scale(1.2)');
  });

  $('.homeimg').on('mouseleave', function(){
      $(this).css('opacity', '1');
        $(this).css('transform', 'scale(1)');
  });

  $('.homeimggraphic').on('mouseenter', function(){
    $(this).css('opacity', '.7');
    $(this).css('transform', 'scale(1.2)');
  });

  $('.homeimggraphic').on('mouseleave', function(){
      $(this).css('opacity', '1');
        $(this).css('transform', 'scale(1)');
  });

  $('#headertext img').on('mouseenter', function(){
    $(this).css('opacity', '.7');
    $(this).css('transform', 'scale(1.1)');
    $(this).css('transform', 'skew(-0.001turn, 2deg)');
  });

  $('#headertext img').on('mouseleave', function(){
      $(this).css('opacity', '1');
      $(this).css('transform', 'scale(1)');
      $(this).css('transform', 'skew(0, 0)');
  });

  $('#headerimg').on('mouseenter', function(){
      $(this).css('opacity', '.8')

  });

  $('#headerimg').on('mouseleave', function(){
      $(this).css('opacity', '1')

  });

  $('.collegeandwork').on('mouseenter', function(){
      $(this).css('opacity', '.8')

  });

  $('.collegeandwork').on('mouseleave', function(){
      $(this).css('opacity', '1')

  });

  $('#connectbubbles img').on('mouseenter', function(){
    $(this).css('opacity', '.7');
    $(this).css('transform', 'scale(1.05)');
  });

  $('#connectbubbles img').on('mouseleave', function(){
      $(this).css('opacity', '1');
        $(this).css('transform', 'scale(1)');
  });

  $('#connectimg').on('mouseenter', function(){
      $(this).css('opacity', '.8')

  });

  $('#connectimg').on('mouseleave', function(){
      $(this).css('opacity', '1')

  });

  $('#hellolizzie').on('mouseenter', function(){
    $(this).css('opacity', '.7');
    $(this).css('transform', 'scale(1.1)');
    $(this).css('transform', 'skew(-0.001turn, 2deg)');
  });

  $('#hellolizzie').on('mouseleave', function(){
      $(this).css('opacity', '1');
      $(this).css('transform', 'scale(1)');
      $(this).css('transform', 'skew(0, 0)');
  });

  $('#funfacts').on('mouseenter', function(){
      $(this).css('opacity', '.8');
      $(this).css('transform', 'scale(1.1)');
      $(this).css('transform', 'skew(-0.001turn, 2deg)');
  });

  $('#funfacts').on('mouseleave', function(){
      $(this).css('opacity', '1');
      $(this).css('transform', 'scale(1)');
      $(this).css('transform', 'skew(0, 0)');
  });

  $('.hamburger').on('click', function(e){
    event.preventDefault();
    var x = document.getElementById("nav");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
      // $('nav').show();
      $('nav').addClass('toggleHamburger');
  });

  // $('.hamburger').on('mouseenter', function(){
  //     $(this).show('nav a');
  // });
  //
  // $('.hamburger').on('mouseleave', function(){
  //     $(this).hide('nav a');
  // });

  $(window).on('scroll', function () {
  	let distanceScrolled = $(window).scrollTop();
  if (distanceScrolled >= 10) {
		$('nav').addClass('stickynav');
	}
	else {
		$('nav').removeClass('stickynav');
	}
  });

  $(window).on('scroll', function () {
  	let distanceScrolled = $(window).scrollTop();
  if (distanceScrolled >= 1000) {
		$('footer').addClass('stickyfooter');
	}
	else {
		$('footer').removeClass('stickyfooter');
	}
  });

});



// $('nav').addClass('stickynav');

//connect page------

//if a connect graphic is hovered over
  //animate and make it .7 opactity
  //also slide up 2 px
//else
  //do nothing

//if a hellolizzie is hovered over
  //animate with opacity of .50 and move 50 px to the right
//else
  //show full opacituy

//if a connectimg img is hovered over
  //animate with getting 50px larger slowly
//else
  //keep original size

//if a funFacts graphic is hovered over
  //animate image by rotating and making it larger by 10 px
//else
    //do nothing

//if timeSpent is greater 60s
  // slideUp a email modal window from the bottom
// else if
  // keep sticky to the bottom of the page
//else
  //keep hidden
